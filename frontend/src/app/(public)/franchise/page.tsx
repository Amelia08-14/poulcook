import type { Metadata } from "next";
import PageHeader from "@/components/layouts/PageHeader";
import FranchiseStats from "@/components/features/FranchiseStats";
import FranchiseForm from "@/components/features/FranchiseForm";
import { FRANCHISE_PILLARS } from "@/data/content";

export const metadata: Metadata = {
  title: "Devenir franchisé — Poulcook",
  description:
    "Rejoignez la franchise Poulcook, spécialiste du poulet braisé Fast Good à Paris.",
};

export default function FranchisePage() {
  return (
    <>
      <PageHeader title="Devenir franchisé" line="coral" />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <FranchiseStats />
      </section>

      <section className="border-t border-board-line bg-board-raised py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-10 sm:grid-cols-2">
            {FRANCHISE_PILLARS.map((pillar) => (
              <div key={pillar.title}>
                <h2 className="font-display font-expanded text-xl uppercase tracking-tight text-cream">
                  {pillar.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-cream-dim">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-board-line py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="mb-2 font-display font-expanded text-3xl uppercase tracking-tight text-cream">
            Envie de rejoindre l&apos;aventure Poulcook ?
          </h2>
          <p className="mb-10 text-cream-dim">
            Remplissez le formulaire ci-dessous, notre équipe revient vers vous rapidement.
          </p>
          <FranchiseForm />
        </div>
      </section>
    </>
  );
}
