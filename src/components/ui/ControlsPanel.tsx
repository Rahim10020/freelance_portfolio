'use client';

import { useEffect, useRef, useState } from 'react';
import { accentThemes, type AccentTheme, useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { MoonIcon, SunIcon } from '@/components/icons';

const accentPreviewColors: Record<AccentTheme, string> = {
    orange: '#ff7d00',
    clay: '#e07a5f',
    sage: '#81b29a',
    red: '#c1121f',
    yellow: '#ffc300',
    blue: '#0496ff',
    ginger: '#dbd56e',
    sunset: '#eb5e28',
};

export default function ControlsPanel() {
    const { theme, accentTheme, setAccentTheme, toggleTheme } = useTheme();
    const { language, setLanguage } = useLanguage();
    const [isAccentPickerOpen, setIsAccentPickerOpen] = useState(false);
    const accentPickerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handlePointerDown = (event: MouseEvent) => {
            if (!accentPickerRef.current?.contains(event.target as Node)) {
                setIsAccentPickerOpen(false);
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsAccentPickerOpen(false);
            }
        };

        document.addEventListener('mousedown', handlePointerDown);
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('mousedown', handlePointerDown);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    return (
        <div className="flex flex-wrap items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 rounded-full bg-white dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 p-1 shadow-lg">
                <button
                    onClick={() => setLanguage('en')}
                    className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${language === 'en'
                        ? 'bg-teal-500/20 dark:bg-teal-400/20 text-teal-700 dark:text-teal-300'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:cursor-pointer'
                        }`}
                    aria-label="Switch to English"
                >
                    EN
                </button>
                <button
                    onClick={() => setLanguage('fr')}
                    className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${language === 'fr'
                        ? 'bg-teal-500/20 dark:bg-teal-400/20 text-teal-700 dark:text-teal-300'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:cursor-pointer'
                        }`}
                    aria-label="Switch to French"
                >
                    FR
                </button>
            </div>

            {/* Accent Color Picker */}
            <div ref={accentPickerRef} className="relative">
                <button
                    type="button"
                    onClick={() => setIsAccentPickerOpen(prev => !prev)}
                    className="flex items-center justify-center h-9 w-9 rounded-full bg-white dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 shadow-lg hover:scale-110 hover:cursor-pointer transition-all duration-300"
                    aria-haspopup="dialog"
                    aria-expanded={isAccentPickerOpen}
                    aria-label={`Current primary color: ${accentTheme}. Open color picker`}
                    title={`Primary color: ${accentTheme}`}
                >
                    <span
                        className="h-6 w-6 rounded-full border-2 border-white/80 dark:border-slate-900"
                        style={{ backgroundColor: accentPreviewColors[accentTheme] }}
                    />
                </button>

                {isAccentPickerOpen && (
                    <div
                        role="dialog"
                        aria-label="Choose primary color"
                        className="absolute top-12 right-0 z-50 flex items-center gap-1 rounded-full bg-white dark:bg-slate-800/95 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 p-1.5 shadow-lg"
                    >
                        {accentThemes.map((accent) => (
                            <button
                                key={accent}
                                type="button"
                                onClick={() => {
                                    setAccentTheme(accent);
                                    setIsAccentPickerOpen(false);
                                }}
                                className={`h-7 w-7 rounded-full border-2 transition-all duration-300 ${accentTheme === accent
                                    ? 'scale-105 border-white dark:border-slate-900 shadow-md'
                                    : 'border-transparent opacity-75 hover:opacity-100 hover:cursor-pointer'
                                    }`}
                                style={{ backgroundColor: accentPreviewColors[accent] }}
                                aria-label={`Set ${accent} as primary color`}
                                title={accent}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Theme Switcher */}
            <button
                onClick={toggleTheme}
                className="group relative w-9 h-9 rounded-full bg-white dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 shadow-lg hover:scale-110 hover:cursor-pointer transition-all duration-300 flex items-center justify-center"
                aria-label="Toggle theme"
            >
                <SunIcon
                    size={16}
                    className={`absolute w-4 h-4 text-amber-500 transition-all duration-500 ${theme === 'light'
                        ? 'rotate-0 scale-100 opacity-100'
                        : 'rotate-90 scale-0 opacity-0'
                        }`}
                />
                <MoonIcon
                    size={20}
                    className={`absolute w-5 h-5 text-teal-300 transition-all duration-500 ${theme === 'dark'
                        ? 'rotate-0 scale-100 opacity-100'
                        : '-rotate-90 scale-0 opacity-0'
                        }`}
                />
            </button>
        </div>
    );
}
