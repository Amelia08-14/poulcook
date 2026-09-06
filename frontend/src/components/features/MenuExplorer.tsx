"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, LayoutGroup, motion, MotionConfig } from "motion/react";
import Reveal from "@/components/ui/Reveal";
import { scrollToTarget } from "@/lib/smoothScroll";
import type { MenuCategory, MenuItem } from "@/data/menu";

type Accent = MenuCategory["accent"];

const ACCENT_DOT: Record<Accent, string> = {
  coral: "bg-coral",
  teal: "bg-teal",
  gold: "bg-gold",
};

const ACCENT_TEXT: Record<Accent, string> = {
  coral: "text-coral",
  teal: "text-teal",
  gold: "text-gold",
};

type Selected = MenuItem & { category: string; categorySlug: string; accent: Accent };

export default function MenuExplorer({ categories }: { categories: MenuCategory[] }) {
  const [active, setActive] = useState<string>("all");
  const [selected, setSelected] = useState<Selected | null>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const visible =
    active === "all" ? categories : categories.filter((c) => c.slug === active);

  function pick(slug: string, scroll = true) {
    setActive(slug);
    if (!scroll) return;
    requestAnimationFrame(() => {
      if (topRef.current) scrollToTarget(topRef.current, -60);
    });
  }

  // Ouverture directe sur une famille via /menu#<slug> (méga-menu, footer…).
  useEffect(() => {
    const applyHash = () => {
      const slug = window.location.hash.replace("#", "");
      if (slug && categories.some((c) => c.slug === slug)) {
        setActive(slug);
        // Après filtrage, la famille choisie est en haut : on se cale sur la
        // barre de filtres (et non sur la section, dont la position a changé).
        requestAnimationFrame(() => {
          if (topRef.current) scrollToTarget(topRef.current, -60);
        });
      }
    };
    const id = requestAnimationFrame(applyHash);
    window.addEventListener("hashchange", applyHash);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("hashchange", applyHash);
    };
  }, [categories]);

  useEffect(() => {
    if (!selected) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  return (
    <MotionConfig reducedMotion="user">
      <div
        ref={topRef}
        className="sticky top-[52px] z-20 -mx-4 scroll-mt-[52px] border-b border-paper-line/70 bg-paper/90 px-4 py-3 backdrop-blur-md sm:top-14 sm:scroll-mt-14 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <LayoutGroup id="menu-pills">
            <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <Pill label="Tout" active={active === "all"} onClick={() => pick("all")} />
              {categories.map((c) => (
                <Pill
                  key={c.slug}
                  label={c.name}
                  active={active === c.slug}
                  onClick={() => pick(c.slug)}
                />
              ))}
            </div>
          </LayoutGroup>
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:space-y-24 sm:px-6 sm:py-20 lg:px-8">
        {visible.map((cat) => (
          <section
            key={cat.slug}
            id={cat.slug}
            aria-labelledby={`${cat.slug}-title`}
            className="scroll-mt-32"
          >
            <Reveal className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span aria-hidden className={`size-2.5 rounded-full ${ACCENT_DOT[cat.accent]}`} />
              <h2
                id={`${cat.slug}-title`}
                className="font-display text-3xl tracking-tight text-ink sm:text-4xl"
              >
                {cat.name}
              </h2>
              <span className="text-sm tabular-nums text-ink-dim">{cat.items.length}</span>
            </Reveal>
            <Reveal>
              <p className="mt-3 max-w-xl text-ink-dim">{cat.kicker}</p>
            </Reveal>

            <ul className="mt-8 grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 lg:grid-cols-4">
              {cat.items.map((item, i) => (
                <Reveal
                  as="li"
                  key={item.image}
                  direction={i % 2 === 0 ? "left" : "right"}
                  delay={(i % 4) * 60}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setSelected({ ...item, category: cat.name, categorySlug: cat.slug, accent: cat.accent })
                    }
                    className="group block w-full text-left transition-transform duration-300 ease-out hover:-translate-y-1.5 focus-visible:-translate-y-1.5"
                  >
                    <motion.span
                      layoutId={`menu-photo-${item.image}`}
                      className="relative block aspect-[5/4] overflow-hidden rounded-2xl bg-paper-raised shadow-[0_18px_40px_-24px_rgba(29,29,35,0.4)] transition-shadow duration-300 group-hover:shadow-[0_28px_60px_-24px_rgba(29,29,35,0.5)]"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
                        className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
                      />
                      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </motion.span>
                    <span className="mt-3 block text-base font-semibold text-ink">{item.name}</span>
                    {item.note && <span className="mt-0.5 block text-sm text-ink-dim">{item.note}</span>}
                  </button>
                </Reveal>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Fermer la vue agrandie"
              onClick={() => setSelected(null)}
              className="absolute inset-0 cursor-zoom-out bg-night/75 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`menu-photo-${selected.image}`}
              className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[2rem] bg-paper shadow-[0_50px_120px_-30px_rgba(0,0,0,0.6)]"
            >
              <div className="relative aspect-[5/4] w-full">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  fill
                  sizes="(min-width: 640px) 42rem, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="p-6 sm:p-8"
              >
                <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${ACCENT_TEXT[selected.accent]}`}>
                  {selected.category}
                </p>
                <h3 className="mt-2 font-display text-2xl tracking-tight text-ink sm:text-3xl">
                  {selected.name}
                </h3>
                {selected.note && <p className="mt-2 text-ink-dim">{selected.note}</p>}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      pick(selected.categorySlug);
                      setSelected(null);
                    }}
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-ink/85"
                  >
                    Toute la famille {selected.category}
                  </button>
                  <Link
                    href="/contact"
                    className="rounded-full border border-paper-line px-6 py-3 text-sm font-medium text-ink-dim transition-colors hover:text-ink"
                  >
                    Où déguster ?
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}

function Pill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
        active ? "text-cream" : "text-ink-dim hover:text-ink"
      }`}
    >
      {active && (
        <motion.span
          layoutId="menu-pill"
          className="absolute inset-0 rounded-full bg-ink"
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        />
      )}
      <span className="relative z-10 whitespace-nowrap">{label}</span>
    </button>
  );
}
