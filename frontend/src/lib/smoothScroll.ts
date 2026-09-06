import type Lenis from "lenis";

let instance: Lenis | null = null;

export function registerLenis(l: Lenis | null) {
  instance = l;
}

/**
 * Défile jusqu'à une cible en passant par Lenis quand il est actif, sinon
 * `scrollIntoView` natif. À utiliser partout où on ferait un scroll
 * programmatique « smooth » (filtres de la carte, deep-links…).
 */
export function scrollToTarget(target: Element | string, offset = -72) {
  if (instance) {
    instance.scrollTo(target as HTMLElement | string, { offset });
    return;
  }
  const el = typeof target === "string" ? document.querySelector(target) : target;
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}
