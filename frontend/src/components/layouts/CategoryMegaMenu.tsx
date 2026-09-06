"use client";

import Image from "next/image";
import Link from "next/link";
import { MENU } from "@/data/menu";

/**
 * Méga-menu "La Carte" (desktop) — présente les vraies familles de la carte
 * avec un visuel. Fermé par défaut, ouvert au survol / focus du lien "La Carte"
 * dans le header. Chaque tuile pointe vers /menu#<slug>.
 */
export default function CategoryMegaMenu({
  open,
  onNavigate,
}: {
  open: boolean;
  onNavigate: () => void;
}) {
  return (
    <div
      aria-hidden={!open}
      className={`absolute inset-x-0 top-full hidden origin-top transition duration-200 lg:block ${
        open
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-1 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 pt-2 sm:px-6 lg:px-8">
        <div className="glass overflow-hidden rounded-b-2xl rounded-t-md shadow-[0_40px_80px_-40px_rgba(27,26,31,0.45)]">
          <div className="grid gap-3 p-4 sm:grid-cols-3 lg:grid-cols-5">
            {MENU.map((cat) => (
              <Link
                key={cat.slug}
                href={`/menu#${cat.slug}`}
                onClick={onNavigate}
                className="group relative flex flex-col overflow-hidden rounded-xl bg-paper-raised outline-none ring-coral/40 transition focus-visible:ring-2"
              >
                <span className="relative block aspect-[4/3] overflow-hidden">
                  <Image
                    src={cat.cover}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 12vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-night/55 to-transparent" />
                  <span className="absolute bottom-2 left-3 text-sm font-semibold text-cream">
                    {cat.name}
                  </span>
                </span>
              </Link>
            ))}
          </div>
          <Link
            href="/menu"
            onClick={onNavigate}
            className="flex items-center justify-between border-t border-ink/10 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:text-coral"
          >
            Voir toute la carte
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
