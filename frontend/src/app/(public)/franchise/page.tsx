import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/layouts/PageHeader";
import Reveal from "@/components/ui/Reveal";
import Stagger from "@/components/ui/Stagger";
import AnimeText from "@/components/ui/AnimeText";
import EmberGlow from "@/components/ui/EmberGlow";
import FranchiseStats from "@/components/features/FranchiseStats";
import FranchiseForm from "@/components/features/FranchiseForm";
import { FRANCHISE_PILLARS } from "@/data/content";

export const metadata: Metadata = {
  title: "Devenir franchisé",
  description: "Rejoignez la franchise Poulcook, spécialiste du poulet braisé Fast Good à Paris.",
};

export default function FranchisePage() {
  return (
    <>
      <PageHeader
        title="Devenir franchisé"
        line="coral"
        description="Faites partie d'une aventure culinaire réussie, en proposant le meilleur poulet braisé de Paname dans votre ville."
      />

      <section className="relative overflow-hidden bg-night py-16 text-cream sm:py-20">
        <EmberGlow />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <FranchiseStats />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-paper-line py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal direction="zoom" className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-[0_30px_60px_-30px_rgba(29,29,35,0.35)] sm:aspect-[21/9]">
            <Image
              src="/images/2.jpg"
              alt="Devanture Poulcook, file d'attente en soirée"
              fill
              sizes="(min-width: 1024px) 72rem, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-paper-line py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Stagger className="grid gap-x-12 gap-y-14 sm:grid-cols-2" step={90}>
            {FRANCHISE_PILLARS.map((pillar, index) => (
              <div key={pillar.title}>
                <span className="font-display text-2xl text-ember tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-2 text-xl font-bold tracking-tight text-ink">{pillar.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-ink-dim">{pillar.text}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-t border-paper-line bg-paper-raised py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <AnimeText
            as="h2"
            text="Envie de rejoindre l'aventure Poulcook ?"
            className="text-balance font-display text-3xl tracking-tight text-ink sm:text-4xl"
          />
          <Reveal as="p" delay={120} className="mt-4 text-lg text-ink-dim">
            Remplissez le formulaire ci-dessous, notre équipe revient vers vous rapidement.
          </Reveal>
          <Reveal delay={100} className="mt-10">
            <FranchiseForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
