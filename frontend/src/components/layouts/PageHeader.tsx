import Reveal from "@/components/ui/Reveal";
import Blob from "@/components/ui/Blob";

type Line = "teal" | "coral" | "gold";

const LINE_CLASSES: Record<Line, string> = {
  teal: "bg-teal",
  coral: "bg-coral",
  gold: "bg-gold",
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
    <div className="relative overflow-hidden border-b border-paper-line bg-paper-raised">
      <Blob color={line} className="right-[-10%] top-[-30%] size-[34vw] max-w-sm" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal as="h1" className="text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {title}
        </Reveal>
        <span aria-hidden="true" className={`mt-6 block h-1 w-16 rounded-full ${LINE_CLASSES[line]}`} />
        {description && <p className="mt-6 max-w-xl text-lg text-ink-dim">{description}</p>}
      </div>
    </div>
  );
}
