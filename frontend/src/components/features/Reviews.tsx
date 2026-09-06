import Reveal from "@/components/ui/Reveal";
import Stagger from "@/components/ui/Stagger";
import AnimeText from "@/components/ui/AnimeText";
import Blob from "@/components/ui/Blob";
import { REVIEWS } from "@/data/content";

export default function Reviews() {
  return (
    <section className="relative isolate overflow-hidden border-t border-paper-line bg-paper py-24 sm:py-32">
      <Blob color="gold" className="left-1/2 top-[-25%] size-[42vw] max-w-lg -translate-x-1/2" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <AnimeText
            as="h2"
            text="Ce qu'en disent nos clients"
            className="text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl"
          />
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-3" step={110}>
          {REVIEWS.map((review) => (
            <figure
              key={review.author}
              className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-paper-line bg-paper-raised p-8 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <span aria-hidden className="font-display text-5xl leading-none text-ember">“</span>
              <blockquote className="-mt-6 text-balance text-lg leading-snug text-ink">{review.quote}</blockquote>
              <figcaption className="text-sm font-medium text-ink-dim">{review.author} · avis Google</figcaption>
            </figure>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
