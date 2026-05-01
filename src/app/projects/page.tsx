"use client";

import { useState } from "react";
import Masonry from "react-masonry-css";
import { projects } from "@/lib/data";
import MouseEffect from "@/components/ui/MouseEffect";
import AnimatedLetters from "@/components/ui/AnimatedLetters";
import ProjectCard from "@/components/ui/ProjectCard";
import { useLanguage } from "@/contexts/LanguageContext";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function ProjectsArchive() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<
    "all" | "completed" | "in-progress" | "upcoming"
  >("all");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "completed") {
      return !project.status || project.status === "completed";
    }
    return project.status === activeFilter;
  });

  const masonryBreakpoints = {
    default: 2,
    1024: 2,
    640: 1,
  };

  return (
    <>
      <MouseEffect />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-display md:px-12 md:py-15 lg:px-24 lg:py-18">
        <div className="mb-16">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <AnimatedLetters
                as="h1"
                text={t.projects.allProjects}
                className="mb-4 font-display text-2xl font-bold tracking-tight text-[var(--c-text-primary)] sm:text-3xl"
              />
              <p className="max-w-2xl font-display text-lg text-[var(--c-text-secondary)]">
                {t.projects.archiveDescription}
              </p>
            </div>
            <ThemeToggle />
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {(["all", "completed", "in-progress", "upcoming"] as const).map(
              (filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeFilter === filter
                      ? "bg-[rgb(var(--accent-bg-rgb))] text-[var(--on-primary-text)]"
                      : "bg-[var(--c-bg-muted)] text-[var(--c-text-soft)] hover:bg-[var(--c-bg-muted-hover)]"
                  }`}
                >
                  {t.projects.filters[filter]}
                </button>
              ),
            )}
          </div>
        </div>

        <Masonry
          breakpointCols={masonryBreakpoints}
          className="masonry-grid"
          columnClassName="masonry-grid-column"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Masonry>
      </div>
    </>
  );
}
