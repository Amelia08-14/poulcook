import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Stagger from "@/components/ui/Stagger";
import AnimeText from "@/components/ui/AnimeText";
import { COUNTRIES, RESTAURANT_COUNT } from "@/data/content";

export default function RestaurantsPreview() {
  return (
    <section className="border-y border-paper-line bg-paper-raised py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Nous trouver</p>
            <AnimeText
              as="h2"
              text="Nos restaurants"
              className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-5xl"
            />
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-coral"
          >
            Voir les {RESTAURANT_COUNT} adresses
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-3" step={90}>
          {COUNTRIES.map((country) => (
            <div key={country.code} className="rounded-2xl border border-paper-line bg-paper p-6">
              <h3 className="flex items-center gap-2 font-display text-2xl tracking-tight text-ink">
                <span aria-hidden>{country.flag}</span>
                {country.name}
              </h3>
              <ul className="mt-4 divide-y divide-paper-line">
                {country.restaurants.map((r) => (
                  <li key={r.city} className="flex items-center justify-between gap-3 py-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-ink">{r.city}</p>
                      <p className="truncate text-xs text-ink-dim">{r.lines[0]}</p>
                    </div>
                    <a
                      href={r.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 rounded-full border border-ink/15 px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-coral hover:text-coral"
                      aria-label={`Voir ${r.city} sur Google Maps`}
                    >
                      Maps ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
