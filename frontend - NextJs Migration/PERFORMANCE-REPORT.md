# Performance Report — Vite SPA → Next.js

Date: 2026-09-21. No numbers invented. Lab scores (LCP/CLS/INP/FCP/TTFB) were NOT measured — no Lighthouse/PageSpeed tooling in this environment; stated explicitly where unavailable.

## Before (Vite SPA, `npm run build`)
- Single JS chunk `dist/assets/index-*.js`: **855 KB (232 KB gzip)** — all 30+ routes + admin + calculator + icons + Supabase + AOS + Helmet on every visit.
- CSS: 111 KB (16 KB gzip). Total `dist/`: 2.75 MB / 31 files.
- Images: 22 webp via plain `<img>`, no sizes/lazy discipline; logo PNG 21 KB.
- Fonts: render-blocking Google Fonts `<link>` chain.
- Extra: 1 s artificial splash screen before first paint; AOS runtime on every page; `framer-motion` + `react-snap`/puppeteer installed but unused.

## After (Next.js App Router, `next build`, 40/40 static)
- Shared JS chunks: largest **222.6 KB**, then 189 / 156 / 110 KB; per-route chunks **14–34 KB** — homepage no longer pays for admin/calculator/blog code.
- CSS: **75.3 KB** (Tailwind, route-split).
- HTML is prerendered: H1/intro/FAQs/links present in server HTML (verified for all 35 public pages) — crawlers and first paint no longer wait for JS.
- Images: 22 webp moved to `public/images/` with stable URLs; `next/image` (AVIF/WebP, responsive sizes, lazy) for portfolio grid + blog covers (cover `priority` for LCP); decorative/secondary images keep lazy `<img decoding=async>`.
- Fonts: `next/font` Arimo (400–700, `display: swap`) — no render-blocking stylesheet chain.
- Videos: N/A — none exist in the source snapshot (`src/assets/videos/` empty, zero `<video>` references); nothing to compress. If hero videos are reintroduced, follow `PERFORMANCE-BASELINE.md` guidance (modern codec, poster, no preload, reduced-motion fallback).
- Removed: AOS, `react-helmet-async`, `react-router-dom`, `react-snap`, `framer-motion`, Vite toolchain; splash screen deleted (renders content immediately).
- Analytics: GA deferred to `afterInteractive`, ID via `NEXT_PUBLIC_GA_ID`.
- Caching: immutable `Cache-Control` for hashed JS/CSS/fonts/images.

## Route behaviour
- 32 static + 8 SSG blog pages; admin/calculator/pricing hydrate as isolated client islands; static copy never ships their JS to other routes.

## Not measured (explicit)
- LCP / CLS / INP / FCP / TTFB: no lab run; re-measure with PageSpeed on staging and compare to baseline after deploy.
- Real-user total bytes per route: depends on images above/below fold; `next/image` serves responsive variants automatically.
