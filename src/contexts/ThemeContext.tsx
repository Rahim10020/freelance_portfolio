'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'dark' | 'light';
export type AccentTheme = 'orange' | 'clay' | 'sage' | 'red' | 'yellow' | 'blue' | 'ginger' | 'sunset';

export const accentThemes: AccentTheme[] = ['orange', 'clay', 'sage', 'red', 'yellow', 'blue', 'ginger', 'sunset'];

interface ThemeContextType {
    theme: Theme;
    accentTheme: AccentTheme;
    toggleTheme: () => void;
    setAccentTheme: (accent: AccentTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>('dark');
    const [accentTheme, setAccentTheme] = useState<AccentTheme>('orange');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Vérifier que window est disponible
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme') as Theme | null;
            const savedAccentTheme = localStorage.getItem('accentTheme') as AccentTheme | null;
            if (savedTheme) {
                setTheme(savedTheme);
            } else {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                setTheme(prefersDark ? 'dark' : 'light');
            }

            if (savedAccentTheme && accentThemes.includes(savedAccentTheme)) {
                setAccentTheme(savedAccentTheme);
            }
        }
    }, []);

    useEffect(() => {
        if (!mounted || typeof window === 'undefined') return;

        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme, mounted]);

    useEffect(() => {
        if (!mounted || typeof window === 'undefined') return;

        const root = document.documentElement;
        root.setAttribute('data-accent', accentTheme);
        localStorage.setItem('accentTheme', accentTheme);
    }, [accentTheme, mounted]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    const value = {
        theme,
        accentTheme,
        toggleTheme,
        setAccentTheme,
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
