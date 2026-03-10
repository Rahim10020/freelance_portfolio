"use client";

import { useEffect, useRef, useState } from "react";
import {
  accentThemes,
  type AccentTheme,
  useTheme,
} from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

const accentPreviewColors: Record<AccentTheme, string> = {
  clay: "#e07a5f",
  sage: "#81b29a",
  red: "#c1121f",
  blue: "#0496ff",
  ginger: "#dbd56e",
  sunset: "#eb5e28",
};

export default function ControlsPanel() {
  const { accentTheme, setAccentTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [isAccentPickerOpen, setIsAccentPickerOpen] = useState(false);
  const accentPickerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!accentPickerRef.current?.contains(event.target as Node)) {
        setIsAccentPickerOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsAccentPickerOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Language Switcher */}
      <div className="flex items-center rounded-full border border-slate-700/50 bg-slate-800/90 shadow-sm backdrop-blur-sm">
        <button
          onClick={() => setLanguage("en")}
          className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
            language === "en"
              ? "bg-[rgb(var(--accent-rgb)/0.2)] text-[var(--text-accent)]"
              : "text-slate-400 hover:text-slate-200 hover:cursor-pointer"
          }`}
          aria-label="Switch to English"
        >
          EN
        </button>
        <button
          onClick={() => setLanguage("fr")}
          className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
            language === "fr"
              ? "bg-[rgb(var(--accent-rgb)/0.2)] text-[var(--text-accent)]"
              : "text-slate-400 hover:text-slate-200 hover:cursor-pointer"
          }`}
          aria-label="Switch to French"
        >
          FR
        </button>
      </div>

      {/* Accent Color Picker */}
      <div ref={accentPickerRef} className="relative">
        <button
          type="button"
          onClick={() => setIsAccentPickerOpen((prev) => !prev)}
          className="flex items-center ml-6 justify-center rounded-full shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:cursor-pointer"
          aria-haspopup="dialog"
          aria-expanded={isAccentPickerOpen}
          aria-label="Open color picker"
          title="Primary color"
        >
          <span
            className="h-6 w-6 rounded-full border-2 border-slate-900"
            style={{ backgroundColor: "rgb(var(--accent-rgb))" }}
          />
        </button>

        {isAccentPickerOpen && (
          <div
            role="dialog"
            aria-label="Choose primary color"
            className="absolute top-12 right-0 z-50 flex items-center gap-1 rounded-full bg-slate-800/95 backdrop-blur-sm border border-slate-700/50 p-1.5 shadow-lg"
          >
            {accentThemes.map((accent) => (
              <button
                key={accent}
                type="button"
                onClick={() => {
                  setAccentTheme(accent);
                  setIsAccentPickerOpen(false);
                }}
                className={`h-7 w-7 rounded-full border-2 transition-all duration-300 ${
                  accentTheme === accent
                    ? "scale-105 border-slate-900 shadow-md"
                    : "border-transparent opacity-75 hover:opacity-100 hover:cursor-pointer"
                }`}
                style={{ backgroundColor: accentPreviewColors[accent] }}
                aria-label={`Set ${accent} as primary color`}
                title={accent}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
