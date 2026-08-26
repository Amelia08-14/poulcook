export default function SocialProof() {
  return (
    <section className="border-t border-board-line bg-board py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-display font-expanded text-2xl uppercase tracking-tight text-cream sm:text-3xl">
          Poulcook validé par Nasdas et sa team 🔥
        </h2>

        {/* Emplacement vidéo — brancher l'ID YouTube/Instagram réel fourni par le client. */}
        <div className="mx-auto mt-8 flex aspect-video max-w-2xl items-center justify-center rounded-sm border border-dashed border-board-line bg-board-raised">
          <button
            type="button"
            className="flex size-16 items-center justify-center rounded-full bg-coral text-cream transition-transform hover:scale-105"
            aria-label="Lire la vidéo"
          >
            ▶
          </button>
        </div>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.15em] text-cream-dim">
          Vidéo à intégrer — lien YouTube / Instagram à fournir
        </p>
      </div>
    </section>
  );
}
