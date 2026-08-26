import Link from "next/link";
import FranchiseStats from "@/components/features/FranchiseStats";

export default function FranchiseCTA() {
  return (
    <section className="border-t border-board-line bg-board-raised py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display font-expanded text-3xl uppercase tracking-tight text-cream sm:text-4xl">
              Rejoignez notre franchise
            </h2>
            <p className="mt-4 max-w-md text-cream-dim">
              Faites partie d&apos;une aventure culinaire réussie, en proposant le meilleur
              poulet braisé de Paname dans votre ville.
            </p>
            <Link
              href="/franchise"
              className="mt-8 inline-flex items-center gap-3 rounded-sm border border-teal px-6 py-3 font-display font-expanded uppercase tracking-[0.14em] text-teal-strong transition-colors hover:border-teal-strong hover:text-cream"
            >
              Rejoignez-nous
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <FranchiseStats />
        </div>
      </div>
    </section>
  );
}
