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
  isHydrated: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

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
    () => ({ theme, setTheme, toggleTheme, isHydrated }),
    [theme, setTheme, toggleTheme, isHydrated],
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
