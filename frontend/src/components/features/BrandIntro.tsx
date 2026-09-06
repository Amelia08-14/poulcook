import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import AnimeText from "@/components/ui/AnimeText";
import MagneticButton from "@/components/ui/MagneticButton";

const POINTS = [
  { title: "Braisé lentement", text: "Mariné maison, cuit au feu jusqu'à la tendreté parfaite." },
  { title: "Prix accessibles", text: "Le « Fast Good » : la qualité d'un vrai poulet du dimanche, sans se ruiner." },
  { title: "Accueil chaleureux", text: "Une équipe souriante, un patron accessible — de Paris à Alger et Casablanca." },
];

export default function BrandIntro() {
  return (
    <section className="relative isolate overflow-hidden border-b border-paper-line bg-paper py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
        {/* Visuel produit détouré + badge "Depuis 2021" */}
        <Reveal direction="left" className="relative order-first mx-auto w-full max-w-xs sm:max-w-sm lg:order-none lg:max-w-none">
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -z-10 size-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{ background: "var(--grad-ember-soft)" }}
          />
          <div className="plate-drift">
            <Image
              src="/images/poulet-poulcook.png"
              alt="Poulet braisé Poulcook, entier"
              width={550}
              height={440}
              priority
              className="w-full drop-shadow-[0_28px_45px_rgba(27,26,31,0.28)]"
            />
          </div>

          <span className="badge-float absolute -bottom-2 right-1 flex size-20 items-center justify-center sm:-bottom-3 sm:right-4 sm:size-24">
            <span aria-hidden className="ring-spin absolute inset-0 rounded-full border border-dashed border-coral/45" />
            <Image
              src="/images/poulcook-logo-rond.png"
              alt="Poulcook — depuis 2021"
              width={96}
              height={100}
              className="size-[78%] object-contain drop-shadow-[0_6px_14px_rgba(27,26,31,0.25)]"
            />
          </span>
        </Reveal>

        {/* Slogan + accroche + CTA */}
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
              Fast Good · depuis 2021
            </p>
          </Reveal>
          <AnimeText
            as="h2"
            text="le poulet le plus chaud de Paname"
            stagger={60}
            className="mt-3 max-w-xl text-balance font-display text-4xl leading-[0.98] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          />
          <Reveal as="p" delay={120} className="mt-5 max-w-lg text-lg leading-relaxed text-ink-dim">
            On a réinventé le poulet du dimanche : mariné maison,{" "}
            <span className="font-semibold text-ink">braisé lentement</span> au feu, servi
            vite et sans compromis — aujourd&apos;hui en France, en Algérie et au Maroc.
          </Reveal>

          <Reveal delay={200} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <MagneticButton>
              <Link
                href="/menu"
                className="btn-glow group inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-base font-semibold text-cream"
                style={{ background: "var(--grad-ember)" }}
              >
                Voir la carte
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.22}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-ink/20 px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:border-ink/50"
              >
                Nos restaurants
              </Link>
            </MagneticButton>
          </Reveal>

          <div className="mt-10 grid gap-x-8 gap-y-5 border-t border-paper-line pt-7 sm:grid-cols-3">
            {POINTS.map((point, i) => (
              <Reveal key={point.title} delay={260 + i * 80}>
                <h3 className="flex items-baseline gap-2 text-base font-bold text-ink">
                  <span aria-hidden className="size-1.5 shrink-0 translate-y-[-2px] rounded-full bg-coral" />
                  {point.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-dim">{point.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
