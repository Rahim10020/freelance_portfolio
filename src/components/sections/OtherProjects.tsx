"use client";

import { projects } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import ProjectCardCompact from "@/components/ui/ProjectCardCompact";

interface OtherProjectsProps {
  currentSlug: string;
}

export default function OtherProjects({ currentSlug }: OtherProjectsProps) {
  const { t } = useLanguage();

  const items = projects
    .filter((project) => project.slug !== currentSlug)
    .sort((a, b) => {
      if (a.best === b.best) return 0;
      return a.best ? -1 : 1;
    })
    .slice(0, 3);

  if (items.length === 0) return null;

  return (
    <section className="mt-14 border-t border-slate-700/60 pt-10">
      <h3 className="mb-5 font-display text-2xl font-semibold text-slate-100">
        {t.projects.detail.otherProjects}
      </h3>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {items.map((project) => (
          <ProjectCardCompact key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
