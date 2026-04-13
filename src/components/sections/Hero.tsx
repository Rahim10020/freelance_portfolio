"use client";

import { personalInfo } from "@/lib/data";
import Navigation from "../ui/Navigation";
import SocialLinks from "../ui/SocialLinks";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedLetters from "../ui/AnimatedLetters";
import ThemeToggle from "../ui/ThemeToggle";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <AnimatedLetters
          as="h1"
          text={personalInfo.name}
          className="font-display text-4xl font-black tracking-tight text-[var(--c-text-primary)] sm:text-5xl"
        />
        <h2 className="font-display mt-3 text-lg font-medium tracking-tight text-[var(--c-text-primary)] sm:text-xl">
          {t.hero.title}
        </h2>
        <p className="text-body font-display mt-4 max-w-xs text-[var(--c-text-secondary)]">
          {t.hero.bio}
        </p>
        <Navigation />
      </div>
      <div className="mt-8 flex flex-col gap-6 md:gap-9 md:flex-row lg:mt-0 lg:items-center">
        <SocialLinks />
        <ThemeToggle />
      </div>
    </header>
  );
}
