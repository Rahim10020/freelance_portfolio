'use client';

import { personalInfo } from '@/lib/data';
import Navigation from '../ui/Navigation';
import SocialLinks from '../ui/SocialLinks';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 dark:text-slate-200 light:text-slate-900 sm:text-5xl">
                    {personalInfo.name}
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 dark:text-slate-200 light:text-slate-800 sm:text-xl">
                    {t.hero.title}
                </h2>
                <p className="mt-4 max-w-xs leading-normal text-slate-400 dark:text-slate-400 light:text-slate-600">
                    {t.hero.bio}
                </p>
                <Navigation />
            </div>
            <SocialLinks />
        </header>
    );
}