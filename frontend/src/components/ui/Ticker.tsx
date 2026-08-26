/**
 * Bandeau décoratif : le contenu (accompagnements) est déjà présenté
 * avec une vraie sémantique plus bas sur la page, donc ce bandeau
 * défilant est masqué aux lecteurs d'écran pour éviter la redite.
 */
export default function Ticker({ items }: { items: string[] }) {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-board-line bg-board-raised py-2.5" aria-hidden="true">
      <ul className="flex w-max animate-marquee gap-8 whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-cream-dim">
        {loop.map((item, index) => (
          <li key={index} className="flex items-center gap-8">
            <span>{item}</span>
            <span className="text-coral">•</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
