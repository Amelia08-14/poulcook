import Parallax from "@/components/ui/Parallax";

/**
 * Lueur de braise ambiante pour les bandes "nuit" — dérive lentement en
 * arrière-plan et se déplace en profondeur avec le scroll (vitesses
 * opposées) pour éviter l'aplat mort. Geste littéral (poulet "braisé"),
 * réservé aux bandes nuit du corps de page, jamais au hero ni au footer.
 */
export default function EmberGlow() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <Parallax speed={0.12} className="absolute left-[-10%] top-[-25%] size-[55vw] max-w-2xl">
        <div className="ember-glow inset-0" />
      </Parallax>
      <Parallax speed={-0.08} className="absolute bottom-[-30%] right-[-10%] size-[45vw] max-w-xl">
        <div className="ember-glow ember-glow-secondary inset-0" />
      </Parallax>
    </div>
  );
}
