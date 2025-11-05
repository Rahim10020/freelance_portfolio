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
            priceUSD: 800,
            priceFCFA: 480000,
        },
        {
            id: '2',
            title: t.services.mobileDev.title,
            description: t.services.mobileDev.description,
            icon: '📱',
            priceUSD: 1000,
            priceFCFA: 600000,
        },
        {
            id: '3',
            title: t.services.uiux.title,
            description: t.services.uiux.description,
            icon: '🎨',
            priceUSD: 600,
            priceFCFA: 360000,
        },
        {
            id: '4',
            title: t.services.api.title,
            description: t.services.api.description,
            icon: '⚡',
            priceUSD: 700,
            priceFCFA: 420000,
        },
    ];

    return (
        <section id="services" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <SectionTitle>{t.services.title}</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                    <ServiceCard key={service.id} service={service} showPricing={true} />
                ))}
            </div>
        </section>
    );
}