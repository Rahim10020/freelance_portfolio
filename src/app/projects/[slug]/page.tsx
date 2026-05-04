"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import MouseEffect from "@/components/ui/MouseEffect";
import OtherProjects from "@/components/sections/OtherProjects";
import ProjectSummaryAside from "@/components/sections/ProjectSummaryAside";
import { projects, projectDetails } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  ArrowLeftIcon,
  CloseIcon,
  CopyIcon,
  ExternalLinkIcon,
  GithubWhiteIcon,
  LinkedinWhiteIcon,
  MoreGridIcon,
  ShareIcon,
  WhatsappWhiteIcon,
  XWhiteIcon,
} from "@/components/icons";
import AnimatedLetters from "@/components/ui/AnimatedLetters";
import TldrCallout from "@/components/ui/TldrCallout";
import ImagePreviewModal from "@/components/ui/ImagePreviewModal";
import ThemeToggle from "@/components/ui/ThemeToggle";
import EmptyState from "@/components/ui/EmptyState";

export default function ProjectDetailPage() {
  const { t } = useLanguage();
  const params = useParams<{ slug: string }>();
  const [toast, setToast] = useState<string | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [shareUrl, setShareUrl] = useState("");
  const slug = params?.slug;

  const project = useMemo(
    () => projects.find((item) => item.slug === slug),
    [slug],
  );
  const detail = slug ? projectDetails[slug] : undefined;
  const gallery = detail?.gallery ?? [];

  useEffect(() => {
    if (!isPreviewOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsPreviewOpen(false);
      }
      if (event.key === "ArrowRight") {
        setActiveImageIndex((current) => (current + 1) % gallery.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveImageIndex(
          (current) => (current - 1 + gallery.length) % gallery.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPreviewOpen, gallery.length]);

  useEffect(() => {
    if (!isShareOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsShareOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isShareOpen]);

  if (!project || !detail) {
    return (
      <div className="mx-auto min-h-screen max-w-screen-lg px-6 py-16 md:px-12 lg:px-20">
        <EmptyState
          title={t.projects.emptyState.title}
          message={t.projects.emptyState.projectDetailUnavailable}
          action={
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[var(--text-accent)]"
            >
              <ArrowLeftIcon size={24} aria-hidden />
              <span>{t.projects.detail.backToProjects}</span>
            </Link>
          }
        />
      </div>
    );
  }

  const projectTr = t.projects.list[project.id as keyof typeof t.projects.list];

  const hasTldr =
    !!detail.tldr?.what ||
    !!detail.tldr?.who ||
    !!detail.tldr?.result ||
    !!(detail.tldr?.challenges && detail.tldr.challenges.length > 0);

  const handleShare = async () => {
    const currentUrl = window.location.href;
    setShareUrl(currentUrl);
    setIsShareOpen(true);
  };

  const handleCopyShareUrl = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl || window.location.href);
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

  const handleNextImage = () => {
    setActiveImageIndex((current) => (current + 1) % gallery.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex(
      (current) => (current - 1 + gallery.length) % gallery.length,
    );
  };

  const encodedShareUrl = encodeURIComponent(shareUrl || "");
  const whatsappShareLink = `https://wa.me/?text=${encodedShareUrl}`;
  const xShareLink = `https://twitter.com/intent/tweet?url=${encodedShareUrl}`;
  const linkedinShareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedShareUrl}`;

  return (
    <>
      <MouseEffect />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-10 md:px-12 lg:px-16">
        {/* Theme toggle */}
        <div className="flex items-center justify-end mb-8">
          <ThemeToggle />
        </div>
        {/* Project name + buttons(actions) */}
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <AnimatedLetters
            as="h1"
            text={projectTr?.title}
            className="text-4xl font-bold font-display tracking-tight text-[var(--c-text-strong)] md:text-4xl"
          />

          <div className="flex flex-wrap items-center gap-2 text-[var(--c-text-soft)]">
            <button
              type="button"
              onClick={handleShare}
              aria-label={t.projects.detail.share}
              title={t.projects.detail.share}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg hover:text-[var(--text-accent)]"
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
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg hover:text-[var(--text-accent)]"
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
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg hover:text-[var(--text-accent)]"
              >
                <ExternalLinkIcon size={24} />
              </a>
            )}
          </div>
        </div>

        {isShareOpen && (
          <div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-[var(--c-bg-overlay-60)] p-4 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={t.projects.detail.share}
            onClick={() => setIsShareOpen(false)}
          >
            <div
              className="w-full max-w-md border border-[var(--c-border-soft)] bg-[var(--c-bg-solid-white)] shadow-xl [html[data-theme='dark']_&]:bg-[var(--c-bg-muted)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="px-5 py-4 flex items-center justify-between">
                <h2 className="font-display text-xl font-semibold text-[var(--c-text-strong)]">
                  {t.projects.detail.share}
                </h2>
                <button
                  type="button"
                  onClick={() => setIsShareOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center text-[var(--c-bg-overlay-70)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-text-inverse)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  aria-label={t.projects.detail.closeGallery}
                >
                  <CloseIcon size={20} />
                </button>
              </div>

              <div className="border border-[var(--c-border-soft)]"></div>

              <div className="px-5 py-4 flex items-center gap-6">
                <a
                  href={linkedinShareLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="inline-flex items-center justify-center text-[var(--c-text-inverse)]"
                >
                  <LinkedinWhiteIcon size={24} />
                </a>
                <a
                  href={xShareLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on X"
                  className="inline-flex items-center justify-center text-[var(--c-text-inverse)]"
                >
                  <XWhiteIcon size={24} />
                </a>
                <a
                  href={whatsappShareLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on WhatsApp"
                  className="inline-flex items-center justify-center text-[var(--c-text-inverse)]"
                >
                  <WhatsappWhiteIcon size={24} />
                </a>
              </div>

              <div className="border border-[var(--c-border-soft)]"></div>

              <div className="border border-[var(--c-border-soft)] px-5 py-2 bg-[var(--c-bg-overlay-95)]">
                <div className="flex items-center gap-2">
                  <input
                    id="share-project-link"
                    value={shareUrl}
                    readOnly
                    className="w-full bg-transparent text-sm text-[var(--c-text-inverse)] outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleCopyShareUrl}
                    className="inline-flex h-8 w-9 items-center justify-center border border-[var(--c-text-inverse)] bg-[var(--c-bg-overlay-70)] text-[var(--c-text-inverse)] transition-colors hover:bg-[var(--c-bg-overlay-95)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-text-inverse)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                    aria-label={t.projects.detail.share}
                    title={t.projects.detail.copied}
                  >
                    <CopyIcon size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/*Images sections */}
        <section className="grid gap-2 overflow-hidden md:grid-cols-12">
          <button
            type="button"
            onClick={() => openPreview(0)}
            className={`relative min-h-[320px] overflow-hidden text-left md:col-span-7 md:min-h-[520px] ${
              gallery[0]?.format === "mobile"
                ? "bg-[var(--c-bg-overlay-60)]"
                : "bg-transparent"
            }`}
          >
            <Image
              src={gallery[0].src}
              alt={gallery[0].alt}
              fill
              className={
                gallery[0]?.format === "mobile"
                  ? "object-contain"
                  : "object-cover"
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
                  item.format === "mobile"
                    ? "bg-[var(--c-bg-overlay-60)]"
                    : "bg-transparent"
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
        {/* Show all images button */}
        <div className="mt-3 flex justify-end">
          {gallery.length > 5 ? (
            <Link
              href={`/projects/${project.slug}/images`}
              className="inline-flex items-center gap-2 border border-[var(--c-border-soft)] bg-[var(--c-bg-contrast)] px-5 py-2 font-display text-base font-medium text-[var(--c-text-on-light)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-text-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              <MoreGridIcon size={24} />
              {t.projects.detail.showAllImages}
            </Link>
          ) : (
            <span
              aria-disabled="true"
              className="inline-flex items-center gap-2 border border-[var(--c-border-faint)] bg-[var(--c-bg-muted-soft)] px-5 py-2 font-display text-base font-medium text-[var(--c-text-subtle)]"
            >
              <MoreGridIcon size={24} />
              {t.projects.detail.showAllImages}
            </span>
          )}
        </div>

        {/* Content  */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          {/* Left content */}
          <div className="space-y-8 lg:col-span-8">
            <h2 className="text-3xl font-display font-bold text-[var(--c-text-strong)]">
              {detail.headline}
            </h2>

            {hasTldr && (
              <section className="border-t border-[var(--c-border-divider)] pt-6">
                <h3 className="text-xl font-display font-semibold text-[var(--c-text-strong)]">
                  {t.projects.detail.tldr}
                </h3>
                <div className="mt-4 space-y-3">
                  {detail.tldr?.what && (
                    <TldrCallout label={t.projects.detail.what}>
                      <p className="font-display leading-relaxed text-[var(--c-text-strong-soft)]">
                        {detail.tldr.what}
                      </p>
                    </TldrCallout>
                  )}
                  {detail.tldr?.who && (
                    <TldrCallout label={t.projects.detail.who}>
                      <p className="font-display leading-relaxed text-[var(--c-text-strong-soft)]">
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
                              className="font-display leading-relaxed text-[var(--c-text-strong-soft)]"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </TldrCallout>
                    )}
                  {detail.tldr?.result && (
                    <TldrCallout label={t.projects.detail.result}>
                      <p className="font-display leading-relaxed text-[var(--c-text-strong-soft)]">
                        {detail.tldr.result}
                      </p>
                    </TldrCallout>
                  )}
                </div>
              </section>
            )}

            {detail.contextAndProblem && (
              <section className="border-t border-[var(--c-border-divider)] pt-6">
                <h3 className="text-xl font-display font-semibold text-[var(--c-text-strong)]">
                  {t.projects.detail.contextProblem}
                </h3>
                <p className="mt-3 font-display leading-relaxed text-[var(--c-text-soft)]">
                  {detail.contextAndProblem}
                </p>
              </section>
            )}

            {detail.solutionRetained && (
              <section className="border-t border-[var(--c-border-divider)] pt-6">
                <h3 className="text-xl font-display font-semibold text-[var(--c-text-strong)]">
                  {t.projects.detail.solutionRetained}
                </h3>
                <p className="mt-3 font-display leading-relaxed text-[var(--c-text-soft)]">
                  {detail.solutionRetained}
                </p>
              </section>
            )}

            <section className="border-t border-[var(--c-border-divider)] pt-6">
              <h3 className="text-xl font-display font-semibold text-[var(--c-text-strong)]">
                {t.projects.detail.keyFeatures}
              </h3>
              <ul className="mt-4 space-y-3 text-[var(--c-text-soft)]">
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
                <section className="border-t border-[var(--c-border-divider)] pt-6">
                  <h3 className="text-xl font-display font-semibold text-[var(--c-text-strong)]">
                    {t.projects.detail.securityResponsibility}
                  </h3>
                  <ul className="mt-4 space-y-3 text-[var(--c-text-soft)]">
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
              <section className="border-t border-[var(--c-border-divider)] pt-6">
                <h3 className="text-xl font-display font-semibold text-[var(--c-text-strong)]">
                  {t.projects.detail.keyLearnings}
                </h3>
                <ul className="mt-4 space-y-3 text-[var(--c-text-soft)]">
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
              <section className="border-t border-[var(--c-border-divider)] pt-6">
                <h3 className="text-xl font-display font-semibold text-[var(--c-text-strong)]">
                  {t.projects.detail.futureRoadmap}
                </h3>
                <ul className="mt-4 space-y-3 text-[var(--c-text-soft)]">
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
              <section className="border-t border-[var(--c-border-divider)] pt-6">
                <h3 className="text-xl font-display font-semibold text-[var(--c-text-strong)]">
                  {t.projects.detail.whatYouCanLearn}
                </h3>
                <ul className="mt-4 space-y-3 text-[var(--c-text-soft)]">
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
          {/* Project summary right */}
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

      <ImagePreviewModal
        isOpen={isPreviewOpen}
        images={gallery}
        activeIndex={activeImageIndex}
        onClose={() => setIsPreviewOpen(false)}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
        onSelect={setActiveImageIndex}
        labels={{
          closeGallery: t.projects.detail.closeGallery,
          showAllImages: t.projects.detail.showAllImages,
          previousImage: t.projects.detail.previousImage,
          nextImage: t.projects.detail.nextImage,
        }}
      />

      {toast && (
        <div className="fixed bottom-6 right-6 rounded-lg bg-[var(--c-bg-contrast)] px-4 py-2 text-sm font-medium text-[var(--c-text-on-light)] shadow-lg">
          {toast}
        </div>
      )}
    </>
  );
}
