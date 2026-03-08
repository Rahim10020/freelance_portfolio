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

function getInitialTheme(): Theme {
    if (typeof window === 'undefined') {
        return 'light';
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
    }

    if (document.documentElement.classList.contains('dark')) {
        return 'dark';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getInitialAccentTheme(): AccentTheme {
    if (typeof window === 'undefined') {
        return 'orange';
    }

    const savedAccentTheme = localStorage.getItem('accentTheme');
    if (savedAccentTheme && accentThemes.includes(savedAccentTheme as AccentTheme)) {
        return savedAccentTheme as AccentTheme;
    }

    return 'orange';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);
    const [accentTheme, setAccentTheme] = useState<AccentTheme>(getInitialAccentTheme);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted || typeof window === 'undefined') return;

        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
        root.style.colorScheme = theme;
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
