---
name: Poulcook
description: Poulet braisé Fast Good à Paris — produit-vedette chaleureux (Carter One + Archivo, blobs organiques, photographie réelle)
colors:
  paper: "#f2f2f2"
  paper-raised: "#e8e7e2"
  paper-line: "#d8d6cf"
  ink: "#1d1d23"
  ink-dim: "#5c5a60"
  night: "#141318"
  night-raised: "#201e25"
  cream: "#f2eee6"
  cream-dim: "#a7a49b"
  teal: "#00697f"
  teal-strong: "#1e93ac"
  coral: "#e94f36"
  coral-strong: "#ff7a5c"
  gold: "#db9423"
typography:
  display:
    fontFamily: "Carter One, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 13vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.01em"
    note: "Carter One n'a qu'une seule graisse (400) — jamais de gras forcé dessus. Réservé aux grands titres (hero, h1/h2 de section), jamais au corps de texte ni aux libellés denses."
  body:
    fontFamily: "Archivo (variable, axe wdth), system-ui, sans-serif"
    fontSize: "1rem–1.125rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  control: "9999px (pill) — boutons, inputs, badges"
  card: "1rem–2rem — cartes, images, tickets"
spacing:
  section-y: "6rem–8rem (py-24 / py-28 / py-32)"
  card-p: "1.5rem–2.5rem"
components:
  button-primary:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.cream}"
    rounded: "{rounded.control}"
    padding: "1rem 2rem"
  button-primary-hover:
    backgroundColor: "{colors.coral-strong}"
  button-secondary:
    backgroundColor: "transparent"
    border: "1px solid currentColor at 15-30% opacity"
    rounded: "{rounded.control}"
    padding: "1rem 2rem"
---

# Design System: Poulcook

## Overview

**Creative North Star : le poulet comme produit-vedette, en version chaleureuse et vivante**

Trois itérations ont mené ici. La première empruntait le langage du métro
parisien (panneaux à volets, tickets tamponnés) — jugée générique par le
client, reconnaissable comme un exercice de style plutôt que comme Poulcook.
La deuxième adoptait une grammaire produit-vedette façon Apple/Nike (photo
plein cadre, typographie éditoriale restreinte, silence visuel) — jugée trop
sage, "moins vivante" que le site réel. Cette version garde l'ossature
produit-vedette (photo plein cadre, contenu réel, pas de gadget de mise en
scène) mais y injecte la chaleur et l'énergie que le client a montrées par
deux références concrètes (sites food colorés, blobs organiques, badges
flottants) : de la couleur en fond de section (pas seulement en accent), du
mouvement continu (blobs, anneau qui tourne, bandeau défilant), une typo
d'affichage ronde et amicale (Carter One), et le vrai ton de marque (emoji 🔥
😊 conservés du site réel).

La charte confirmée par le client (teal + corail + or, logos inchangés) reste
strictement identique.

**Key Characteristics:**
- Fond papier clair dominant (#F2F2F2, fidèle au site réel) ; la nuit
  (#141318) rythme 2-3 bandes par page, jamais le fond par défaut.
- **Carter One** pour les grands titres (hero, h1 de page, h2 de section) —
  rond, amical, une seule graisse. **Archivo** pour tout le reste (corps,
  libellés, données chiffrées avec `tabular-nums`).
- **Blobs organiques** (`Blob`) qui respirent en fond de section — un par
  section clé, une seule couleur de marque chacun, jamais empilés.
- Photographie réelle du client partout où c'est possible (accompagnements,
  bons plans) ; emplacements clairement commentés "PLACEHOLDER" ou "STAND-IN"
  quand une vraie photo manque encore — jamais de fausse photo fabriquée.
- Mouvement à plusieurs registres : `Reveal` (entrée au scroll, 5 directions),
  `Blob` (respiration lente), anneau pointillé qui tourne (`ring-spin`),
  badge qui lévite (`badge-float`), bandeau défilant (`Marquee`), parallaxe
  de profondeur sur les lueurs de braise (`Parallax`). Chaque registre sert
  un usage précis — jamais un effet ajouté juste pour "faire plus vivant".
- Aucune majuscule forcée sur les titres ou le corps de texte.

## Colors

Palette de marque strictement inchangée (confirmée par le client) ; les
neutres papier/nuit portent le reste du système. Contrairement à la version
"Apple/Nike" précédente, la couleur n'est plus réservée aux seuls CTA : les
blobs et le fond teinté de "Les bons plans" mettent corail/teal/or en fond de
section, à faible opacité, jamais en aplat plein qui écraserait le texte.

### Primary
- **Corail** (`#e94f36`) : CTA "Commander", boutons pleins, chiffres franchise, blob dominant. Hover : `#ff7a5c`.

### Secondary
- **Teal** (`#00697f`) : accents secondaires, liens de confirmation, blobs. Hover : `#1e93ac`.

### Tertiary
- **Or** (`#db9423`) : accent plus rare (barre sous les titres contact/mentions légales, un blob).

### Neutral
- **Papier** (`#f2f2f2`) : fond par défaut de toutes les pages.
- **Papier Surélevé** (`#e8e7e2`) : cartes, bandeaux de section.
- **Ligne de Papier** (`#d8d6cf`) : bordures et séparateurs.
- **Encre** (`#1d1d23`) : texte principal.
- **Encre Estompée** (`#5c5a60`) : texte secondaire, teintée depuis l'encre — jamais un gris neutre.
- **Nuit** (`#141318`) / **Nuit Surélevée** (`#201e25`) : bandes sombres ponctuelles (hero, preuve sociale, franchise, footer).
- **Crème** (`#f2eee6`) / **Crème Estompée** (`#a7a49b`) : texte sur les bandes nuit.

### Named Rules
**La règle du blob unique.** Un blob = une couleur de marque, jamais un
dégradé multi-teintes ; 1 à 2 blobs par section, jamais plus, sinon la
section devient illisible.

**La règle de la bande nuit.** La nuit n'est jamais le fond par défaut d'une
page ; elle rythme 2-3 bandes par page pour faire respirer le défilement.

## Typography

**Display Font:** Carter One (Google Font, graisse unique 400), auto-hébergée via `next/font`.
**Body & Data Font:** Archivo (variable, axe `wdth`), auto-hébergée via `next/font`.

**Character:** Carter One porte les grands titres identitaires — le hero, les
h1 de page (`PageHeader`), les h2 de section. C'est une police à une seule
graisse : ne jamais lui appliquer `font-bold`/`font-extrabold`, sa rondeur
porte déjà le poids visuel. Elle ne descend jamais dans la hiérarchie en
dessous du niveau "Title" : les sous-titres denses (ex. les 5 piliers
franchise), les paragraphes, les libellés restent en Archivo — une police
d'affichage utilisée partout devient illisible et perd son impact de
signature. Archivo porte tout le reste : corps de texte, libellés,
navigation, et les données réelles avec `tabular-nums` (jamais de police
mono).

### Hierarchy
- **Display** (Carter One 400, `clamp(2.25rem, 13vw, 6rem)`, 0.95) : titre du hero uniquement.
- **Title** (Carter One 400, 1.875–3rem, 1.1) : h1 de page et h2 de section.
- **Subtitle** (Archivo 700, 1.125–1.25rem, 1.3) : sous-titres denses (piliers franchise), jamais Carter One.
- **Body** (Archivo 400, 1–1.125rem, 1.6) : texte courant, mesure ~65ch.
- **Label** (Archivo 500, 0.875rem) : navigation, libellés de formulaire.
- **Data** (Archivo 700–800, `tabular-nums`) : chiffres franchise, téléphones, prix.

### Named Rules
**La règle de la graisse unique.** Carter One n'a qu'un poids ; ne jamais
lui superposer `font-bold` ou `font-extrabold` (aucun effet, ou rendu
approximatif selon le navigateur).

**La règle de la retenue.** Une police de caractère n'est mémorable que si
elle reste rare : réservée au niveau "Title" et au-dessus, jamais à un
sous-titre récurrent dans une grille dense.

## Layout

Conteneur max `80rem` (max-w-7xl), padding horizontal `1rem` (mobile) à
`2rem` (desktop). Rythme vertical de section généreux : `6rem` à `8rem` de
padding haut/bas (`py-24` à `py-32`). Grilles asymétriques (image + liste,
texte + stats) plutôt qu'une grille de cartes identiques par défaut.

## Elevation & Depth

Fond papier plat par défaut. Les cartes qui se détachent du fond (avis
clients, ticket de commande) portent une ombre teintée et diffuse
(`shadow-[0_20px_45px_-25px_rgba(29,29,35,0.35)]`), jamais un aplat noir à 0
flou. Les blobs sont flous (`blur-3xl`) et semi-transparents (16-20%
d'opacité) — jamais un aplat de couleur net qui concurrencerait le texte.

## Shapes

Angles généreux et cohérents : contrôles (boutons, inputs, badges) en pilule
(`rounded-full`), cartes et images en `rounded-2xl`/`rounded-[2rem]`.

## Components

### Boutons
- **Forme :** pilule (`rounded-full`), padding généreux.
- **Primaire :** fond corail plein, texte crème, libellé Archivo en casse mixte.
- **Secondaire :** contour clair/sombre selon le fond, remplissage discret au survol.
- **Hover/Focus :** transition de couleur 200ms ; la flèche `→` glisse au survol.

### Reveal (composant signature du scroll)
Entrée au défilement (`IntersectionObserver`) avec léger rebond, déclinée en
5 directions (`up`, `down`, `left`, `right`, `zoom`) choisies pour que les
blocs d'une même section arrivent de côtés différents plutôt que le même
fondu répété. Respecte `prefers-reduced-motion`.

### Blob (fond vivant)
Forme organique molle qui pivote et change de courbure lentement
(`blob-morph`, 22s). Décoratif uniquement, jamais de contenu dedans, jamais
plus de 2 par section. Un seul dégradé radial par blob, dans une couleur de
marque.

### Badge flottant + anneau tournant
`DiscountBadge` : lévitation douce (`badge-float`), toujours sur un fait réel
(ex. -10% première commande app) — jamais un chiffre inventé. L'anneau
pointillé qui tourne en continu (`ring-spin`, 18s linéaire) est réservé au
badge "Depuis 2021" du hero — le seul geste "circulaire" littéral du site,
jamais répété ailleurs.

### Marquee (bandeau défilant)
Défilement continu horizontal des noms d'accompagnements sous le hero —
`aria-hidden`, car le même contenu existe déjà avec une vraie sémantique plus
bas sur la page.

### Parallax
Décale un bloc selon sa distance au centre de l'écran, à une vitesse propre
au scroll de la page — utilisé uniquement pour donner de la profondeur aux
lueurs de braise (`EmberGlow`) dans les bandes nuit, jamais sur du texte.

### Flame (braise littérale)
Icône flamme (Heroicons, dégradé or→corail) qui vacille en continu
(`flame-flicker`, 2.4s) — reprend l'élément flamme du logo. Réservée à un
accent ponctuel (l'indicateur "Ouvert jusqu'à 23h" du hero), jamais un motif
répété partout.

### LogoPattern (mur de franchise)
Le logo rond répété en fond très clair (6% d'opacité), qui dérive lentement
(`logo-pattern-drift`, 40s) — évoque le mur illustré du vrai restaurant.
Réservé à une section par page (`Accompagnements` sur l'accueil), jamais un
fond par défaut.

### Cartes papier (avis, ticket de commande)
- **Fond :** papier ou papier surélevé, texte encre.
- **Angles :** généreux (`rounded-2xl`), sans rotation ni tampon décoratif.

### Navigation
Nav horizontale sobre : logo à gauche, liens Archivo en casse mixte au
centre/droite, CTA plein en corail à droite. Se condense légèrement au
scroll (padding et logo réduits, ombre discrète). Mobile : panneau plein
écran. Pas de kicker/eyebrow au-dessus des titres — une barre de couleur
sous le titre (`PageHeader`) suffit.

## Ton et contenu

Le ton reste celui du site réel, emoji compris (🔥, 😊) — ce n'est pas un tic
à nettoyer, c'est la voix "jeune et convivial" documentée dans PRODUCT.md.
Ne jamais inventer de fait (note, prix, chiffre) pour un badge ou un
callout : chaque preuve affichée (remise -10%, "Depuis 2021", chiffres
franchise) vient de PRODUCT.md.

## Photographie

**Livrées par le client et intégrées :**
- `accompagnement/*` (7 fichiers) — grille `Accompagnements` (accueil + `/menu`) et photo d'appoint dans `AppDownload`.
- `bon-plan-plantain.jpeg`, `bon-plan-haricots-verts.jpeg` — visuels "meal deal" dans `BonsPlans`.
- `slide-f.jpg` (flatlay poulet + accompagnements) — stand-in plein cadre du hero, en attendant la vidéo au scroll que le client prépare.
- `photo_a_propos.jpeg` — l'illustration murale du restaurant (identité graphique réelle), en bannière sur la page À propos.
- `poulcook-devanture-villier-le-be.jpg` — intérieur du restaurant, page À propos.
- `2.jpg` — devanture de nuit avec file d'attente, page Franchise (preuve de fréquentation réelle).
- `3.jpg` et `IMG-2-1-1-*.jpg` — photos Nasdas/team, en appoint sous la vidéo de preuve sociale.
- `image00012.jpg` — gros plan poulet, page Contact.

**Hero vidéo au scroll :** construit à partir du montage définitif fourni par
le client (`frontend/public/videos/video-hero.mp4`, ~15,1s — Paris → cuisine
→ décollage → survol Casablanca → survol Alger → livraison "partout dans le
monde"). Exporté tel quel (aucun recadrage/montage supplémentaire) en 226
images WebP (`frontend/public/videos/hero/frames/frame_0001.webp` …),
pilotées image par image par la position de scroll (`Hero.tsx`, GSAP
ScrollTrigger + Lenis). Aucune vidéo n'est servie au visiteur : seules les
images le sont, ce qui évite le poids et les problèmes de lecture
automatique d'un `<video>`.

Commande d'extraction (à relancer si le client fournit un nouveau montage —
adapter aussi les repères de `LOCATION_LABELS` dans `Hero.tsx` si le minutage
des villes change) :
```
ffmpeg -i video-hero.mp4 -vf "fps=15,scale=1280:-2" -c:v libwebp -quality 78 hero/frames/frame_%04d.webp
```

**Noms de ville au scroll :** `Hero.tsx` affiche brièvement "Paris",
"Casablanca", "Alger" puis "Partout dans le monde" (persiste jusqu'à la fin),
calés sur les repères temporels du montage (`LOCATION_LABELS`, en secondes
converties en fraction de progression). Un seul nom visible à la fois,
toujours en haut à gauche, jamais superposé au slogan (qui vit dans
`HeroSlogan`, après le hero).

**Poids :** `video-hero.mp4` (~57 Mo) reste dans `public/videos/` mais n'est
lié par aucune page — seules les 226 frames (~16 Mo) sont servies. À déplacer
hors de `public/` avant mise en prod si on veut éviter de le déployer pour
rien (déplacement non fait ici : c'est un fichier fourni par le client, pas
à supprimer sans le lui demander).

## Commande en ligne

`/menu` récapitule les accompagnements réels (photos + noms, jamais de prix
inventés) et intègre `poulcook.dishop.co` en `<iframe>` sous un bouton
"Ouvrir dans un nouvel onglet" toujours visible. Dishop n'envoie pas de
`X-Frame-Options`/CSP bloquant l'iframe côté serveur (vérifié), mais la
plateforme n'est pas sous notre contrôle et pourrait bloquer l'affichage en
frame côté client (JS) sans prévenir — le lien de secours doit donc rester
au moins aussi visible que l'iframe, jamais relégué en petit texte en dessous.

## Do's and Don'ts

### Do:
- **Do** garder toutes les valeurs de marque (couleurs, chiffres franchise, avis, coordonnées, emoji du ton réel) strictement identiques au site actuel.
- **Do** réserver Carter One au niveau "Title" et au-dessus ; Archivo pour tout le reste.
- **Do** garder chaque badge/callout adossé à un fait réel (PRODUCT.md), jamais un chiffre "pour faire joli".
- **Do** traiter la nuit et les blobs comme des bandes/touches ponctuelles de rythme, jamais comme le fond par défaut.

### Don't:
- **Don't** appliquer `font-bold`/`font-extrabold` à Carter One (graisse unique).
- **Don't** descendre Carter One dans une grille dense de sous-titres répétés.
- **Don't** réintroduire de bordure colorée à gauche des cartes/callouts.
- **Don't** fabriquer de fausses captures d'écran, fausses vidéos, ou faux avis/notes — emplacements clairement à fournir.
- **Don't** empiler plus de 2 blobs par section, ni un dégradé multi-teintes dans un seul blob.
