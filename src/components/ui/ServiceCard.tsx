import { Service } from '@/lib/types';

interface ServiceCardProps {
    service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
    return (
        <div className="group relative rounded-lg border border-slate-200/10 bg-slate-800/50 p-6 transition-all hover:bg-slate-800/70 hover:border-slate-200/20">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-lg font-medium text-slate-200 mb-2">{service.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{service.description}</p>
        </div>
    );
}