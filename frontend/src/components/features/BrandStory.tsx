import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import AnimeText from "@/components/ui/AnimeText";
import EmberGlow from "@/components/ui/EmberGlow";

const STEPS = [
  {
    n: "01",
    title: "La marinade",
    text: "Chaque morceau est sélectionné puis mariné maison, avec des épices savamment choisies.",
  },
  {
    n: "02",
    title: "Le braisage lent",
    text: "Cuit lentement au feu jusqu'à une tendreté parfaite — c'est là que se joue le goût.",
  },
  {
    n: "03",
    title: "Les accompagnements",
    text: "Riz Poulcook, bananes plantain, frites rustiques : tout est fait maison, à composer à volonté.",
  },
];

export default function BrandStory() {
  return (
    <section className="relative isolate overflow-hidden bg-night py-20 text-cream sm:py-28">
      <div aria-hidden className="aurora opacity-25" />
      <EmberGlow />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16 lg:px-8">
        <Reveal direction="left" className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/photo_a_propos.jpeg"
              alt="L'univers illustré Poulcook, peint sur les murs du restaurant"
              fill
              sizes="(min-width:1024px) 46vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-4 hidden w-40 -rotate-3 overflow-hidden rounded-2xl border-4 border-night shadow-2xl sm:block lg:w-48">
            <Image
              src="/images/image00013.jpg"
              alt="Gros plan sur le poulet braisé Poulcook"
              width={280}
              height={210}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-strong">Le savoir-faire</p>
          <AnimeText
            as="h2"
            text="L'univers du poulet braisé"
            className="mt-3 text-balance font-display text-4xl tracking-tight text-cream sm:text-5xl"
          />
          <Reveal as="p" delay={120} className="mt-5 max-w-md text-cream-dim">
            Deux amis d&apos;enfance, passionnés de street food, ont revisité le poulet
            du dimanche. Un savoir-faire artisanal, une seule obsession : le goût.
          </Reveal>

          <ol className="mt-10 space-y-6">
            {STEPS.map((step, i) => (
              <Reveal as="li" key={step.n} delay={i * 90} className="flex gap-5">
                <span className="font-display text-2xl text-ember tabular-nums">{step.n}</span>
                <span>
                  <span className="block text-lg font-bold text-cream">{step.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-cream-dim">{step.text}</span>
                </span>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={120} className="mt-9">
            <Link
              href="/a-propos"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-cream transition-colors hover:text-coral-strong"
            >
              Toute l&apos;histoire Poulcook
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
