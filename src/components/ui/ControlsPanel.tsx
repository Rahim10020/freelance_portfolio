'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ControlsPanel() {
    const { theme, toggleTheme } = useTheme();
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-3">
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

            {/* Theme Switcher */}
            <button
                onClick={toggleTheme}
                className="group relative w-9 h-9 rounded-full bg-white dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 shadow-lg hover:scale-110 hover:cursor-pointer transition-all duration-300 flex items-center justify-center"
                aria-label="Toggle theme"
            >
                {/* Sun Icon (Light Mode) */}
                <svg
                    className={`absolute w-4 h-4 text-amber-500 transition-all duration-500 ${theme === 'light'
                        ? 'rotate-0 scale-100 opacity-100'
                        : 'rotate-90 scale-0 opacity-0'
                        }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </svg>

                {/* Moon Icon (Dark Mode) */}
                <svg
                    className={`absolute w-5 h-5 text-teal-300 transition-all duration-500 ${theme === 'dark'
                        ? 'rotate-0 scale-100 opacity-100'
                        : '-rotate-90 scale-0 opacity-0'
                        }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                </svg>
            </button>
        </div>
    );
}