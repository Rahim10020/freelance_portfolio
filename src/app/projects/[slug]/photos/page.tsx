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
          <span className="font-display">{t.projects.detail.backToProject}</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:gap-10">
        {images.map((image, imageIndex) => (
          <div
            key={`${image.src}-${imageIndex}`}
            className="relative w-full overflow-hidden rounded-2xl bg-slate-900/60 ring-1 ring-slate-700/40 min-h-[320px] sm:min-h-[420px] lg:min-h-[520px]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
              sizes="(min-width: 1280px) 70vw, (min-width: 768px) 85vw, 100vw"
              priority={imageIndex < 2}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
