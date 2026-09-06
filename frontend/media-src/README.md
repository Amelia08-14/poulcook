# Sources média (non servies)

Fichiers lourds conservés hors de `public/` pour ne pas être déployés.

## Hero (actuel — montages client 2026-09)

- `hero_desktop.mp4` — HEVC 1920×1080, ~10 s, 42 Mo → hero desktop
- `hero_mobile.mp4` — H.264 720×1280, ~10 s, 5 Mo → hero mobile (ouvre sur le grill)

Dérivés servis :
- `public/videos/hero/frames-desktop/d_XXXX.webp` — **151 images** (fps 15, 1440px, q74 ≈ 11 Mo)
- `public/videos/hero/frames-mobile/m_XXXX.webp` — **117 images** (1 frame sur 2, 720px, q68 ≈ 6 Mo)
- `public/videos/hero-poster-desktop.webp` / `hero-poster-mobile.webp` — posters / LCP
  (visuels HD fournis par le client, ré-encodés webp q78-80 : 1600px / 900px ≈ 230-290 Ko.
  Originaux pleine résolution dans `media-src/posters/`.)
  Le canvas ne prend le relais du poster qu'au premier geste de défilement
  (`p > 0.006` dans `HeroScroll`) → au repos on voit toujours le poster net.

`HeroScroll` charge **un seul** jeu selon le viewport (`max-width: 767px`).
Si le nombre de frames change, ajuster `VARIANTS[…].count` dans
`src/components/features/HeroScroll.tsx` (et les repères `labels` si le minutage
des villes bouge).

Ré-extraction :
```
ffmpeg -i media-src/hero_desktop.mp4 -vf "fps=15,scale=1440:-2,format=yuv420p" -c:v libwebp -quality 74 -compression_level 6 public/videos/hero/frames-desktop/d_%04d.webp
ffmpeg -i media-src/hero_mobile.mp4 -vf "select='not(mod(n\,2))',scale=720:-2,format=yuv420p" -fps_mode passthrough -c:v libwebp -quality 68 -compression_level 6 public/videos/hero/frames-mobile/m_%04d.webp
ffmpeg -i public/videos/hero/frames-desktop/d_0001.webp -c:v libwebp -quality 82 public/videos/hero-poster-desktop.webp
ffmpeg -i public/videos/hero/frames-mobile/m_0001.webp -c:v libwebp -quality 78 public/videos/hero-poster-mobile.webp
```

## Obsolète

- `video-hero.mp4` — premier montage (57 Mo, 15 s). Remplacé par
  `hero_desktop.mp4` / `hero_mobile.mp4`. Gardé au cas où, plus utilisé.
- `story-{paris-jet,casablanca,alger}.webp` dans `public/images/` — stills de
  l'ancien montage, toujours utilisés dans `InternationalExpansion` (à
  ré-extraire depuis `hero_desktop.mp4` si on veut les rafraîchir).
