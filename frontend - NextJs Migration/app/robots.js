// Staging safety: build with STAGING=true to block all crawling
// (e.g. `STAGING=true npm run build` for preview deployments).
// Production builds omit the flag and allow public crawling.
export default function robots() {
  if (process.env.STAGING === 'true') {
    return { rules: [{ userAgent: '*', disallow: '/' }] };
  }
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/admin/login'],
      },
    ],
    sitemap: 'https://webentric.in/sitemap.xml',
  };
}
