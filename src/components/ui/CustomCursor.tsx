'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CursorIcon } from '@/components/icons';

const POINTER_QUERY = '(hover: hover) and (pointer: fine)';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const INTERACTIVE_SELECTOR = [
    'a',
    'button',
    '[role="button"]',
    'summary',
    'select',
    'label',
    'input[type="checkbox"]',
    'input[type="radio"]',
    'input[type="range"]',
    '[data-cursor="pointer"]',
].join(',');

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (typeof window === 'undefined' || !cursorRef.current) return;

        const pointerMedia = window.matchMedia(POINTER_QUERY);
        const reducedMotionMedia = window.matchMedia(REDUCED_MOTION_QUERY);
        let cleanupListeners: (() => void) | null = null;

        const setupCursor = () => {
            const shouldEnable = pointerMedia.matches && !reducedMotionMedia.matches;

            if (!shouldEnable) {
                document.documentElement.classList.remove('custom-cursor-enabled');
                if (cleanupListeners) {
                    cleanupListeners();
                    cleanupListeners = null;
                }
                return;
            }

            const cursorEl = cursorRef.current;
            if (!cursorEl) return;

            document.documentElement.classList.add('custom-cursor-enabled');
            gsap.set(cursorEl, { xPercent: -50, yPercent: -50, opacity: 0, scale: 1, rotate: 0 });

            const xTo = gsap.quickTo(cursorEl, 'x', { duration: 0.18, ease: 'power3.out' });
            const yTo = gsap.quickTo(cursorEl, 'y', { duration: 0.18, ease: 'power3.out' });
            const scaleTo = gsap.quickTo(cursorEl, 'scale', { duration: 0.2, ease: 'power3.out' });
            const rotateTo = gsap.quickTo(cursorEl, 'rotate', { duration: 0.25, ease: 'power3.out' });
            const opacityTo = gsap.quickTo(cursorEl, 'opacity', { duration: 0.2, ease: 'power1.out' });

            let isPressed = false;

            const onMouseMove = (event: MouseEvent) => {
                xTo(event.clientX);
                yTo(event.clientY);
                opacityTo(1);

                const target = event.target as Element | null;
                const isInteractive = !!target?.closest(INTERACTIVE_SELECTOR);
                if (!isPressed) {
                    scaleTo(isInteractive ? 1.22 : 1);
                }
                rotateTo(isInteractive ? -12 : 0);
            };

            const onMouseDown = () => {
                isPressed = true;
                scaleTo(0.9);
            };

            const onMouseUp = () => {
                isPressed = false;
                scaleTo(1);
            };

            const onMouseLeaveViewport = () => opacityTo(0);

            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mousedown', onMouseDown);
            window.addEventListener('mouseup', onMouseUp);
            window.addEventListener('blur', onMouseLeaveViewport);
            document.addEventListener('mouseleave', onMouseLeaveViewport);

            cleanupListeners = () => {
                window.removeEventListener('mousemove', onMouseMove);
                window.removeEventListener('mousedown', onMouseDown);
                window.removeEventListener('mouseup', onMouseUp);
                window.removeEventListener('blur', onMouseLeaveViewport);
                document.removeEventListener('mouseleave', onMouseLeaveViewport);
                opacityTo(0);
            };
        };

        setupCursor();
        pointerMedia.addEventListener('change', setupCursor);
        reducedMotionMedia.addEventListener('change', setupCursor);

        return () => {
            pointerMedia.removeEventListener('change', setupCursor);
            reducedMotionMedia.removeEventListener('change', setupCursor);
            document.documentElement.classList.remove('custom-cursor-enabled');
            if (cleanupListeners) {
                cleanupListeners();
            }
        };
    }, []);

    return (
        <div ref={cursorRef} className="custom-cursor" aria-hidden>
            <CursorIcon size={26} className="custom-cursor-icon" />
        </div>
    );
}
