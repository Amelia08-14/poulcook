import SplitFlap from "@/components/ui/SplitFlap";

type Line = "teal" | "coral" | "gold";

const LINE_CLASSES: Record<Line, string> = {
  teal: "bg-teal",
  coral: "bg-coral",
  gold: "bg-gold",
};

export default function PageHeader({ title, line = "coral" }: { title: string; line?: Line }) {
  return (
    <div className="border-b border-board-line bg-board-raised">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SplitFlap
          as="h1"
          value={title.toUpperCase()}
          className="font-display font-expanded text-4xl uppercase leading-none tracking-tight text-cream sm:text-5xl"
          cellClassName="w-[0.6em]"
        />
        <span aria-hidden="true" className={`mt-5 block h-1 w-16 ${LINE_CLASSES[line]}`} />
      </div>
    </div>
  );
}
