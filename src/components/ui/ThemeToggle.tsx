"use client";

import { ThemeModeIcon } from "@/components/icons";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ThemeToggle() {
  const { theme, toggleThemeFrom, isHydrated } = useTheme();
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

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    toggleThemeFrom({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={label}
      title={label}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-transparent transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
    >
      <ThemeModeIcon size={28} inverted={!isLight} />
    </button>
  );
}
