import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/layouts/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { HISTORY } from "@/data/content";

export const metadata: Metadata = {
  title: "Notre histoire",
  description: "L'histoire de Poulcook, le poulet braisé le plus chaud de Paname depuis 2021.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title={HISTORY.title} line="teal" />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* L'identité murale du restaurant — vraie illustration fournie par le client. */}
        <Reveal direction="zoom" className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-[0_30px_60px_-30px_rgba(29,29,35,0.35)]">
          <Image
            src="/images/photo_a_propos.jpeg"
            alt="L'univers illustré Poulcook, tel que peint sur les murs du restaurant"
            fill
            priority
            sizes="(min-width: 1024px) 72rem, 100vw"
            className="object-cover"
          />
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal direction="left" className="space-y-6 text-lg leading-relaxed text-ink-dim">
            {HISTORY.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal direction="right" delay={120} className="photo-zoom relative aspect-[4/5] overflow-hidden rounded-2xl bg-paper-raised lg:aspect-auto lg:h-full">
            <Image
              src="/images/poulcook-devanture-villier-le-be.jpg"
              alt="Le restaurant Poulcook, sur place"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <Reveal direction="zoom" delay={80} className="relative isolate mt-16 overflow-hidden rounded-[1.75rem] bg-night px-8 py-12 text-balance text-xl font-medium leading-snug text-cream sm:px-12 sm:py-14 sm:text-2xl">
          <span aria-hidden className="aurora opacity-30" />
          <span className="relative">{HISTORY.closing}</span>
        </Reveal>
      </section>
    </>
  );
}
