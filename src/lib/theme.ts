export const THEME_STORAGE_KEY = "portfolio-theme";
export const THEME_MEDIA_QUERY = "(prefers-color-scheme: dark)";

export type Theme = "light" | "dark";

export function getThemeInitScript() {
  return `(() => {
    try {
      const stored = localStorage.getItem("${THEME_STORAGE_KEY}");
      const isStoredTheme = stored === "light" || stored === "dark";
      const prefersDark = window.matchMedia("${THEME_MEDIA_QUERY}").matches;
      const theme = isStoredTheme ? stored : prefersDark ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", theme);
      document.documentElement.style.colorScheme = theme;
    } catch {
      document.documentElement.setAttribute("data-theme", "dark");
      document.documentElement.style.colorScheme = "dark";
    }
  })();`;
}
