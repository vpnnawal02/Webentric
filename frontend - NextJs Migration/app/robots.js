// Staging safety: build with STAGING=true to block all crawling
// (e.g. `STAGING=true npm run build` for preview deployments).
// Production builds omit the flag and allow public crawling.
export default function robots() {
  if (process.env.STAGING === 'true') {
    return { rules: [{ userAgent: '*', disallow: '/' }] };
  }
  const publicAllow = {
    allow: '/',
    disallow: ['/admin', '/admin/login'],
  };
  return {
    // '*' covers all legitimate search + AI crawlers (Googlebot, Bingbot,
    // GPTBot, ClaudeBot, PerplexityBot, etc.) for public content. Private
    // admin routes stay disallowed. No aggressive per-bot blocks.
    rules: [
      { userAgent: '*', ...publicAllow },
      { userAgent: 'GPTBot', ...publicAllow },
      { userAgent: 'ChatGPT-User', ...publicAllow },
      { userAgent: 'ClaudeBot', ...publicAllow },
      { userAgent: 'PerplexityBot', ...publicAllow },
      { userAgent: 'Google-Extended', ...publicAllow },
    ],
    sitemap: 'https://webentric.in/sitemap.xml',
  };
}
