"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE } from "@/data/content";

// Évite l'avertissement React "useLayoutEffect does nothing on the server" —
// bascule sur useEffect côté serveur, useLayoutEffect une fois côté client.
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Correct dès le premier rendu (avant même l'effet) : seule la page
  // d'accueil a un hero, et on y arrive toujours tout en haut — ça évite un
  // flash de bandeau blanc/solide le temps que l'effet mesure le DOM.
  const [overHero, setOverHero] = useState(pathname === "/");

  // useLayoutEffect (pas useEffect) : la mesure et la correction d'état se
  // font avant que le navigateur peigne l'écran — sinon un premier rendu
  // "solide" a le temps de s'afficher une fraction de seconde avant d'être
  // corrigé, ce qui se voit comme un flash blanc au chargement.
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

  // Transparent sur le film du hero (pour ne pas l'étouffer) ; solide dès
  // qu'on en sort — le padding ne se condense qu'une fois sorti du hero.
  const condensed = scrolled && !overHero;

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        overHero
          ? "border-transparent bg-transparent"
          : `bg-paper/90 backdrop-blur-md ${condensed ? "border-paper-line shadow-[0_1px_0_0_rgba(29,29,35,0.06),0_12px_24px_-20px_rgba(29,29,35,0.35)]" : "border-paper-line/80"}`
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 transition-[padding] duration-300 sm:px-6 lg:px-8 ${
          condensed ? "py-2" : "py-3"
        }`}
      >
        <Link href="/" className="shrink-0" aria-label="Poulcook — accueil">
          <Image
            src="/images/poulcook-logo-horizontal.png"
            alt="Poulcook"
            width={168}
            height={71}
            priority
            className={`w-auto transition-[height] duration-300 ${condensed ? "h-7" : "h-8 sm:h-9"}`}
          />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                overHero ? "text-cream/90 hover:text-cream" : "text-ink-dim hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={SITE.appStoreUrl}
            className={`text-sm font-medium transition-colors ${overHero ? "text-cream/90 hover:text-cream" : "text-ink-dim hover:text-ink"}`}
          >
            L&apos;app
          </a>
          <a
            href={SITE.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-coral-strong"
          >
            Commander
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="flex flex-col gap-1.5 p-2 lg:hidden"
        >
          <span className="sr-only">Basculer le menu</span>
          <span
            className={`h-0.5 w-6 transition-transform ${overHero && !open ? "bg-cream" : "bg-ink"} ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 transition-opacity ${overHero && !open ? "bg-cream" : "bg-ink"} ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 transition-transform ${overHero && !open ? "bg-cream" : "bg-ink"} ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Navigation mobile" className="border-t border-paper-line bg-paper px-4 pb-6 lg:hidden">
          <ul className="flex flex-col divide-y divide-paper-line">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)} className="block py-4 text-lg font-medium text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={SITE.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-coral px-5 py-3 text-center text-sm font-semibold text-cream"
            >
              Commander
            </a>
            <a href={SITE.appStoreUrl} className="text-center text-sm font-medium text-ink-dim">
              Télécharger l&apos;app
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
