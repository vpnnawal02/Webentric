import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import Faq from '../../components/Faq';
import ServiceCTA from '../../components/ServiceCTA';
import JsonLd from '../../components/JsonLd';
import { SITE, webPageSchema, faqSchema, breadcrumbSchema } from '../../lib/seo';

const DESCRIPTION =
  'Webentric keeps your site updated, backed up, and secure — content updates, bug fixes, performance checks, and SSL/hosting support for businesses across India.';

const FAQS = [
  {
    question: 'What does the support plan cover month to month?',
    answer: 'Content updates such as text, images, and new sections on existing pages; regular backups with tested restores; security and software updates; fixes for bugs and broken layouts; periodic performance checks; and help with SSL, hosting, and domain renewals. Anything outside this scope is quoted separately before we begin.',
  },
  {
    question: 'What counts as a small improvement versus new development?',
    answer: 'Updating copy, swapping images, adding a section to an existing page, or fixing a layout glitch counts as upkeep and is covered. Designing entirely new pages, adding major features, integrating new systems, or rebuilding flows is new development — we quote that separately so you always know the cost upfront.',
  },
  {
    question: 'My site is down. What happens?',
    answer: 'Tell us right away and we investigate: hosting status, SSL validity, recent updates, and error logs. Because we keep regular backups, a broken update or failed change can usually be rolled back quickly while we fix the underlying cause.',
  },
  {
    question: 'Do you look after SSL, hosting, and domains?',
    answer: 'Yes. We monitor certificate expiry, help with hosting issues and renewals, and assist with domain settings such as DNS records. If your hosting or domain sits with a third party, we coordinate with them on your behalf.',
  },
  {
    question: 'How do backups and restores work?',
    answer: 'We take regular backups of your site files and content so there is always a recent copy to fall back on. If an update breaks something or content is lost, we restore the last working version and then re-apply anything that changed since.',
  },
  {
    question: 'How do I send a change request?',
    answer: 'Simply message us with what you want changed — text, screenshots, or a short note all work. We confirm the scope, make the update, and let you know once it is live for your review.',
  },
];

const RELATED = [
  { label: 'Website Development', to: '/website-development' },
  { label: 'Custom Software Development', to: '/custom-software-development' },
  { label: 'Website Redesign', to: '/website-redesign' },
];

const INCLUDED = [
  {
    title: 'Content updates',
    text: 'Fresh text, new images, price changes, announcements, and new sections on existing pages — kept current without you touching code.',
  },
  {
    title: 'Backups & restore',
    text: 'Regular backups of your site files and content, with tested restores so a bad update or accident never means starting over.',
  },
  {
    title: 'Security & software updates',
    text: 'Timely updates to the underlying software and dependencies, closing known vulnerabilities before they become problems.',
  },
  {
    title: 'Bug fixes',
    text: 'Broken layouts, forms that stop submitting, links that 404, glitches after an update — diagnosed and fixed promptly.',
  },
  {
    title: 'Performance checks',
    text: 'Periodic reviews of load behaviour and page weight, catching the slowdowns that creep in as content grows.',
  },
  {
    title: 'SSL, hosting & domain help',
    text: 'Certificate renewals, hosting troubleshooting, and domain/DNS assistance — including coordination with third-party providers.',
  },
];

const BENEFITS = [
  {
    title: 'Stay reachable',
    text: 'Expired certificates, lapsed hosting, and silent breakages take sites offline. Routine checks catch them before your customers notice.',
  },
  {
    title: 'Small issues stay small',
    text: 'A glitch fixed this week is a footnote. Left for months, it becomes lost enquiries and emergency work.',
  },
  {
    title: 'Content stays current',
    text: 'Outdated prices, old team photos, and stale announcements quietly cost trust. Regular updates keep the site believable.',
  },
  {
    title: 'One team that knows your site',
    text: 'No explaining your setup from scratch each time. We know your pages, your hosting, and your history.',
  },
];

const STEPS = [
  {
    n: '01',
    title: 'Onboard',
    text: 'We collect access to your site, hosting, and domain, review the current setup, and take a fresh backup.',
  },
  {
    n: '02',
    title: 'Request',
    text: 'Send change requests any time — a message with text or screenshots is enough to get started.',
  },
  {
    n: '03',
    title: 'Resolve',
    text: 'We make the update or fix, verify it on desktop and mobile, and confirm once it is live.',
  },
  {
    n: '04',
    title: 'Review',
    text: 'Backups, updates, and performance checks run in the background, and we flag anything that needs your decision.',
  },
];

const INDUSTRIES = [
  { label: 'Small Business', to: '/industries/small-business' },
  { label: 'Education', to: '/industries/education' },
  { label: 'Restaurants & Cafes', to: '/industries/restaurants-cafes' },
];

const GUIDES = [
  {
    title: 'Website Maintenance: What Does It Cost and What Does It Include?',
    text: 'A plain breakdown of what upkeep covers and how support plans are priced.',
    to: '/blogs/website-maintenance-cost',
  },
  {
    title: 'How Much Does a Business Website Cost in India in 2026?',
    text: 'The factors that shape pricing, from page count to functionality.',
    to: '/blogs/business-website-cost-india-2026',
  },
  {
    title: 'Why Your Small Business Needs a Website From Day One',
    text: 'Why staying online and up to date matters from the very start.',
    to: '/blogs/why-small-business-needs-website',
  },
];

export const metadata = {
  title: 'Website Maintenance Services India | Webentric',
  description: DESCRIPTION,
  keywords: ['website maintenance services India', 'website support plans', 'website security updates'],
  alternates: { canonical: `${SITE.url}/website-maintenance` },
  openGraph: {
    title: 'Website Maintenance Services India | Webentric',
    description: DESCRIPTION,
    url: `${SITE.url}/website-maintenance`,
    type: 'website',
    images: ['https://webentric.in/social-media-cover.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Maintenance Services India | Webentric',
    description: DESCRIPTION,
  },
};

export default function WebsiteMaintenancePage() {
  return (
    <main className="bg-page text-ink min-h-screen">
      <JsonLd
        data={[
          webPageSchema({
            name: 'Website Maintenance Services India | Webentric',
            url: `${SITE.url}/website-maintenance`,
            description: DESCRIPTION,
          }),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Website Maintenance Services',
            url: `${SITE.url}/website-maintenance`,
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
            { name: 'Website Maintenance', url: `${SITE.url}/website-maintenance` },
          ]),
        ]}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 pt-24 md:pt-28 pb-20">
        <Breadcrumbs items={[{ label: 'Services' }, { label: 'Maintenance', to: '/website-maintenance' }]} />
        <p className="text-xs tracking-[0.22em] text-muted mb-4">SUPPORT &amp; CARE PLANS</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] mb-6">
          Website Maintenance That Keeps You Online
        </h1>
        <div className="max-w-3xl space-y-4 text-muted text-[15px] sm:text-base leading-relaxed mb-14 md:mb-20">
          <p>
            A site is never truly finished. Content goes stale, software needs patching, and small glitches quietly
            turn visitors away. Regular website maintenance keeps everything updated, backed up, and working — so your
            pages load, your forms submit, and your business stays reachable.
          </p>
          <p>
            Our support plans cover the day-to-day upkeep businesses across India actually need: content changes,
            backups with restore, security updates, bug fixes, performance checks, and help with SSL, hosting, and
            domains. You run your business; we look after the site.
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
          title="Want a site you never have to worry about?"
          text="Tell us where your site is hosted and what you need help with. We reply within 24 hours on business days with a clear support plan."
        />
      </div>
    </main>
  );
}
