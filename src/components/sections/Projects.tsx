"use client";

import { projects } from "@/lib/data";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import ArchiveLink from "../ui/ArchiveLink";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  // Separate best projects from others
  const bestProjects = projects.filter((project) => project.best);

  // Display only the top 3 best projects
  const displayedProjects = bestProjects.slice(0, 3);

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <SectionTitle>{t.projects.title}</SectionTitle>
      <div>
        <ol className="group/list">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ol>

        <div className="mt-12">
          <ArchiveLink href="/projects" text={t.projects.viewArchive} />
        </div>
      </div>
    </section>
  );
}
