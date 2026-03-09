'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { CursorIcon, NotAllowIcon, PointerIcon } from '@/components/icons';

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
const TEXT_ENTRY_SELECTOR = [
    'textarea',
    '[contenteditable="true"]',
    'input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="file"]):not([type="color"]):not([type="image"])',
].join(',');

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const cursorVariantRef = useRef<'default' | 'pointer' | 'not-allowed'>('default');
    const [cursorVariant, setCursorVariant] = useState<'default' | 'pointer' | 'not-allowed'>('default');

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

                const target = event.target as Element | null;
                const isTextEntry = !!target?.closest(TEXT_ENTRY_SELECTOR);
                if (isTextEntry) {
                    opacityTo(0);
                    if (cursorVariantRef.current !== 'default') {
                        cursorVariantRef.current = 'default';
                        setCursorVariant('default');
                    }
                    if (!isPressed) {
                        scaleTo(1);
                    }
                    rotateTo(0);
                    return;
                }

                opacityTo(1);
                const hoveredElement = target?.closest('*') as HTMLElement | null;
                const computedCursor = hoveredElement ? window.getComputedStyle(hoveredElement).cursor : '';
                const isNotAllowed = computedCursor.includes('not-allowed');
                const isPointer = computedCursor.includes('pointer') || !!target?.closest(INTERACTIVE_SELECTOR);
                const isInteractive = isNotAllowed || isPointer;

                const nextVariant = isNotAllowed ? 'not-allowed' : isPointer ? 'pointer' : 'default';
                if (cursorVariantRef.current !== nextVariant) {
                    cursorVariantRef.current = nextVariant;
                    setCursorVariant(nextVariant);
                }

                if (!isPressed) {
                    scaleTo(isInteractive ? 1.22 : 1);
                }
                rotateTo(isNotAllowed ? 0 : isPointer ? -12 : 0);
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
                cursorVariantRef.current = 'default';
                setCursorVariant('default');
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
            <span className={`custom-cursor-glyph ${cursorVariant === 'default' ? 'is-active' : ''}`}>
                <CursorIcon size={24} className="custom-cursor-icon" />
            </span>
            <span className={`custom-cursor-glyph ${cursorVariant === 'pointer' ? 'is-active' : ''}`}>
                <PointerIcon size={24} className="custom-cursor-icon" />
            </span>
            <span className={`custom-cursor-glyph ${cursorVariant === 'not-allowed' ? 'is-active' : ''}`}>
                <NotAllowIcon size={24} className="custom-cursor-icon" />
            </span>
        </div>
    );
}
