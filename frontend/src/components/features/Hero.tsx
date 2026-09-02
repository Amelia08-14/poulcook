"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

const FRAME_COUNT = 226;
const SCROLL_VH = 340;

/**
 * Fenêtres (fraction de progression du scroll) où afficher un nom de ville —
 * volontairement plus larges que le plan exact qui leur correspond, pour
 * laisser le temps de les lire pendant le scroll. `persist: true` pour la
 * dernière étape : elle reste affichée jusqu'à la fin du hero.
 */
const LOCATION_LABELS = [
  { text: "Paris", from: 0.015, to: 0.24 },
  { text: "Casablanca", from: 0.4, to: 0.66 },
  { text: "Alger", from: 0.71, to: 0.835 },
  { text: "Partout dans le monde", from: 0.855, to: 1, persist: true },
];

function frameSrc(index: number) {
  return `/videos/hero/frames/frame_${String(index + 1).padStart(4, "0")}.webp`;
}

function labelOpacity(progress: number, from: number, to: number, persist?: boolean, fade = 0.03) {
  if (progress < from) return 0;
  if (progress < from + fade) return (progress - from) / fade;
  if (persist || progress <= to - fade) return 1;
  if (progress <= to) return 1 - (progress - (to - fade)) / fade;
  return 0;
}

/**
 * Le hero est le film qui défile, sans texte permanent dessus (pour ne pas
 * l'étouffer) — seuls les noms de ville apparaissent, brièvement, au
 * moment exact où le récit y arrive.
 */
export default function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelTextRef = useRef<HTMLSpanElement>(null);
  const labelRuleRef = useRef<HTMLSpanElement>(null);
  const [canScrub, setCanScrub] = useState<boolean | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setCanScrub(!reduceMotion);
    if (reduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    let cancelled = false;
    const images: HTMLImageElement[] = new Array(FRAME_COUNT);
    let currentFrame = -1;
    let currentLabel = -1;

    function loadFrame(i: number) {
      return new Promise<void>((resolve) => {
        const img = new window.Image();
        img.onload = () => resolve();
        img.onerror = () => resolve();
        img.src = frameSrc(i);
        images[i] = img;
      });
    }

    function drawFrame(index: number) {
      const canvas = canvasRef.current;
      const img = images[index];
      if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const cw = canvas.clientWidth;
      const ch = canvas.clientHeight;
      const targetW = Math.round(cw * dpr);
      const targetH = Math.round(ch * dpr);
      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
      }

      const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
      const dw = img.naturalWidth * scale;
      const dh = img.naturalHeight * scale;
      ctx.drawImage(img, (canvas.width - dw) / 2, (canvas.height - dh) / 2, dw, dh);
    }

    function updateLabel(progress: number) {
      const text = labelTextRef.current;
      const rule = labelRuleRef.current;
      if (!text || !rule) return;

      const activeIndex = LOCATION_LABELS.findIndex(
        (label) => labelOpacity(progress, label.from, label.to, label.persist) > 0
      );

      if (activeIndex !== currentLabel) {
        currentLabel = activeIndex;
        text.textContent = activeIndex >= 0 ? LOCATION_LABELS[activeIndex].text : "";
      }

      const t = activeIndex >= 0 ? labelOpacity(progress, LOCATION_LABELS[activeIndex].from, LOCATION_LABELS[activeIndex].to, LOCATION_LABELS[activeIndex].persist) : 0;
      text.style.opacity = String(t);
      text.style.transform = `translateY(${(1 - t) * 14}px) scale(${0.92 + t * 0.08})`;
      rule.style.transform = `scaleX(${t})`;
    }

    (async () => {
      await Promise.all([0, 1, 2, 3].map(loadFrame));
      if (cancelled) return;
      drawFrame(0);

      for (let i = 4; i < FRAME_COUNT; i += 15) {
        const batch = [];
        for (let j = i; j < Math.min(i + 15, FRAME_COUNT); j++) batch.push(loadFrame(j));
        await Promise.all(batch);
        if (cancelled) return;
      }
    })();

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    updateLabel(0);

    const trigger = ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const idx = Math.min(FRAME_COUNT - 1, Math.floor(self.progress * (FRAME_COUNT - 1)));
        if (idx !== currentFrame) {
          currentFrame = idx;
          drawFrame(idx);
        }
        updateLabel(self.progress);
      },
    });

    const onResize = () => drawFrame(currentFrame);
    window.addEventListener("resize", onResize);

    return () => {
      cancelled = true;
      trigger.kill();
      window.removeEventListener("resize", onResize);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return (
    <div id="hero" ref={wrapperRef} style={{ height: canScrub === false ? "100dvh" : `${SCROLL_VH}vh` }} className="relative bg-night">
      <div className="sticky top-0 h-[100dvh] overflow-hidden">
        {/* Premier rendu / secours JS coupé : l'image de la scène d'ouverture (Paris). */}
        <Image src="/videos/hero/frames/frame_0001.webp" alt="" fill priority sizes="100vw" className="object-cover" />
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-night/40 via-transparent to-night/25" />

        {canScrub !== false && (
          <div className="pointer-events-none absolute left-6 top-28 sm:left-10 sm:top-32">
            <span
              ref={labelTextRef}
              style={{ opacity: 0 }}
              className="block font-display text-3xl tracking-tight text-cream [text-shadow:0_2px_16px_rgba(0,0,0,0.45)] sm:text-4xl lg:text-5xl"
            />
            <span
              ref={labelRuleRef}
              aria-hidden="true"
              style={{ transform: "scaleX(0)", transformOrigin: "left" }}
              className="mt-3 block h-1 w-16 rounded-full bg-coral"
            />
          </div>
        )}
      </div>
    </div>
  );
}
