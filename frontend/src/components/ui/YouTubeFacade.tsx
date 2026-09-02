"use client";

import { useState } from "react";

/**
 * Façade avant lecture : affiche la vraie miniature YouTube et ne charge
 * l'iframe (et son JS) qu'au clic — évite d'alourdir la page pour une vidéo
 * que la plupart des visiteurs ne lanceront jamais.
 */
export default function YouTubeFacade({ videoId, title }: { videoId: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerate-compute; autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group relative block h-full w-full"
      aria-label={`Lire la vidéo : ${title}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        alt=""
        className="h-full w-full object-cover"
      />
      <span aria-hidden="true" className="absolute inset-0 bg-ink/25 transition-colors group-hover:bg-ink/15" />
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-coral text-cream transition-transform group-hover:scale-110"
      >
        ▶
      </span>
    </button>
  );
}
