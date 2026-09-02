import CountUp from "@/components/ui/CountUp";
import { FRANCHISE_STATS } from "@/data/content";

export default function FranchiseStats() {
  return (
    <dl className="grid grid-cols-1 gap-10 sm:grid-cols-3">
      {FRANCHISE_STATS.map((stat) => (
        <div key={stat.label}>
          <dt className="text-sm font-medium text-cream-dim">{stat.label}</dt>
          <dd className="mt-2 font-wide text-5xl font-extrabold tracking-tight text-coral-strong tabular-nums sm:text-6xl">
            <CountUp value={stat.value} />
            <span className="text-3xl sm:text-4xl">{stat.suffix}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
