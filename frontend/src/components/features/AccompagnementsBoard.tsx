import SplitFlap from "@/components/ui/SplitFlap";
import { SIDES } from "@/data/content";

export default function AccompagnementsBoard() {
  return (
    <section className="border-t border-board-line bg-board py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex items-baseline justify-between gap-4">
          <h2 className="font-display font-expanded text-3xl uppercase tracking-tight text-cream sm:text-4xl">
            Nos accompagnements
          </h2>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-cream-dim">
            {SIDES.length} sur le tableau
          </span>
        </div>

        <div className="overflow-hidden rounded-sm border border-board-line">
          <div className="hidden grid-cols-[3rem_1fr_2fr] gap-4 border-b border-board-line bg-board-raised px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cream-dim sm:grid">
            <span>Voie</span>
            <span>Accompagnement</span>
            <span>Détail</span>
          </div>

          <ul>
            {SIDES.map((side, index) => (
              <li
                key={side.name}
                className="grid grid-cols-[3rem_1fr] gap-4 border-b border-board-line px-4 py-4 last:border-b-0 sm:grid-cols-[3rem_1fr_2fr] sm:items-center"
              >
                <SplitFlap
                  as="span"
                  value={String(index + 1).padStart(2, "0")}
                  startDelay={index * 60}
                  className="font-mono text-lg text-gold"
                  cellClassName="w-[0.62em]"
                />
                <span className="font-display font-expanded uppercase tracking-[0.06em] text-cream">
                  {side.name}
                </span>
                <span className="col-span-2 text-sm text-cream-dim sm:col-span-1">{side.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
