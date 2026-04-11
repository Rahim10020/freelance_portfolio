'use client';

import { createContext, useContext, ReactNode } from 'react';
import { en } from '@/translations/en';

type Translations = typeof en;

interface LanguageContextType {
    language: 'en';
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const value: LanguageContextType = {
        language: 'en',
        t: en,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}