'use client';

import SectionTitle from '../ui/SectionTitle';
import ServiceCard from '../ui/ServiceCard';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Services() {
    const { t } = useLanguage();

    const services = [
        {
            id: '1',
            title: t.services.webDev.title,
            description: t.services.webDev.description,
            icon: '💻',
        },
        {
            id: '2',
            title: t.services.mobileDev.title,
            description: t.services.mobileDev.description,
            icon: '📱',
        },
        {
            id: '3',
            title: t.services.uiux.title,
            description: t.services.uiux.description,
            icon: '🎨',
        },
        {
            id: '4',
            title: t.services.api.title,
            description: t.services.api.description,
            icon: '⚡',
        },
    ];

    return (
        <section id="services" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <SectionTitle>{t.services.title}</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </section>
    );
}