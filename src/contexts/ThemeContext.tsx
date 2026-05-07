"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { THEME_MEDIA_QUERY, THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  toggleThemeFrom: (origin: { x: number; y: number }) => void;
  isHydrated: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const THEME_TRANSITION_MS = 520;

type ViewTransition = {
  ready: Promise<void>;
};

type DocumentWithViewTransition = Document & {
  startViewTransition?: (update: () => void) => ViewTransition;
};

function getSystemTheme(): Theme {
  return window.matchMedia(THEME_MEDIA_QUERY).matches ? "dark" : "light";
}

function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark";
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.style.colorScheme = theme;
}

function getRevealRadius(origin: { x: number; y: number }) {
  const maxX = Math.max(origin.x, window.innerWidth - origin.x);
  const maxY = Math.max(origin.y, window.innerHeight - origin.y);
  return Math.hypot(maxX, maxY);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [isHydrated, setIsHydrated] = useState(false);

  const setTheme = useCallback((nextTheme: Theme) => {
    applyTheme(nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    setThemeState(nextTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  const toggleThemeFrom = useCallback(
    (origin: { x: number; y: number }) => {
      const nextTheme = theme === "dark" ? "light" : "dark";
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (reduceMotion.matches) {
        setTheme(nextTheme);
        return;
      }

      const root = document.documentElement;
      const radius = getRevealRadius(origin);
      root.style.setProperty("--theme-origin-x", `${origin.x}px`);
      root.style.setProperty("--theme-origin-y", `${origin.y}px`);
      root.style.setProperty("--theme-reveal-radius", `${radius}px`);

      const docWithTransition = document as DocumentWithViewTransition;
      if (typeof docWithTransition.startViewTransition === "function") {
        docWithTransition.startViewTransition(() => {
          setTheme(nextTheme);
        });
        return;
      }

      root.classList.remove("theme-fallback-transition");
      void root.offsetWidth;
      setTheme(nextTheme);
      root.classList.add("theme-fallback-transition");

      window.setTimeout(() => {
        root.classList.remove("theme-fallback-transition");
      }, THEME_TRANSITION_MS);
    },
    [theme, setTheme],
  );

  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const rootTheme = document.documentElement.getAttribute("data-theme");

    const resolvedTheme: Theme = isTheme(storedTheme)
      ? storedTheme
      : isTheme(rootTheme)
        ? rootTheme
        : getSystemTheme();

    applyTheme(resolvedTheme);
    setThemeState(resolvedTheme);
    setIsHydrated(true);

    const media = window.matchMedia(THEME_MEDIA_QUERY);
    const handleSystemThemeChange = () => {
      const preference = localStorage.getItem(THEME_STORAGE_KEY);
      if (isTheme(preference)) return;

      const nextTheme = media.matches ? "dark" : "light";
      applyTheme(nextTheme);
      setThemeState(nextTheme);
    };

    media.addEventListener("change", handleSystemThemeChange);
    return () => media.removeEventListener("change", handleSystemThemeChange);
  }, []);

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme, toggleThemeFrom, isHydrated }),
    [theme, setTheme, toggleTheme, toggleThemeFrom, isHydrated],
  );

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
