'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
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

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );
            setStatus('success');
            setFormData({ name: '', subject: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            console.error('EmailJS error:', error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <SectionTitle>{t.contact.title}</SectionTitle>

            <div className="space-y-6">
                <div>
                    <p className="text-slate-900 dark:text-slate-200">{t.contact.intro}</p>
                    <p className="text-slate-600 dark:text-slate-400">
                        {t.contact.emailText}{' '}
                        <a
                            href="mailto:rahim100codeur@gmail.com"
                            className="text-teal-600 dark:text-teal-300 hover:text-teal-700 dark:hover:text-teal-200 transition-colors font-medium"
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
                            className="w-full px-4 py-2 bg-white dark:bg-slate-800/50 rounded-lg text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-teal-600 dark:focus:border-teal-300 focus:ring-1 focus:ring-teal-600 dark:focus:ring-teal-300 transition-colors border border-slate-200 dark:border-transparent"
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
                            className="w-full px-4 py-2 bg-white dark:bg-slate-800/50 rounded-lg text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-teal-600 dark:focus:border-teal-300 focus:ring-1 focus:ring-teal-600 dark:focus:ring-teal-300 transition-colors border border-slate-200 dark:border-transparent"
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
                            className="w-full px-4 py-2 bg-white dark:bg-slate-800/50 rounded-lg text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-teal-600 dark:focus:border-teal-300 focus:ring-1 focus:ring-teal-600 dark:focus:ring-teal-300 transition-colors border border-slate-200 dark:border-transparent"
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
                            className="w-full px-4 py-2 bg-white dark:bg-slate-800/50 rounded-lg text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-teal-600 dark:focus:border-teal-300 focus:ring-1 focus:ring-teal-600 dark:focus:ring-teal-300 transition-colors resize-none border border-slate-200 dark:border-transparent"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="px-4 py-2 bg-teal-600 dark:bg-slate-200 text-white dark:text-slate-900 font-medium rounded-lg hover:bg-teal-700 dark:hover:bg-teal-300 hover:text-white dark:hover:text-slate-900 hover:cursor-pointer transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === 'sending' ? t.contact.form.sending : status === 'success' ? t.contact.form.sent : t.contact.form.send}
                    </button>

                    {status === 'success' && (
                        <p className="text-teal-700 dark:text-teal-300 text-sm">{t.contact.form.success}</p>
                    )}
                    {status === 'error' && (
                        <p className="text-red-600 dark:text-red-400 text-sm">{t.contact.form.error}</p>
                    )}
                </form>
            </div>
        </section>
    );
}