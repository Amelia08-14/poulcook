"use client";

import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import { COUNTRIES, type Country } from "@/data/content";
import RestaurantCard from "@/components/features/RestaurantCard";

function readHash(): string {
  if (typeof window === "undefined") return COUNTRIES[0].code;
  const h = window.location.hash.replace("#", "");
  return COUNTRIES.some((c) => c.code === h) ? h : COUNTRIES[0].code;
}

export default function RestaurantSelector() {
  const [active, setActive] = useState<string>(COUNTRIES[0].code);
  const gridRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  useEffect(() => {
    const onHash = () => setActive(readHash());
    const id = requestAnimationFrame(onHash);
    window.addEventListener("hashchange", onHash);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  // Transition douce des cartes à chaque changement de pays.
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cards = grid.querySelectorAll<HTMLElement>("[data-card]");
    if (!cards.length) return;
    animate(cards, {
      opacity: [0, 1],
      translateY: [16, 0],
      duration: 480,
      delay: stagger(60),
      ease: "out(3)",
    });
  }, [active]);

  function pick(code: string) {
    setActive(code);
    if (typeof window !== "undefined" && window.history.replaceState) {
      window.history.replaceState(null, "", `#${code}`);
    }
  }

  const country: Country = COUNTRIES.find((c) => c.code === active) ?? COUNTRIES[0];

  return (
    <div>
      {/* Sélecteur de pays — collant sous le header sur mobile */}
      <div className="sticky top-[52px] z-20 -mx-4 border-b border-paper-line/70 bg-paper/90 px-4 py-3 backdrop-blur-md sm:top-14 lg:static lg:mx-0 lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
        <div
          role="tablist"
          aria-label="Choisir un pays"
          className="mx-auto flex max-w-md gap-2 lg:max-w-none lg:justify-start"
        >
          {COUNTRIES.map((c) => {
            const selected = c.code === active;
            return (
              <button
                key={c.code}
                role="tab"
                type="button"
                aria-selected={selected}
                onClick={() => pick(c.code)}
                className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors lg:flex-none lg:px-6 ${
                  selected
                    ? "bg-ink text-cream"
                    : "border border-paper-line text-ink-dim hover:text-ink"
                }`}
              >
                <span aria-hidden className="text-base leading-none">{c.flag}</span>
                {c.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:mt-12 lg:grid-cols-[0.9fr_1.4fr] lg:items-start lg:gap-12">
        {/* Panneau contextuel du pays (léger, pas une map plein écran) */}
        <div className="relative overflow-hidden rounded-[1.75rem] bg-night p-8 text-cream">
          <div aria-hidden className="aurora opacity-25" />
          <div className="relative">
            <span className="text-5xl leading-none" aria-hidden>{country.flag}</span>
            <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">{country.name}</h2>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream-dim">{country.blurb}</p>
            <p className="mt-6 text-sm font-semibold text-coral-strong">
              {country.restaurants.length} restaurant{country.restaurants.length > 1 ? "s" : ""}
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {country.restaurants.map((r) => (
                <li
                  key={r.city}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-cream/85"
                >
                  {r.city}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cartes des restaurants du pays actif */}
        <div ref={gridRef} className="grid gap-5 sm:grid-cols-2">
          {country.restaurants.map((restaurant) => (
            <div key={restaurant.city} data-card>
              <RestaurantCard restaurant={restaurant} country={country.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
