import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import Faq from '../../components/Faq';
import ServiceCTA from '../../components/ServiceCTA';
import JsonLd from '../../components/JsonLd';
import { SITE, webPageSchema, faqSchema, breadcrumbSchema } from '../../lib/seo';

const DESCRIPTION =
  'Webentric builds fast, mobile-first business sites in Delhi & India with React, Tailwind CSS, Firebase or Supabase, and REST API integration — structured so search engines can read every page.';

const FAQS = [
  {
    question: 'How long does a business site usually take?',
    answer: 'It depends on page count, content readiness, and integrations. A straightforward business site moves faster than one with booking flows, dashboards, or several API connections. After a short discovery conversation we confirm a clear timeline before work begins.',
  },
  {
    question: 'What tools do you use to build?',
    answer: 'The interface is built with React, JavaScript, and Tailwind CSS. Data, auth, and storage run on Firebase or Supabase, and external tools connect through REST API integration. The setup stays lean so future changes are simple.',
  },
  {
    question: 'Can you connect forms, databases, or other tools?',
    answer: 'Yes. Contact forms, lead flows, booking requests, and CRM-style views can write directly to Firebase or Supabase, and we can push or pull data from third-party services through REST APIs so enquiries land where your team works.',
  },
  {
    question: 'Will the site work well on phones?',
    answer: 'Yes. Every layout is planned mobile-first and tested across common phone and desktop sizes for readability, tap targets, navigation, and loading behaviour on real mobile networks.',
  },
  {
    question: 'Is search optimisation part of the build?',
    answer: 'Yes. We set semantic structure, clear headings, meta tags, clean URLs, and fast-loading templates so search engines can crawl and understand your pages. Ongoing SEO work is available as a separate service after launch.',
  },
  {
    question: 'Do you help after launch?',
    answer: 'Yes. We offer website maintenance for updates, backups, small content changes, and monitoring, so your site stays current and stable as your business grows.',
  },
];

const RELATED = [
  { label: 'Web Design', to: '/web-design' },
  { label: 'Ecommerce Development', to: '/ecommerce-development' },
  { label: 'Website Redesign', to: '/website-redesign' },
];

const INCLUDED = [
  {
    title: 'Mobile-first, responsive layouts',
    text: 'Every page is planned for phones first, then adapted to larger screens. Text stays readable, buttons stay tappable, and layouts hold together on the devices your visitors actually use.',
  },
  {
    title: 'Frontend and backend setup',
    text: 'Interfaces are built with React, JavaScript, and Tailwind CSS. Data, auth, and storage run on Firebase or Supabase, giving your site a solid foundation without unnecessary complexity.',
  },
  {
    title: 'API and database connections',
    text: 'We link forms, catalogs, and internal tools to your database and connect external services through REST API integration, so enquiries, bookings, and records flow where they should.',
  },
  {
    title: 'Performance-focused build',
    text: 'Compressed images, lean styling, and careful scripting keep pages light. Visitors get quick loads on mobile data as well as broadband.',
  },
  {
    title: 'Security essentials',
    text: 'Secure forms, managed auth, and clear database rules protect enquiries and user data. Roles and access are set so only the right people can change content or view records.',
  },
  {
    title: 'Search-ready structure',
    text: 'Semantic HTML, clear headings, meta setup, and clean URLs give search engines a straightforward map of your pages. Your team can add content later without breaking that structure.',
  },
];

const BENEFITS = [
  {
    title: 'Clear credibility',
    text: 'A coherent site with real services, work samples, and contact paths helps new visitors trust you faster — before the first call.',
  },
  {
    title: 'Steady enquiry flow',
    text: 'Lead and booking flows — contact forms, call links, and chat paths — turn casual browsing into real conversations with your team.',
  },
  {
    title: 'Easy to extend',
    text: 'Need new pages, a dashboard, or a CRM-style view later? The React plus Firebase/Supabase base lets us add modules without starting over.',
  },
  {
    title: 'Built for search and sharing',
    text: 'Logical URLs, readable titles, and fast pages make it simpler for people to find your links and pass them on.',
  },
  {
    title: 'Practical ownership',
    text: 'You get a system your team can actually use: review enquiries, update content, and request maintenance when needed.',
  },
];

const STEPS = [
  {
    n: '01',
    title: 'Discover',
    text: 'We map your services, audience, and goals, then agree on pages, features, and integrations before anything is built.',
  },
  {
    n: '02',
    title: 'Structure',
    text: 'We outline the sitemap, page sections, and data needs so content, forms, and databases line up from the start.',
  },
  {
    n: '03',
    title: 'Build',
    text: 'We develop the interface in React and Tailwind CSS, wire up Firebase or Supabase, and connect the agreed APIs.',
  },
  {
    n: '04',
    title: 'Check and launch',
    text: 'We test on phones and desktops, review speed, security, and search basics, then launch and hand over.',
  },
];

const INDUSTRIES = [
  { label: 'Small Business', to: '/industries/small-business' },
  { label: 'Startups', to: '/industries/startups' },
  { label: 'Education', to: '/industries/education' },
];

const GUIDES = [
  {
    title: 'How Much Does a Business Website Cost in India in 2026?',
    text: 'The factors that shape pricing, from page count to functionality.',
    to: '/blogs/business-website-cost-india-2026',
  },
  {
    title: 'Why Your Small Business Needs a Website From Day One',
    text: 'Why an early online presence compounds into enquiries and trust.',
    to: '/blogs/why-small-business-needs-website',
  },
];

export const metadata = {
  title: 'Website Development Company in Delhi & India | Webentric',
  description: DESCRIPTION,
  keywords: ['website development company Delhi', 'website development services India', 'custom website development', 'business website development'],
  alternates: { canonical: `${SITE.url}/website-development` },
  openGraph: {
    title: 'Website Development Company in Delhi & India | Webentric',
    description: DESCRIPTION,
    url: `${SITE.url}/website-development`,
    type: 'website',
    images: ['https://webentric.in/social-media-cover.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Company in Delhi & India | Webentric',
    description: DESCRIPTION,
  },
};

export default function WebsiteDevelopmentPage() {
  return (
    <main className="bg-page text-ink min-h-screen">
      <JsonLd
        data={[
          webPageSchema({
            name: 'Website Development Company in Delhi & India | Webentric',
            url: `${SITE.url}/website-development`,
            description: DESCRIPTION,
          }),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Website Development Services',
            url: `${SITE.url}/website-development`,
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
            { name: 'Website Development', url: `${SITE.url}/website-development` },
          ]),
        ]}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 pt-24 md:pt-28 pb-20">
        <Breadcrumbs items={[{ label: 'Services' }, { label: 'Development', to: '/website-development' }]} />
        <p className="text-xs tracking-[0.22em] text-muted mb-4">WEBSITE DEVELOPMENT SERVICES</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] mb-6">
          Custom Website Development for Growing Businesses
        </h1>
        <div className="max-w-3xl space-y-4 text-muted text-[15px] sm:text-base leading-relaxed mb-14 md:mb-20">
          <p>
            If you run a growing business in Delhi or elsewhere in India, your site is often the first meeting.
            People check your services, your work, and how to reach you before they ever call. We create clear,
            fast, mobile-first sites that make that first meeting count.
          </p>
          <p>
            Our work covers both sides of a project: a clean React interface styled with Tailwind CSS, plus a
            practical backend on Firebase or Supabase. Forms, databases, and third-party tools connect through
            REST API integration, and every layout follows a search-friendly structure so search engines can read
            your pages easily.
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
          title="Need a business site that supports growth?"
          text="Tell us about your services and what you want the site to achieve. We reply within 24 hours on business days with a clear plan and timeline."
        />
      </div>
    </main>
  );
}
