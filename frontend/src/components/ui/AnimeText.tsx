"use client";

import { useEffect, useLayoutEffect, useRef, type ElementType } from "react";
import { animate, stagger } from "animejs";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Titre révélé mot à mot au scroll (anime.js) — chaque mot monte et se
 * défloute avec un léger décalage. Réservé aux grands titres (hero, h1 de
 * page). Le contenu reste lisible sans JS et si `prefers-reduced-motion`.
 */
export default function AnimeText({
  text,
  as: Tag = "h2",
  className = "",
  stagger: step = 55,
  delay = 0,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const words = text.split(" ");

  useIso(() => {
    const node = ref.current;
    if (!node) return;

    const targets = node.querySelectorAll<HTMLElement>(".anime-word");
    if (!targets.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    targets.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(0.85em)";
    });

    const reveal = () => {
      targets.forEach((el) => {
        el.style.opacity = "";
        el.style.transform = "";
      });
    };
    // Filet de sécurité : quoi qu'il arrive (RAF gelé, onglet en arrière-plan),
    // le titre redevient lisible.
    let safety = window.setTimeout(reveal, 2600);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        window.clearTimeout(safety);
        safety = window.setTimeout(reveal, 1600 + delay + targets.length * step);
        animate(targets, {
          opacity: [0, 1],
          translateY: ["0.85em", 0],
          duration: 850,
          delay: stagger(step, { start: delay }),
          ease: "out(3)",
          onComplete: () => {
            window.clearTimeout(safety);
            reveal();
          },
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      window.clearTimeout(safety);
    };
  }, [text, step, delay]);

  return (
    <Tag ref={ref as never} className={className}>
      {words.map((word, i) => (
        <span key={i}>
          <span className="anime-word">{word}</span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
