import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Blob from "@/components/ui/Blob";
import { SITE, BONS_PLANS } from "@/data/content";

export default function BonsPlans() {
  return (
    <section className="relative overflow-hidden border-t border-paper-line bg-gradient-to-b from-coral/10 via-paper-raised to-paper-raised py-24 sm:py-28">
      <Blob color="coral" className="right-[-10%] top-[-20%] size-[40vw] max-w-lg" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl">Les bons plans</h2>
          <a
            href={SITE.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-coral transition-colors hover:text-coral-strong"
          >
            Commander maintenant →
          </a>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {BONS_PLANS.map((deal, index) => (
            <Reveal
              key={deal.title}
              direction={index === 0 ? "left" : "right"}
              delay={index * 100}
              className="photo-zoom relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={deal.image}
                alt={deal.title}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/70 to-transparent" />
              <p className="absolute bottom-5 left-6 text-lg font-semibold text-cream">{deal.title}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
