import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import Faq from '../../components/Faq';
import ServiceCTA from '../../components/ServiceCTA';
import JsonLd from '../../components/JsonLd';
import { SITE, webPageSchema, faqSchema, breadcrumbSchema } from '../../lib/seo';

const DESCRIPTION =
  'Webentric designs fast, focused landing pages with lead forms, WhatsApp handover and analytics-ready structure for campaigns across India.';
const URL = `${SITE.url}/landing-page-development`;

const FAQS = [
  {
    question: 'How is a landing page different from a website?',
    answer: 'A website serves many visitors with many goals — browsing services, reading about you, finding contact details. A landing page serves one campaign with one goal: a call, a form fill or a WhatsApp chat. Everything on it points at that single action.',
  },
  {
    question: 'Do you help with the headline and copy structure?',
    answer: 'Yes. We structure the hero promise, benefit order, proof sections and calls to action around your offer and audience, then write the first draft for your approval. You bring the domain knowledge; we bring the page logic.',
  },
  {
    question: 'How do enquiries reach us?',
    answer: 'Through short lead forms that ask only what you need, with instant WhatsApp handover for visitors who prefer to chat and SMTP email alerts so no enquiry sits unseen. Every submission is also tracked as an analytics event.',
  },
  {
    question: 'Can we test two versions of the page?',
    answer: 'Yes. Pages are built as swappable blocks — headlines, offers, visuals and form placement can each vary independently — so you can run A/B comparisons on your ad platform without rebuilding the page.',
  },
  {
    question: 'Will we know which ad or section brings leads?',
    answer: 'Yes. Clicks, scroll depth and form starts are recorded as analytics events, and campaign tags from your ads carry through to the page. You can see which message and which section earned each enquiry.',
  },
  {
    question: 'Can you update the page when our offer changes?',
    answer: 'Yes. Because the page is built from independent sections, offers, prices-in-words and seasonal campaigns can be swapped without touching the rest. We also stay on for ongoing tweaks and upkeep.',
  },
];

const RELATED = [
  { label: 'Web Design', to: '/web-design' },
  { label: 'Website Development', to: '/website-development' },
  { label: 'SEO Services', to: '/seo-services' },
];

export const metadata = {
  title: 'Landing Page Development Services India | Webentric',
  description: DESCRIPTION,
  keywords: ['landing page development', 'landing page design services India', 'high-converting landing pages'],
  alternates: { canonical: URL },
  openGraph: {
    title: 'Landing Page Development Services India | Webentric',
    description: DESCRIPTION,
    url: URL,
    type: 'website',
    images: ['https://webentric.in/social-media-cover.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landing Page Development Services India | Webentric',
    description: DESCRIPTION,
  },
};

export default function LandingPageDevelopmentPage() {
  return (
    <main className="bg-page text-ink min-h-screen">
      <JsonLd
        data={[
          webPageSchema({ name: 'Landing Pages Designed to Convert', url: URL, description: DESCRIPTION }),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Campaign Landing Pages',
            url: URL,
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
            { name: 'Landing Pages', url: URL },
          ]),
        ]}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 pt-24 md:pt-28 pb-20">
        <Breadcrumbs items={[{ label: 'Services' }, { label: 'Landing Pages', to: '/landing-page-development' }]} />
        <p className="text-xs uppercase tracking-[0.22em] text-muted mb-4">Services — Campaign Pages</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] mb-6">
          Landing Pages Designed to Convert
        </h1>
        <div className="max-w-3xl space-y-4 text-muted text-[15px] sm:text-base leading-relaxed mb-14 md:mb-20">
          <p>
            Advertisements earn the click; the page earns the enquiry. When someone arrives from a campaign and meets
            a slow, generic homepage, most of that ad spend quietly leaves. A dedicated page keeps one promise, one
            audience and one action.
          </p>
          <p>
            Our approach to landing page development is simple: one page, one offer, one action. Every section
            answers the visitor&apos;s next doubt in order, loads fast on mobile data, and records exactly which
            parts pull their weight.
          </p>
        </div>

        <section>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">What&apos;s included</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-surface border border-line p-6">
              <h3 className="font-medium mb-2">Campaign alignment</h3>
              <p className="text-sm text-muted leading-relaxed">
                Headline, offer and visuals matched to the ad or message that sent the visitor, so nothing feels like a wrong turn.
              </p>
            </div>
            <div className="bg-surface border border-line p-6">
              <h3 className="font-medium mb-2">Hero &amp; copy structure</h3>
              <p className="text-sm text-muted leading-relaxed">
                A clear promise above the fold, benefits in the visitor&apos;s words, and one repeated call to action.
              </p>
            </div>
            <div className="bg-surface border border-line p-6">
              <h3 className="font-medium mb-2">Lead forms + WhatsApp</h3>
              <p className="text-sm text-muted leading-relaxed">
                Short forms that ask only what you need, with instant WhatsApp handover and email alerts for every enquiry.
              </p>
            </div>
            <div className="bg-surface border border-line p-6">
              <h3 className="font-medium mb-2">Fast by default</h3>
              <p className="text-sm text-muted leading-relaxed">
                Lean React and Tailwind builds tuned for quick loads on mobile networks, where most campaign traffic arrives.
              </p>
            </div>
            <div className="bg-surface border border-line p-6">
              <h3 className="font-medium mb-2">A/B-test-ready structure</h3>
              <p className="text-sm text-muted leading-relaxed">
                Sections built as swappable blocks, so headlines, offers and layouts can be tested without rebuilding.
              </p>
            </div>
            <div className="bg-surface border border-line p-6">
              <h3 className="font-medium mb-2">Analytics events</h3>
              <p className="text-sm text-muted leading-relaxed">
                Clicks, scrolls and form starts tracked as events, so you can see which section earns its place.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">Benefits</h2>
          <div className="border border-line divide-y divide-line">
            <div className="px-6 py-5">
              <h3 className="font-medium mb-1">One page, one job</h3>
              <p className="text-sm text-muted leading-relaxed">No menus pulling visitors away — every section moves toward the same enquiry.</p>
            </div>
            <div className="px-6 py-5">
              <h3 className="font-medium mb-1">Built for the click it receives</h3>
              <p className="text-sm text-muted leading-relaxed">Message match between ad and page keeps visitors oriented from the first second.</p>
            </div>
            <div className="px-6 py-5">
              <h3 className="font-medium mb-1">Speed your ads deserve</h3>
              <p className="text-sm text-muted leading-relaxed">Lightweight builds hold attention on mobile data instead of losing it to a spinner.</p>
            </div>
            <div className="px-6 py-5">
              <h3 className="font-medium mb-1">Decisions from data, not opinion</h3>
              <p className="text-sm text-muted leading-relaxed">Event tracking and test-ready blocks show what works, so changes are evidence-led.</p>
            </div>
            <div className="px-6 py-5">
              <h3 className="font-medium mb-1">Reusable across campaigns</h3>
              <p className="text-sm text-muted leading-relaxed">Swap the offer and headline to relaunch for the next campaign without starting over.</p>
            </div>
          </div>
        </section>

        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">How we work</h2>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-surface border border-line p-6">
              <p className="text-xs tracking-[0.22em] text-muted mb-3">01</p>
              <h3 className="font-medium mb-2">Study the offer &amp; audience</h3>
              <p className="text-sm text-muted leading-relaxed">
                We learn what you are promoting, who should respond, and which ad or message brings them in.
              </p>
            </div>
            <div className="bg-surface border border-line p-6">
              <p className="text-xs tracking-[0.22em] text-muted mb-3">02</p>
              <h3 className="font-medium mb-2">Structure the argument</h3>
              <p className="text-sm text-muted leading-relaxed">
                Hero promise, objections answered in order, proof, then the ask — agreed with you before design starts.
              </p>
            </div>
            <div className="bg-surface border border-line p-6">
              <p className="text-xs tracking-[0.22em] text-muted mb-3">03</p>
              <h3 className="font-medium mb-2">Design, build &amp; connect</h3>
              <p className="text-sm text-muted leading-relaxed">
                The page is built in React and Tailwind, with forms, WhatsApp handover and analytics events wired in.
              </p>
            </div>
            <div className="bg-surface border border-line p-6">
              <p className="text-xs tracking-[0.22em] text-muted mb-3">04</p>
              <h3 className="font-medium mb-2">Launch, measure &amp; refine</h3>
              <p className="text-sm text-muted leading-relaxed">
                Your campaign goes live on a tracked page, and early data guides the first round of refinements.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">Useful for</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/industries/startups" className="border border-line px-5 py-2.5 text-sm hover:border-ink transition-colors">
              Startups
            </Link>
            <Link href="/industries/small-business" className="border border-line px-5 py-2.5 text-sm hover:border-ink transition-colors">
              Small Businesses
            </Link>
            <Link href="/industries/fitness" className="border border-line px-5 py-2.5 text-sm hover:border-ink transition-colors">
              Fitness
            </Link>
            <Link href="/portfolio" className="border border-line px-5 py-2.5 text-sm hover:border-ink transition-colors">
              See Our Work →
            </Link>
          </div>
        </section>

        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">Guides &amp; resources</h2>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            <Link href="/blogs/why-small-business-needs-website" className="bg-surface border border-line p-6 hover:border-ink transition-colors block">
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted mb-3">Guide</p>
              <h3 className="font-medium mb-2">Why Your Small Business Needs a Website From Day One</h3>
              <p className="text-sm text-muted leading-relaxed">Where a focused campaign page fits inside your first online presence.</p>
            </Link>
            <Link href="/blogs/business-website-cost-india-2026" className="bg-surface border border-line p-6 hover:border-ink transition-colors block">
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted mb-3">Guide</p>
              <h3 className="font-medium mb-2">How Much Does a Business Website Cost in India in 2026?</h3>
              <p className="text-sm text-muted leading-relaxed">Planning budgets before you brief a campaign page.</p>
            </Link>
          </div>
        </section>

        <Faq items={FAQS} />

        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">Related services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {RELATED.map((item) => (
              <Link key={item.to} href={item.to} className="border border-line p-6 hover:border-ink transition-colors font-medium">
                {item.label} →
              </Link>
            ))}
          </div>
        </section>

        <ServiceCTA
          title="Running ads to a homepage?"
          text="Tell us about your campaign and the action you want visitors to take. We reply within 24 hours on business days with a clear plan, quote and timeline."
        />
      </div>
    </main>
  );
}
