const FILLS = {
  coral: "bg-coral/18",
  teal: "bg-teal/16",
  gold: "bg-gold/20",
} as const;

/**
 * Forme organique qui respire en fond de section — le registre "vivant"
 * demandé par le client, dans la charte Poulcook plutôt que les orange/jaune
 * génériques des références. Décoratif uniquement : jamais de contenu dedans.
 */
export default function Blob({
  color = "coral",
  className = "",
}: {
  color?: keyof typeof FILLS;
  className?: string;
}) {
  return <div aria-hidden="true" className={`blob pointer-events-none blur-3xl ${FILLS[color]} ${className}`} />;
}
