import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased bg-slate-900 text-slate-400 selection:bg-teal-300 selection:text-teal-900`}
      >
        <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
          style={{
            background: 'radial-gradient(600px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(29, 78, 216, 0.15), transparent 80%)'
          }}
        />
        {children}
      </body>
    </html>
  );
}