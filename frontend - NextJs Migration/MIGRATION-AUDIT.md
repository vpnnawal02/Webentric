# Migration Audit — Webentric (React/Vite → Next.js)

Date: 2026-09-21. Scope: `frontend - Copy` (isolated copy, untracked folder inside `webentric.in` parent repo; original `frontend/` untouched).

## Current architecture
- Framework: React 19.1 + react-router-dom v7 (BrowserRouter, declarative `<Routes>` in `src/App.jsx`).
- Build: Vite 7 (`vite.config.js`: `@vitejs/plugin-react` + `@tailwindcss/vite`). SPA output to `dist/` + `/* /index.html 200` fallback (`public/_redirects`).
- Entry: `index.html` → `src/main.jsx` → `BrowserRouter > StrictMode > HelmetProvider > ThemeProvider > App`.
- Styling: Tailwind CSS v4 (`@import "tailwindcss"`, `@theme inline` tokens mapping to CSS vars `--wt-*`), dark default + `html.light` theme, custom CSS (theme toggle, hero marquee, view-transition reveal).
- Fonts: Google Fonts `Arimo` via preconnected `<link>` in `index.html` (400–700).
- State/context: `ThemeContext` (localStorage `webentric-theme`, View Transition API circular reveal, reduced-motion fallback); `useAdminAuth` hook.
- Data/backend: Supabase (`@supabase/supabase-js`, `VITE_SUPABASE_URL` + `VITE_SUPABASE_ANON_KEY` in `.env`) used by contact/quote forms + admin dashboard. No server code in repo.
- Animations: AOS (`aos` + `AOS.init` in `App.jsx` and `Services.jsx`); CSS marquee/keyframes; View Transitions for theme. `framer-motion` is a dependency but **no import found in `src`** — dead weight.
- Icons: `lucide-react` + `react-icons` (fa/fi subsets used via `src/assets/imgs/assets.js` barrel).
- SEO (client-side): `react-helmet-async` via central `src/components/SEO.jsx` + helpers in `src/utils/seoMeta.js` (Organization/WebSite/ProfessionalService/Breadcrumb/WebPage/Blog/Article/FAQ/ItemList schemas, absolute canonicals on `https://webentric.in`). Sitewide JSON-LD also hardcoded in `index.html`. `public/sitemap.xml` (~34 URLs), `public/robots.txt` (allow `/`, disallow `/admin`).

## Routes (from `src/App.jsx`)
- `/`, `/contact`, `/portfolio`, `/pricing`, `/privacy-policy`, `/terms`, `/price-calculator`, `/blogs`, `/blogs/:slug`
- Services (9): `/website-development`, `/web-design`, `/ecommerce-development`, `/custom-software-development`, `/web-application-development`, `/landing-page-development`, `/website-redesign`, `/website-maintenance`, `/seo-services`
- Locations (4): `/locations/delhi`, `/locations/delhi-ncr`, `/locations/noida`, `/locations/gurgaon`
- Industries (5): `/industries/small-business`, `/industries/startups`, `/industries/education`, `/industries/restaurants-cafes`, `/industries/fitness`
- Admin (noindex): `/admin/login`, `/admin` (dashboard)
- `*` → NotFound. `src/pages/CustomWebsitePage.jsx` is **orphaned (no route)** — do not publish.
- Total indexable ≈ 34 (matches sitemap: 6 core + 9 services + 4 locations + 5 industries + 8 blogs + privacy + terms).

## Components / content
- `components/`: Navbar (client nav + mobile drawer), Footer (server-safe), Hero, HeroMarquee, About, Services, HomeServiceHub, HowWeWork, Testimonials (carousel, client), WhyChooseUs, Faq (accordion → client), ServiceCTA, Breadcrumbs, PopUpForm, ThemeToggle, SEO.
- `utils/`: ContactButtons, LoadingScreen (1s splash), OfferPopUp (disabled), ScrollToTop, PopupForm, seoMeta.
- Content data: `src/assets/data.js` (projects 13, services, process, testimonials 3, pricing, FAQs), `src/pages/Blogs/BlogData.js` (8 posts, full body), `blogUtils.js` (excerpt).
- Assets: ~22 webp images in `src/assets/imgs` (portfolio/blog/about), logo PNG (hr, 21KB) + `public/logo_circle.png`, `public/social_media_cover.png` (og). `src/assets/videos/` and `icons/` and `imgs/Projects/` are **empty**. No `<video>`/mp4 references found — hero-video concern from brief does not apply to this snapshot.
- Public: `logo_circle.png`, `social_media_cover.png` (note: code defaults to `/social-media-cover.png` with dashes — mismatch, fix in migration), `sitemap.xml`, `robots.txt`, `_redirects` (Netlify-style; drop on Next hosting).

## Dependencies
- Keep: `react`, `react-dom`, `next` (new), `@supabase/supabase-js`, `lucide-react`, `react-icons` (audit later), `tailwindcss` (+ `@tailwindcss/postcss` for Next).
- Remove: `vite`, `@vitejs/plugin-react`, `@tailwindcss/vite`, `react-router-dom`, `react-helmet-async`, `react-snap` (+ puppeteer bloat), `aos`, `framer-motion` (unused).
- Dev: eslint 9 + react-hooks/refresh plugins, globals, @types/react.

## Client-only vs server-safe
- Client required: Navbar, ThemeToggle/ThemeContext, mobile drawer, Faq accordion, Testimonials carousel, ContactButtons, PopUpForm/OfferPopup, Pricing calculator, CalculateProjectCost, Contact form (supabase), Admin dashboard/login, LoadingScreen, ScrollToTop.
- Server-safe: all service/location/industry/blog/portfolio/pricing/privacy static copy, Hero (static after dropping AOS), About, Services grid, Footer, Breadcrumbs, ServiceCTA (Link only), BlogDetail body.

## Performance bottlenecks (measured `npm run build`)
- Single JS bundle `dist/assets/index-*.js` **855 KB (235 KB gzip)** — everything (all routes + react-icons + supabase + aos + helmet) in one chunk, no code splitting (SPA).
- CSS `111 KB (16 KB gzip)`.
- Total `dist/` 2.75 MB; largest images: travel_agency 156KB, avanza 143KB, my-cafe 108KB, blog-4 106KB (all webp, reasonable but unoptimized `<img>` without sizes/lazy).
- `react-icons` full package + `aos` + `react-helmet-async` inflate bundle; `framer-motion` unused.
- 1s artificial LoadingScreen delays FCP; AOS JS + CSS render-blocking-ish; Google Fonts render-blocking chain (no `next/font`).
- No `next/image`, no lazy loading discipline, no route splitting — every visit pays for admin + calculator + all pages.

## Browser APIs / third-party
- `localStorage`, `matchMedia`, `document.startViewTransition`, `document.animate`, `window.scrollTo`, body overflow lock (drawer). All must be client-isolated.
- Third-party: Google Fonts, Google Analytics (`G-WR2BRHB44H` in index.html — migrate via `<Script>` or env-gated), Supabase, WhatsApp/LinkedIn/Instagram/Facebook outbound links.

## Migration risks
1. `react-router-dom` → App Router: every `<Link to>` → `<Link href>`, `useParams` → async `params`, `NavLink` active state → `usePathname` client component.
2. Helmet → Metadata API: per-page title/desc/canonical/OG/article tags must be re-expressed; JSON-LD → `<script type="application/ld+json">` in server components. Risk of dropping article meta or duplicating org schema.
3. `import.meta.env.VITE_*` → `NEXT_PUBLIC_*`; supabase client must not expose service keys (only anon).
4. Vite asset imports (`import x from './y.webp'`) work in Next but `public/` vs bundled paths and og-image filename mismatch (`social_media_cover.png` vs `/social-media-cover.png`) must be reconciled.
5. AOS removal changes scroll animations — acceptable (prefer CSS/IntersectionObserver later), must verify Services section still looks right.
6. Admin dashboard is Supabase-authenticated SPA — keep as client-only `/admin` with `noindex`, do not statically prerender private data.
7. `CustomWebsitePage.jsx` orphan — leave out of sitemap/nav.
8. Known cannibalization (`/` vs `/locations/delhi` vs `/blogs/website-development-company-delhi`) — retitle blog toward informational intent during metadata migration.
9. Parent git repo: `frontend - Copy/` is untracked; do NOT commit to parent `main` or touch `frontend/` or production hosting/DNS. Migration commits (if any) must be inside an isolated repo, not parent.
