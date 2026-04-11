import { Service } from "@/lib/types";
import {
  FigmaIcon,
  GlobeIcon,
  LaptopIcon,
  MobileIcon,
} from "@/components/icons";

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

export default function ServiceCard({
  service,
  showPricing = false,
}: ServiceCardProps) {
  const IconComponent = serviceIconMap[service.icon];

  return (
    <div className="group relative rounded-lg bg-transparent transition-all hover:shadow-md">
      <div className="mb-4 text-[var(--text-accent)]">
        <IconComponent size={34} />
      </div>
      <h3 className="text-lg font-medium text-slate-200 mb-2">
        {service.title}
      </h3>
      <p className="font-display text-sm text-slate-400 leading-relaxed mb-4">
        {service.description}
      </p>
      {showPricing && (
        <div className="pt-4 border-t border-slate-400/30">
          <div className="text-sm font-semibold text-[var(--text-accent)]">
            {service.priceRangeUSD}
          </div>
          <div className="text-xs text-slate-400 mt-0.5">
            {service.priceRangeFCFA}
          </div>
        </div>
      )}
    </div>
  );
}
