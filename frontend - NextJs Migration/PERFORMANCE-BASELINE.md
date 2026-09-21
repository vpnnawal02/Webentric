# Performance Baseline — Vite SPA (before Next.js migration)

Date: 2026-09-21. Machine: local Windows. Commands: `npm run build` (Vite 7.3.1). No Lighthouse run (no preview server measured; values below are build-output facts, not lab scores).

## Build output (Vite)
- `dist/index.html`: 6.64 KB (gzip 2.15 KB)
- `dist/assets/index-*.js`: **855.25 KB / 835 KB on disk (gzip 232.21 KB)** — single chunk, warning "larger than 500 kB after minification".
- `dist/assets/index-*.css`: 111.15 KB (gzip 15.90 KB)
- Images (hashed webp + logo png): ~1.6 MB total. Largest:
  - travel_agency 156 KB, avanza 143 KB, my-cafe 108 KB, blog-4 106 KB, interior-design 104 KB, blog-8 103 KB, salon 103 KB, maple-prints 98 KB, school 97 KB, gym 87 KB
- Total `dist/`: 31 files, **2.75 MB**

## Route list (SPA — one bundle serves all)
`/`, `/contact`, `/portfolio`, `/pricing`, `/privacy-policy`, `/terms`, `/price-calculator`, `/blogs`, `/blogs/:slug` (8 posts), 9 services, 4 locations, 5 industries, `/admin/login`, `/admin`, `*` 404.

## Warnings / errors
- Chunk-size warning (>500 KB). No build errors. `npm install` status: dependencies already installed (node_modules present, includes puppeteer via react-snap — heavy, unused at runtime).

## Web-Vitals-style measurements
- LCP: not measured (no Lighthouse run against local preview; not fabricated).
- CLS: not measured.
- INP: not measurable from static build.
- FCP: not measured; known drag: 1 s artificial `LoadingScreen` + synchronous AOS init + Google Fonts stylesheet chain.
- TTFB: not measurable from static `dist` (depends on host).
- Total transferred bytes (first load, uncached, SPA): ~2.75 MB if all assets fetched; JS 855 KB + CSS 111 KB + images as visited.
- JS size: 855 KB (232 KB gzip). CSS: 111 KB (16 KB gzip).
- Largest images/videos: largest images listed above; **no video files or `<video>` references found in `src`** — the "2× 2.3 MB hero video" issue from the brief does not reproduce in this snapshot (`src/assets/videos/` empty).

## What the Next.js migration should move
- Route-level code splitting (no single 855 KB chunk) + removal of `aos`, `react-helmet-async`, `react-router-dom`, `react-snap`, `framer-motion` (unused).
- `next/image` responsive/lazy images, `next/font` (Arimo), drop 1 s splash, defer analytics, Metadata API for crawler-readable head.
