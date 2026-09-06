import Reveal from "@/components/ui/Reveal";
import AnimeText from "@/components/ui/AnimeText";

type Line = "teal" | "coral" | "gold";

const LINE_CLASSES: Record<Line, string> = {
  teal: "from-teal to-teal-strong",
  coral: "from-coral to-gold",
  gold: "from-gold to-coral",
};

export default function PageHeader({
  title,
  description,
  line = "coral",
}: {
  title: string;
  description?: string;
  line?: Line;
}) {
  return (
    <header className="relative isolate overflow-hidden border-b border-paper-line bg-paper-raised">
      <div aria-hidden className="aurora" />
      {/* pt majoré : le header du site est `fixed` et flotte par-dessus. */}
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28 lg:pt-40">
        <AnimeText
          as="h1"
          text={title}
          className="text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl lg:text-6xl"
        />
        <span
          aria-hidden
          className={`mt-6 block h-1.5 w-20 rounded-full bg-gradient-to-r ${LINE_CLASSES[line]}`}
        />
        {description && (
          <Reveal as="p" delay={120} className="mt-6 max-w-xl text-lg text-ink-dim">
            {description}
          </Reveal>
        )}
      </div>
    </header>
  );
}
