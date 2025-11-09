import { Service } from '@/lib/types';

interface ServiceCardProps {
    service: Service;
    showPricing?: boolean;
}

export default function ServiceCard({ service, showPricing = false }: ServiceCardProps) {
    return (
        <div className="group relative rounded-lg border border-slate-300/30 dark:border-slate-200/10 bg-white/60 dark:bg-slate-800/50 p-6 transition-all hover:bg-white/80 dark:hover:bg-slate-800/70 hover:border-slate-300/50 dark:hover:border-slate-200/20 hover:shadow-lg dark:hover:shadow-lg hover:shadow-teal-100/50 dark:hover:shadow-none">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-lg font-medium text-slate-900 dark:text-slate-200 mb-2">{service.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{service.description}</p>
            {showPricing && (
                <div className="mt-4 p-3 rounded-md">
                    <div className="text-lg font-bold text-teal-700 dark:text-teal-300">${service.priceUSD}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">{service.priceFCFA.toLocaleString()} FCFA</div>
                </div>
            )}
        </div>
    );
}