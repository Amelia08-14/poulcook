"use client";

import { useEffect, useLayoutEffect, useRef, type ReactNode } from "react";
import { animate } from "animejs";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Transition d'entrée jouée à chaque navigation (template.tsx => remonté à
 * chaque route) : le contenu monte et se révèle, une ligne "braise" balaie le
 * haut de l'écran. Respecte `prefers-reduced-motion`.
 */
export default function Template({ children }: { children: ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const sweepRef = useRef<HTMLDivElement>(null);

  useIso(() => {
    const content = contentRef.current;
    const sweep = sweepRef.current;
    if (!content) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      content.style.opacity = "1";
      return;
    }

    // Fondu seul (pas de transform sur ce conteneur : casserait les
    // `position: sticky` des pages, ex. le film pinné de l'accueil).
    content.style.opacity = "0";
    let safety = 0;
    const done = () => {
      content.style.opacity = "";
      window.clearTimeout(safety);
    };
    safety = window.setTimeout(done, 1200);
    animate(content, {
      opacity: [0, 1],
      duration: 500,
      ease: "out(2)",
      onComplete: done,
    });

    if (sweep) {
      animate(sweep, {
        scaleX: [0, 1, 1],
        transformOrigin: ["0% 50%", "0% 50%", "100% 50%"],
        opacity: [1, 1, 0],
        duration: 680,
        ease: "inOut(3)",
      });
    }

    return () => window.clearTimeout(safety);
  }, []);

  return (
    <>
      <div
        ref={sweepRef}
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[3px] origin-left"
        style={{ background: "var(--grad-ember)", transform: "scaleX(0)" }}
      />
      <div ref={contentRef}>{children}</div>
    </>
  );
}
