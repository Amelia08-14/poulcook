/**
 * Badge flottant posé sur une photo — reprend un fait réel (remise app 10%,
 * cf. PRODUCT.md) plutôt qu'un chiffre inventé pour faire joli.
 */
export default function DiscountBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`badge-float pointer-events-none flex items-center gap-3 rounded-2xl bg-paper px-4 py-3 shadow-[0_20px_40px_-16px_rgba(0,0,0,0.5)] ${className}`}
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-coral text-sm font-extrabold text-cream">
        -10%
      </span>
      <span className="text-xs font-semibold leading-tight text-ink">
        sur votre
        <br />
        1ère commande app
      </span>
    </div>
  );
}
