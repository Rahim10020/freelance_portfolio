"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-24 pb-16">
      <p className="text-sm text-[var(--c-text-muted)]">
        {t.footer.builtWith}{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[var(--c-text-secondary)] hover:text-[var(--text-accent)] transition-colors"
        >
          Next.js
        </a>{" "}
        {t.footer.and}{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[var(--c-text-secondary)] hover:text-[var(--text-accent)] transition-colors"
        >
          Tailwind CSS
        </a>
        . {t.footer.inspired}{" "}
        <a
          href="https://brittanychiang.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[var(--c-text-secondary)] hover:text-[var(--text-accent)] transition-colors"
        >
          Brittany Chiang
        </a>
        .
      </p>
    </footer>
  );
}
