import type { Restaurant } from "@/data/content";

/**
 * Carte d'un restaurant : ville, adresse complète, pays, lien Google Maps
 * (nouvel onglet). Utilisée dans le sélecteur de pays et l'aperçu accueil.
 */
export default function RestaurantCard({
  restaurant,
  country,
}: {
  restaurant: Restaurant;
  country: string;
}) {
  return (
    <article className="group flex flex-col justify-between gap-6 rounded-2xl border border-paper-line bg-paper p-6 transition-colors hover:border-coral/40">
      <div>
        <h3 className="font-display text-2xl tracking-tight text-ink">{restaurant.city}</h3>
        <address className="mt-3 space-y-0.5 text-sm not-italic leading-relaxed text-ink-dim">
          {restaurant.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <p className="text-ink-dim/70">{country}</p>
        </address>
      </div>
      <a
        href={restaurant.maps}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 self-start rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-coral hover:text-coral"
      >
        <svg viewBox="0 0 24 24" aria-hidden className="size-4 fill-current">
          <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
        </svg>
        Voir sur Google Maps
        <span aria-hidden>↗</span>
      </a>
    </article>
  );
}
