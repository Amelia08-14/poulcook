import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Stagger from "@/components/ui/Stagger";
import AnimeText from "@/components/ui/AnimeText";
import MobileCategorySlider from "@/components/features/MobileCategorySlider";
import { MENU, getCategory, type MenuCategory } from "@/data/menu";

const ACCENT_BAR: Record<MenuCategory["accent"], string> = {
  coral: "bg-coral",
  teal: "bg-teal",
  gold: "bg-gold",
};

function CategoryCard({
  cat,
  size,
}: {
  cat: MenuCategory;
  size: "xl" | "lg" | "md";
}) {
  const aspect = size === "xl" ? "aspect-[16/12] lg:aspect-auto lg:h-full" : size === "lg" ? "aspect-[4/5] lg:aspect-auto lg:h-full" : "aspect-[4/3]";
  const titleSize = size === "md" ? "text-2xl" : "text-3xl lg:text-4xl";
  return (
    <Link
      href={`/menu#${cat.slug}`}
      className="group relative block h-full overflow-hidden rounded-2xl bg-paper-raised outline-none ring-coral/40 focus-visible:ring-2"
    >
      <span className={`relative block overflow-hidden ${aspect}`}>
        <Image
          src={cat.cover}
          alt=""
          fill
          sizes={size === "md" ? "(min-width:1024px) 24vw, 90vw" : "(min-width:1024px) 42vw, 90vw"}
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
        />
        <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/20 to-night/5" />
      </span>

      <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-6">
        <span className="min-w-0">
          <span className="flex items-center gap-2.5">
            <span aria-hidden className={`h-3 w-3 shrink-0 rounded-full ${ACCENT_BAR[cat.accent]}`} />
            <span className={`block truncate font-display leading-tight text-cream ${titleSize}`}>{cat.name}</span>
          </span>
          {size !== "md" && (
            <span className="mt-1.5 block max-w-[36ch] text-sm text-cream/75">{cat.kicker}</span>
          )}
        </span>
        <span className="inline-flex shrink-0 translate-y-1 items-center gap-1.5 rounded-full bg-cream/12 px-3 py-1.5 text-xs font-semibold text-cream opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Voir <span aria-hidden>→</span>
        </span>
      </span>

      <span className="absolute right-4 top-4 rounded-full bg-night/40 px-2.5 py-1 text-xs font-semibold tabular-nums text-cream backdrop-blur-sm">
        {cat.items.length}
      </span>
    </Link>
  );
}

const BIG = ["formules", "poulet-seul"];

export default function CategoryShowcase() {
  const formules = getCategory("formules")!;
  const poulet = getCategory("poulet-seul")!;
  const mid = MENU.filter((c) => c.featured && !BIG.includes(c.slug)); // smash-burger, appetizers, accompagnements
  const small = MENU.filter((c) => !c.featured); // menu-enfant, salades, sauces, desserts, boissons

  return (
    <section id="carte" className="relative isolate overflow-hidden bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">La carte Poulcook</p>
            <AnimeText
              as="h2"
              text="Découvrez notre carte"
              className="mt-3 text-balance font-display text-4xl tracking-tight text-ink sm:text-5xl lg:text-6xl"
            />
          </div>
          <Link
            href="/menu"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-coral"
          >
            Toute la carte
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>

        {/* Mobile / tablette : slider tactile */}
        <div className="mt-10">
          <MobileCategorySlider categories={MENU} />
        </div>

        {/* Desktop : composition éditoriale asymétrique */}
        <div className="mt-4 hidden lg:block">
          <Stagger className="grid grid-cols-12 gap-5" step={90} y={34}>
            <div className="col-span-7 min-h-[26rem]">
              <CategoryCard cat={formules} size="xl" />
            </div>
            <div className="col-span-5 min-h-[26rem]">
              <CategoryCard cat={poulet} size="lg" />
            </div>
            {mid.map((cat) => (
              <div key={cat.slug} className="col-span-4">
                <CategoryCard cat={cat} size="md" />
              </div>
            ))}
          </Stagger>

          <Stagger className="mt-5 grid grid-cols-5 gap-5" step={70} y={26}>
            {small.map((cat) => (
              <Link
                key={cat.slug}
                href={`/menu#${cat.slug}`}
                className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-paper-line bg-paper-raised p-3 transition-colors hover:border-coral/40"
              >
                <span className="relative block size-14 shrink-0 overflow-hidden rounded-xl">
                  <Image src={cat.cover} alt="" fill sizes="56px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-ink">{cat.name}</span>
                  <span className="block text-xs text-ink-dim">
                    {cat.items.length} recette{cat.items.length > 1 ? "s" : ""}
                  </span>
                </span>
              </Link>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
