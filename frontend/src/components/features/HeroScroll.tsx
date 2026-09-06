"use client";

import { useEffect, useRef, useState } from "react";

const SCROLL_VH = 340;

type LabelDef = { text: string; from: number; to: number; persist?: boolean };

type Variant = {
  count: number;
  dir: string;
  prefix: string;
  poster: string;
  labels: LabelDef[];
};

// Deux montages différents (fournis par le client) : desktop 16:9 (10 s) et
// mobile 9:16 (~10 s, ouvre sur le grill). Repères de ville calés sur chacun.
const VARIANTS: Record<"desktop" | "mobile", Variant> = {
  desktop: {
    count: 151,
    dir: "/videos/hero/frames-desktop",
    prefix: "d",
    poster: "/videos/hero-poster-desktop.webp",
    labels: [
      { text: "Paris", from: 0.02, to: 0.28 },
      { text: "Casablanca", from: 0.58, to: 0.73 },
      { text: "Alger", from: 0.85, to: 0.945 },
      { text: "Partout dans le monde", from: 0.95, to: 1, persist: true },
    ],
  },
  mobile: {
    count: 117,
    dir: "/videos/hero/frames-mobile",
    prefix: "m",
    poster: "/videos/hero-poster-mobile.webp",
    labels: [
      { text: "Paris", from: 0.16, to: 0.4 },
      { text: "Casablanca", from: 0.42, to: 0.56 },
      { text: "Alger", from: 0.74, to: 0.87 },
      { text: "Partout dans le monde", from: 0.885, to: 1, persist: true },
    ],
  },
};

function labelOpacity(p: number, from: number, to: number, persist?: boolean, fade = 0.035) {
  if (p < from) return 0;
  if (p < from + fade) return (p - from) / fade;
  if (persist || p <= to - fade) return 1;
  if (p <= to) return 1 - (p - (to - fade)) / fade;
  return 0;
}

/**
 * Hero d'accueil — le film de marque Poulcook (Paris → Casablanca → Alger →
 * partout dans le monde) rejoué **au défilement**.
 *
 * - Deux jeux d'images (desktop / mobile) selon le viewport ; seul le bon se
 *   charge. Rendu image par image sur `<canvas>`, avec **interpolation** vers
 *   l'image cible → scrub fluide même sans à-coups de molette.
 * - Poster `<picture>` art-directionné = LCP immédiat, jamais d'écran noir.
 *   Le canvas ne passe opaque qu'au premier rendu réussi.
 * - Noms de villes en fondu, en haut à gauche, calés sur la progression.
 * - Sortie douce : le plan se réduit / s'estompe légèrement en fin de scroll.
 * - `prefers-reduced-motion` → poster fixe plein écran, pas de scrub.
 * - Boucle `requestAnimationFrame` qui s'endort quand tout est stabilisé.
 */
export default function HeroScroll() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelTextRef = useRef<HTMLSpanElement>(null);
  const labelRuleRef = useRef<HTMLSpanElement>(null);
  const hintRef = useRef<HTMLSpanElement>(null);
  const [scrub, setScrub] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = requestAnimationFrame(() => setScrub(false));
      return () => cancelAnimationFrame(id);
    }

    // `innerWidth` peut être 0 si l'onglet est masqué au montage — on suppose
    // desktop dans ce cas (cas courant ; le poster <picture> reste art-directionné).
    const iw = window.innerWidth || document.documentElement.clientWidth;
    const conf = VARIANTS[iw > 0 && iw < 768 ? "mobile" : "desktop"];

    let cancelled = false;
    const images: HTMLImageElement[] = new Array(conf.count);
    const loaded = new Array<boolean>(conf.count).fill(false);
    let bg = "#241a1a";
    let target = 0;
    let rendered = 0;
    let drawn = -1;
    let raf = 0;
    let canvasReady = false;

    const frameSrc = (i: number) => `${conf.dir}/${conf.prefix}_${String(i + 1).padStart(4, "0")}.webp`;

    function loadFrame(i: number) {
      return new Promise<void>((resolve) => {
        const img = new window.Image();
        img.onload = () => {
          loaded[i] = true;
          resolve();
        };
        img.onerror = () => resolve();
        img.src = frameSrc(i);
        images[i] = img;
      });
    }

    function nearestLoaded(index: number) {
      if (loaded[index]) return index;
      for (let d = 1; d < conf.count; d++) {
        if (index - d >= 0 && loaded[index - d]) return index - d;
        if (index + d < conf.count && loaded[index + d]) return index + d;
      }
      return -1;
    }

    function sampleBg(img: HTMLImageElement) {
      try {
        const c = document.createElement("canvas");
        c.width = 8;
        c.height = 8;
        const x = c.getContext("2d");
        if (!x) return;
        x.drawImage(img, 0, 0, 8, 8);
        const d = x.getImageData(0, 0, 8, 8).data;
        let r = 0;
        let g = 0;
        let b = 0;
        for (let i = 0; i < d.length; i += 4) {
          r += d[i];
          g += d[i + 1];
          b += d[i + 2];
        }
        const n = d.length / 4;
        bg = `rgb(${Math.round(r / n)}, ${Math.round(g / n)}, ${Math.round(b / n)})`;
      } catch {
        /* canvas tainted — garder la couleur précédente */
      }
    }

    function drawFrame(targetIndex: number) {
      const canvas = canvasRef.current;
      if (!canvas || !canvas.clientWidth) return;
      const index = nearestLoaded(targetIndex);
      if (index < 0) return;
      const img = images[index];
      if (!img || !img.complete || img.naturalWidth === 0) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.round(canvas.clientWidth * dpr);
      const h = Math.round(canvas.clientHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      if (index % 24 === 0) sampleBg(img);
      const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
      const dw = img.naturalWidth * scale;
      const dh = img.naturalHeight * scale;
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);
      ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
      canvasReady = true;
    }

    function updateLabel(p: number) {
      const text = labelTextRef.current;
      const rule = labelRuleRef.current;
      if (!text || !rule) return;
      const idx = conf.labels.findIndex((l) => labelOpacity(p, l.from, l.to, l.persist) > 0);
      if (text.dataset.i !== String(idx)) {
        text.dataset.i = String(idx);
        text.textContent = idx >= 0 ? conf.labels[idx].text : "";
      }
      const l = idx >= 0 ? conf.labels[idx] : null;
      const t = l ? labelOpacity(p, l.from, l.to, l.persist) : 0;
      text.style.opacity = String(t);
      text.style.transform = `translateY(${(1 - t) * 16}px) scale(${0.92 + t * 0.08})`;
      rule.style.transform = `scaleX(${t})`;
    }

    function updateExit(p: number) {
      const pin = pinRef.current;
      if (!pin) return;
      const e = Math.max(0, Math.min(1, (p - 0.93) / 0.07));
      pin.style.transform = `scale(${1 - e * 0.05})`;
      pin.style.opacity = String(1 - e * 0.35);
    }

    function progress(rect: DOMRect) {
      const totalH = rect.height - window.innerHeight;
      if (totalH <= 0) return 0;
      return Math.min(1, Math.max(0, -rect.top / totalH));
    }

    function tick() {
      raf = 0;
      const wrap = wrapperRef.current;
      if (!wrap) return;
      const rect = wrap.getBoundingClientRect();
      const visible = rect.bottom > -120 && rect.top < window.innerHeight + 120;
      const p = progress(rect);
      target = p * (conf.count - 1);

      const done = Math.abs(target - rendered) < 0.4;
      rendered = done ? target : rendered + (target - rendered) * 0.16;

      const idx = Math.max(0, Math.min(conf.count - 1, Math.round(rendered)));
      if (idx !== drawn) {
        drawn = idx;
        drawFrame(idx);
      }
      // Tout en haut, on garde le poster net (meilleure qualité que la vidéo) ;
      // le canvas ne prend le relais qu'au premier geste de défilement.
      const canvas = canvasRef.current;
      if (canvas) canvas.style.opacity = canvasReady && p > 0.006 ? "1" : "0";

      if (visible) {
        updateLabel(p);
        updateExit(p);
        if (hintRef.current) hintRef.current.style.opacity = String(Math.max(0, 1 - p * 7));
      }
      if (!done) schedule();
    }

    function schedule() {
      if (!raf) raf = requestAnimationFrame(tick);
    }

    (async () => {
      await Promise.all([0, 1, 2, 3, 4, 5].map(loadFrame));
      if (cancelled) return;
      drawFrame(0);
      schedule();
      for (let i = 6; i < conf.count; i += 10) {
        const batch: Promise<void>[] = [];
        for (let j = i; j < Math.min(i + 10, conf.count); j++) batch.push(loadFrame(j));
        await Promise.all(batch);
        if (cancelled) return;
        drawFrame(drawn < 0 ? 0 : drawn);
      }
    })();

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();

    return () => {
      cancelled = true;
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <div
      id="hero"
      ref={wrapperRef}
      className="relative bg-night"
      style={{ height: scrub === false ? "100svh" : `${SCROLL_VH}vh` }}
    >
      <div
        ref={pinRef}
        className="sticky top-0 h-[100svh] origin-center overflow-hidden will-change-transform"
      >
        <picture>
          <source media="(max-width: 767px)" srcSet="/videos/hero-poster-mobile.webp" />
          {/* Art direction : next/image ne gère pas <picture> ; <img> natif = LCP fiable. */}
          <img
            src="/videos/hero-poster-desktop.webp"
            alt="Le film de marque Poulcook : de Paris à Casablanca et Alger"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </picture>

        {scrub && (
          <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-500"
          />
        )}

        {/* Voile en haut : lisibilité du header par-dessus le film. */}
        <div aria-hidden className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/55 via-black/20 to-transparent" />

        {scrub && (
          <div aria-hidden className="pointer-events-none absolute left-5 top-24 sm:left-10 sm:top-32">
            <span
              ref={labelTextRef}
              style={{ opacity: 0 }}
              className="block font-display text-3xl leading-none tracking-tight text-cream [text-shadow:0_2px_20px_rgba(0,0,0,0.6)] sm:text-4xl lg:text-5xl"
            />
            <span
              ref={labelRuleRef}
              style={{ transform: "scaleX(0)", transformOrigin: "left" }}
              className="mt-3 block h-1 w-16 rounded-full bg-coral"
            />
          </div>
        )}

        {scrub && (
          <span
            ref={hintRef}
            aria-hidden
            className="pointer-events-none absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5 text-cream/70 transition-opacity"
          >
            <span className="text-[0.65rem] uppercase tracking-[0.22em]">Défilez</span>
            <span className="h-8 w-px animate-pulse bg-cream/45" />
          </span>
        )}

        <span className="sr-only">Paris, Casablanca, Alger, partout dans le monde.</span>
      </div>
    </div>
  );
}
