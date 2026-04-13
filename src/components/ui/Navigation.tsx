"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { gsap } from "gsap";

const sectionIds = ["about", "projects", "services", "contact"] as const;

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("about");
  const { t } = useLanguage();
  const lineRefs = useRef<Record<string, HTMLSpanElement | null>>({});
  const prevActiveRef = useRef<string | null>(null);
  const skipNextActiveAnimationRef = useRef(false);

  const canAnimate = useMemo(() => {
    if (typeof window === "undefined") return false;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return false;

    const pointerFine = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    return pointerFine && desktop;
  }, []);

  const BASE_W = 68;
  const ACTIVE_W = 124;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const animateLineToActive = (id: string) => {
    const el = lineRefs.current[id];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, { width: ACTIVE_W, duration: 0.22, ease: "power2.out" });
  };

  const animateLineToBase = (id: string) => {
    const el = lineRefs.current[id];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, { width: BASE_W, duration: 0.28, ease: "power2.out" });
  };

  useEffect(() => {
    // Keep visual state in sync with active section (especially after scroll)
    if (!canAnimate) {
      prevActiveRef.current = activeSection;
      return;
    }

    // Premier passage: set sans animation pour éviter un flash
    if (prevActiveRef.current === null) {
      for (const id of sectionIds) {
        const el = lineRefs.current[id];
        if (!el) continue;
        gsap.killTweensOf(el);
        gsap.set(el, { width: activeSection === id ? ACTIVE_W : BASE_W });
      }
      prevActiveRef.current = activeSection;
      return;
    }

    if (skipNextActiveAnimationRef.current) {
      for (const id of sectionIds) {
        const el = lineRefs.current[id];
        if (!el) continue;
        gsap.killTweensOf(el);
        gsap.set(el, { width: activeSection === id ? ACTIVE_W : BASE_W });
      }
      prevActiveRef.current = activeSection;
      skipNextActiveAnimationRef.current = false;
      return;
    }

    const prev = prevActiveRef.current;
    if (prev && prev !== activeSection) {
      animateLineToBase(prev);
    }
    animateLineToActive(activeSection);
    prevActiveRef.current = activeSection;
  }, [activeSection, canAnimate]);

  const scrollToSection = (id: string) => {
    skipNextActiveAnimationRef.current = true;
    setActiveSection(id);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sections = [
    { id: "about", label: t.nav.about },
    { id: "projects", label: t.nav.projects },
    { id: "services", label: t.nav.services },
    { id: "contact", label: t.nav.contact },
  ];

  const onEnter = (id: string) => {
    if (!canAnimate) return;
    const el = lineRefs.current[id];
    if (!el) return;
    if (activeSection === id) return;

    animateLineToActive(id);
  };

  const onLeave = (id: string) => {
    if (!canAnimate) return;
    const el = lineRefs.current[id];
    if (!el) return;
    if (activeSection === id) return;

    animateLineToBase(id);
  };

  return (
    <nav className="hidden lg:block mt-7 lg:mt-14">
      <ul className="">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className="group flex items-center hover:cursor-pointer gap-4 py-3"
              onPointerEnter={() => onEnter(section.id)}
              onPointerLeave={() => onLeave(section.id)}
            >
              <span
                ref={(el) => {
                  lineRefs.current[section.id] = el;
                }}
                className={`h-px ${activeSection === section.id ? "bg-[var(--c-text-primary)]" : "bg-[var(--c-bg-muted-hover)] group-hover:bg-[var(--c-text-primary)]"}`}
                style={{
                  width: activeSection === section.id ? ACTIVE_W : BASE_W,
                }}
              />
              <span
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                  activeSection === section.id
                    ? "text-[var(--c-text-primary)]"
                    : "text-[var(--c-text-muted)] group-hover:text-[var(--c-text-primary)]"
                }`}
              >
                {section.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
