import AnimeCounter from "@/components/ui/AnimeCounter";
import { FRANCHISE_STATS } from "@/data/content";

export default function FranchiseStats() {
  return (
    <dl className="grid grid-cols-1 gap-10 sm:grid-cols-3">
      {FRANCHISE_STATS.map((stat) => (
        <div key={stat.label}>
          <dt className="text-sm font-medium text-cream-dim">{stat.label}</dt>
          <dd className="mt-2 font-wide text-5xl font-extrabold tracking-tight text-ember tabular-nums sm:text-6xl">
            <AnimeCounter value={stat.value} />
            <span className="text-3xl sm:text-4xl">{stat.suffix}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
