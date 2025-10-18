'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="mt-24 pb-16">
            <p className="text-sm text-slate-500 dark:text-slate-500 light:text-slate-600">
                {t.footer.builtWith}{' '}
                <a
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-slate-400 dark:text-slate-400 light:text-slate-700 hover:text-teal-300 dark:hover:text-teal-300 light:hover:text-teal-600 transition-colors"
                >
                    Next.js
                </a>
                {' '}{t.footer.and}{' '}
                <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-slate-400 dark:text-slate-400 light:text-slate-700 hover:text-teal-300 dark:hover:text-teal-300 light:hover:text-teal-600 transition-colors"
                >
                    Tailwind CSS
                </a>
                . {t.footer.inspired}{' '}
                <a
                    href="https://brittanychiang.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-slate-400 dark:text-slate-400 light:text-slate-700 hover:text-teal-300 dark:hover:text-teal-300 light:hover:text-teal-600 transition-colors"
                >
                    Brittany Chiang
                </a>
                .
            </p>
        </footer>
    );
}