// Contenu repris tel quel de poulcook.com (capturé le 2026-08-26) + adresses
// des restaurants fournies par le client (2026-09).
// Ne pas inventer de nouveaux chiffres, adresses ou témoignages : cf. PRODUCT.md.

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/menu", label: "La Carte" },
  { href: "/contact", label: "Nos restaurants" },
  { href: "/a-propos", label: "PoulCook" },
  { href: "/franchise", label: "Franchise" },
];

export const NASDAS_VIDEO_ID = "6FAP3HsDjvg";

export const SITE = {
  name: "Poulcook",
  tagline: "le poulet le plus chaud de Paname !",
  email: "contact@poulcook.com",
  phones: ["01 72 38 25 49", "01 34 19 10 18"],
  hours: "Lundi – Dimanche · 11h00 – 23h00",
  founded: 2021,
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/poulcook/" },
    { label: "Snapchat", href: "https://t.snapchat.com/9RedHyPm" },
    { label: "Youtube", href: "https://www.youtube.com/@poulcook/featured" },
    { label: "Tiktok", href: "https://www.tiktok.com/@poulcook" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  ],
};

// ---------------------------------------------------------------------------
// Nos restaurants — France, Algérie, Maroc (adresses fournies par le client).
// Le lien Maps s'ouvre toujours dans un nouvel onglet (cf. page Contact).
// ---------------------------------------------------------------------------

export type Restaurant = {
  city: string;
  lines: string[];
  maps: string;
};

export type Country = {
  code: "fr" | "dz" | "ma";
  name: string;
  flag: string;
  blurb: string;
  restaurants: Restaurant[];
};

export const COUNTRIES: Country[] = [
  {
    code: "fr",
    name: "France",
    flag: "🇫🇷",
    blurb: "Là où tout a commencé, en 2021 — le poulet le plus chaud de Paname.",
    restaurants: [
      {
        city: "Paris",
        lines: ["253 Rue de Belleville", "75019 Paris"],
        maps: "https://maps.app.goo.gl/EbeE6eDThNvCrgd36",
      },
      {
        city: "Saint-Denis",
        lines: ["41 Rue Guynemer", "93200 Saint-Denis"],
        maps: "https://maps.app.goo.gl/8LACG5yd8asqyvUu5",
      },
      {
        city: "Villiers-le-Bel",
        lines: ["11 Av. de la Concorde", "95400 Villiers-le-Bel"],
        maps: "https://maps.app.goo.gl/RKNxGWd6zcT19Ph9A",
      },
      {
        city: "Creil",
        lines: ["29 Rue Gambetta", "60100 Creil"],
        maps: "https://maps.app.goo.gl/YgmWnKph1gKqcjGH8",
      },
    ],
  },
  {
    code: "dz",
    name: "Algérie",
    flag: "🇩🇿",
    blurb: "Le braisé PoulCook débarque sur les hauteurs d'Alger.",
    restaurants: [
      {
        city: "Alger — El Biar",
        lines: ["36 Rue Mohamed Chabane", "El Biar 16000"],
        maps: "https://maps.app.goo.gl/UuytXR9KykAH9nu38",
      },
    ],
  },
  {
    code: "ma",
    name: "Maroc",
    flag: "🇲🇦",
    blurb: "Cap sur Casablanca, face à l'océan.",
    restaurants: [
      {
        city: "Casablanca",
        lines: ["Rue Ibnou Jahir", "Casablanca 20500"],
        maps: "https://maps.app.goo.gl/pZ2doAWLTD9XV5CZA",
      },
    ],
  },
];

export const RESTAURANT_COUNT = COUNTRIES.reduce((n, c) => n + c.restaurants.length, 0);

export const REVIEWS = [
  {
    quote:
      "Restaurant magnifique ! Très bon poulet ! Un accueil avec le sourire ! A essayer le plus vite possible.",
    author: "Yohann B.",
  },
  {
    quote:
      "Le poulet est super bien cuit et croustillant. Les haricots verts sont bien cuisinés et ont du goût. Et c'est pas cher.",
    author: "Nathalie C.",
  },
  {
    quote:
      "Le poulet y est délicieux et les prix sont abordables. L'équipe est souriante et le patron accessible et arrangeant.",
    author: "Clecle",
  },
];

export const FRANCHISE_STATS = [
  { value: 7, suffix: " ans", label: "Contrat" },
  { value: 15, suffix: "K€", label: "Droits d'entrée" },
  { value: 7, suffix: "", label: "Restaurants" },
];

export const FRANCHISE_PILLARS = [
  {
    title: "Communication digitale puissante",
    text: "Avec plus de 20 000 abonné(e)s sur nos réseaux sociaux, notre présence en ligne est un véritable atout pour propulser votre succès. En intégrant notre franchise, vous bénéficierez d'une stratégie de communication éprouvée qui a déjà attiré une audience engagée et fidèle.",
  },
  {
    title: "Concept innovant",
    text: "Chez Poulcook, vivez les good vibes et explorez une fusion audacieuse centrée sur le poulet braisé. Chaque bouchée est un voyage en soi. Inspirés par le concept de « Fast Good », nous avons repensé la restauration rapide pour vous offrir une expérience de poulet braisé rapide, pratique et délicieuse, sans compromis sur la qualité !",
  },
  {
    title: "Savoir-faire unique",
    text: "Notre équipe a développé des techniques culinaires exclusives pour préparer notre poulet braisé avec une perfection inégalée. Chaque morceau est mariné avec soin, puis cuit selon des méthodes secrètes qui lui confèrent une tendreté et une saveur incomparables.",
  },
  {
    title: "Collaboration avec les meilleurs",
    text: "Poulcook met en place une stratégie digitale solide, à travers laquelle nous partageons notre style de vie et notre philosophie via les réseaux sociaux. Nous établissons des collaborations avec de nombreux influenceurs de renommée nationale et locale.",
  },
  {
    title: "Une forte identité de marque",
    text: "Poulcook se distingue par une identité de marque puissante. Nos valeurs, notre personnalité et notre vision sont clairement définies, créant ainsi une connexion profonde avec notre public, reconnue et appréciée par nos clients.",
  },
];

export const HISTORY = {
  title: "La naissance de Poulcook",
  paragraphs: [
    "C'est l'histoire de 2 amis d'enfance qui ont toujours travaillé dans le domaine de la restauration, de la communication à l'agroalimentaire en passant par la vente de matériel CHR. Les fondateurs ont peu à peu gravi les échelons et acquis des connaissances précieuses en matière de restauration.",
    "Passionnés de street food depuis l'adolescence, c'est ensemble qu'ils ont eu l'idée d'un nouveau concept : POULCOOK. Au cœur de leur concept, un ingrédient phare : le poulet, qu'il soit grillé, frit ou en bun, cet ingrédient emblématique de la restauration est remis au goût du jour tout en simplicité. Ils revisitent ainsi le poulet du dimanche pour le plaisir des papilles de leur clientèle.",
    "Depuis nos débuts, nous avons travaillé sans relâche pour créer une expérience gustative inégalée. Chaque morceau de poulet est soigneusement sélectionné, mariné avec des épices savamment choisies, puis braisé lentement jusqu'à ce qu'il atteigne une tendreté parfaite. Notre secret réside dans notre savoir-faire artisanal et notre passion pour la cuisine de qualité.",
    "Notre succès repose sur la confiance de nos clients qui reviennent régulièrement pour savourer notre poulet braisé inimitable. Depuis 2021, nous sommes fiers d'être considérés comme le repère incontournable des amateurs de poulet braisé à Paname.",
  ],
  closing:
    "Chez Poulcook, nous nous engageons à offrir des aliments de qualité, sélectionnés avec soin pour garantir une expérience culinaire exceptionnelle. Nous visons l'excellence en offrant des plats authentiques préparés avec passion. La satisfaction de nos clients est notre priorité absolue.",
};

export const CONTACT_INTRO = {
  title: "Nos restaurants",
  text: "Poulcook, c'est aujourd'hui la France, l'Algérie et le Maroc — le même poulet braisé, du même savoir-faire, servi avec le sourire.",
};

export const HOW_HEARD_OPTIONS = [
  "Recommandation",
  "Réseaux sociaux",
  "Site internet",
  "Salon",
  "Autres",
];
