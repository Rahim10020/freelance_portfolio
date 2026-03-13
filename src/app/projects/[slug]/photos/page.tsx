"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { ArrowLeftIcon } from "@/components/icons";
import { useLanguage } from "@/contexts/LanguageContext";
import { projects, projectDetails } from "@/lib/data";

export default function ProjectPhotosPage() {
  const { t } = useLanguage();
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  const project = useMemo(
    () => projects.find((item) => item.slug === slug),
    [slug],
  );
  const detail = slug ? projectDetails[slug] : undefined;

  useEffect(() => {
    if (!detail?.photoSections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length === 0) return;
        const nextIndex = Number((visible[0].target as HTMLElement).dataset.index);
        if (!Number.isNaN(nextIndex)) {
          setActiveSectionIndex(nextIndex);
        }
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: "-10% 0px -35% 0px",
      },
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [detail]);

  if (!project || !detail) {
    return (
      <div className="mx-auto min-h-screen max-w-screen-lg px-6 py-16 md:px-12 lg:px-20">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[var(--text-accent)]"
        >
          <ArrowLeftIcon size={24} aria-hidden />
          <span>{t.projects.detail.backToProjects}</span>
        </Link>
        <p className="mt-8 text-slate-300">Project photos not available yet.</p>
      </div>
    );
  }

  const projectTr = t.projects.list[project.id as keyof typeof t.projects.list];
  const activeSection =
    detail.photoSections[activeSectionIndex] ?? detail.photoSections[0];

  return (
    <div className="mx-auto min-h-screen max-w-screen-2xl px-4 py-4 md:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
        <aside className="lg:col-span-4">
          <div className="space-y-4 lg:sticky lg:top-6">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 text-slate-200 hover:text-[var(--text-accent)]"
            >
              <ArrowLeftIcon size={20} aria-hidden />
              <span className="font-display">{t.projects.detail.backToProject}</span>
            </Link>

            <h1 className="font-sans text-4xl font-bold text-slate-100">
              {activeSection.title}
            </h1>
            <p className="font-display text-lg text-slate-300">
              {activeSection.description}
            </p>

            <div className="border-t border-slate-700/60 pt-4 text-sm text-slate-400">
              <p className="font-display">{projectTr?.title}</p>
              <p className="font-display">
                {activeSectionIndex + 1} / {detail.photoSections.length} {t.projects.detail.photosSections}
              </p>
            </div>
          </div>
        </aside>

        <main className="lg:col-span-8">
          <div className="space-y-6 lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto lg:pr-2">
            {detail.photoSections.map((section, sectionIndex) => {
              const primary = section.images[0];
              const secondary = section.images[1];
              const rest = section.images.slice(2);

              return (
                <section
                  key={`${section.title}-${sectionIndex}`}
                  ref={(element) => {
                    sectionRefs.current[sectionIndex] = element;
                  }}
                  data-index={sectionIndex}
                  className="space-y-2"
                >
                  <div className="grid gap-2 md:grid-cols-12">
                    {primary && (
                      <div className="relative min-h-[420px] md:col-span-8">
                        <Image
                          src={primary.src}
                          alt={primary.alt}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          priority={sectionIndex === 0}
                        />
                      </div>
                    )}

                    {secondary && (
                      <div className="relative min-h-[420px] md:col-span-4">
                        <Image
                          src={secondary.src}
                          alt={secondary.alt}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 25vw, 100vw"
                          priority={sectionIndex === 0}
                        />
                      </div>
                    )}
                  </div>

                  {rest.length > 0 && (
                    <div className="grid gap-2 sm:grid-cols-2">
                      {rest.map((image, imageIndex) => (
                        <div
                          key={`${image.src}-${imageIndex}`}
                          className="relative min-h-[280px]"
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 32vw, 100vw"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
