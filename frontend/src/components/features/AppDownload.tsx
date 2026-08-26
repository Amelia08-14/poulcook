import SplitFlap from "@/components/ui/SplitFlap";
import { SITE } from "@/data/content";

export default function AppDownload() {
  return (
    <section className="border-t border-board-line bg-board py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
        <div>
          <h2 className="font-display font-expanded text-3xl uppercase tracking-tight text-cream sm:text-4xl">
            Retrouvez vos meilleurs plats sur l&apos;application Poulcook
          </h2>
          <p className="mt-4 max-w-md text-cream-dim">
            Bienvenue — profitez de 10% de réduction sur votre première commande passée
            depuis l&apos;application.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={SITE.appStoreUrl}
              className="rounded-sm border border-board-line px-5 py-3 text-xs uppercase tracking-[0.15em] text-cream transition-colors hover:border-teal hover:text-teal-strong"
            >
              App Store
            </a>
            <a
              href={SITE.playStoreUrl}
              className="rounded-sm border border-board-line px-5 py-3 text-xs uppercase tracking-[0.15em] text-cream transition-colors hover:border-teal hover:text-teal-strong"
            >
              Google Play
            </a>
          </div>
        </div>

        {/* Ticket stylisé plutôt qu'une fausse capture d'écran — à remplacer par une vraie capture fournie par le client. */}
        <div className="mx-auto w-full max-w-[220px] rotate-[-2deg]">
          <div className="rounded-sm bg-paper px-6 py-8 text-ink shadow-[0_24px_40px_-20px_rgba(0,0,0,0.6)]">
            <p className="text-xs uppercase tracking-[0.25em] text-ink/50">Poulcook · à emporter</p>
            <SplitFlap
              as="div"
              value="COMMANDE"
              className="mt-3 font-display font-expanded text-2xl uppercase tracking-tight text-coral"
              cellClassName="w-[0.62em] bg-transparent! before:hidden"
            />
            <div className="mt-4 border-t border-dashed border-ink/20 pt-4 text-sm text-ink/70">
              <p>1 × Poulet braisé</p>
              <p>1 × Riz Poulcook</p>
              <p>1 × Frites de patates douces</p>
            </div>
            <p className="mt-4 font-mono text-xs text-ink/50">-10% · 1ère commande via l&apos;app</p>
          </div>
        </div>
      </div>
    </section>
  );
}
