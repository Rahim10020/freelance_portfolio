"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import ControlsPanel from "@/components/ui/ControlsPanel";
import MouseEffect from "@/components/ui/MouseEffect";
import { projects, projectDetailMocks } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeftIcon } from "@/components/icons";

export default function ProjectDetailPage() {
  const { t } = useLanguage();
  const params = useParams<{ slug: string }>();
  const [toast, setToast] = useState<string | null>(null);
  const slug = params?.slug;

  const project = useMemo(
    () => projects.find((item) => item.slug === slug),
    [slug],
  );
  const detail = slug ? projectDetailMocks[slug] : undefined;

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
        <p className="mt-8 text-slate-300">Project detail not available yet.</p>
      </div>
    );
  }

  const projectTr = t.projects.list[project.id as keyof typeof t.projects.list];

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setToast(t.projects.detail.copied);
      window.setTimeout(() => setToast(null), 1800);
    } catch {
      setToast(t.projects.detail.copyFailed);
      window.setTimeout(() => setToast(null), 1800);
    }
  };

  return (
    <>
      <MouseEffect />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-10 md:px-12 lg:px-16">
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/projects"
            className="group inline-flex items-center font-semibold text-[var(--text-accent)]"
          >
            <ArrowLeftIcon
              size={24}
              className="mr-2 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-1.5"
            />
            <span>{t.projects.detail.backToProjects}</span>
          </Link>
          <ControlsPanel />
        </div>

        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h1 className="text-3xl font-bold tracking-tight text-slate-100 md:text-4xl">
            {projectTr?.title}
          </h1>
          <div className="flex items-center gap-4 text-slate-300">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-2 text-sm font-semibold hover:text-[var(--text-accent)]"
            >
              <span aria-hidden>⇪</span>
              <span>{t.projects.detail.share}</span>
            </button>
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold hover:text-[var(--text-accent)]"
              >
                {t.projects.detail.viewGithub}
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold hover:text-[var(--text-accent)]"
              >
                {t.projects.detail.viewLive}
              </a>
            )}
          </div>
        </div>

        <section className="grid gap-2 overflow-hidden rounded-2xl md:grid-cols-12">
          <div className="relative min-h-[320px] md:col-span-7 md:min-h-[520px]">
            <Image
              src={detail.gallery[0].src}
              alt={detail.gallery[0].alt}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid min-h-[320px] grid-cols-2 gap-2 md:col-span-5 md:grid-rows-2">
            {detail.gallery.slice(1, 5).map((item, index) => (
              <div
                key={item.src + index}
                className="relative min-h-[158px] md:min-h-[259px]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <div className="mt-3 flex justify-end">
          <button
            type="button"
            className="rounded-xl bg-slate-100 px-5 py-2 text-base font-semibold text-slate-900"
          >
            {t.projects.detail.showAllPhotos}
          </button>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="text-4xl font-bold text-slate-100">
              {detail.headline}
            </h2>
            <p className="mt-3 text-lg text-slate-300">{detail.location}</p>
            <p className="mt-2 text-lg text-slate-300">
              {detail.meta.join(" · ")}
            </p>
            <p className="mt-2 text-lg text-slate-200">
              <span className="font-semibold">★ {detail.ratingLabel}</span>
              <span className="mx-2">·</span>
              <span className="underline">{detail.reviewLabel}</span>
            </p>

            <div className="mt-8 border-t border-slate-700/60 pt-6">
              <p className="text-base leading-relaxed text-slate-300">
                {detail.summary}
              </p>
            </div>

            <div className="mt-8 border-t border-slate-700/60 pt-6">
              <h3 className="text-xl font-semibold text-slate-100">
                {t.projects.detail.keyFeatures}
              </h3>
              <ul className="mt-4 space-y-3 text-slate-300">
                {detail.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--text-accent)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="top-6 rounded-2xl border border-slate-700/60 bg-slate-800/65 p-5 shadow-lg backdrop-blur-sm lg:sticky">
              <h3 className="text-xl font-semibold text-slate-100">
                {t.projects.detail.projectSummary}
              </h3>
              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    {t.projects.detail.role}
                  </p>
                  <p className="mt-1 font-medium text-slate-100">
                    {detail.role}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    {t.projects.detail.duration}
                  </p>
                  <p className="mt-1 font-medium text-slate-100">
                    {detail.duration}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    {t.projects.detail.stack}
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="accent-chip rounded-full px-3 py-1 text-xs font-medium"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-[rgb(var(--accent-bg-rgb))] px-4 py-2 font-semibold text-[var(--on-primary-text)] hover:bg-[rgb(var(--accent-rgb))]"
                  >
                    {t.projects.detail.viewLive}
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-lg border border-slate-600 px-4 py-2 font-semibold text-slate-100 hover:border-[var(--text-accent)] hover:text-[var(--text-accent)]"
                  >
                    {t.projects.detail.viewGithub}
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {toast && (
        <div className="fixed bottom-6 right-6 rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 shadow-lg">
          {toast}
        </div>
      )}
    </>
  );
}
