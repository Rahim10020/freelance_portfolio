'use client';

import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';

export default function Contact() {
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

        // Simulation d'envoi - Tu peux intégrer un service comme EmailJS, FormSpree, ou ton propre API
        setTimeout(() => {
            console.log('Form data:', formData);
            setStatus('success');
            setFormData({ name: '', subject: '', email: '', message: '' });

            // Reset status after 3 seconds
            setTimeout(() => setStatus('idle'), 3000);
        }, 1000);
    };

    return (
        <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <SectionTitle>Contact</SectionTitle>

            <div className="space-y-6">
                <div>
                    <p className="text-slate-400">
                        Get in touch or shoot me an email directly on{' '}
                        <a
                            href="mailto:rahim100codeur@gmail.com"
                            className="text-teal-300 hover:text-teal-200 transition-colors font-medium"
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
                            placeholder="Name"
                            required
                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-300 focus:ring-1 focus:ring-teal-300 transition-colors"
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            required
                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-300 focus:ring-1 focus:ring-teal-300 transition-colors"
                        />
                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-300 focus:ring-1 focus:ring-teal-300 transition-colors"
                        />
                    </div>

                    <div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            required
                            rows={6}
                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-300 focus:ring-1 focus:ring-teal-300 transition-colors resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="px-8 py-3 bg-slate-200 text-slate-900 font-medium rounded-lg hover:bg-teal-300 hover:text-slate-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === 'sending' ? 'Sending...' : status === 'success' ? '✓ Sent!' : 'Send Message'}
                    </button>

                    {status === 'success' && (
                        <p className="text-teal-300 text-sm">Message sent successfully!</p>
                    )}
                    {status === 'error' && (
                        <p className="text-red-400 text-sm">Failed to send message. Please try again.</p>
                    )}
                </form>
            </div>
        </section>
    );
}