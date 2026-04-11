"use client";

import SectionTitle from "../ui/SectionTitle";
import ServiceCard from "../ui/ServiceCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { Service } from "@/lib/types";

export default function Services() {
  const { t } = useLanguage();
  const services: Service[] = [
    {
      id: "1",
      title: t.services.webDev.title,
      description: t.services.webDev.description,
      icon: "globe",
      priceRangeUSD: t.services.webDev.priceRangeUSD,
      priceRangeFCFA: t.services.webDev.priceRangeFCFA,
    },
    {
      id: "2",
      title: t.services.mobileDev.title,
      description: t.services.mobileDev.description,
      icon: "mobile",
      priceRangeUSD: t.services.mobileDev.priceRangeUSD,
      priceRangeFCFA: t.services.mobileDev.priceRangeFCFA,
    },
    {
      id: "3",
      title: t.services.uiux.title,
      description: t.services.uiux.description,
      icon: "figma",
      priceRangeUSD: t.services.uiux.priceRangeUSD,
      priceRangeFCFA: t.services.uiux.priceRangeFCFA,
    },
    {
      id: "4",
      title: t.services.api.title,
      description: t.services.api.description,
      icon: "laptop",
      priceRangeUSD: t.services.api.priceRangeUSD,
      priceRangeFCFA: t.services.api.priceRangeFCFA,
    },
  ];

  return (
    <section
      id="services"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <SectionTitle>{t.services.title}</SectionTitle>
      <div className="text-right">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-18 gap-y-20">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              showPricing={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
