import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Blob from "@/components/ui/Blob";
import { SITE } from "@/data/content";

export default function AppDownload() {
  return (
    <section className="relative overflow-hidden border-t border-paper-line bg-paper py-24 sm:py-32">
      <Blob color="teal" className="right-[-15%] top-[10%] size-[36vw] max-w-md" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal direction="left">
          <h2 className="text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl">
            Retrouvez vos meilleurs plats sur l&apos;application Poulcook
          </h2>
          <p className="mt-5 max-w-md text-lg text-ink-dim">
            10% de réduction sur votre première commande passée depuis l&apos;application.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={SITE.appStoreUrl}
              className="rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/40"
            >
              App Store
            </a>
            <a
              href={SITE.playStoreUrl}
              className="rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/40"
            >
              Google Play
            </a>
          </div>
        </Reveal>

        <Reveal direction="right" delay={100} className="relative mx-auto w-full max-w-[320px]">
          {/* Photo réelle en retrait, pour que le ticket ne flotte pas seul sur du vide. */}
          <div className="photo-zoom absolute -left-6 top-8 hidden aspect-square w-32 -rotate-6 overflow-hidden rounded-2xl shadow-[0_20px_40px_-20px_rgba(29,29,35,0.4)] sm:block">
            <Image src="/images/accompagnement/riz-poulcook.jpeg" alt="" fill sizes="128px" className="object-cover" />
          </div>

          {/* Ticket stylisé plutôt qu'une fausse capture d'écran — à remplacer par une vraie capture fournie par le client. */}
          <div className="relative ml-auto w-full max-w-[280px] rounded-[2rem] border border-paper-line bg-paper-raised p-3 shadow-[0_30px_60px_-30px_rgba(29,29,35,0.35)]">
            <div className="rounded-[1.5rem] bg-paper p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-dim/70">Poulcook · à emporter</p>
              <p className="mt-3 text-2xl font-bold text-coral">Commande</p>
              <div className="mt-5 space-y-2 border-t border-dashed border-ink/15 pt-5 text-sm text-ink-dim">
                <p>1 × Poulet braisé</p>
                <p>1 × Riz Poulcook</p>
                <p>1 × Frites de patates douces</p>
              </div>
              <p className="mt-5 text-sm font-semibold text-teal">-10% sur la 1ère commande via l&apos;app</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
