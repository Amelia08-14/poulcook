// Carte Poulcook — photos fournies par le client (dossier "UBER", réintégré
// proprement dans public/images/menu/<catégorie>/<plat>.jpg).
// Pas de prix ni de chiffre inventé : cf. PRODUCT.md. Les libellés reprennent
// les noms des visuels du client, nettoyés pour l'affichage.

export type MenuItem = {
  name: string;
  image: string;
  note?: string;
};

export type MenuCategory = {
  slug: string;
  name: string;
  kicker: string;
  accent: "coral" | "teal" | "gold";
  /** Visuel représentatif — vitrine de la carte, méga-menu, aperçus. */
  cover: string;
  /** Mises en avant dans la vitrine éditoriale de l'accueil. */
  featured?: boolean;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    slug: "formules",
    name: "Formules",
    kicker: "Le repas complet — poulet, accompagnement et boisson",
    accent: "coral",
    cover: "/images/menu/formules/formule-familiale.jpg",
    featured: true,
    items: [
      { name: "Formule P1", image: "/images/menu/formules/formule-p1.jpg" },
      { name: "Formule P2", image: "/images/menu/formules/formule-p2.jpg" },
      { name: "Formule familiale", image: "/images/menu/formules/formule-familiale.jpg", note: "À partager" },
    ],
  },
  {
    slug: "smash-burger",
    name: "Smash burgers",
    kicker: "Galette de poulet smashée, pain brioché toasté",
    accent: "gold",
    cover: "/images/menu/smash-burger/big-chicken.jpg",
    featured: true,
    items: [
      { name: "P Smash", image: "/images/menu/smash-burger/p-smash.jpg" },
      { name: "P Smash Green", image: "/images/menu/smash-burger/p-smash-green.jpg" },
      { name: "Big Chicken", image: "/images/menu/smash-burger/big-chicken.jpg" },
      { name: "Tower Spicy", image: "/images/menu/smash-burger/tower-spicy.jpg", note: "Bien relevé 🔥" },
    ],
  },
  {
    slug: "poulet-seul",
    name: "Poulet seul",
    kicker: "Braisé lentement, mariné maison — à la pièce ou entier",
    accent: "coral",
    cover: "/images/menu/poulet-seul/poulet-entier.jpg",
    featured: true,
    items: [
      { name: "Poulet entier", image: "/images/menu/poulet-seul/poulet-entier.jpg" },
      { name: "Demi-poulet", image: "/images/menu/poulet-seul/demi-poulet.jpg" },
      { name: "Cuisse de poulet", image: "/images/menu/poulet-seul/cuisse.jpg" },
      { name: "Pilons", image: "/images/menu/poulet-seul/pilons.jpg" },
      { name: "Big Wings", image: "/images/menu/poulet-seul/big-wings.jpg" },
    ],
  },
  {
    slug: "menu-enfant",
    name: "Menu enfant",
    kicker: "Pour les petites faims",
    accent: "teal",
    cover: "/images/menu/menu-enfant/menu-enfant.jpg",
    items: [
      { name: "Menu enfant", image: "/images/menu/menu-enfant/menu-enfant.jpg" },
    ],
  },
  {
    slug: "appetizers",
    name: "Appetizers",
    kicker: "À picorer avant, pendant, après",
    accent: "gold",
    cover: "/images/menu/appetizers/tenders.jpg",
    featured: true,
    items: [
      { name: "Tenders", image: "/images/menu/appetizers/tenders.jpg" },
      { name: "Nuggets", image: "/images/menu/appetizers/nuggets.jpg" },
      { name: "Nems de poulet", image: "/images/menu/appetizers/nems-poulet.jpg" },
      { name: "Saucisses", image: "/images/menu/appetizers/saucisses.jpg" },
      { name: "Rustic cheddar", image: "/images/menu/appetizers/rustic-cheddar.jpg" },
      { name: "Maïs", image: "/images/menu/appetizers/mais.jpg" },
    ],
  },
  {
    slug: "accompagnements",
    name: "Accompagnements",
    kicker: "Les accompagnements maison, à composer à volonté",
    accent: "teal",
    cover: "/images/menu/accompagnements/riz-poulcook.jpg",
    featured: true,
    items: [
      { name: "Bananes plantain", image: "/images/menu/accompagnements/banane-plantain.jpg" },
      { name: "Frites rustiques", image: "/images/menu/accompagnements/frites-rustiques.jpg" },
      { name: "Frites de patate douce", image: "/images/menu/accompagnements/frites-patate-douce.jpg" },
      { name: "Twister fries", image: "/images/menu/accompagnements/twister-fries.jpg" },
      { name: "Haricots verts", image: "/images/menu/accompagnements/haricots-verts.jpg", note: "Beurre et ail" },
      { name: "Pommes grenailles", image: "/images/menu/accompagnements/pommes-grenailles.jpg", note: "Persillade au beurre" },
      { name: "Pâtes forestière", image: "/images/menu/accompagnements/pates-forestiere.jpg" },
      { name: "Riz Poulcook", image: "/images/menu/accompagnements/riz-poulcook.jpg", note: "La spécialité de la maison" },
      { name: "Riz blanc", image: "/images/menu/accompagnements/riz-blanc.jpg", note: "Basmati au beurre" },
    ],
  },
  {
    slug: "salades",
    name: "Salades",
    kicker: "Fraîche et généreuse",
    accent: "teal",
    cover: "/images/menu/salades/salade.jpg",
    items: [
      { name: "Salade", image: "/images/menu/salades/salade.jpg" },
    ],
  },
  {
    slug: "sauces",
    name: "Sauces",
    kicker: "Maison, plus ou moins relevées",
    accent: "coral",
    cover: "/images/menu/sauces/spicy.jpg",
    items: [
      { name: "Sauce spicy", image: "/images/menu/sauces/spicy.jpg" },
      { name: "Sauce spicy mayo", image: "/images/menu/sauces/spicy-mayo.jpg" },
      { name: "Sauce verte", image: "/images/menu/sauces/verte.jpg" },
    ],
  },
  {
    slug: "desserts",
    name: "Desserts",
    kicker: "La dernière bouchée",
    accent: "gold",
    cover: "/images/menu/desserts/tiramisu.jpg",
    items: [
      { name: "Cookie", image: "/images/menu/desserts/cookie.jpg" },
      { name: "Tiramisu", image: "/images/menu/desserts/tiramisu.jpg" },
    ],
  },
  {
    slug: "boissons",
    name: "Boissons",
    kicker: "Pour faire descendre",
    accent: "teal",
    cover: "/images/menu/boissons/orangina.jpg",
    items: [
      { name: "Coca-Cola", image: "/images/menu/boissons/coca.jpg" },
      { name: "Coca Zero", image: "/images/menu/boissons/coca-zero.jpg" },
      { name: "Orangina", image: "/images/menu/boissons/orangina.jpg" },
      { name: "Oasis tropical", image: "/images/menu/boissons/oasis-tropical.jpg" },
      { name: "Ice Tea", image: "/images/menu/boissons/ice-tea.jpg" },
      { name: "Perrier", image: "/images/menu/boissons/perrier.jpg" },
    ],
  },
];

export const MENU_ITEM_COUNT = MENU.reduce((n, c) => n + c.items.length, 0);

export function getCategory(slug: string) {
  return MENU.find((c) => c.slug === slug);
}

/** Sélection "signatures" mise en avant sur l'accueil — vrais plats de la carte. */
export const SIGNATURES: Array<MenuItem & { tag: string; categorySlug: string }> = [
  {
    name: "Poulet entier braisé",
    image: "/images/menu/poulet-seul/poulet-entier.jpg",
    tag: "L'incontournable",
    categorySlug: "poulet-seul",
  },
  {
    name: "Formule familiale",
    image: "/images/menu/formules/formule-familiale.jpg",
    tag: "À partager",
    categorySlug: "formules",
  },
  {
    name: "Tower Spicy",
    image: "/images/menu/smash-burger/tower-spicy.jpg",
    tag: "Bien relevé 🔥",
    categorySlug: "smash-burger",
  },
  {
    name: "Riz Poulcook",
    image: "/images/menu/accompagnements/riz-poulcook.jpg",
    tag: "Spécialité de la maison",
    categorySlug: "accompagnements",
  },
];
