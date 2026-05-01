"use client";

import { Project } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useMemo, useState } from "react";

interface ProjectCardProps {
  project: Project;
}

const CARD_ASPECT_CLASSES = {
  web: "aspect-[16/10]",
  mobile: "aspect-[3/4]",
} as const;

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage();
  const projectTr = t.projects.list[project.id as keyof typeof t.projects.list];
  const title = projectTr?.title ?? "";
  const description = projectTr?.description ?? "";
  const limitedTechnologies = project.technologies.slice(0, 3);
  const frames = useMemo(() => {
    if (project.isSlideshow && project.slideshowFrames?.length) {
      return project.slideshowFrames;
    }
    return project.image ? [project.image] : [];
  }, [project.image, project.isSlideshow, project.slideshowFrames]);
  const [frameIndex, setFrameIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [visibleFrame, setVisibleFrame] = useState<string | undefined>(
    frames[0] ?? project.image,
  );
  const [incomingFrame, setIncomingFrame] = useState<string | null>(null);
  const [incomingVisible, setIncomingVisible] = useState(false);
  const imageFormat = project.imageFormat ?? "web";
  const cardAspectClass = CARD_ASPECT_CLASSES[imageFormat];
  const imageFitClass = imageFormat === "mobile" ? "object-contain" : "object-cover";

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
    setVisibleFrame(frames[0] ?? project.image);
    setIncomingFrame(null);
    setIncomingVisible(false);
  }, [frames, project.image]);

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

  useEffect(() => {
    const nextFrame = frames[frameIndex];
    if (!nextFrame) return;

    if (reduceMotion || !project.isSlideshow || !visibleFrame) {
      setVisibleFrame(nextFrame);
      setIncomingFrame(null);
      setIncomingVisible(false);
      return;
    }

    if (nextFrame === visibleFrame) return;

    setIncomingFrame(nextFrame);
    setIncomingVisible(false);
    const raf = window.requestAnimationFrame(() => {
      setIncomingVisible(true);
    });
    const fadeTimer = window.setTimeout(() => {
      setVisibleFrame(nextFrame);
      setIncomingFrame(null);
      setIncomingVisible(false);
    }, 420);

    return () => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(fadeTimer);
    };
  }, [frameIndex, frames, project.isSlideshow, reduceMotion, visibleFrame]);

  if (!visibleFrame) {
    return null;
  }

  return (
    <article className="mb-6 w-full break-inside-avoid sm:mb-8">
      <Link
        href={`/projects/${project.slug}`}
        className="project-card group relative block overflow-hidden rounded-sm transition duration-300 ease-out"
      >
        <div className={`relative w-full overflow-hidden ${cardAspectClass}`}>
          <Image
            src={visibleFrame}
            alt={title}
            fill
            sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
            loading="lazy"
            className={imageFitClass}
          />
          {incomingFrame && (
            <Image
              src={incomingFrame}
              alt={title}
              fill
              sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
              loading="lazy"
              className={`${imageFitClass} transition-opacity duration-[500ms] ease-out ${
                incomingVisible ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">
          <div className="project-card-overlay-content w-fit max-w-full px-6 py-3 opacity-100 shadow-[var(--project-cartouche-shadow-mobile)] backdrop-blur-[2px] transition-all duration-300 ease-out md:translate-y-2 md:bg-[var(--c-project-cartouche-bg-desktop-idle)] md:opacity-0 md:shadow-none md:backdrop-blur-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-hover:border-[var(--c-project-cartouche-border-hover)] md:group-hover:bg-[var(--c-project-cartouche-bg-desktop-hover)] md:group-hover:shadow-[var(--project-cartouche-shadow-hover)] md:group-hover:backdrop-blur-sm md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100 md:group-focus-visible:border-[var(--c-project-cartouche-border-hover)] md:group-focus-visible:bg-[var(--c-project-cartouche-bg-desktop-hover)] md:group-focus-visible:shadow-[var(--project-cartouche-shadow-hover)] md:group-focus-visible:backdrop-blur-sm">
            <h3 className="font-display text-xl font-bold leading-tight text-[var(--c-project-overlay-title)] sm:text-2xl">
              {title}
            </h3>
            <p className="line-clamp-2 mt-2 max-w-lg text-sm leading-relaxed text-[var(--c-project-overlay-description)] sm:text-base">
              {description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {limitedTechnologies.map((tech) => (
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
    </article>
  );
}
