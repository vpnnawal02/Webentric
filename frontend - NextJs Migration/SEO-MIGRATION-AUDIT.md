# SEO Migration Audit — Vite SPA → Next.js App Router

Date: 2026-09-21. Verified against `next build` prerendered HTML (`.next/server/app/*.html`) + live `next start` responses. Severity: Critical / High / Medium / Low. Status: Fixed / Not fixed / Needs manual verification.

## Per-item verification

| # | Item | Severity | Status | Evidence |
|---|------|----------|--------|----------|
| 1 | Unique titles, one per indexable URL (34) | Critical | Fixed | All 34 prerendered pages emit distinct `<title>`; template-duplication bug (`…\| Webentric \| Webentric`) found in QA and fixed (layout template now `%s`; pages carry branding) |
| 2 | Unique meta descriptions | High | Fixed | Per-page `description` from source SEO props preserved; spot-checked home/services/blog in HTML |
| 3 | Absolute canonicals (`https://webentric.in…`) | Critical | Fixed | 28/28 sampled routes return self-referencing absolute canonical; no query strings |
| 4 | Robots directives (index/noindex) | Critical | Fixed | Public pages `index, follow`; `/admin`, `/admin/login` `noindex, nofollow`; 404 unindexed by Next default |
| 5 | `robots.txt` | High | Fixed | `app/robots.js`: allow `/`, disallow `/admin`, `/admin/login`, sitemap absolute; `STAGING=true` build flips to `Disallow: /` |
| 6 | `sitemap.xml` | High | Fixed | `app/sitemap.js` → 34 URLs, all canonical, zero admin/404/dupes (fetched live); blog `lastModified` from post dates |
| 7 | Structured data validity | High | Fixed | Sitewide Organization + WebSite + ProfessionalService via layout; per-page WebPage/Service/Breadcrumb/FAQ/Blog/Article/ItemList via `JsonLd`; FAQPage only where FAQs visible; no ratings/reviews/addresses/prices fabricated |
| 8 | Heading hierarchy (single H1) | High | Fixed | 35/35 public prerendered pages contain exactly one meaningful H1 (script-verified); `/admin/login` H2→H1 upgraded; homepage H1 preserved (`Your Next Great Design Partnership`) |
| 9 | URLs preserved exactly | Critical | Fixed | All 34 public paths byte-identical to SPA routes (no `/services/` prefixing, no slug changes); `_not-found` serves HTTP 404 (live-tested `/no-such-page-xyz` → 404 + branded page) |
| 10 | Internal linking | Medium | Fixed | Service↔service, service↔location/industry, blog→service/pricing/calculator, hub page, breadcrumbs, footer nav all preserved with `next/link`; anchors unchanged (natural, non-spammy) |
| 11 | Open Graph / Twitter | High | Fixed | Every public page emits `og:title/description/type/url/image/site_name` + `summary_large_image` cards; images absolute `https://webentric.in/social-media-cover.png` (underscore/dash filename mismatch fixed) |
| 12 | Image alt text | Medium | Fixed | Covers/portfolio carry descriptive alts (`…website designed and developed by Webentric`); logos have alts; decorative avatars `aria-hidden` |
| 13 | Keyword cannibalization (`/` vs `/locations/delhi` vs Delhi blog) | Medium | Fixed | Homepage = broad commercial; location page = local intent; blog retitled to informational `How to Choose a Website Development Company in Delhi` (body untouched; decision noted in code comment + keyword map) |
| 14 | Redirects (`www` → apex, HTTP → HTTPS) | Medium | Fixed | `www.webentric.in → https://webentric.in` in `next.config.mjs`; HTTP→HTTPS is host/CDN-level (see manual checks) |
| 15 | No accidental `noindex` / blocking of assets | Critical | Fixed | No global noindex; CSS/JS/images/fonts publicly served; `Cache-Control: immutable` only for hashed static assets |
| 16 | Article metadata (blog) | Medium | Fixed | `og:type=article`, `article:published_time`, publisher/author Organization, `BlogPosting` with wordCount from real content; no invented dates/authors |

## Needs manual verification (no browser/lab available in this environment)
- Google Rich Results Test on 2–3 URLs after staging deploy (JSON-LD is valid by construction, not yet run through Google's validator).
- Search Console sitemap submission + `site:` checks post-launch.
- Lighthouse/PageSpeed field scores (lab scores not measured here; build-size evidence only).
- Visual diff homepage vs production (same Tailwind classes/structure; no screenshot tooling here).
- Live form delivery to Supabase + admin login flow against real project.
