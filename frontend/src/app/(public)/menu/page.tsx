import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layouts/PageHeader";
import EmberGlow from "@/components/ui/EmberGlow";
import Reveal from "@/components/ui/Reveal";
import AnimeText from "@/components/ui/AnimeText";
import MagneticButton from "@/components/ui/MagneticButton";
import MenuExplorer from "@/components/features/MenuExplorer";
import { MENU, MENU_ITEM_COUNT } from "@/data/menu";
import { RESTAURANT_COUNT } from "@/data/content";

export const metadata: Metadata = {
  title: "La carte",
  description:
    "La carte complète Poulcook : formules, smash burgers, poulet braisé, appetizers, accompagnements maison, sauces, desserts et boissons.",
};

export default function MenuPage() {
  return (
    <>
      <PageHeader
        title="La carte"
        line="coral"
        description={`Formules, smash burgers, poulet braisé à la pièce, appetizers, accompagnements maison, sauces, desserts et boissons — ${MENU_ITEM_COUNT} recettes, ${MENU.length} familles.`}
      />

      <section className="bg-paper">
        <MenuExplorer categories={MENU} />
      </section>

      <section className="relative isolate overflow-hidden border-t border-night-raised bg-night py-20 text-cream sm:py-28">
        <div aria-hidden className="aurora opacity-30" />
        <EmberGlow />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <AnimeText
            as="h2"
            text="Ça se déguste sur place ou à emporter"
            className="text-balance font-display text-3xl tracking-tight text-cream sm:text-4xl"
          />
          <Reveal as="p" delay={120} className="mx-auto mt-4 max-w-xl text-lg text-cream-dim">
            {RESTAURANT_COUNT} restaurants Poulcook en France, en Algérie et au Maroc —
            ouverts tous les jours de 11h à 23h.
          </Reveal>
          <Reveal delay={200} className="mt-8 flex justify-center">
            <MagneticButton>
              <Link
                href="/contact"
                className="btn-glow inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-base font-semibold text-cream"
                style={{ background: "var(--grad-ember)" }}
              >
                Trouver un restaurant
                <span aria-hidden>→</span>
              </Link>
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
