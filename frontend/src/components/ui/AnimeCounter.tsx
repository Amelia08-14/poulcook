"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";

/**
 * Compteur qui s'incrémente jusqu'à sa valeur réelle quand il entre à
 * l'écran (anime.js). Uniquement sur des données réelles (chiffres
 * franchise), jamais une décoration.
 */
export default function AnimeCounter({ value, duration = 1600 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = requestAnimationFrame(() => setDisplay(value));
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const state = { n: 0 };
        animate(state, {
          n: value,
          duration,
          ease: "out(4)",
          onUpdate: () => setDisplay(Math.round(state.n)),
          onComplete: () => setDisplay(value),
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  );
}
