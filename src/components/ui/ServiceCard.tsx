import { Service } from '@/lib/types';
import { FigmaIcon, GlobeIcon, LaptopIcon, MobileIcon } from '@/components/icons';

interface ServiceCardProps {
    service: Service;
    showPricing?: boolean;
}

const serviceIconMap = {
    globe: GlobeIcon,
    mobile: MobileIcon,
    figma: FigmaIcon,
    laptop: LaptopIcon,
};

export default function ServiceCard({ service, showPricing = false }: ServiceCardProps) {
    const IconComponent = serviceIconMap[service.icon];

    return (
        <div className="group relative rounded-lg border border-slate-300/30 dark:border-slate-200/10 bg-white/60 dark:bg-slate-800/50 p-6 transition-all hover:bg-white/80 dark:hover:bg-slate-800/70 hover:border-slate-300/50 dark:hover:border-slate-200/20 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-none">
            <div className="mb-4 text-[var(--text-accent)] dark:text-[var(--text-accent)]">
                <IconComponent size={34} />
            </div>
            <h3 className="text-lg font-medium text-slate-900 dark:text-slate-200 mb-2">{service.title}</h3>
            <p className="font-display text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{service.description}</p>
            {showPricing && (
                <div className="mt-4 p-3 rounded-md">
                    <div className="text-lg font-bold text-[var(--text-accent)] dark:text-[var(--text-accent)]">${service.priceUSD}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">{service.priceFCFA.toLocaleString()} FCFA</div>
                </div>
            )}
        </div>
    );
}
