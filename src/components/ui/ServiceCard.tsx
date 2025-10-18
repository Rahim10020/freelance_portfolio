import { Service } from '@/lib/types';

interface ServiceCardProps {
    service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
    return (
        <div className="group relative rounded-lg border border-slate-200/10 dark:border-slate-200/10 light:border-slate-300/30 bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/60 p-6 transition-all hover:bg-slate-800/70 dark:hover:bg-slate-800/70 light:hover:bg-white/80 hover:border-slate-200/20 dark:hover:border-slate-200/20 light:hover:border-slate-300/50 hover:shadow-lg dark:hover:shadow-lg light:hover:shadow-teal-100/50">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-lg font-medium text-slate-200 dark:text-slate-200 light:text-slate-900 mb-2">{service.title}</h3>
            <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">{service.description}</p>
        </div>
    );
}