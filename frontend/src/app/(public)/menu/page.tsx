import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/layouts/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { SIDES, SITE } from "@/data/content";

export const metadata: Metadata = {
  title: "Le menu — Poulcook",
  description: "La carte Poulcook : poulet braisé et accompagnements maison. Commandez en ligne via Dishop.",
};

export default function MenuPage() {
  return (
    <>
      <PageHeader
        title="Le menu"
        line="coral"
        description="Le poulet braisé Poulcook et ses sept accompagnements maison — la carte complète, avec les prix et les formules, se commande en ligne via Dishop."
      />

      <section className="border-t border-paper-line bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-xl">
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">Nos accompagnements</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
            {SIDES.map((side, index) => (
              <Reveal key={side.name} direction={index % 2 === 0 ? "left" : "right"} delay={(index % 4) * 60}>
                <div className="photo-zoom relative aspect-square overflow-hidden rounded-2xl bg-paper-raised">
                  <Image
                    src={side.image}
                    alt={side.name}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-3 text-base font-semibold text-ink">{side.name}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-paper-line bg-paper-raised py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Commander en ligne
            </h2>
            <p className="mt-4 text-lg text-ink-dim">
              La carte complète, les prix et les formules du moment sont sur notre
              plateforme de commande.
            </p>
            <a
              href={SITE.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-coral px-8 py-4 text-base font-semibold text-cream transition-colors hover:bg-coral-strong"
            >
              Ouvrir Dishop dans un nouvel onglet
              <span aria-hidden="true">→</span>
            </a>
          </Reveal>

          {/* La commande se fait chez Dishop (poulcook.dishop.co) — aucun blocage de frame détecté
              côté serveur, mais la plateforme n'est pas sous notre contrôle : si l'aperçu ci-dessous
              ne charge pas correctement, le lien ci-dessus reste le chemin fiable pour commander. */}
          <Reveal delay={100} className="mt-10 overflow-hidden rounded-2xl border border-paper-line shadow-[0_30px_60px_-30px_rgba(29,29,35,0.35)]">
            <iframe
              src={SITE.orderUrl}
              title="Commander sur Poulcook — Dishop"
              className="h-[80vh] w-full"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
