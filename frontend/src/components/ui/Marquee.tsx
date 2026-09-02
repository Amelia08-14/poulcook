/**
 * Bandeau défilant — le contenu (accompagnements) est déjà présenté avec une
 * vraie sémantique plus bas sur la page, donc ce bandeau est masqué aux
 * lecteurs d'écran pour éviter la redite.
 */
export default function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-paper-line bg-paper-raised py-3" aria-hidden="true">
      <ul className="flex w-max animate-marquee gap-10 whitespace-nowrap text-sm font-semibold text-ink">
        {loop.map((item, index) => (
          <li key={index} className="flex items-center gap-10">
            <span>{item}</span>
            <span className="text-coral">•</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
