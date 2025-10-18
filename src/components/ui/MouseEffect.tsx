'use client';

import { useEffect } from 'react';

export default function MouseEffect() {
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            document.documentElement.style.setProperty('--mouse-x', `${clientX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${clientY}px`);
        };

        // Throttle pour optimiser les performances
        let rafId: number | null = null;
        const throttledMouseMove = (e: MouseEvent) => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                handleMouseMove(e);
                rafId = null;
            });
        };

        window.addEventListener('mousemove', throttledMouseMove);

        return () => {
            window.removeEventListener('mousemove', throttledMouseMove);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    return null;
}