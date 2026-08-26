type Line = "teal" | "coral" | "gold";

const LINE_CLASSES: Record<Line, string> = {
  teal: "bg-teal",
  coral: "bg-coral",
  gold: "bg-gold",
};

export function lineTextClass(line: Line) {
  return { teal: "text-teal-strong", coral: "text-coral-strong", gold: "text-gold" }[line];
}

export default function LineDot({
  line,
  className = "",
}: {
  line: Line;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block size-2.5 rounded-full ${LINE_CLASSES[line]} ${className}`}
    />
  );
}
