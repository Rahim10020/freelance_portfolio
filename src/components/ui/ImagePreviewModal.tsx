"use client";

import Image from "next/image";
import type { ProjectImage } from "@/lib/types";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "@/components/icons";

type ImagePreviewLabels = {
  closeGallery: string;
  showAllImages: string;
  previousImage: string;
  nextImage: string;
};

type ImagePreviewModalProps = {
  isOpen: boolean;
  images: ProjectImage[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
  labels: ImagePreviewLabels;
};

export default function ImagePreviewModal({
  isOpen,
  images,
  activeIndex,
  onClose,
  onPrev,
  onNext,
  onSelect,
  labels,
}: ImagePreviewModalProps) {
  if (!isOpen) return null;

  const activeImage = images[activeIndex];

  if (!activeImage) return null;

  return (
    <div
      className="fixed inset-0 z-[80] bg-[var(--c-bg-overlay-95)] p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={labels.showAllImages}
      onClick={onClose}
    >
      <div
        className="mx-auto grid h-full w-full max-w-screen-xl grid-rows-[auto_1fr_auto] gap-4"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center text-[var(--c-text-strong)] hover:text-[var(--c-text-faint)]"
            aria-label={labels.closeGallery}
          >
            <CloseIcon />
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
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={onPrev}
                aria-label={labels.previousImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-[var(--c-border-white-10)] bg-[rgb(var(--accent-bg-rgb))] px-3 py-3 text-2xl text-[var(--c-text-strong)] backdrop-blur transition md:left-4"
              >
                <ChevronLeftIcon />
              </button>
              <button
                type="button"
                onClick={onNext}
                aria-label={labels.nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-[var(--c-border-white-10)] bg-[rgb(var(--accent-bg-rgb))] px-3 py-3 text-2xl text-[var(--c-text-strong)] backdrop-blur transition md:right-4"
              >
                <ChevronRightIcon />
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex items-center justify-center gap-2 pb-2">
            {images.map((item, index) => (
              <button
                key={item.src + index}
                type="button"
                onClick={() => onSelect(index)}
                aria-label={`${labels.showAllImages} ${index + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === activeIndex
                    ? "bg-[rgb(var(--accent-bg-rgb))]"
                    : "bg-[var(--c-bg-contrast-40)] hover:bg-[var(--c-bg-contrast-70)]"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
