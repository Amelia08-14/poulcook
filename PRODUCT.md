# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Deux publics à parts égales (confirmé par le client) :
- **Clients particuliers** à Paris qui découvrent Poulcook, consultent le menu/les accompagnements, trouvent comment commander (livraison via poulcook.dishop.co ou l'app mobile) et veulent sentir la qualité/l'ambiance avant de passer commande.
- **Candidats franchisés** qui évaluent Poulcook comme opportunité d'investissement avant de remplir le formulaire de contact franchise.

## Product Purpose

Poulcook est une enseigne de restauration rapide ("Fast Good") spécialisée dans le poulet braisé, fondée en 2021 à Paris par deux amis d'enfance venus de la restauration, de la communication à l'agroalimentaire en passant par la vente de matériel CHR. Le site doit convertir sur deux fronts : commande client (sur place, à emporter, livraison, app) et recrutement de franchisés.

## Positioning

Différenciateur confirmé par le client : un mix équilibré de trois arguments, sans en isoler un seul — qualité/goût du poulet (mariné, braisé lentement, "tendreté parfaite"), prix accessibles, et accueil humain/chaleureux (équipe souriante, patron accessible). Concept "Fast Good" : fast-food repensé sans compromis sur la qualité. Positionnement franchise : forte présence digitale (+20 000 abonnés réseaux sociaux), identité de marque distinctive, collaborations influenceurs (ex. validation par Nasdas).

## Operating Context

- Commande en ligne via la plateforme tierce **poulcook.dishop.co** (lien "Commander" en header/footer/hero — ne pas remplacer par un autre prestataire).
- App mobile Poulcook sur iOS (App Store id6447832203) et Android (Google Play), avec code promo de bienvenue (10% sur la première commande).
- Formulaire de contact franchise avec champs : nom/prénom, email, téléphone, local déjà disponible (oui/non + m²), ville d'implantation, budget, message, comment ils ont connu Poulcook (recommandation, réseaux sociaux, site internet, salon, autres).
- Formulaire de contact client classique (nom, email, numéro, sujet, message).
- Horaires : lundi–dimanche, 11h00–23h00.
- Téléphones : 01 72 38 25 49 / 01 34 19 10 18. Email : contact@poulcook.com.
- Réseaux sociaux actifs : Instagram (@poulcook), Snapchat, Youtube, Tiktok.

## Capabilities and Constraints

- Le contenu texte (histoire, argumentaire franchise, accompagnements, avis clients) doit être **repris tel quel**, pas réinventé (confirmé par le client).
- Chiffres franchise à reprendre exactement : contrat **7 ans**, droits d'entrée **15 K€**, **7 restaurants** actuellement.
- Frontend Next.js déjà scaffoldé (`frontend/`, App Router, TypeScript strict, Tailwind v4) — stack non ré-ouverte ici. Backend (Node/Express/Prisma/MySQL) prévu plus tard, pas encore construit ; les formulaires (contact, franchise) resteront statiques/mailto ou vers un service tiers tant que le backend n'existe pas.
- Deux fichiers logo fournis par le client dans `frontend/public/images/` : `LOGO POULCOOK .png` (logo horizontal) et `Logo poulcook rond.png` (logo rond/badge "Since 2021").
- Pas d'informations factuelles supplémentaires à ajouter au-delà de ce qui est visible sur poulcook.com actuel (confirmé par le client) — ne pas inventer de nouvelles adresses, chiffres ou partenariats.

## Brand Commitments

- Nom et univers de marque figés : **Poulcook**, poulet braisé, ton "Fast Good" jeune et convivial.
- **La charte graphique reste la même** (demande explicite du client) — palette confirmée par extraction directe du site live et des logos fournis :
  - Accent signature (CTA, flamme du logo) : `#E94F36` (corail/orange-rouge)
  - Couleur de marque secondaire (anneaux et texte du logo rond) : `#00697F` (bleu pétrole/teal profond)
  - Accent doré (bordure bouton, hover) : `#DB9423`
  - Fond clair : `#F2F2F2`, texte sombre : `#1D1D23`
- Logo rond porte la mention "Since 2021" — à préserver comme élément de badge/preuve d'ancienneté.
- Réutiliser les visuels/contenus déjà présents (accompagnements, avis Google, argumentaire franchise) plutôt que d'en inventer de nouveaux.

## Evidence on Hand

Contenu texte source (poulcook.com, capturé le 2026-08-26), à reprendre tel quel :
- **Accueil** — Héro : "le poulet le plus chaud de Paname !", CTAs Commander / Devenir franchisé. Section validation influenceur "Poulcook validé par Nasdas et sa team". Section app avec code promo 10%. Carrousel "Les bons plans !". Section "Nos accompagnements !" (7 items : Bananes plantain frites, Frites rustiques, Haricots verts au beurre et à l'ail, Pommes de terre grenaille persillade au beurre, Riz Poulcook "spécialité de la maison", Riz basmati blanc au beurre, Frites de patates douces). Bandeau "Rejoignez notre franchise". Section "Les avis de nos clients !" avec 3 avis Google (Yohann B., Nathalie C., Clecle).
- **À propos** ("Notre histoire") — texte complet sur la fondation par deux amis d'enfance en 2021, le concept "poulet du dimanche" revisité, le savoir-faire (marinade, braisage lent).
- **Franchise** — sections "Communication digitale puissante", "Concept innovant", "Savoir-faire unique", "Collaboration avec les meilleurs", "Une forte identité de marque", compteurs (7 ans / 15K€ / 7 restaurants), formulaire de candidature.
- **Contact** — accroche "Vous avez faim ? Venez expérimenter la suprême délicatesse du poulet parisien par excellence.", téléphones, formulaire, horaires.
- **Footer** — liens Commandez en ligne (poulcook.dishop.co), Devenir franchisé, contact email, réseaux sociaux, mentions légales, politique de confidentialité, copyright.

Absence à ne pas combler par invention : pas de menu avec prix détaillés visible publiquement au-delà des accompagnements et du carrousel "bons plans" ; pas de liste d'adresses de restaurants visible sur le site actuel.

## Product Principles

1. Le contenu et les faits (textes, chiffres franchise, avis, coordonnées) sont une source de vérité à préserver — la refonte change l'exécution visuelle, pas le fond.
2. Double conversion : chaque page doit rester lisible à la fois pour un client affamé et pour un candidat franchisé, sans que l'un écrase l'autre.
3. La charte (teal `#00697F` + corail `#E94F36`) est la seule identité chromatique autorisée ; toute nouvelle couleur doit en être une déclinaison (tinte, nuance), jamais une couleur étrangère à la marque.
4. Le ton reste jeune, convivial et direct ("Fast Good"), jamais corporate.
