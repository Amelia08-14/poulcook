---
name: Poulcook
description: Poulet braisé Fast Good à Paris — refonte inspirée du panneau à volets (split-flap) du métro parisien
colors:
  board: "#0d1012"
  board-raised: "#16191c"
  board-line: "#272c30"
  teal: "#00697f"
  teal-strong: "#1e93ac"
  coral: "#e94f36"
  coral-strong: "#ff7a5c"
  gold: "#db9423"
  cream: "#f2eee6"
  cream-dim: "#a7a49b"
  paper: "#f0ede4"
  ink: "#1d1d23"
typography:
  display:
    fontFamily: "Archivo (variable, axe wdth), system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 13vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 125 pour les titres, 80 pour les variantes condensées"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1rem–1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Space Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.1em–0.3em"
rounded:
  sm: "2px"
  phone: "1.75rem"
spacing:
  section-y: "5rem"
  card-p: "1.5rem–2rem"
components:
  button-primary:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.cream}"
    rounded: "{rounded.sm}"
    padding: "1rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.coral-strong}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.teal-strong}"
    rounded: "{rounded.sm}"
    padding: "1rem 1.5rem"
---

# Design System: Poulcook

## Overview

**Creative North Star: "Le quai de gare parisien"**

Poulcook refuse la grille générique des sites de livraison (photo plein cadre, dégradé rouge/jaune, cartes arrondies façon appli de VTC). À la place, le site emprunte le langage graphique du métro parisien : panneaux à volets (split-flap) qui claquent pour révéler menu, prix et statut de commande, plan de ligne pour la navigation, tickets et composteurs pour les preuves sociales. Le mouvement fait la démonstration plutôt que l'illustration — c'est la marque du site, pas une décoration ajoutée après coup.

La charte existante (teal + corail, logo flamme/anneaux) est préservée à l'identique ; c'est le monde visuel autour d'elle qui change. Rejeté explicitement : le kicker/eyebrow générique au-dessus des titres (le titre porte lui-même son poids), les bordures colorées à gauche des cartes, le mono utilisé comme costume "tech" sur du texte qui n'est pas une donnée.

**Key Characteristics:**
- Fond quasi-noir dominant (~70% de la surface), jamais de sections claires en pleine largeur — seuls des "tickets" papier ponctuels (avis, ticket de commande) apportent le contraste clair
- Chiffres et données réelles (statistiques franchise, numéros de voie, horaires) en Space Mono tabulaire, jamais le texte courant
- Chaque gros titre passe par l'animation split-flap signature au montage

## Colors

Palette verrouillée par la charte client (teal + corail extraits du logo et du site existant) + les neutres de quai qui portent le reste du système.

### Primary
- **Corail Braise** (`#e94f36`) : couleur de la flamme du logo et de tous les CTA ("Commander", boutons pleins, chiffres split-flap). Hover : **Corail Vif** (`#ff7a5c`).

### Secondary
- **Teal Profond** (`#00697f`) : couleur des anneaux du logo, utilisée pour la ligne "franchise"/liens secondaires et les CTA outline. Hover : **Teal Lumineux** (`#1e93ac`).

### Tertiary
- **Or de Quai** (`#db9423`) : troisième couleur de ligne (contact/mentions légales), accent ponctuel (tampon "validé", séparateurs de titre).

### Neutral
- **Panneau** (`#0d1012`) : fond dominant de toutes les pages.
- **Panneau Surélevé** (`#16191c`) : cartes, footer, lignes alternées de tableau.
- **Ligne de Panneau** (`#272c30`) : bordures et séparateurs, jamais de gris pur.
- **Crème** (`#f2eee6`) : texte principal sur fond sombre — jamais de blanc pur.
- **Crème Estompée** (`#a7a49b`) : texte secondaire, jamais de gris neutre.
- **Papier** (`#f0ede4`) / **Encre** (`#1d1d23`) : les tickets/avis clients, seul îlot clair de la page.

### Named Rules
**La règle du ticket unique.** Le clair n'apparaît jamais en section pleine largeur, seulement sur des éléments "papier" isolés (avis, ticket de commande) qui tranchent volontairement sur le panneau sombre.

## Typography

**Display Font:** Archivo (variable, axe de largeur `wdth`)
**Body Font:** Archivo (même famille, poids 400–500)
**Label/Mono Font:** Space Mono

**Character:** Une seule famille variable porte tout le texte courant et les titres (Archivo, hérité de la signalétique routière argentine) ; son axe de largeur est étiré (`wdth 125`) pour les gros titres façon panneau de gare, jamais une police "Expanded" statique séparée. Space Mono n'intervient que pour les chiffres et données réelles (compteurs franchise, numéros de voie), jamais comme habillage "technique" d'un simple libellé.

### Hierarchy
- **Display** (800, `clamp(2.5rem, 13vw, 6rem)`, 0.92) : titre de héros et titres de page, toujours animé en split-flap.
- **Title** (700–800, 1.5–2.25rem, 1.1, `wdth 125`) : titres de section.
- **Body** (400, 1–1.125rem, 1.6) : texte courant, mesure ~65ch.
- **Label** (700, 0.75rem, tracking 0.1–0.3em, capitales) : navigation, libellés de formulaire — en Archivo, pas en mono.
- **Data** (700, Space Mono, tabular-nums) : chiffres franchise, numéros de voie, prix, téléphones.

### Named Rules
**La règle de la largeur variable.** "Expanded" n'est jamais une police à part : c'est l'axe `wdth` d'Archivo poussé à 125, une vraie interpolation de fonte variable plutôt qu'un artifice visuel.

## Layout

Conteneur max `72rem` (max-w-6xl), padding horizontal `1rem` (mobile) à `1.5rem` (desktop). Rythme vertical de section : `5rem` de padding haut/bas constant. Grilles à 2 ou 3 colonnes selon le contenu (jamais de grille de cartes identiques utilisée comme structure de page par défaut). Les titres de gros mots (split-flap) ne se coupent jamais au milieu d'un mot : chaque mot est un groupe de cellules non sécable, seul l'espace entre deux mots est un point de retour à la ligne valide.

## Elevation & Depth

Le panneau sombre est plat par défaut — pas d'ombre décorative sur les blocs de contenu. Seuls les éléments "papier" (tickets, avis) portent une ombre, teintée et diffuse, jamais un aplat noir à 0 flou.

### Shadow Vocabulary
- **ticket** (`box-shadow: 0 18px 30px -18px rgba(0,0,0,0.55)`) : sous les avis clients et le ticket de commande, pour les détacher du panneau sombre.

### Named Rules
**La règle du papier qui flotte.** Seuls les éléments "papier" ont une ombre ; tout le reste du panneau reste plat, la profondeur vient du contraste de teinte, pas de l'empilement d'ombres.

## Shapes

Angles presque droits partout (`rounded-sm`, 2px) — le monde du quai de gare n'a pas de coins arrondis généreux. Seule exception : le cadre du mockup téléphone (`1.75rem`) qui doit lire comme un objet physique. Cellules split-flap : rectangles pleins avec une fine ligne de pliure horizontale au milieu (pseudo-élément), jamais de radius.

## Components

### Boutons
- **Forme :** angles presque droits (`rounded-sm`, 2px).
- **Primaire :** fond corail plein, texte crème, libellé Archivo capitales tracking large.
- **Secondaire :** contour teal, texte teal, remplissage crème au survol.
- **Hover/Focus :** transition de couleur 200ms ; la flèche `→` glisse de quelques pixels au survol.

### Cellule Split-Flap (composant signature)
Bloc `bg-board-raised` avec une ligne de pliure médiane ; au montage, chaque caractère tourne sur des valeurs aléatoires avant de se poser sur la valeur finale, décalé de gauche à droite. Utilisé pour tous les gros titres et toutes les données chiffrées (jamais pour du texte courant). Respecte `prefers-reduced-motion` en affichant directement la valeur finale.

### Tickets / Cartes papier
- **Fond :** papier (`#f0ede4`), texte encre (`#1d1d23`).
- **Angles :** presque droits, légère rotation aléatoire (±0.6–2deg) pour l'effet "posé".
- **Usage :** avis clients, ticket de commande dans le mockup app — jamais pour du contenu de navigation.

### Tableau de quai (Accompagnements)
Lignes séparées par une ligne de panneau, numéro de "voie" en split-flap doré à gauche, nom en Archivo capitales, détail en crème estompée.

### Navigation
Plan de ligne horizontal : un point de couleur par destination (teal = À propos, corail = Franchise, or = Contact) relié par un trait fin. Mobile : panneau plein écran avec les mêmes points de ligne empilés. Pas de kicker/eyebrow au-dessus des titres de page — une courte barre de couleur sous le titre suffit à signaler la section.

## Do's and Don'ts

### Do:
- **Do** garder toutes les valeurs (couleurs, chiffres franchise, avis, coordonnées) strictement identiques à celles du site actuel — la refonte change l'exécution visuelle, pas les faits.
- **Do** réserver Space Mono aux vraies données (chiffres, tableaux, coordonnées) et Archivo à tout le reste, y compris les libellés.
- **Do** grouper les cellules split-flap par mot pour que le retour à la ligne ne coupe jamais un mot.
- **Do** utiliser une barre de couleur sous le titre (pas un kicker au-dessus) pour signaler une section.

### Don't:
- **Don't** ajouter de bordure colorée à gauche des cartes/callouts — c'est la signature visuelle générique la plus reconnaissable de l'IA.
- **Don't** fabriquer de fausses captures d'écran d'app ou de fausses vidéos — utiliser des emplacements clairement notés "à fournir" tant que le client n'a pas livré les vrais assets.
- **Don't** introduire une deuxième police d'affichage ("Archivo Expanded" statique) : c'est l'axe `wdth` de la police variable Archivo qui produit cet effet.
- **Don't** utiliser de section claire pleine largeur — le clair reste réservé aux éléments "ticket" isolés.
