import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

// Configuration SEO avancée
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://rahim-ali.com'),
  title: {
    default: "Rahim ALI - Software Developer | Flutter, Django, Next.js",
    template: "%s | Rahim ALI"
  },
  description: "Software Developer specializing in Flutter, Django, Next.js, and Android (Kotlin). Building modern mobile and web applications with clean architecture. Available for freelance projects.",
  keywords: [
    "Software Developer",
    "Flutter Developer",
    "Django Developer",
    "Next.js Developer",
    "Kotlin Developer",
    "Mobile App Development",
    "Web Development",
    "Freelance Developer",
    "Full Stack Developer",
    "Rahim ALI",
    "React Developer",
    "TypeScript",
    "API Development",
    "UI/UX Design"
  ],
  authors: [{ name: "Rahim ALI", url: process.env.NEXT_PUBLIC_SITE_URL || "https://rahim-ali.com" }],
  creator: "Rahim ALI",
  publisher: "Rahim ALI",

  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["fr_FR"],
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://rahim-ali.com",
    title: "Rahim ALI - Software Developer | Flutter, Django, Next.js",
    description: "Software Developer specializing in Flutter, Django, Next.js, and Android (Kotlin). Building modern mobile and web applications.",
    siteName: "Rahim ALI Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rahim ALI - Software Developer Portfolio",
      }
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Rahim ALI - Software Developer",
    description: "Software Developer specializing in Flutter, Django, Next.js, and Android (Kotlin).",
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@rahimali",
    images: ["/og-image.jpg"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification (à ajouter après avoir configuré Google Search Console)
  // verification: {
  //   google: 'ton-code-verification-google',
  // },

  // Autres métadonnées
  category: 'technology',
  classification: 'Business',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        {/* <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}

        {/* Schema.org JSON-LD pour Google Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Rahim ALI",
              "url": "https://rahim-ali.com",
              "jobTitle": "Software Developer",
              "description": "Software Developer specializing in Flutter, Django, Next.js, and Android (Kotlin)",
              "email": process.env.NEXT_PUBLIC_EMAIL || "rahim100codeur@gmail.com",
              "sameAs": [
                "https://github.com/Rahim10020",
                "http://www.linkedin.com/in/rahim-ali-a6003226b"
              ],
              "knowsAbout": [
                "Flutter",
                "Django",
                "Next.js",
                "Kotlin",
                "React",
                "TypeScript",
                "Mobile Development",
                "Web Development"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="gradient-effect" />
            {children}
            <Analytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}