import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Stagger from "@/components/ui/Stagger";
import AnimeText from "@/components/ui/AnimeText";
import { COUNTRIES } from "@/data/content";

const VISUALS: Record<string, { image: string; place: string }> = {
  fr: { image: "/images/story-paris-jet.webp", place: "Paris" },
  ma: { image: "/images/story-casablanca.webp", place: "Casablanca" },
  dz: { image: "/images/story-alger.webp", place: "Alger" },
};

// Ordre du film de marque : Paris → Casablanca → Alger.
const ORDER = ["fr", "ma", "dz"];

export default function InternationalExpansion() {
  const countries = ORDER.map((code) => COUNTRIES.find((c) => c.code === code)!);

  return (
    <section className="relative isolate overflow-hidden bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">L&apos;expansion</p>
          <AnimeText
            as="h2"
            text="De Paname au monde"
            className="mt-3 text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl lg:text-6xl"
          />
          <p className="mt-4 text-lg text-ink-dim">
            Le même poulet braisé, le même savoir-faire, la même équipe souriante —
            de Paris à Casablanca et Alger.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-3" step={110} y={36}>
          {countries.map((country) => {
            const visual = VISUALS[country.code];
            return (
              <Link
                key={country.code}
                href={`/contact#${country.code}`}
                className="group relative flex min-h-[24rem] flex-col justify-end overflow-hidden rounded-2xl bg-night text-cream outline-none ring-coral/40 focus-visible:ring-2 md:min-h-[30rem]"
              >
                <Image
                  src={visual.image}
                  alt={`Restaurant Poulcook — ${country.name}`}
                  fill
                  sizes="(min-width:768px) 32vw, 90vw"
                  className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-night/5" />
                <span className="relative p-6">
                  <span className="flex items-center gap-2 text-sm font-semibold text-cream/80">
                    <span aria-hidden className="text-lg">{country.flag}</span>
                    {visual.place}
                  </span>
                  <span className="mt-1 block font-display text-3xl tracking-tight text-cream sm:text-4xl">
                    {country.name}
                  </span>
                  <span className="mt-2 block max-w-[32ch] text-sm text-cream/75">{country.blurb}</span>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cream">
                    {country.restaurants.length} restaurant{country.restaurants.length > 1 ? "s" : ""}
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </span>
              </Link>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
