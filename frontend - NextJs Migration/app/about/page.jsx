import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import ServiceCTA from '../../components/ServiceCTA';
import JsonLd from '../../components/JsonLd';
import { SITE, webPageSchema, breadcrumbSchema } from '../../lib/seo';

const TITLE = 'About Webentric — Website Development Company in Delhi, India';
const DESCRIPTION =
  'Webentric is a website development company based in New Delhi, India. We build fast, SEO-friendly business websites, e-commerce stores, landing pages and web applications for clients across Delhi NCR and India.';
const URL = `${SITE.url}/about`;

const SERVICES = [
  { label: 'Website Development', to: '/website-development', desc: 'Fast, mobile-first business websites.' },
  { label: 'Web Design', to: '/web-design', desc: 'Clear layouts that turn visitors into enquiries.' },
  { label: 'E-commerce Development', to: '/ecommerce-development', desc: 'Stores with cart, checkout and payments.' },
  { label: 'Web Applications', to: '/web-application-development', desc: 'Dashboards, bookings and internal tools.' },
  { label: 'Custom Software', to: '/custom-software-development', desc: 'CRMs and workflows built around your process.' },
  { label: 'Landing Pages', to: '/landing-page-development', desc: 'Campaign pages designed for one action.' },
  { label: 'Website Redesign', to: '/website-redesign', desc: 'Modern rebuilds that preserve rankings.' },
  { label: 'Maintenance & Support', to: '/website-maintenance', desc: 'Updates, backups and monitoring.' },
  { label: 'SEO Services', to: '/seo-services', desc: 'Technical and local SEO foundations.' },
];

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['about Webentric', 'website development company Delhi', 'web design company India'],
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: 'website',
    images: [{ url: `${SITE.url}/social-media-cover.png`, width: 1200, height: 630, alt: 'About Webentric' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE.url}/social-media-cover.png`],
  },
};

export default function AboutPage() {
  return (
    <main className="bg-page text-ink min-h-screen">
      <JsonLd
        data={[
          webPageSchema({ name: TITLE, url: URL, description: DESCRIPTION }),
          {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: TITLE,
            url: URL,
            description: DESCRIPTION,
            inLanguage: 'en-IN',
            isPartOf: { '@id': `${SITE.url}/#website` },
            about: { '@id': `${SITE.url}/#organization` },
          },
          breadcrumbSchema([
            { name: 'Home', url: SITE.url },
            { name: 'About', url: URL },
          ]),
        ]}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 pt-24 md:pt-28 pb-20">
        <Breadcrumbs items={[{ label: 'About' }]} />
        <p className="text-xs tracking-[0.22em] text-muted mb-4">ABOUT WEBENTRIC — NEW DELHI · INDIA</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] mb-6">
          A website development company in Delhi, built for small businesses
        </h1>
        <div className="max-w-3xl space-y-4 text-muted text-[15px] sm:text-base leading-relaxed mb-14 md:mb-20">
          <p>
            Webentric is a web design and website development company based in New Delhi, India.
            We help startups, local businesses, schools, clinics, restaurants, and growing brands
            establish a clear online presence with websites that load fast, read well on phones,
            and turn visits into enquiries.
          </p>
          <p>
            Our work covers business websites, e-commerce stores, landing pages, website redesigns,
            web applications, custom software such as CRMs, maintenance, and SEO foundations.
            Every build follows the same principles: semantic structure search engines can crawl,
            mobile-first layouts, transparent pricing in rupees, and a fixed written quote with a
            clear timeline — we reply within 24 hours on business days.
          </p>
        </div>

        <section aria-label="What Webentric does">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">What we do</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <Link
                key={s.to}
                href={s.to}
                className="group block bg-surface border border-line p-6 hover:border-ink/40 transition-colors"
              >
                <h3 className="text-lg font-medium tracking-[-0.01em] mb-2">{s.label}</h3>
                <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
                <span className="inline-block mt-4 text-xs uppercase tracking-[0.18em] text-muted group-hover:text-ink transition-colors">
                  Learn more
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16 md:mt-20" aria-label="How Webentric works">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">How we work</h2>
          <ol className="border-t border-line">
            {[
              { n: '01', title: 'Discovery', text: 'A short call or WhatsApp conversation to understand your business, audience, pages, features, and integrations.' },
              { n: '02', title: 'Fixed quote', text: 'A written quote in rupees with scope and timeline, sent within 24 hours on business days.' },
              { n: '03', title: 'Design and build', text: 'Interfaces in React and Tailwind CSS with Firebase or Supabase backends and REST API integrations, including Razorpay, Stripe, UPI, or PayPal where needed.' },
              { n: '04', title: 'Launch and support', text: 'Testing on phones and desktops, launch, then maintenance and SEO support as needed.' },
            ].map((s) => (
              <li key={s.n} className="grid sm:grid-cols-[64px_1fr] gap-2 sm:gap-6 py-6 border-b border-line">
                <span className="text-xs tracking-[0.22em] text-muted pt-1">{s.n}</span>
                <div>
                  <h3 className="text-lg font-medium tracking-[-0.01em] mb-1">{s.title}</h3>
                  <p className="text-muted text-sm sm:text-[15px] leading-relaxed max-w-2xl">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16 md:mt-20" aria-label="Where Webentric operates">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-6">Where we operate</h2>
          <address className="not-italic text-muted text-[15px] sm:text-base leading-relaxed max-w-3xl">
            Webentric, D94, Madipur, New Delhi – 110063, India — serving clients across Delhi, Delhi NCR (including{' '}
            <Link href="/locations/noida" className="text-ink underline underline-offset-4">Noida</Link> and{' '}
            <Link href="/locations/gurgaon" className="text-ink underline underline-offset-4">Gurgaon</Link>), and
            the rest of India. Phone:{' '}
            <a href="tel:+919560342636" className="text-ink underline underline-offset-4">+91 9560342636</a>
            {' '}· Email:{' '}
            <a href="mailto:webentric2026@gmail.com" className="text-ink underline underline-offset-4">webentric2026@gmail.com</a>
            {' '}· Hours: Mon–Fri, 10 AM – 6 PM IST.
          </address>
          <p className="mt-6 text-muted text-[15px] sm:text-base leading-relaxed max-w-3xl">
            See our work in the{' '}
            <Link href="/portfolio" className="text-ink underline underline-offset-4">portfolio</Link>, read{' '}
            <Link href="/reviews" className="text-ink underline underline-offset-4">client reviews</Link>, check{' '}
            <Link href="/pricing" className="text-ink underline underline-offset-4">pricing</Link>, or estimate
            costs with the{' '}
            <Link href="/price-calculator" className="text-ink underline underline-offset-4">cost calculator</Link>.
          </p>
        </section>

        <ServiceCTA
          title="Want to know if we're a fit?"
          text="Tell us about your business and goals. Get a clear quote, timeline and plan — within 24 hours on business days."
        />
      </div>
    </main>
  );
}
