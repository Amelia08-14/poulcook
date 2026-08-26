import Link from "next/link";
import SplitFlap from "@/components/ui/SplitFlap";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60dvh] max-w-2xl flex-col items-center justify-center px-4 text-center">
      <SplitFlap
        as="h1"
        value="VOIE FERMÉE"
        className="justify-center font-display font-expanded text-4xl uppercase tracking-tight text-cream sm:text-5xl"
        cellClassName="w-[0.62em]"
      />
      <p className="mt-6 max-w-sm text-cream-dim">
        Cette page n&apos;existe pas ou plus. Direction le quai principal ?
      </p>
      <Link
        href="/"
        className="mt-8 rounded-sm border border-teal px-6 py-3 font-display font-expanded uppercase tracking-[0.14em] text-teal-strong transition-colors hover:border-teal-strong hover:text-cream"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
