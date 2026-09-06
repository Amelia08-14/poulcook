"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { animate } from "animejs";

/**
 * Effet "magnétique" : l'élément se déplace légèrement vers le curseur quand
 * il l'approche, puis revient en place avec un rebond élastique. Réservé aux
 * CTA principaux. Inactif sur écran tactile et si `prefers-reduced-motion`.
 */
export default function MagneticButton({
  children,
  className = "",
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * strength;
      const y = (e.clientY - (r.top + r.height / 2)) * strength;
      animate(el, { translateX: x, translateY: y, duration: 450, ease: "out(2)" });
    };
    const onLeave = () => {
      animate(el, { translateX: 0, translateY: 0, duration: 700, ease: "outElastic(1, .45)" });
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [strength]);

  return (
    <span ref={ref} className={`inline-flex ${className}`}>
      {children}
    </span>
  );
}
