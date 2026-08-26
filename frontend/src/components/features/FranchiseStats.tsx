import SplitFlap from "@/components/ui/SplitFlap";
import { FRANCHISE_STATS } from "@/data/content";

export default function FranchiseStats() {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-board-line bg-board-line sm:grid-cols-3">
      {FRANCHISE_STATS.map((stat, index) => (
        <div key={stat.label} className="bg-board-raised px-6 py-8 text-center">
          <SplitFlap
            as="div"
            value={`${stat.value}${stat.suffix}`}
            startDelay={index * 150}
            className="justify-center font-mono text-4xl font-bold text-coral sm:text-5xl"
            cellClassName="w-[0.68em]"
          />
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-cream-dim">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
