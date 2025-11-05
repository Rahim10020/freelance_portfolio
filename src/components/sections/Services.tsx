import { services } from '@/lib/data';
import SectionTitle from '../ui/SectionTitle';
import ServiceCard from '../ui/ServiceCard';

export default function Services() {
    return (
        <section id="services" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <SectionTitle>Services</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                    <ServiceCard key={service.id} service={service} showPricing={true} />
                ))}
            </div>
        </section>
    );
}