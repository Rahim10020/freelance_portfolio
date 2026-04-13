import type { ReactNode } from "react";

type TldrCalloutProps = {
  label: string;
  children: ReactNode;
};

export default function TldrCallout({ label, children }: TldrCalloutProps) {
  return (
    <article className="relative overflow-hidden border-l-4 border-[var(--text-accent)] bg-[var(--c-bg-callout)] px-4 py-4 md:px-6">
      <div className="flex items-start gap-3">
        <div className="w-full">
          <p className="text-xs uppercase font-display tracking-wide text-[var(--c-label-warning-soft)]">
            {label}
          </p>
          <div className="mt-1">{children}</div>
        </div>
      </div>
    </article>
  );
}
