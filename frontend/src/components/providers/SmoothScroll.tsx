"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { registerLenis } from "@/lib/smoothScroll";

/**
 * Défilement lissé (Lenis) sur tout le site — donne le rendu « expérience »
 * plutôt que « page web » demandé pour le hero au scroll.
 *
 * - Désactivé si `prefers-reduced-motion` (défilement natif).
 * - Pas de `anchors` Lenis : les liens `/menu#slug` et `/contact#pays` sont
 *   pilotés par leurs composants (filtre + `scrollToTarget`, cf. `@/lib/smoothScroll`).
 * - Un seul `requestAnimationFrame` : Lenis pilote sa propre boucle, les
 *   composants (HeroScroll…) lisent `getBoundingClientRect()` — pas de couplage.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    registerLenis(lenis);

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      registerLenis(null);
      lenis.destroy();
    };
  }, []);

  return null;
}
