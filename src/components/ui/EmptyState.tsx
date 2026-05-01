"use client";

import Image from "next/image";
import { ReactNode } from "react";

interface EmptyStateProps {
  message: string;
  title?: string;
  action?: ReactNode;
  compact?: boolean;
}

export default function EmptyState({
  message,
  title,
  action,
  compact = false,
}: EmptyStateProps) {
  return (
    <section
      className={`w-full rounded-xl border border-[var(--c-border-soft)] bg-[var(--c-bg-muted-soft)] px-6 text-center ${
        compact ? "py-8" : "py-12 md:py-14"
      }`}
    >
      <div className={`mx-auto ${compact ? "max-w-[180px]" : "max-w-[240px]"}`}>
        <Image
          src="/images/illustrations/empty-things.svg"
          alt=""
          width={480}
          height={360}
          className="h-auto w-full"
          priority={false}
        />
      </div>

      {title && (
        <h3 className="mt-5 font-display text-xl font-semibold text-[var(--c-text-strong)]">
          {title}
        </h3>
      )}
      <p className="mt-3 font-display text-base text-[var(--c-text-soft)]">
        {message}
      </p>

      {action && <div className="mt-6 flex justify-center">{action}</div>}
    </section>
  );
}
