"use client";

import { MoonIcon, SunIcon } from "@/components/icons";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ThemeToggle() {
  const { theme, toggleTheme, isHydrated } = useTheme();
  const { t } = useLanguage();

  const isLight = theme === "light";
  const label = isLight ? t.theme.switchToDark : t.theme.switchToLight;

  if (!isHydrated) {
    return (
      <span
        aria-hidden
        className="inline-flex h-10 w-10 shrink-0 rounded-full border border-transparent"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--c-border-faint)] bg-transparent text-[var(--c-text-primary)] transition-colors hover:bg-[var(--c-bg-muted-soft)] hover:text-[var(--c-text-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
    >
      {isLight ? <MoonIcon size={18} /> : <SunIcon size={18} />}
    </button>
  );
}
