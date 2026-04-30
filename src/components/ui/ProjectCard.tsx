"use client";

import { Project } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useMemo, useState } from "react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage();
  const projectTr = t.projects.list[project.id as keyof typeof t.projects.list];
  const title = projectTr?.title ?? "";
  const description = projectTr?.description ?? "";
  const frames = useMemo(() => {
    if (project.isSlideshow && project.slideshowFrames?.length) {
      return project.slideshowFrames;
    }
    return project.image ? [project.image] : [];
  }, [project.image, project.isSlideshow, project.slideshowFrames]);
  const [frameIndex, setFrameIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const activeFrame = frames[frameIndex] ?? project.image;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReduceMotion = () => setReduceMotion(mediaQuery.matches);

    updateReduceMotion();
    mediaQuery.addEventListener("change", updateReduceMotion);

    return () => {
      mediaQuery.removeEventListener("change", updateReduceMotion);
    };
  }, []);

  useEffect(() => {
    setFrameIndex(0);
  }, [frames]);

  useEffect(() => {
    if (!project.isSlideshow || frames.length <= 1 || reduceMotion) {
      return;
    }

    const intervalMs = project.slideshowIntervalMs ?? 900;
    const timer = window.setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % frames.length);
    }, intervalMs);

    return () => {
      window.clearInterval(timer);
    };
  }, [
    frames.length,
    project.isSlideshow,
    project.slideshowIntervalMs,
    reduceMotion,
  ]);

  if (!activeFrame) {
    return null;
  }

  return (
    <li className="mb-10 sm:mb-12">
      <Link
        href={`/projects/${project.slug}`}
        className="project-card group relative block overflow-hidden rounded-lg transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[var(--c-project-card-border-hover)] focus-visible:-translate-y-0.5 focus-visible:border-[var(--c-project-card-border-hover)] focus-visible:shadow-[var(--project-card-shadow-hover)] focus-visible:outline-none"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            key={activeFrame}
            src={activeFrame}
            alt={title}
            fill
            sizes="(min-width: 1024px) 42rem, (min-width: 768px) 80vw, 100vw"
            loading="lazy"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] group-focus-visible:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-[var(--project-card-overlay)]" />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-4 sm:p-6">
          <div className="project-card-overlay-content translate-y-0 opacity-100 transition-all duration-300 ease-out md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
            <h3 className="font-display text-2xl leading-tight text-[var(--c-project-overlay-title)] sm:text-3xl">
              {title}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--c-project-overlay-description)] sm:text-base">
              {description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li key={tech}>
                  <span className="inline-flex items-center rounded-full border border-[var(--c-project-chip-border)] bg-[var(--c-project-chip-bg)] px-3 py-1 text-xs font-medium leading-5 text-[var(--c-project-chip-text)] backdrop-blur-sm">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </li>
  );
}
