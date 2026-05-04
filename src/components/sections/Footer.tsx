"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-24 pb-16">
      <p className="text-sm text-[var(--c-text-muted)]">
        {t.footer.copyright} ·{" "}
        <a
          href="https://twocoderz-team.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[var(--c-text-secondary)] hover:text-[var(--text-accent)] transition-colors"
        >
          {t.footer.companyLabel}
        </a>
      </p>
    </footer>
  );
}
