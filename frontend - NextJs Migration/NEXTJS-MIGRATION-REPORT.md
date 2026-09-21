# Next.js Migration Report — Webentric

## 1. Executive summary
Isolated copy `frontend - Copy` migrated from React 19 + Vite SPA to Next.js 16 App Router. `next build` green (40/40 static), `eslint` 0 errors, all 34 public URLs preserved byte-for-byte with per-page metadata, canonicals, OG/Twitter, JSON-LD, sitemap, robots, branded 404. JS per visit drops from a single 855 KB bundle to a ~223 KB shared chunk + 14–34 KB route chunks, with server-rendered HTML for all SEO content. Production site untouched; result is staging-ready.

## 2. Current architecture (before)
React 19 SPA, `react-router-dom` BrowserRouter, Vite 7 build, Tailwind v4, Helmet-based client SEO, Supabase forms, AOS animations, single 855 KB JS chunk, `dist/` + SPA fallback hosting.

## 3. New architecture (after)
Next.js 16 App Router, React 19, static prerendering (32 static + 8 SSG blog pages), Server Components by default, Tailwind v4 via `@tailwindcss/postcss`, Metadata API, `next/image`, `next/font` (Arimo), `next/script` (GA), Supabase browser client on interactive islands only.

## 4. Routes migrated (34 indexable, all preserved)
`/`; 9 services (`/website-development`, `/web-design`, `/ecommerce-development`, `/custom-software-development`, `/web-application-development`, `/landing-page-development`, `/website-redesign`, `/website-maintenance`, `/seo-services`); 4 locations (`/locations/delhi`, `/delhi-ncr`, `/noida`, `/gurgaon`); 5 industries (`small-business`, `startups`, `education`, `restaurants-cafes`, `fitness`); `/blogs` + 8 `/blogs/:slug`; `/portfolio`, `/pricing`, `/contact`, `/price-calculator`, `/privacy-policy`, `/terms`. Plus `/admin`, `/admin/login` (noindex), branded 404.

## 5. Components migrated
Navbar (rewritten for `usePathname`), Footer, Hero, HeroMarquee, About, Services (AOS stripped, slider logic kept), HomeServiceHub, HowWeWork, WhyChooseUs, Testimonials (+PopUpForm), Faq, ServiceCTA, Breadcrumbs, ContactButtons, ContactForm (new island), BlogCard, ThemeToggle, Portfolio CTA island, admin table set. Orphan `CustomWebsitePage` (no route in source) intentionally not published.

## 6. Server Components
All page bodies, Footer, Hero, About, HomeServiceHub, HowWeWork, WhyChooseUs, HeroMarquee, Breadcrumbs, ServiceCTA, BlogCard, blog articles, sitemap/robots — render to static HTML with zero client JS.

## 7. Client Components and why
`ThemeContext`/`ThemeToggle` (localStorage, View Transitions, matchMedia); `Navbar` (drawer/dropdown state, `usePathname`); `Faq` (accordion state); `Testimonials` (carousel); `ContactButtons`, `PopUpForm`, `ContactForm` (forms + Supabase); `Pricing`, `PriceCalculator` (quote state); `Services` (mobile slider); `Admin/*` (auth + realtime dashboard). Each island is route-scoped; static pages never load admin/calculator JS.

## 8–10. SEO / Metadata / Schema
Metadata API per route (unique title/description/canonical/keywords/OG/Twitter, `metadataBase=https://webentric.in`). JSON-LD via `components/JsonLd`: sitewide Organization/WebSite/ProfessionalService in layout; per-page WebPage/Service/Breadcrumb/FAQ/Blog/Article/ItemList. No fabricated ratings, reviews, addresses, prices, or counts. Delhi-blog cannibalization fixed via informational retitle (body untouched).

## 11–14. Sitemap / Robots / Canonicals / Internal linking
`app/sitemap.js` (34 canonical URLs, blog lastmods, no admin/404); `app/robots.js` (allow `/`, disallow admin, absolute sitemap; `STAGING=true` → full disallow); absolute self-referencing canonicals verified live on 28 routes; full topical link graph preserved with natural anchors.

## 15–17. Image / Video / Font optimization
22 webp → `public/images/`; `next/image` (AVIF/WebP, responsive, lazy, `priority` covers) for portfolio/blog; fonts via `next/font` Arimo 400–700 swap; no videos exist in source (documented N/A with reintroduction guidance).

## 18–19. Bundle / Core Web Vitals
855 KB single chunk → 223 KB shared + 14–34 KB routes; CSS 111→75 KB; splash screen + AOS + dead deps removed; GA deferred. Lab scores not measured here — re-run PageSpeed on staging (see PERFORMANCE-REPORT.md).

## 20. Accessibility
Semantic landmarks preserved; single H1 per page verified in prerendered HTML (login H2→H1); alts on content images; labelled form fields; focus-visible styles kept; drawer/dialog ARIA kept; `prefers-reduced-motion` respected (marquee + theme).

## 21–22. Dependencies removed / added
Removed: `vite`, `@vitejs/plugin-react`, `@tailwindcss/vite`, `react-router-dom`, `react-helmet-async`, `react-snap` (+puppeteer), `aos`, `framer-motion`. Added: `next`, `@tailwindcss/postcss`, `postcss`. Kept: `react`, `react-dom`, `tailwindcss`, `lucide-react`, `react-icons` (used), `@supabase/supabase-js`, eslint set.

## 23. Environment variables
`VITE_*` → `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` (in gitignored `.env.local`); `NEXT_PUBLIC_GA_ID` (defaults to existing property); `STAGING=true` gates robots. `.env.example` documents placeholders; no secrets committed.

## 24–25. Tests performed / Issues fixed
`next build` 40/40; `eslint` 0 errors; live `next start` crawl of 31 URLs (status/H1/canonical/OG/JSON-LD); H1 script-audit of all prerendered HTML; sitemap/robots fetched; 404 live-tested. Fixed: `next/link` named-import breakage, client-component `metadata` exports (moved to layouts), nested-route import depth, OG filename mismatch, title-template duplication, Link `to=` leftovers, themeColor viewport move, homepage clobbered by debug variant (reconstructed verbatim).

## 26. Known limitations
No browser available: no screenshots, no Lighthouse, no click-through of forms/admin beyond code review; `framer-motion`-era scroll animations intentionally not replicated (AOS removed by design).

## 27. Manual checks still required
PageSpeed on staging; Rich Results Test; visual diff vs production (desktop + 360–412px); live Supabase form + admin login; Search Console sitemap + `site:` after launch; HTTP→HTTPS + apex redirect at host/CDN layer.

## 28. Staging deployment
1. Push this folder as its own repo (do NOT merge into production repo). 2. Import into Vercel/Netlify as Next.js. 3. Env: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `NEXT_PUBLIC_GA_ID`. 4. Build staging with `STAGING=true npm run build` (or preview env var) + enable deployment protection. 5. Verify `/sitemap.xml`, `/robots.txt`, one service + one blog HTML.

## 29. Production deployment
1. Pointed review of staging. 2. Production build WITHOUT `STAGING` flag. 3. Cut over hosting per existing provider plan (Vercel recommended; `next.config.mjs` redirects cover `www`→apex). 4. Submit sitemap, monitor Search Console for 2 weeks. No DNS/hosting changes were made here.

## 30. Rollback procedure
Current production is untouched. Rollback = keep existing hosting serving the old build; revert DNS/proxy to previous target if cutover began. This repo does not auto-deploy.
