"use client";

import { useEffect, useLayoutEffect, useRef, type ElementType, type ReactNode } from "react";
import { animate, stagger } from "animejs";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Révèle ses enfants directs en cascade quand le bloc entre à l'écran
 * (anime.js stagger). Le contenu reste visible sans JS et si
 * `prefers-reduced-motion`. Chaque enfant direct est une "carte" de la grille.
 */
export default function Stagger({
  children,
  as: Tag = "div",
  className = "",
  step = 80,
  y = 28,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  step?: number;
  y?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useIso(() => {
    const node = ref.current;
    if (!node) return;
    const items = Array.from(node.children) as HTMLElement[];
    if (!items.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    items.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = `translateY(${y}px)`;
    });

    const reveal = () => {
      items.forEach((el) => {
        el.style.opacity = "";
        el.style.transform = "";
      });
    };
    const safety = window.setTimeout(reveal, 1600);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        window.clearTimeout(safety);
        animate(items, {
          opacity: [0, 1],
          translateY: [y, 0],
          duration: 720,
          delay: stagger(step),
          ease: "out(3)",
          onComplete: reveal,
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      window.clearTimeout(safety);
    };
  }, [step, y]);

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}
