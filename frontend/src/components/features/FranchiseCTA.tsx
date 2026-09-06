import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import AnimeText from "@/components/ui/AnimeText";
import MagneticButton from "@/components/ui/MagneticButton";
import EmberGlow from "@/components/ui/EmberGlow";
import FranchiseStats from "@/components/features/FranchiseStats";

export default function FranchiseCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-night py-24 text-cream sm:py-28">
      <div aria-hidden className="aurora opacity-30" />
      <EmberGlow />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <AnimeText
              as="h2"
              text="Rejoignez notre franchise"
              className="text-balance font-display text-4xl tracking-tight text-cream sm:text-5xl"
            />
            <Reveal as="p" delay={120} className="mt-5 max-w-md text-lg text-cream-dim">
              Faites partie d&apos;une aventure culinaire réussie, en proposant le
              meilleur poulet braisé de Paname dans votre ville.
            </Reveal>
            <Reveal delay={200} className="mt-8">
              <MagneticButton strength={0.25}>
                <Link
                  href="/franchise"
                  className="inline-flex items-center gap-3 rounded-full border border-cream/30 px-8 py-4 text-base font-semibold transition-colors hover:border-cream hover:bg-cream/10"
                >
                  Découvrir la franchise
                  <span aria-hidden="true">→</span>
                </Link>
              </MagneticButton>
            </Reveal>
          </div>
          <Reveal direction="right" delay={120}>
            <FranchiseStats />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
