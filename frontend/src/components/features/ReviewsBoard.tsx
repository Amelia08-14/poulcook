import { REVIEWS } from "@/data/content";

export default function ReviewsBoard() {
  return (
    <section className="border-t border-board-line bg-board-raised py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 font-display font-expanded text-3xl uppercase tracking-tight text-cream sm:text-4xl">
          Les avis de nos clients
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <figure
              key={review.author}
              className="relative flex flex-col justify-between gap-6 rounded-sm bg-paper px-6 py-8 text-ink shadow-[0_18px_30px_-18px_rgba(0,0,0,0.55)]"
              style={{ transform: `rotate(${index % 2 === 0 ? "-0.6" : "0.6"}deg)` }}
            >
              <span
                aria-hidden="true"
                className="absolute -top-2 left-6 h-4 w-10 rounded-b-sm bg-gold/80"
              />
              <blockquote className="text-balance font-display text-lg leading-snug">
                « {review.quote} »
              </blockquote>
              <figcaption className="text-xs uppercase tracking-[0.2em] text-ink/60">
                — {review.author}, avis Google
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
