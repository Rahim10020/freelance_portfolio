'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const sectionIds = ['about', 'experience', 'projects', 'services', 'contact'] as const;

export default function Navigation() {
    const [activeSection, setActiveSection] = useState('about');
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            for (const id of sectionIds) {
                const element = document.getElementById(id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const sections = [
        { id: 'about', label: t.nav.about },
        { id: 'experience', label: t.nav.experience },
        { id: 'projects', label: t.nav.projects },
        { id: 'services', label: t.nav.services },
        { id: 'contact', label: t.nav.contact },
    ];

    return (
        <nav className="hidden lg:block mt-7 lg:mt-14">
            <ul className="space-y-4">
                {sections.map((section) => (
                    <li key={section.id}>
                        <button
                            onClick={() => scrollToSection(section.id)}
                            className="group flex items-center hover:cursor-pointer gap-4 py-3"
                        >
                            <span
                                className={`h-px transition-all ${activeSection === section.id
                                    ? 'w-16 bg-slate-200 dark:bg-slate-200 light:bg-slate-900'
                                    : 'w-8 bg-slate-600 dark:bg-slate-600 light:bg-slate-400 group-hover:w-16 group-hover:bg-slate-200 dark:group-hover:bg-slate-200 light:group-hover:bg-slate-900'
                                    }`}
                            />
                            <span
                                className={`text-xs font-bold uppercase tracking-widest transition-colors ${activeSection === section.id
                                    ? 'text-slate-200 dark:text-slate-200 light:text-slate-900'
                                    : 'text-slate-500 dark:text-slate-500 light:text-slate-600 group-hover:text-slate-200 dark:group-hover:text-slate-200 light:group-hover:text-slate-900'
                                    }`}
                            >
                                {section.label}
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}