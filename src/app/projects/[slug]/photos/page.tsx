"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useParams } from "next/navigation";
import { ArrowLeftIcon } from "@/components/icons";
import { useLanguage } from "@/contexts/LanguageContext";
import { projects, projectDetails } from "@/lib/data";

export default function ProjectPhotosPage() {
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
        <p className="mt-8 text-slate-300">Project photos not available yet.</p>
      </div>
    );
  }

  const images = detail.photoSections.flatMap((section) => section.images);

  return (
    <div className="mx-auto min-h-screen max-w-screen-lg px-4 py-6 md:px-6 lg:px-8">
      <div className="mb-6">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-slate-200 hover:text-[var(--text-accent)]"
        >
          <ArrowLeftIcon size={20} aria-hidden />
          <span className="font-display">
            {t.projects.detail.backToProject}
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:gap-10">
        {images.map((image, imageIndex) => {
          const frameClass =
            image.format === "mobile"
              ? "aspect-[9/16] min-h-[420px] sm:min-h-[520px] lg:min-h-[640px]"
              : "aspect-[16/9] min-h-[260px] sm:min-h-[360px] lg:min-h-[420px]";
          const sizes =
            image.format === "mobile"
              ? "(min-width: 1280px) 55vw, (min-width: 768px) 70vw, 100vw"
              : "(min-width: 1280px) 70vw, (min-width: 768px) 85vw, 100vw";

          return (
            <div
              key={`${image.src}-${imageIndex}`}
              className={`relative w-full overflow-hidden ${frameClass}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
                sizes={sizes}
                priority={imageIndex < 2}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
