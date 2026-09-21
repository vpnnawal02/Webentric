# Webentric — SEO Audit

Scope: technical, semantic, on-page, local & content SEO for Google India.
Stack: React 19 + Vite SPA, Tailwind v4, react-router (BrowserRouter), Supabase forms.

## Findings & status

| # | Problem | Severity | Status |
|---|---------|----------|--------|
| 1 | Only 4 URLs in sitemap; blogs, calculator, policies missing | High | FIXED — 34 URLs incl. all articles/services/locations/industries |
| 2 | No per-page titles/descriptions/canonicals (except Home) | High | FIXED — `SEO.jsx` on all 11 original routes |
| 3 | Only one JSON-LD block sitewide | High | FIXED — Organization/WebSite/LocalBusiness + per-page Article, FAQPage, BreadcrumbList, Blog, ItemList, Service |
| 4 | Blog category pills didn't match data (2 always empty, 2 categories unreachable) | High | FIXED (earlier) — dynamic categories + search/sort/pagination |
| 5 | Article `list` blocks rendered as nothing (content invisible) | High | FIXED (earlier) — list renderer added |
| 6 | Portfolio had no H1 | Medium | FIXED — heading promoted to H1 |
| 7 | Footer service links were `href="#"` (dead); quick links used page-less anchors | High | FIXED — all point to real routes/service pages |
| 8 | No 404 route (unknown URLs rendered blank) | Medium | FIXED — `NotFound.jsx` + catch-all, noindexed |
| 9 | Admin + login indexable | Medium | FIXED — noindex + `Disallow: /admin` |
| 10 | Schema opening hours (Mo–Sa 09–19) contradicted contact page (Mon–Fri 10–6 IST) | Medium | FIXED — both now Mon–Fri 10:00–18:00 |
| 11 | Fonts loaded via CSS `@import` (render-blocking) | Medium | FIXED — preconnect + `<link>` in HTML |
| 12 | ~5.7 MB dead assets shipped (unused PNGs/JPGs) | Medium | FIXED — deleted (see §Performance) |
| 13 | No service/location/industry topical pages (homepage + pricing only) | High | FIXED — 9 services + 4 locations + 5 industries created |
| 14 | No FAQ content anywhere (missed FAQ rich results) | Medium | FIXED — FAQs + FAQPage schema on home, pricing, all new pages |
| 15 | No breadcrumb trails on deep pages | Low | FIXED — `Breadcrumbs.jsx` + BreadcrumbList schema |
| 16 | No favicon variants for iOS | Low | FIXED — apple-touch-icon added |
| 17 | `react-helmet@6` crashed React 19 article pages | High | FIXED (earlier) — migrated to `react-helmet-async` |
| 18 | Hero H1 has no keywords ("Your Next Great Design Partnership") | Medium | ACCEPTED — kept for brand; keyword H2s + eyebrow + hub carry targeting |
| 19 | SPA renders SEO tags client-side (Google renders JS, but prerender would be stronger) | Medium | OPEN — recommend prerender/SSG evaluation; `react-snap` is installed but unwired |
| 20 | Hero videos 2× ~2.3 MB autoplay; 630 KB JS bundle | Medium | OPEN — biggest remaining lever is image/video weight + code-split (see §Performance) |
| 21 | No Google Business Profile link verified in repo | Low | OPEN — needs owner action in GBP + Search Console sitemap submit |

## Performance notes
- Deleted: `Projects/avanza.png` (1.7 MB), `Projects/travel_agency.png` (3.2 MB), `Portfolio/portfolio.png` (636 KB), `slideshow/*.jpg` (~444 KB), `react.svg`, `icons/experience.png` — none referenced anywhere. Assets dir now ~5.9 MB total (mostly the two hero videos).
- Remaining images are WebP with lazy loading below the fold; cover images carry descriptive alts.
- Next biggest wins (not done — design/behavior trade-offs): hero video compression/poster + `preload`, route-level code-splitting via `React.lazy`, font `display=swap` (done via link).

## Honesty guardrails applied
- No Review/AggregateRating schema (hero shows Google rating visually; markup would be self-serving).
- No Shopify/WooCommerce/WordPress/Next.js/Python service claims (not evidenced — only React, Tailwind, JS, Firebase, Supabase, REST APIs, Razorpay/Stripe/UPI/PayPal).
- No "best/#1", no rank guarantees (SEO page + home FAQ explicitly disclaim), no fake stats/prices.
- Location pages state New Delhi base; Noida/Gurgaon/etc. are served areas, never offices.
