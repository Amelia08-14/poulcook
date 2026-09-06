import Image from "next/image";
import Link from "next/link";
import type { MenuCategory } from "@/data/menu";

/**
 * Défilement horizontal tactile des catégories (mobile / tablette).
 * Chaque carte occupe ~78vw et se cale au scroll (scroll-snap).
 */
export default function MobileCategorySlider({ categories }: { categories: MenuCategory[] }) {
  return (
    <div className="lg:hidden">
      <ul className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((cat) => (
          <li key={cat.slug} className="w-[78vw] max-w-[340px] shrink-0 snap-start sm:w-[52vw]">
            <Link
              href={`/menu#${cat.slug}`}
              className="group relative block overflow-hidden rounded-2xl bg-paper-raised"
            >
              <span className="relative block aspect-[3/4]">
                <Image
                  src={cat.cover}
                  alt=""
                  fill
                  sizes="78vw"
                  className="object-cover transition-transform duration-500 group-active:scale-105"
                />
                <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/15 to-transparent" />
              </span>
              <span className="absolute inset-x-4 bottom-4">
                <span className="block font-display text-2xl leading-tight text-cream">{cat.name}</span>
                <span className="mt-1 flex items-center gap-2 text-xs font-medium text-cream/75">
                  {cat.items.length} recette{cat.items.length > 1 ? "s" : ""}
                  <span aria-hidden>→</span>
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
