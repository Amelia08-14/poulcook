import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import AnimeText from "@/components/ui/AnimeText";
import Blob from "@/components/ui/Blob";
import { SIGNATURES } from "@/data/menu";

export default function SignatureProducts() {
  return (
    <section className="relative isolate overflow-hidden border-b border-paper-line bg-paper-raised py-20 sm:py-28">
      <Blob color="coral" className="right-[-12%] top-[-10%] size-[38vw] max-w-lg" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Les incontournables</p>
          <AnimeText
            as="h2"
            text="Ce qu'on commande les yeux fermés"
            className="mt-3 max-w-2xl text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl"
          />
        </Reveal>

        <ul className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-6 lg:grid lg:grid-cols-4 lg:overflow-visible [&::-webkit-scrollbar]:hidden">
          {SIGNATURES.map((item, i) => (
            <li
              key={item.name}
              className={`w-[70vw] max-w-[300px] shrink-0 snap-start sm:w-[42vw] lg:w-auto ${
                i % 2 === 1 ? "lg:translate-y-8" : ""
              }`}
            >
              <Reveal delay={i * 80} className="h-full">
                <Link
                  href={`/menu#${item.categorySlug}`}
                  className="group block overflow-hidden rounded-2xl bg-paper outline-none ring-coral/40 focus-visible:ring-2"
                >
                  <span className="relative block aspect-[3/4] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(min-width:1024px) 22vw, 70vw"
                      className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-night/50 px-3 py-1 text-xs font-semibold text-cream backdrop-blur-sm">
                      {item.tag}
                    </span>
                  </span>
                  <span className="flex items-center justify-between gap-2 px-4 py-4">
                    <span className="font-display text-lg leading-tight text-ink">{item.name}</span>
                    <span aria-hidden className="text-ink-dim transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
