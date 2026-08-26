import type { Metadata } from "next";
import PageHeader from "@/components/layouts/PageHeader";
import { HISTORY } from "@/data/content";

export const metadata: Metadata = {
  title: "Notre histoire — Poulcook",
  description:
    "L'histoire de Poulcook, le poulet braisé le plus chaud de Paname depuis 2021.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title={HISTORY.title} line="teal" />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-6 text-lg leading-relaxed text-cream-dim">
          {HISTORY.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="relative mt-16 rounded-sm border-t border-dashed border-board-line bg-board-raised px-6 pb-6 pt-8 text-cream">
          <span className="absolute -top-4 left-6 flex size-8 rotate-[-8deg] items-center justify-center rounded-full border border-gold font-mono text-[9px] uppercase tracking-tighter text-gold">
            Validé
          </span>
          {HISTORY.closing}
        </div>
      </section>
    </>
  );
}
