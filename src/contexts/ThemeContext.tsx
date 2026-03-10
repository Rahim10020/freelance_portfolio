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
