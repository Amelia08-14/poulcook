import Link from "next/link";
import SplitFlap from "@/components/ui/SplitFlap";
import Ticker from "@/components/ui/Ticker";
import { SIDES, SITE } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex min-h-[82dvh] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6">
        <SplitFlap
          as="h1"
          value={SITE.tagline.toUpperCase()}
          className="max-w-4xl font-display font-expanded text-[13vw] font-black uppercase leading-[0.92] tracking-tight text-cream sm:text-6xl md:text-7xl lg:text-8xl"
          cellClassName="w-[0.62em]"
        />

        <p className="mt-8 max-w-xl text-balance text-lg text-cream-dim">
          Poulet mariné, braisé lentement, servi avec les accompagnements maison —
          à emporter, en livraison ou sur place, tous les jours de 11h à 23h.
        </p>

        <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-coral">
          <span className="size-2 animate-pulse-dot rounded-full bg-coral" aria-hidden="true" />
          Ouvert jusqu&apos;à 23h
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={SITE.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-6 rounded-sm border border-coral bg-coral px-6 py-4 font-display font-expanded uppercase tracking-[0.14em] text-cream transition-colors hover:bg-coral-strong"
          >
            Commander
            <span aria-hidden="true" className="font-mono transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <Link
            href="/franchise"
            className="group flex items-center justify-between gap-6 rounded-sm border border-teal px-6 py-4 font-display font-expanded uppercase tracking-[0.14em] text-teal-strong transition-colors hover:border-teal-strong hover:text-cream"
          >
            Devenir franchisé
            <span aria-hidden="true" className="font-mono transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>

      <Ticker items={SIDES.map((side) => side.name)} />
    </section>
  );
}
