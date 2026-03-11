"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type AccentTheme =
  | "clay"
  | "sage"
  | "red"
  | "blue"
  | "ginger"
  | "sunset";

export const accentThemes: AccentTheme[] = [
  "clay",
  "sage",
  "red",
  "blue",
  "ginger",
  "sunset",
];

interface ThemeContextType {
  accentTheme: AccentTheme;
  setAccentTheme: (accent: AccentTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const accentBackgroundRgb: Record<AccentTheme, [number, number, number]> = {
  clay: [202, 110, 86],
  sage: [116, 160, 139],
  red: [174, 16, 28],
  blue: [4, 135, 230],
  ginger: [197, 192, 98],
  sunset: [212, 84, 36],
};

const siteBackgroundRgb: [number, number, number] = [19, 22, 27];
const whiteRgb: [number, number, number] = [255, 255, 255];

function toLinearChannel(value: number) {
  const s = value / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
}

function getLuminance([r, g, b]: [number, number, number]) {
  const rl = toLinearChannel(r);
  const gl = toLinearChannel(g);
  const bl = toLinearChannel(b);
  return 0.2126 * rl + 0.7152 * gl + 0.0722 * bl;
}

function getContrastRatio(a: [number, number, number], b: [number, number, number]) {
  const la = getLuminance(a);
  const lb = getLuminance(b);
  const lighter = Math.max(la, lb);
  const darker = Math.min(la, lb);
  return (lighter + 0.05) / (darker + 0.05);
}

function getInitialAccentTheme(): AccentTheme {
  if (typeof window === "undefined") {
    return "clay";
  }

  const savedAccentTheme = localStorage.getItem("accentTheme");
  if (
    savedAccentTheme &&
    accentThemes.includes(savedAccentTheme as AccentTheme)
  ) {
    return savedAccentTheme as AccentTheme;
  }

  return "clay";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [accentTheme, setAccentTheme] = useState<AccentTheme>(
    getInitialAccentTheme,
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;

    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add("dark");
    root.style.colorScheme = "dark";
  }, [mounted]);

  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;

    const root = document.documentElement;
    root.setAttribute("data-accent", accentTheme);

    const accentBg = accentBackgroundRgb[accentTheme];
    const contrastWithWhite = getContrastRatio(accentBg, whiteRgb);
    const contrastWithSiteBackground = getContrastRatio(accentBg, siteBackgroundRgb);

    // Prefer white text on primary backgrounds, but switch to site background color
    // when contrast is not sufficient.
    const onPrimaryText = contrastWithWhite >= 4.5 || contrastWithWhite >= contrastWithSiteBackground
      ? "#ffffff"
      : "var(--background)";

    root.style.setProperty("--on-primary-text", onPrimaryText);
    localStorage.setItem("accentTheme", accentTheme);
  }, [accentTheme, mounted]);

  const value = {
    accentTheme,
    setAccentTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
