"use client";

import { useEffect, useRef, useState } from "react";
import { CursorIcon, NotAllowIcon, PointerIcon } from "@/components/icons";

const POINTER_QUERY = "(hover: hover) and (pointer: fine)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const INTERACTIVE_SELECTOR = [
  "a",
  "button",
  '[role="button"]',
  "summary",
  "select",
  "label",
  'input[type="checkbox"]',
  'input[type="radio"]',
  'input[type="range"]',
  '[data-cursor="pointer"]',
].join(",");
const TEXT_ENTRY_SELECTOR = [
  "textarea",
  '[contenteditable="true"]',
  'input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="file"]):not([type="color"]):not([type="image"])',
].join(",");

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const cursorVariantRef = useRef<"default" | "pointer" | "not-allowed">(
    "default",
  );
  const [cursorVariant, setCursorVariant] = useState<
    "default" | "pointer" | "not-allowed"
  >("default");

  useEffect(() => {
    if (typeof window === "undefined" || !cursorRef.current) return;

    const pointerMedia = window.matchMedia(POINTER_QUERY);
    const reducedMotionMedia = window.matchMedia(REDUCED_MOTION_QUERY);
    let cleanupListeners: (() => void) | null = null;
    let rafId: number | null = null;

    const setupCursor = () => {
      const shouldEnable = pointerMedia.matches && !reducedMotionMedia.matches;

      if (!shouldEnable) {
        document.documentElement.classList.remove("custom-cursor-enabled");
        if (cleanupListeners) {
          cleanupListeners();
          cleanupListeners = null;
        }
        return;
      }

      const cursorEl = cursorRef.current;
      const ringEl = ringRef.current;
      if (!cursorEl || !ringEl) return;

      document.documentElement.classList.add("custom-cursor-enabled");
      cursorEl.style.opacity = "0";
      cursorEl.style.transform = "translate3d(-50%, -50%, 0)";
      ringEl.style.opacity = "0";
      ringEl.style.transform = "translate3d(-50%, -50%, 0)";

      let targetX = window.innerWidth / 2;
      let targetY = window.innerHeight / 2;
      let ringX = targetX;
      let ringY = targetY;
      const lerp = (start: number, end: number, amt: number) =>
        start + (end - start) * amt;
      const tick = () => {
        ringX = lerp(ringX, targetX, 0.14);
        ringY = lerp(ringY, targetY, 0.14);
        ringEl.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate3d(-50%, -50%, 0)`;
        rafId = window.requestAnimationFrame(tick);
      };
      rafId = window.requestAnimationFrame(tick);

      const onMouseMove = (event: MouseEvent) => {
        targetX = event.clientX;
        targetY = event.clientY;
        const translate = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate3d(-50%, -50%, 0)`;
        cursorEl.style.transform = translate;

        const target = event.target as Element | null;
        const isTextEntry = !!target?.closest(TEXT_ENTRY_SELECTOR);
        if (isTextEntry) {
          cursorEl.style.opacity = "0";
          ringEl.style.opacity = "0";
          targetX = ringX;
          targetY = ringY;
          if (cursorVariantRef.current !== "default") {
            cursorVariantRef.current = "default";
            setCursorVariant("default");
          }
          return;
        }

        cursorEl.style.opacity = "1";
        ringEl.style.opacity = "1";
        const hoveredElement = target?.closest("*") as HTMLElement | null;
        const computedCursor = hoveredElement
          ? window.getComputedStyle(hoveredElement).cursor
          : "";
        const isNotAllowed = computedCursor.includes("not-allowed");
        const isPointer =
          computedCursor.includes("pointer") ||
          !!target?.closest(INTERACTIVE_SELECTOR);
        const isInteractive = isNotAllowed || isPointer;

        const nextVariant = isNotAllowed
          ? "not-allowed"
          : isPointer
            ? "pointer"
            : "default";
        if (cursorVariantRef.current !== nextVariant) {
          cursorVariantRef.current = nextVariant;
          setCursorVariant(nextVariant);
        }
      };

      const onMouseLeaveViewport = () => {
        cursorEl.style.opacity = "0";
        ringEl.style.opacity = "0";
      };

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("blur", onMouseLeaveViewport);
      document.addEventListener("mouseleave", onMouseLeaveViewport);

      cleanupListeners = () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("blur", onMouseLeaveViewport);
        document.removeEventListener("mouseleave", onMouseLeaveViewport);
        if (rafId) {
          window.cancelAnimationFrame(rafId);
          rafId = null;
        }
        cursorEl.style.opacity = "0";
        ringEl.style.opacity = "0";
        cursorVariantRef.current = "default";
        setCursorVariant("default");
      };
    };

    setupCursor();
    pointerMedia.addEventListener("change", setupCursor);
    reducedMotionMedia.addEventListener("change", setupCursor);

    return () => {
      pointerMedia.removeEventListener("change", setupCursor);
      reducedMotionMedia.removeEventListener("change", setupCursor);
      document.documentElement.classList.remove("custom-cursor-enabled");
      if (cleanupListeners) {
        cleanupListeners();
      }
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden />
      <div ref={cursorRef} className="custom-cursor" aria-hidden>
        <span
          className={`custom-cursor-glyph ${cursorVariant === "default" ? "is-active" : ""}`}
        >
          <CursorIcon size={16} className="custom-cursor-icon" />
        </span>
        <span
          className={`custom-cursor-glyph ${cursorVariant === "pointer" ? "is-active" : ""}`}
        >
          <PointerIcon size={16} className="custom-cursor-icon" />
        </span>
        <span
          className={`custom-cursor-glyph ${cursorVariant === "not-allowed" ? "is-active" : ""}`}
        >
          <NotAllowIcon size={16} className="custom-cursor-icon" />
        </span>
      </div>
    </>
  );
}
