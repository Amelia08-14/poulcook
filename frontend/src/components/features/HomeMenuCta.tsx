import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import AnimeText from "@/components/ui/AnimeText";
import MagneticButton from "@/components/ui/MagneticButton";
import { MENU, MENU_ITEM_COUNT } from "@/data/menu";

export default function HomeMenuCta() {
  return (
    <section className="border-t border-paper-line bg-paper-raised py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">La carte</p>
            <AnimeText
              as="h2"
              text="Tout est sur la carte"
              className="mt-3 text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl lg:text-6xl"
            />
            <p className="mt-4 max-w-md text-lg text-ink-dim">
              {MENU_ITEM_COUNT} recettes, {MENU.length} familles — formules, poulet braisé,
              smash burgers, accompagnements maison, desserts et boissons.
            </p>
            <MagneticButton className="mt-8">
              <Link
                href="/menu"
                className="btn-glow inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-base font-semibold text-cream"
                style={{ background: "var(--grad-ember)" }}
              >
                Explorer la carte
                <span aria-hidden>→</span>
              </Link>
            </MagneticButton>
          </Reveal>

          <Reveal direction="right" delay={120} className="grid grid-cols-3 gap-3">
            {MENU.slice(0, 6).map((cat) => (
              <Link
                key={cat.slug}
                href={`/menu#${cat.slug}`}
                className="group relative block aspect-square overflow-hidden rounded-xl"
              >
                <Image
                  src={cat.cover}
                  alt=""
                  fill
                  sizes="(min-width:1024px) 14vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-night/65 to-transparent" />
                <span className="absolute bottom-2 left-2.5 right-2 truncate text-xs font-semibold text-cream">
                  {cat.name}
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
