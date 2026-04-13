"use client";

import SectionTitle from "../ui/SectionTitle";
import ArchiveLink from "../ui/ArchiveLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { personalInfo } from "@/lib/data";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <SectionTitle>{t.about.title}</SectionTitle>
      <div className="text-right">
        <div className="space-y-4 text-[var(--c-text-secondary)] mb-8">
          <p className="text-body font-display">{t.about.paragraph1}</p>
          <p className="text-body font-display">{t.about.paragraph2}</p>
        </div>
        <div className="mb-8">
          <ArchiveLink
            href={personalInfo.resumeUrl}
            text={t.about.viewResume}
            isExternal
          />
        </div>
        <div className="py-8"></div>
      </div>
    </section>
  );
}
