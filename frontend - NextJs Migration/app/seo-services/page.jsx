import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import Faq from '../../components/Faq';
import ServiceCTA from '../../components/ServiceCTA';
import JsonLd from '../../components/JsonLd';
import { SITE, webPageSchema, faqSchema, breadcrumbSchema } from '../../lib/seo';

const DESCRIPTION =
  'Honest SEO for Delhi and India businesses: technical fixes, on-page optimisation, local SEO, and speed work. No ranking guarantees — just groundwork that helps customers find you.';

const FAQS = [
  {
    question: 'Do you guarantee first-page rankings?',
    answer: 'No — and you should be cautious of anyone who does. Nobody controls Google\u2019s results, so a guaranteed position is not something any honest provider can offer. What we do guarantee is thorough, transparent work: we document every fix and change, and report on visibility, traffic, and enquiries so you can judge progress yourself.',
  },
  {
    question: 'What does the technical side involve?',
    answer: 'We check how search engines experience your site: crawlability, index coverage, sitemaps, redirects, broken links, mobile usability, page speed, and Core Web Vitals. Issues we find are fixed directly or handed to you as a clear, prioritised list.',
  },
  {
    question: 'Do you manage our Google Business Profile?',
    answer: 'We guide you through claiming, verifying, and completing it — categories, services, hours, photos, and service areas — and show you how to handle reviews and updates. Day-to-day posting and review replies stay with you, since customers trust replies that come directly from the business itself.',
  },
  {
    question: 'What do you change on the pages themselves?',
    answer: 'Titles, descriptions, headings, internal links, image descriptions, and URL structure — plus guidance on how each page\u2019s content should be organised so both readers and search engines understand what it covers. We never stuff pages with awkward repeated phrases.',
  },
  {
    question: 'How long until we see movement?',
    answer: 'It varies with your starting point, your competitors, and how much fixing is needed — visibility usually builds gradually rather than overnight. We set expectations honestly after the initial audit and report on leading indicators like index coverage and impressions, not just final positions.',
  },
  {
    question: 'What do you need from us to begin?',
    answer: 'Access to your website and analytics, a list of the services and areas you want to be found for, and one conversation about your customers. From there we run the audit and agree on priorities together.',
  },
];

const RELATED = [
  { label: 'Website Development', to: '/website-development' },
  { label: 'Landing Page Development', to: '/landing-page-development' },
  { label: 'Website Redesign', to: '/website-redesign' },
];

const INCLUDED = [
  {
    title: 'Technical audit & fixes',
    text: 'A full check of crawlability, indexing, redirects, broken links, and mobile usability — with issues fixed directly or listed by priority.',
  },
  {
    title: 'On-page optimisation',
    text: 'Titles, descriptions, headings, internal links, and image descriptions tuned so each page clearly communicates what it offers.',
  },
  {
    title: 'Local SEO guidance',
    text: 'Location pages, local business details, and map visibility for customers searching near you in Delhi NCR and beyond.',
  },
  {
    title: 'Google Business Profile help',
    text: 'Claiming, verification, categories, services, hours, and photos — plus coaching on reviews and keeping the listing accurate.',
  },
  {
    title: 'Speed & Core Web Vitals',
    text: 'Measurement and improvement of loading speed, interactivity, and visual stability — factors visitors feel and search engines weigh.',
  },
  {
    title: 'Metadata, sitemaps & structure',
    text: 'Clean sitemaps, sensible URL structure, and content organisation guidance so the right pages get found for the right queries.',
  },
];

const BENEFITS = [
  {
    title: 'Found by nearby customers',
    text: 'Local optimisation and an accurate business listing help people searching in your area discover and contact you.',
  },
  {
    title: 'Pages search engines can read',
    text: 'Technical fixes remove the barriers that keep good pages out of the index or misunderstood by crawlers.',
  },
  {
    title: 'Faster pages that hold attention',
    text: 'Speed work improves the experience for every visitor, whether they arrived from search, social, or a referral.',
  },
  {
    title: 'Honest, readable reporting',
    text: 'You see what was done, what changed, and what comes next — in plain language, tied to visibility, traffic, and enquiries.',
  },
  {
    title: 'Work that supports every channel',
    text: 'Clear structure, fast pages, and accurate listings improve paid campaigns, social traffic, and word-of-mouth landings too.',
  },
];

const STEPS = [
  {
    n: '01',
    title: 'Audit',
    text: 'We examine your site, listings, and current visibility to find what helps and what holds you back.',
  },
  {
    n: '02',
    title: 'Fix',
    text: 'Technical issues and on-page gaps are resolved in priority order, with every change documented.',
  },
  {
    n: '03',
    title: 'Strengthen',
    text: 'Local presence, content structure, and speed are improved so the site keeps compounding over time.',
  },
  {
    n: '04',
    title: 'Review',
    text: 'Regular reports show visibility, traffic, and enquiry trends — and decide what deserves attention next.',
  },
];

const INDUSTRIES = [
  { label: 'Small Business', to: '/industries/small-business' },
  { label: 'Startups', to: '/industries/startups' },
  { label: 'Restaurants & Cafes', to: '/industries/restaurants-cafes' },
];

const GUIDES = [
  {
    title: 'Website Development Company in Delhi: Complete Guide to Web Development Services',
    text: 'Why the underlying build quality matters for how search engines read your site.',
    to: '/blogs/website-development-company-delhi',
  },
  {
    title: 'Why Your Small Business Needs a Website From Day One',
    text: 'A findable, credible home base is the foundation every other channel builds on.',
    to: '/blogs/why-small-business-needs-website',
  },
  {
    title: 'Why Your Business Needs a Professional Website to Grow in 2026',
    text: 'How a well-built site turns search visibility into actual enquiries.',
    to: '/blogs/why-your-business-needs-a-website',
  },
];

export const metadata = {
  title: 'SEO Services in Delhi, India | Webentric',
  description: DESCRIPTION,
  keywords: ['SEO services Delhi', 'technical SEO India', 'local SEO Delhi'],
  alternates: { canonical: `${SITE.url}/seo-services` },
  openGraph: {
    title: 'SEO Services in Delhi, India | Webentric',
    description: DESCRIPTION,
    url: `${SITE.url}/seo-services`,
    type: 'website',
    images: ['https://webentric.in/social-media-cover.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Services in Delhi, India | Webentric',
    description: DESCRIPTION,
  },
};

export default function SeoServicesPage() {
  return (
    <main className="bg-page text-ink min-h-screen">
      <JsonLd
        data={[
          webPageSchema({
            name: 'SEO Services in Delhi, India | Webentric',
            url: `${SITE.url}/seo-services`,
            description: DESCRIPTION,
          }),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'SEO Services',
            url: `${SITE.url}/seo-services`,
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
            { name: 'SEO Services', url: `${SITE.url}/seo-services` },
          ]),
        ]}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 pt-24 md:pt-28 pb-20">
        <Breadcrumbs items={[{ label: 'Services' }, { label: 'SEO', to: '/seo-services' }]} />
        <p className="text-xs tracking-[0.22em] text-muted mb-4">SEO SERVICES</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] mb-6">
          SEO That Gets Your Business Found
        </h1>
        <div className="max-w-3xl space-y-4 text-muted text-[15px] sm:text-base leading-relaxed mb-14 md:mb-20">
          <p>
            When someone nearby searches for what you offer, your business should be easy to find. Our approach to
            search optimisation for Delhi and India-based businesses covers the groundwork that matters: technical
            health, clear on-page signals, local visibility, and fast-loading pages.
          </p>
          <p>
            Search visibility compounds over time — there are no shortcuts and no credible promises of specific
            positions. What we offer instead is careful, transparent work: fixes you can verify, reports you can
            understand, and a site that earns its place in the results.
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
          title="Make your business easier to find"
          text="Tell us what you offer and where your customers are. We reply within 24 hours on business days with honest findings and a clear starting point."
        />
      </div>
    </main>
  );
}
