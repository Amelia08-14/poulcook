const FILLS = {
  coral: "radial-gradient(closest-side, color-mix(in srgb, var(--color-coral) 42%, transparent), transparent)",
  teal: "radial-gradient(closest-side, color-mix(in srgb, var(--color-teal) 38%, transparent), transparent)",
  gold: "radial-gradient(closest-side, color-mix(in srgb, var(--color-gold) 42%, transparent), transparent)",
} as const;

/**
 * Forme organique qui respire en fond de section — le registre "vivant"
 * demandé par le client, dans la charte Poulcook. Dégradé radial d'une seule
 * teinte de marque, jamais empilé, jamais de contenu dedans.
 */
export default function Blob({
  color = "coral",
  className = "",
}: {
  color?: keyof typeof FILLS;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`blob pointer-events-none blur-3xl ${className}`}
      style={{ background: FILLS[color] }}
    />
  );
}
