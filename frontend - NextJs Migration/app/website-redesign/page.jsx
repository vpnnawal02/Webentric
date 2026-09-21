import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import Faq from '../../components/Faq';
import ServiceCTA from '../../components/ServiceCTA';
import JsonLd from '../../components/JsonLd';
import { SITE, webPageSchema, faqSchema, breadcrumbSchema } from '../../lib/seo';

const DESCRIPTION =
  'Is your site dated and slow? Webentric gives outdated websites a modern, mobile-first refresh in React — with redirects and metadata handled so your search presence survives the move.';

const FAQS = [
  {
    question: 'Will a refresh hurt my search visibility?',
    answer: 'It should not, as long as the move is handled carefully. We map every old URL to its replacement with proper redirects, carry over titles, descriptions, and headings, and verify indexing after launch. Short-term fluctuations are normal during any rebuild, but losing your existing presence is avoidable with the right process.',
  },
  {
    question: 'How long does the process take?',
    answer: 'It depends on the number of pages, the amount of content being migrated, and how different the new look is from the old one. After the initial audit we share a clear, agreed timeline before any rebuild work begins — you will always know what happens and when.',
  },
  {
    question: 'Can you keep our logo and branding?',
    answer: 'Yes. Most clients want their identity evolved, not discarded. We work with your existing logo, colours, and tone, and update the layouts, typography, and imagery around them so the site feels familiar yet current.',
  },
  {
    question: 'Do you rewrite our content during the refresh?',
    answer: 'We reshape and polish it. Pages get clearer structure, stronger headings, and simpler calls to action. If whole sections need fresh writing, we draft it for your review — nothing goes live without your approval.',
  },
  {
    question: 'Will the refreshed site work well on phones?',
    answer: 'Yes. Every layout is designed mobile-first and tested across common phone, tablet, and desktop sizes. Navigation, forms, and contact points are all built to be easy to use on small screens.',
  },
  {
    question: 'What do you need from us to start?',
    answer: 'Access to your current site and hosting, your content and brand assets, and a short conversation about what is and is not working today. From there we run the audit and propose a plan you can approve before we begin.',
  },
];

const RELATED = [
  { label: 'Website Development', to: '/website-development' },
  { label: 'Web Design', to: '/web-design' },
  { label: 'Website Maintenance', to: '/website-maintenance' },
];

const INCLUDED = [
  {
    title: 'UX audit',
    text: 'We review navigation, page structure, and content flow to find where visitors get confused or drop off — then plan a layout that guides them clearly toward enquiring.',
  },
  {
    title: 'Visual refresh',
    text: 'Updated layouts, typography, spacing, and imagery that bring the look in line with your brand as it is today, not as it was when the old site launched.',
  },
  {
    title: 'Mobile-first layouts',
    text: 'Most of your visitors arrive on a phone. We reshape every page so it reads, taps, and converts comfortably on small screens.',
  },
  {
    title: 'Speed improvements',
    text: 'We trim heavy assets, clean up outdated code, and tune loading behaviour so pages open quickly on real mobile networks.',
  },
  {
    title: 'SEO-safe migration',
    text: 'Redirects, metadata, headings, and URL handling are carried over carefully, so the rebuild does not wipe out the search presence you have already earned.',
  },
  {
    title: 'React rebuild for conversions',
    text: 'The approved experience is re-implemented in React with clearer calls to action, simpler forms, and enquiry paths that turn visits into conversations.',
  },
];

const BENEFITS = [
  {
    title: 'Keep what you have earned',
    text: 'Existing rankings, backlinks, and indexed pages are mapped and carried through the move — nothing valuable gets left behind.',
  },
  {
    title: 'Faster on every visit',
    text: 'Lighter pages and modern rendering cut waiting time, especially for visitors on mobile data.',
  },
  {
    title: 'A site that fits your business now',
    text: 'Your services and positioning have changed since the old site launched. The new one reflects what you actually offer today.',
  },
  {
    title: 'Easier to update',
    text: 'A clean React codebase means future content changes and new sections are simpler to make and safer to deploy.',
  },
  {
    title: 'More enquiries, less friction',
    text: 'Clearer journeys and prominent contact points help interested visitors reach you instead of bouncing.',
  },
];

const STEPS = [
  {
    n: '01',
    title: 'Audit',
    text: 'We study your current site, how visitors use it, and what competitors do — then agree on what changes and what stays.',
  },
  {
    n: '02',
    title: 'Design',
    text: 'You review refreshed layouts for the key pages before anything is rebuilt, so there are no surprises later.',
  },
  {
    n: '03',
    title: 'Rebuild',
    text: 'We implement the approved experience in React, migrate content, set up redirects, and test across devices.',
  },
  {
    n: '04',
    title: 'Launch',
    text: 'We deploy, verify indexing and metadata, and hand over a site your team can manage with confidence.',
  },
];

const INDUSTRIES = [
  { label: 'Small Business', to: '/industries/small-business' },
  { label: 'Startups', to: '/industries/startups' },
  { label: 'Education', to: '/industries/education' },
];

const GUIDES = [
  {
    title: 'Website Designer: Why Your Business Needs a Professional Website in 2026',
    text: 'What a professionally built site does for credibility, enquiries, and growth.',
    to: '/blogs/website-designer',
  },
  {
    title: 'Website Development Company in Delhi: Complete Guide to Web Development Services',
    text: 'How to evaluate a development partner and what the process looks like.',
    to: '/blogs/website-development-company-delhi',
  },
  {
    title: 'How Much Does a Business Website Cost in India in 2026?',
    text: 'The factors that shape pricing, from page count to functionality.',
    to: '/blogs/business-website-cost-india-2026',
  },
];

export const metadata = {
  title: 'Website Redesign Services Delhi & India | Webentric',
  description: DESCRIPTION,
  keywords: ['website redesign services', 'website revamp India', 'website modernization Delhi'],
  alternates: { canonical: `${SITE.url}/website-redesign` },
  openGraph: {
    title: 'Website Redesign Services Delhi & India | Webentric',
    description: DESCRIPTION,
    url: `${SITE.url}/website-redesign`,
    type: 'website',
    images: ['https://webentric.in/social-media-cover.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Redesign Services Delhi & India | Webentric',
    description: DESCRIPTION,
  },
};

export default function WebsiteRedesignPage() {
  return (
    <main className="bg-page text-ink min-h-screen">
      <JsonLd
        data={[
          webPageSchema({
            name: 'Website Redesign Services Delhi & India | Webentric',
            url: `${SITE.url}/website-redesign`,
            description: DESCRIPTION,
          }),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Website Redesign Services',
            url: `${SITE.url}/website-redesign`,
            description: DESCRIPTION,
            provider: { '@id': 'https://webentric.in/#organization' },
            areaServed: [
              { '@type': 'City', name: 'New Delhi' },
              { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
              { '@type': 'Country', name: 'India' },
            ],
          },
          faqSchema(FAQS),
          breadcrumbSchema([
            { name: 'Home', url: SITE.url },
            { name: 'Website Redesign', url: `${SITE.url}/website-redesign` },
          ]),
        ]}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 pt-24 md:pt-28 pb-20">
        <Breadcrumbs items={[{ label: 'Services' }, { label: 'Redesign', to: '/website-redesign' }]} />
        <p className="text-xs tracking-[0.22em] text-muted mb-4">WEBSITE REDESIGN SERVICES</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] mb-6">
          Turn an Outdated Website Into a Modern Digital Experience
        </h1>
        <div className="max-w-3xl space-y-4 text-muted text-[15px] sm:text-base leading-relaxed mb-14 md:mb-20">
          <p>
            If your site looks dated, loads slowly, or no longer reflects what your business offers, visitors notice
            — and leave. We help businesses in Delhi and across India replace tired pages with a clean, modern
            presence that feels current on every device.
          </p>
          <p>
            Every refresh starts with understanding what to keep and what to change. We audit your existing pages,
            protect the search visibility you have earned, and rebuild the experience in React so it stays fast, easy
            to update, and ready to grow with you.
          </p>
        </div>

        <section>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">What&apos;s included</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {INCLUDED.map((item) => (
              <div key={item.title} className="bg-surface border border-line p-6">
                <h3 className="font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">Benefits</h2>
          <div className="border-t border-line">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="border-b border-line py-5 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8"
              >
                <h3 className="sm:w-64 shrink-0 font-medium">{b.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">How we work</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {STEPS.map((s) => (
              <div key={s.n} className="bg-surface border border-line p-6">
                <p className="text-xs tracking-[0.22em] text-muted mb-3">{s.n}</p>
                <h3 className="font-medium mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">Useful for</h2>
          <div className="flex flex-wrap gap-3">
            {INDUSTRIES.map((i) => (
              <Link
                key={i.to}
                href={i.to}
                className="border border-line px-5 py-2.5 text-sm text-muted hover:text-ink hover:border-ink transition-colors"
              >
                {i.label} &rarr;
              </Link>
            ))}
          </div>
          <Link
            href="/portfolio"
            className="inline-block mt-6 text-sm text-ink underline underline-offset-4 decoration-line hover:decoration-ink transition-colors"
          >
            See our work in the portfolio &rarr;
          </Link>
        </section>

        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">Guides &amp; resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {GUIDES.map((g) => (
              <Link
                key={g.to}
                href={g.to}
                className="bg-surface border border-line p-6 hover:border-ink transition-colors"
              >
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted mb-3">Guide</p>
                <h3 className="font-medium leading-snug mb-2">{g.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{g.text}</p>
                <span className="text-sm text-ink">Read guide &rarr;</span>
              </Link>
            ))}
          </div>
        </section>

        <Faq items={FAQS} />

        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">Related services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {RELATED.map((r) => (
              <Link
                key={r.to}
                href={r.to}
                className="border border-line p-6 hover:border-ink transition-colors font-medium"
              >
                {r.label} &rarr;
              </Link>
            ))}
          </div>
        </section>

        <ServiceCTA
          title="Ready for a site that feels new again?"
          text="Share your current website link and what bothers you about it. We reply within 24 hours on business days with honest findings and a clear plan."
        />
      </div>
    </main>
  );
}
