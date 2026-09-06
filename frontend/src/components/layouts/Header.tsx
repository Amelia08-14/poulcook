"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, COUNTRIES, SITE } from "@/data/content";
import { MENU } from "@/data/menu";
import CategoryMegaMenu from "@/components/layouts/CategoryMegaMenu";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [cartOpenMobile, setCartOpenMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overHero, setOverHero] = useState(pathname === "/");
  const [megaOpen, setMegaOpen] = useState(false);
  const megaTimer = useRef<number>(0);

  useIsomorphicLayoutEffect(() => {
    const heroEl = document.getElementById("hero");
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      setOverHero(heroEl ? heroEl.getBoundingClientRect().bottom > 88 : false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Ferme les menus à chaque changement de route (le header persiste dans le layout).
  const prevPath = useRef(pathname);
  useEffect(() => {
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;
    const id = requestAnimationFrame(() => {
      setOpen(false);
      setCartOpenMobile(false);
      setMegaOpen(false);
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  // Verrou de défilement quand le tiroir mobile est ouvert.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const condensed = scrolled && !overHero;
  const transparent = overHero && !open && !megaOpen;

  function openMega() {
    window.clearTimeout(megaTimer.current);
    setMegaOpen(true);
  }
  function closeMega() {
    window.clearTimeout(megaTimer.current);
    megaTimer.current = window.setTimeout(() => setMegaOpen(false), 120);
  }

  return (
    <header
      onMouseLeave={closeMega}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        transparent
          ? "border-transparent bg-transparent"
          : `glass ${condensed ? "shadow-[0_16px_34px_-24px_rgba(27,26,31,0.4)]" : ""}`
      }`}
    >
      <div
        className={`relative z-[60] mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 transition-[padding] duration-300 sm:px-6 lg:px-8 ${
          condensed ? "py-2" : "py-3.5"
        }`}
      >
        <Link href="/" className="shrink-0" aria-label="Poulcook — accueil" onClick={() => setMegaOpen(false)}>
          <Image
            src="/images/poulcook-logo-horizontal.png"
            alt="Poulcook"
            width={168}
            height={71}
            priority
            className={`w-auto transition-[height] duration-300 ${condensed ? "h-7" : "h-8 sm:h-9"} ${
              transparent ? "[filter:drop-shadow(0_2px_10px_rgba(0,0,0,0.55))]" : ""
            }`}
          />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => {
            const current = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            const isCarte = link.href === "/menu";
            return (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={isCarte ? openMega : undefined}
                onFocusCapture={isCarte ? openMega : undefined}
              >
                <Link
                  href={link.href}
                  aria-current={current ? "page" : undefined}
                  aria-expanded={isCarte ? megaOpen : undefined}
                  className={`group relative inline-flex items-center gap-1 py-1 text-sm font-medium transition-colors ${
                    transparent
                      ? "text-cream hover:text-cream [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]"
                      : "text-ink-dim hover:text-ink"
                  }`}
                >
                  {link.label}
                  {isCarte && (
                    <span aria-hidden className={`text-[0.65rem] transition-transform ${megaOpen ? "rotate-180" : ""}`}>
                      ▾
                    </span>
                  )}
                  <span
                    aria-hidden
                    className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-gradient-to-r from-coral to-gold transition-all duration-300 ${
                      current || (isCarte && megaOpen) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-1.5 lg:flex">
          {COUNTRIES.map((c) => (
            <Link
              key={c.code}
              href={`/contact#${c.code}`}
              onClick={() => setMegaOpen(false)}
              title={`Restaurants — ${c.name}`}
              className={`rounded-full px-1.5 py-1 text-base leading-none opacity-80 transition-opacity hover:opacity-100 ${
                transparent ? "[filter:drop-shadow(0_1px_6px_rgba(0,0,0,0.5))]" : ""
              }`}
            >
              <span aria-hidden>{c.flag}</span>
              <span className="sr-only">Restaurants {c.name}</span>
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="-mr-2 flex flex-col gap-1.5 p-2 lg:hidden"
        >
          <span className="sr-only">Menu</span>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
                transparent ? "bg-cream" : "bg-ink"
              } ${open && i === 0 ? "translate-y-2 rotate-45" : ""} ${open && i === 1 ? "opacity-0" : ""} ${
                open && i === 2 ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          ))}
        </button>
      </div>

      <CategoryMegaMenu open={megaOpen} onNavigate={() => setMegaOpen(false)} />

      {/* Tiroir mobile plein écran */}
      <div
        id="mobile-nav"
        className={`fixed inset-0 top-0 z-40 flex flex-col bg-paper transition-[opacity,transform] duration-300 lg:hidden ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div className="h-[64px] shrink-0" />
        <nav aria-label="Navigation mobile" className="flex-1 overflow-y-auto px-5 pb-10">
          <ul className="divide-y divide-paper-line">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                {link.href === "/menu" ? (
                  <div className="py-1">
                    <div className="flex items-center justify-between">
                      <Link
                        href="/menu"
                        onClick={() => setOpen(false)}
                        className="py-3 font-display text-2xl tracking-tight text-ink"
                      >
                        La Carte
                      </Link>
                      <button
                        type="button"
                        onClick={() => setCartOpenMobile((v) => !v)}
                        aria-expanded={cartOpenMobile}
                        aria-label="Afficher les catégories"
                        className="rounded-full p-2 text-ink-dim"
                      >
                        <span className={`inline-block transition-transform ${cartOpenMobile ? "rotate-180" : ""}`}>▾</span>
                      </button>
                    </div>
                    {cartOpenMobile && (
                      <div className="-mx-1 mb-3 grid grid-cols-2 gap-2">
                        {MENU.map((cat) => (
                          <Link
                            key={cat.slug}
                            href={`/menu#${cat.slug}`}
                            onClick={() => setOpen(false)}
                            className="relative overflow-hidden rounded-xl"
                          >
                            <span className="relative block aspect-[5/3]">
                              <Image src={cat.cover} alt="" fill sizes="45vw" className="object-cover" />
                              <span className="absolute inset-0 bg-gradient-to-t from-night/60 to-transparent" />
                              <span className="absolute bottom-1.5 left-2.5 text-xs font-semibold text-cream">
                                {cat.name}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 font-display text-2xl tracking-tight text-ink"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            {COUNTRIES.map((c) => (
              <Link
                key={c.code}
                href={`/contact#${c.code}`}
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full border border-paper-line px-4 py-2 text-sm font-medium text-ink"
              >
                <span aria-hidden>{c.flag}</span> {c.name}
              </Link>
            ))}
          </div>

          <div className="mt-8 space-y-1 text-sm text-ink-dim">
            <a href={`mailto:${SITE.email}`} className="block hover:text-ink">
              {SITE.email}
            </a>
            {SITE.phones.map((p) => (
              <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block tabular-nums hover:text-ink">
                {p}
              </a>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-dim">
            {SITE.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                {s.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
