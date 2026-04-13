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
    <div className="group relative rounded-lg bg-transparent">
      <div className="mb-4 text-[var(--text-accent)] flex items-center justify-end">
        <IconComponent size={34} />
      </div>
      <h3 className="text-lg font-medium text-[var(--c-text-primary)] mb-2">
        {service.title}
      </h3>
      <p className="font-display text-sm text-[var(--c-text-secondary)] leading-relaxed mb-4">
        {service.description}
      </p>
      {showPricing && (
        <div className="pt-4 border-t border-[var(--c-border-faint)]">
          <div className="text-sm font-semibold text-[var(--text-accent)]">
            {service.priceRangeUSD}
          </div>
          <div className="text-xs text-[var(--c-text-secondary)] mt-0.5">
            {service.priceRangeFCFA}
          </div>
        </div>
      )}
    </div>
  );
}
