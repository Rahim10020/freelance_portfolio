'use client';

import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Simulation d'envoi
        setTimeout(() => {
            console.log('Form data:', formData);
            setStatus('success');
            setFormData({ name: '', subject: '', email: '', message: '' });

            setTimeout(() => setStatus('idle'), 3000);
        }, 1000);
    };

    return (
        <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <SectionTitle>{t.contact.title}</SectionTitle>

            <div className="space-y-6">
                <div>
                    <p className="dark:text-slate-200 light:text-slate-900">{t.contact.intro}</p>
                    <p className="text-slate-400 dark:text-slate-400 light:text-slate-600">
                        {t.contact.emailText}{' '}
                        <a
                            href="mailto:rahim100codeur@gmail.com"
                            className="text-teal-300 dark:text-teal-300 light:text-teal-700 hover:text-teal-200 dark:hover:text-teal-200 light:hover:text-teal-600 transition-colors font-medium"
                        >
                            rahim100codeur@gmail.com
                        </a>
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={t.contact.form.name}
                            required
                            className="w-full px-4 py-2 bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/70 rounded-lg text-slate-200 dark:text-slate-200 light:text-slate-900 placeholder-slate-500 dark:placeholder-slate-500 light:placeholder-slate-400 focus:outline-none focus:border-teal-300 dark:focus:border-teal-300 light:focus:border-teal-600 focus:ring-1 focus:ring-teal-300 dark:focus:ring-teal-300 light:focus:ring-teal-600 transition-colors border border-transparent dark:border-transparent light:border-slate-200"
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder={t.contact.form.subject}
                            required
                            className="w-full px-4 py-2 bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/70 rounded-lg text-slate-200 dark:text-slate-200 light:text-slate-900 placeholder-slate-500 dark:placeholder-slate-500 light:placeholder-slate-400 focus:outline-none focus:border-teal-300 dark:focus:border-teal-300 light:focus:border-teal-600 focus:ring-1 focus:ring-teal-300 dark:focus:ring-teal-300 light:focus:ring-teal-600 transition-colors border border-transparent dark:border-transparent light:border-slate-200"
                        />
                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={t.contact.form.email}
                            required
                            className="w-full px-4 py-2 bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/70 rounded-lg text-slate-200 dark:text-slate-200 light:text-slate-900 placeholder-slate-500 dark:placeholder-slate-500 light:placeholder-slate-400 focus:outline-none focus:border-teal-300 dark:focus:border-teal-300 light:focus:border-teal-600 focus:ring-1 focus:ring-teal-300 dark:focus:ring-teal-300 light:focus:ring-teal-600 transition-colors border border-transparent dark:border-transparent light:border-slate-200"
                        />
                    </div>

                    <div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder={t.contact.form.message}
                            required
                            rows={6}
                            className="w-full px-4 py-2 bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/70 rounded-lg text-slate-200 dark:text-slate-200 light:text-slate-900 placeholder-slate-500 dark:placeholder-slate-500 light:placeholder-slate-400 focus:outline-none focus:border-teal-300 dark:focus:border-teal-300 light:focus:border-teal-600 focus:ring-1 focus:ring-teal-300 dark:focus:ring-teal-300 light:focus:ring-teal-600 transition-colors resize-none border border-transparent dark:border-transparent light:border-slate-200"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="px-4 py-2 bg-slate-200 dark:bg-slate-200 light:bg-teal-600 text-slate-900 dark:text-slate-900 light:text-white font-medium rounded-lg hover:bg-teal-300 dark:hover:bg-teal-300 light:hover:bg-teal-700 hover:text-slate-900 dark:hover:text-slate-900 light:hover:text-white hover:cursor-pointer transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === 'sending' ? t.contact.form.sending : status === 'success' ? t.contact.form.sent : t.contact.form.send}
                    </button>

                    {status === 'success' && (
                        <p className="text-teal-300 dark:text-teal-300 light:text-teal-700 text-sm">{t.contact.form.success}</p>
                    )}
                    {status === 'error' && (
                        <p className="text-red-400 dark:text-red-400 light:text-red-600 text-sm">{t.contact.form.error}</p>
                    )}
                </form>
            </div>
        </section>
    );
}