'use client';

import { ReactNode, useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';

const MOBILE_BREAKPOINT_QUERY = '(max-width: 767px)';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const isMobile = window.matchMedia(MOBILE_BREAKPOINT_QUERY);
        const prefersReducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);
        let lenis: Lenis | null = null;

        const tick = (time: number) => {
            if (lenis) {
                lenis.raf(time * 1000);
            }
        };

        const updateScrollBehavior = () => {
            const shouldDisableAnimations = isMobile.matches || prefersReducedMotion.matches;
            document.documentElement.classList.toggle('reduced-motion', shouldDisableAnimations);

            if (shouldDisableAnimations) {
                if (lenis) {
                    lenis.destroy();
                    lenis = null;
                }
                gsap.ticker.remove(tick);
                return;
            }

            if (!lenis) {
                lenis = new Lenis({
                    autoRaf: false,
                    smoothWheel: true,
                    syncTouch: false,
                });

                gsap.ticker.add(tick);
                gsap.ticker.lagSmoothing(0);
            }
        };

        updateScrollBehavior();
        isMobile.addEventListener('change', updateScrollBehavior);
        prefersReducedMotion.addEventListener('change', updateScrollBehavior);

        return () => {
            isMobile.removeEventListener('change', updateScrollBehavior);
            prefersReducedMotion.removeEventListener('change', updateScrollBehavior);
            gsap.ticker.remove(tick);
            if (lenis) {
                lenis.destroy();
            }
            document.documentElement.classList.remove('reduced-motion');
        };
    }, []);

    return <>{children}</>;
}
