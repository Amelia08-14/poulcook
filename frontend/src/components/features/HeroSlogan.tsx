import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import DiscountBadge from "@/components/ui/DiscountBadge";
import Flame from "@/components/ui/Flame";
import { SITE } from "@/data/content";

/**
 * Le slogan et les CTA du hero, déplacés juste après le film : le hero reste
 * un plan propre sans texte, et cette bande révèle le message au scroll.
 */
export default function HeroSlogan() {
  return (
    <section className="overflow-hidden bg-night py-20 text-cream sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-8 lg:px-8">
        <div>
          <Reveal direction="down" className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 rounded-full bg-paper/95 py-1.5 pl-1.5 pr-4 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.5)]">
              <span className="relative flex size-9 shrink-0 items-center justify-center">
                <span aria-hidden="true" className="ring-spin absolute inset-[-4px] rounded-full border border-dashed border-coral/50" />
                <Image src="/images/poulcook-logo-rond.png" alt="" width={40} height={42} className="h-9 w-auto" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-ink">Depuis 2021</span>
            </div>
            <DiscountBadge />
          </Reveal>

          <Reveal as="p" direction="left" delay={100} className="mt-10 flex items-center gap-2 text-sm font-medium text-coral-strong">
            <Flame className="size-4" />
            Ouvert jusqu&apos;à 23h · tous les jours
          </Reveal>

          <Reveal
            as="h1"
            direction="zoom"
            delay={160}
            className="mt-6 text-balance font-display text-5xl leading-[0.95] tracking-tight text-cream sm:text-7xl lg:text-8xl"
          >
            {SITE.tagline}
          </Reveal>

          <Reveal as="p" direction="left" delay={240} className="mt-6 max-w-lg text-balance text-lg text-cream-dim">
            Poulet mariné, braisé lentement, servi avec les accompagnements maison — à
            emporter, en livraison ou sur place, tous les jours de 11h à 23h.
          </Reveal>

          <Reveal direction="right" delay={320} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={SITE.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-coral px-8 py-4 text-base font-semibold text-cream transition-colors hover:bg-coral-strong"
            >
              Commander
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <Link
              href="/franchise"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-cream/30 px-8 py-4 text-base font-semibold text-cream transition-colors hover:border-cream hover:bg-cream/10"
            >
              Devenir franchisé
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>
        </div>

        <Reveal direction="zoom" delay={120} className="relative order-first mx-auto lg:order-last">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 size-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral/25 blur-3xl"
          />
          <div className="plate-drift">
            <Image
              src="/images/poulet-poulcook.png"
              alt="Poulet braisé Poulcook"
              width={550}
              height={440}
              priority
              className="w-full max-w-sm drop-shadow-[0_30px_40px_rgba(0,0,0,0.55)] sm:max-w-md lg:max-w-lg"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
