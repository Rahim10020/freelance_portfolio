"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { useParams } from "next/navigation";
import { ArrowLeftIcon } from "@/components/icons";
import { useLanguage } from "@/contexts/LanguageContext";
import { projects, projectDetails } from "@/lib/data";

export default function ProjectImagesPage() {
  const { t } = useLanguage();
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;

  const project = useMemo(
    () => projects.find((item) => item.slug === slug),
    [slug],
  );
  const detail = slug ? projectDetails[slug] : undefined;

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
        <p className="mt-8 text-slate-300">Project images not available yet.</p>
      </div>
    );
  }

  const images = detail.photoSections.flatMap((section) => section.images);

  return (
    <div className="mx-auto min-h-screen max-w-screen-lg px-4 py-6 md:px-6 lg:px-8">
      {/* Masonry view for projects images */}
      <div className="sticky top-4 z-20 mb-6">
        {/* back to projects */}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-slate-200 backdrop-blur transition hover:text-[var(--text-accent)]"
        >
          <ArrowLeftIcon size={20} aria-hidden />
          <span className="font-display">
            {t.projects.detail.backToProject}
          </span>
        </Link>
      </div>

      <div className="columns-1 gap-6 sm:columns-2 sm:gap-8 lg:columns-3 lg:gap-10">
        {images.map((image, imageIndex) => {
          const isMobile = image.format === "mobile";

          return (
            <figure
              key={`${image.src}-${imageIndex}`}
              className="mb-6 break-inside-avoid sm:mb-8 lg:mb-10"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={isMobile ? 900 : 1600}
                height={isMobile ? 1600 : 900}
                className="h-auto w-full"
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                priority={imageIndex < 2}
              />
            </figure>
          );
        })}
      </div>
    </div>
  );
}
