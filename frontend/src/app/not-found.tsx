import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70dvh] max-w-2xl flex-col items-center justify-center px-4 pt-20 text-center">
      <h1 className="text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl">Page introuvable</h1>
      <p className="mt-6 max-w-sm text-lg text-ink-dim">Cette page n&apos;existe pas ou plus. Direction l&apos;accueil ?</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-3 rounded-full border border-ink/15 px-8 py-4 text-base font-semibold text-ink transition-colors hover:border-ink/40"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
