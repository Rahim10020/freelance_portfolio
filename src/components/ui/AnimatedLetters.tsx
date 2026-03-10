"use client";

import { useEffect, useMemo, useRef } from "react";
import type { JSX } from "react";
import { gsap } from "gsap";

type AnimatedLettersProps = {
  text: string;
  as?: "h1" | "span";
  className?: string;
  hoverTiltDeg?: number;
};

export default function AnimatedLetters({
  text,
  as = "span",
  className,
  hoverTiltDeg = 14,
}: AnimatedLettersProps) {
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const canAnimateRef = useRef(false);

  const Component: keyof JSX.IntrinsicElements = as;

  const characters = Array.from(text);
  lettersRef.current = [];

  const canAnimate = useMemo(() => {
    if (typeof window === "undefined") return false;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;

    const pointerFine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    return pointerFine && desktop;
  }, []);

  useEffect(() => {
    canAnimateRef.current = canAnimate;

    return () => {
      canAnimateRef.current = false;
      gsap.killTweensOf(lettersRef.current);
      gsap.set(lettersRef.current, { clearProps: "all" });
    };
  }, [canAnimate]);

  const animateIn = (index: number) => {
    if (!canAnimateRef.current) return;
    const el = lettersRef.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.set(el, { transformOrigin: "50% 85%", willChange: "transform,color" });

    const tl = gsap.timeline();
    tl.to(el, { color: "var(--text-accent)", duration: 0.12, ease: "power1.out" }, 0);
    tl.to(el, { y: -4, rotateZ: -hoverTiltDeg, duration: 0.12, ease: "power2.out" }, 0)
      .to(el, { y: 0, rotateZ: hoverTiltDeg * 0.75, duration: 0.16, ease: "power2.out" })
      .to(el, { rotateZ: -hoverTiltDeg * 0.4, duration: 0.14, ease: "power2.out" })
      .to(el, { rotateZ: 0, duration: 0.22, ease: "elastic.out(1, 0.45)" });
  };

  const animateOut = (index: number) => {
    if (!canAnimateRef.current) return;
    const el = lettersRef.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, {
      y: 0,
      rotateZ: 0,
      color: "inherit",
      duration: 0.25,
      ease: "power2.out",
      clearProps: "willChange",
    });
  };

  return (
    <Component aria-label={text} className={className}>
      {characters.map((char, index) => (
        <span
          key={`${char}-${index}`}
          ref={(el) => {
            if (el) lettersRef.current[index] = el;
          }}
          aria-hidden="true"
          className={char === " " ? "inline-block pointer-events-none" : "inline-block"}
          onPointerEnter={() => animateIn(index)}
          onPointerLeave={() => animateOut(index)}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Component>
  );
}
