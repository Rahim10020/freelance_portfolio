'use client';

import SectionTitle from '../ui/SectionTitle';
import Skills from './Skills';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <SectionTitle>{t.about.title}</SectionTitle>
            <div className="space-y-4 text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed mb-8">
                <p>
                    {t.about.paragraph1}
                </p>
                <p>
                    {t.about.paragraph2}
                </p>
            </div>
            <Skills />
        </section>
    );
}