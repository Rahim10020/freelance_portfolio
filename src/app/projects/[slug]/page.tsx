"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import ControlsPanel from "@/components/ui/ControlsPanel";
import MouseEffect from "@/components/ui/MouseEffect";
import OtherProjects from "@/components/sections/OtherProjects";
import ProjectSummaryAside from "@/components/sections/ProjectSummaryAside";
import { projects, projectDetails } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  ArrowLeftIcon,
  ExternalLinkIcon,
  GithubWhiteIcon,
  MoreGridIcon,
  ShareIcon,
} from "@/components/icons";
import AnimatedLetters from "@/components/ui/AnimatedLetters";
import TldrCallout from "@/components/ui/TldrCallout";

export default function ProjectDetailPage() {
  const { t } = useLanguage();
  const params = useParams<{ slug: string }>();
  const [toast, setToast] = useState<string | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const slug = params?.slug;

  const project = useMemo(
    () => projects.find((item) => item.slug === slug),
    [slug],
  );
  const detail = slug ? projectDetails[slug] : undefined;

  useEffect(() => {
    if (!isPreviewOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsPreviewOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPreviewOpen]);

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
  const gallery = detail.gallery;
  const activeImage = gallery[activeImageIndex];

  const hasTldr =
    !!detail.tldr?.what ||
    !!detail.tldr?.who ||
    !!detail.tldr?.result ||
    !!(detail.tldr?.challenges && detail.tldr.challenges.length > 0);

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

  const openPreview = (index: number) => {
    setActiveImageIndex(index);
    setIsPreviewOpen(true);
  };

  return (
    <>
      <MouseEffect />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-10 md:px-12 lg:px-16">
        <div className="mb-8 flex justify-end">
          <ControlsPanel />
        </div>

        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <AnimatedLetters
            as="h1"
            text={projectTr?.title}
            className="text-4xl font-bold font-display tracking-tight text-slate-100 md:text-4xl"
          />

          <div className="flex flex-wrap items-center gap-2 text-slate-300">
            <button
              type="button"
              onClick={handleShare}
              aria-label={t.projects.detail.share}
              title={t.projects.detail.share}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-[var(--text-accent)]"
            >
              <ShareIcon size={24} />
            </button>
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.projects.detail.viewGithub}
                title={t.projects.detail.viewGithub}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-[var(--text-accent)]"
              >
                <GithubWhiteIcon size={24} />
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.projects.detail.viewLive}
                title={t.projects.detail.viewLive}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-[var(--text-accent)]"
              >
                <ExternalLinkIcon size={24} />
              </a>
            )}
          </div>
        </div>

        {/*Images sections */}
        <section className="grid gap-2 overflow-hidden md:grid-cols-12">
          <button
            type="button"
            onClick={() => openPreview(0)}
            className={`relative min-h-[320px] overflow-hidden text-left md:col-span-7 md:min-h-[520px] ${
              gallery[0]?.format === "mobile"
                ? "bg-slate-950/60"
                : "bg-transparent"
            }`}
          >
            <Image
              src={gallery[0].src}
              alt={gallery[0].alt}
              fill
              className={
                gallery[0]?.format === "mobile" ? "object-contain" : "object-cover"
              }
              priority
            />
          </button>
          <div className="grid min-h-[320px] grid-cols-2 gap-2 md:col-span-5 md:grid-rows-2">
            {gallery.slice(1, 5).map((item, index) => (
              <button
                key={item.src + index}
                type="button"
                onClick={() => openPreview(index + 1)}
                className={`relative min-h-[158px] overflow-hidden text-left md:min-h-[259px] ${
                  item.format === "mobile" ? "bg-slate-950/60" : "bg-transparent"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={
                    item.format === "mobile" ? "object-contain" : "object-cover"
                  }
                />
              </button>
            ))}
          </div>
        </section>

        <div className="mt-3 flex justify-end">
          {gallery.length > 5 ? (
            <Link
              href={`/projects/${project.slug}/images`}
              className="inline-flex items-center gap-2 bg-slate-100 px-5 py-2 font-display text-base font-medium text-slate-900"
            >
              <MoreGridIcon size={24} />
              {t.projects.detail.showAllImages}
            </Link>
          ) : (
            <span
              aria-disabled="true"
              className="inline-flex items-center gap-2 bg-slate-100/60 px-5 py-2 font-display text-base font-medium text-slate-500"
            >
              <MoreGridIcon size={24} />
              {t.projects.detail.showAllImages}
            </span>
          )}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-8">
            <h2 className="text-3xl font-display font-bold text-slate-100">
              {detail.headline}
            </h2>

            {hasTldr && (
              <section className="border-t border-slate-700/60 pt-6">
                <h3 className="text-xl font-display font-semibold text-slate-100">
                  {t.projects.detail.tldr}
                </h3>
                <div className="mt-4 space-y-3">
                  {detail.tldr?.what && (
                    <TldrCallout label={t.projects.detail.what}>
                      <p className="font-display leading-relaxed text-slate-100/90">
                        {detail.tldr.what}
                      </p>
                    </TldrCallout>
                  )}
                  {detail.tldr?.who && (
                    <TldrCallout label={t.projects.detail.who}>
                      <p className="font-display leading-relaxed text-slate-100/90">
                        {detail.tldr.who}
                      </p>
                    </TldrCallout>
                  )}
                  {detail.tldr?.challenges &&
                    detail.tldr.challenges.length > 0 && (
                      <TldrCallout label={t.projects.detail.challenges}>
                        <ul className="space-y-2">
                          {detail.tldr.challenges.map((item) => (
                            <li
                              key={item}
                              className="font-display leading-relaxed text-slate-100/90"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </TldrCallout>
                    )}
                  {detail.tldr?.result && (
                    <TldrCallout label={t.projects.detail.result}>
                      <p className="font-display leading-relaxed text-slate-100/90">
                        {detail.tldr.result}
                      </p>
                    </TldrCallout>
                  )}
                </div>
              </section>
            )}

            {detail.contextAndProblem && (
              <section className="border-t border-slate-700/60 pt-6">
                <h3 className="text-xl font-display font-semibold text-slate-100">
                  {t.projects.detail.contextProblem}
                </h3>
                <p className="mt-3 font-display leading-relaxed text-slate-300">
                  {detail.contextAndProblem}
                </p>
              </section>
            )}

            {detail.solutionRetained && (
              <section className="border-t border-slate-700/60 pt-6">
                <h3 className="text-xl font-display font-semibold text-slate-100">
                  {t.projects.detail.solutionRetained}
                </h3>
                <p className="mt-3 font-display leading-relaxed text-slate-300">
                  {detail.solutionRetained}
                </p>
              </section>
            )}

            <section className="border-t border-slate-700/60 pt-6">
              <h3 className="text-xl font-display font-semibold text-slate-100">
                {t.projects.detail.keyFeatures}
              </h3>
              <ul className="mt-4 space-y-3 text-slate-300">
                {detail.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start font-display gap-3"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--text-accent)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {detail.securityAndResponsibility &&
              detail.securityAndResponsibility.length > 0 && (
                <section className="border-t border-slate-700/60 pt-6">
                  <h3 className="text-xl font-display font-semibold text-slate-100">
                    {t.projects.detail.securityResponsibility}
                  </h3>
                  <ul className="mt-4 space-y-3 text-slate-300">
                    {detail.securityAndResponsibility.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 font-display"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--text-accent)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

            {detail.keyLearnings && detail.keyLearnings.length > 0 && (
              <section className="border-t border-slate-700/60 pt-6">
                <h3 className="text-xl font-display font-semibold text-slate-100">
                  {t.projects.detail.keyLearnings}
                </h3>
                <ul className="mt-4 space-y-3 text-slate-300">
                  {detail.keyLearnings.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-display"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--text-accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {detail.futureRoadmap && detail.futureRoadmap.length > 0 && (
              <section className="border-t border-slate-700/60 pt-6">
                <h3 className="text-xl font-display font-semibold text-slate-100">
                  {t.projects.detail.futureRoadmap}
                </h3>
                <ul className="mt-4 space-y-3 text-slate-300">
                  {detail.futureRoadmap.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-display"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--text-accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {detail.whatYouCanLearn && detail.whatYouCanLearn.length > 0 && (
              <section className="border-t border-slate-700/60 pt-6">
                <h3 className="text-xl font-display font-semibold text-slate-100">
                  {t.projects.detail.whatYouCanLearn}
                </h3>
                <ul className="mt-4 space-y-3 text-slate-300">
                  {detail.whatYouCanLearn.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-display"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--text-accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
          <ProjectSummaryAside
            project={project}
            detail={detail}
            labels={{
              projectSummary: t.projects.detail.projectSummary,
              role: t.projects.detail.role,
              duration: t.projects.detail.duration,
              year: t.projects.detail.year,
              team: t.projects.detail.team,
              platforms: t.projects.detail.platforms,
              stack: t.projects.detail.stack,
              viewLive: t.projects.detail.viewLive,
              viewGithub: t.projects.detail.viewGithub,
            }}
          />
        </div>

        <OtherProjects currentSlug={project.slug} />
      </div>

      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-[80] bg-slate-950/95 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={t.projects.detail.showAllImages}
          onClick={() => setIsPreviewOpen(false)}
        >
          <div
            className="mx-auto grid h-full w-full max-w-screen-xl grid-rows-[auto_1fr] gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => setIsPreviewOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800/70 text-slate-100"
                aria-label={t.projects.detail.closeGallery}
              >
                ×
              </button>
            </div>

            <div className="relative min-h-0">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div className="fixed bottom-6 right-6 rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 shadow-lg">
          {toast}
        </div>
      )}
    </>
  );
}
