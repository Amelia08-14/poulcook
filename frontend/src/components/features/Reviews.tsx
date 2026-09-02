import Reveal from "@/components/ui/Reveal";
import Blob from "@/components/ui/Blob";
import { REVIEWS } from "@/data/content";

export default function Reviews() {
  return (
    <section className="relative overflow-hidden border-t border-paper-line bg-paper-raised py-24 sm:py-32">
      <Blob color="gold" className="left-1/2 top-[-25%] size-[42vw] max-w-lg -translate-x-1/2" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal as="h2" className="text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl">
          Ce qu&apos;en disent nos clients
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <Reveal
              key={review.author}
              direction={index === 0 ? "left" : index === 1 ? "up" : "right"}
              delay={index * 100}
            >
              <figure className="flex h-full flex-col justify-between gap-8 rounded-2xl bg-paper p-8 shadow-[0_20px_45px_-25px_rgba(29,29,35,0.35)]">
                <blockquote className="text-balance text-lg leading-snug text-ink">« {review.quote} »</blockquote>
                <figcaption className="text-sm font-medium text-ink-dim">{review.author} · avis Google</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
