import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ControlsPanel from "@/components/ui/ControlsPanel";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rahim ALI - Software Developer",
  description: "Software Developer specializing in Flutter, Django, Next.js, and Android (Kotlin). Building modern mobile and web applications with clean architecture.",
  keywords: ["Software Developer", "Flutter", "Django", "Next.js", "Kotlin", "Web Development", "Mobile Development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <ControlsPanel />
            <div className="gradient-effect" />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}