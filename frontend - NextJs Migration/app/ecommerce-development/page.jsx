import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import Faq from '../../components/Faq';
import ServiceCTA from '../../components/ServiceCTA';
import JsonLd from '../../components/JsonLd';
import { SITE, webPageSchema, faqSchema, breadcrumbSchema } from '../../lib/seo';

const DESCRIPTION =
  'Webentric builds mobile-first online stores in India with React, Firebase or Supabase, and Razorpay, Stripe, UPI, or PayPal — catalogs, checkout, and order views included.';

const FAQS = [
  {
    question: 'Which payment methods can you connect?',
    answer: 'Razorpay, Stripe, UPI, and PayPal. We integrate the gateway you use and handle test and live modes, success and failure screens, and order confirmation so buyers always know their payment status.',
  },
  {
    question: 'How do I manage products and orders?',
    answer: 'Through a simple admin view backed by Firebase or Supabase. You can add products, update stock and prices, and change order statuses without touching code.',
  },
  {
    question: 'Will shoppers be able to buy easily on phones?',
    answer: 'Yes. Catalogs, carts, and checkout are planned mobile-first and tested on common phone sizes for readability, large tap targets, and quick payment steps on mobile networks.',
  },
  {
    question: 'Can customers find my store through search?',
    answer: 'Yes. Every store ships with a search-friendly foundation: clean URLs, meta setup, semantic structure, and fast templates that search engines can crawl. Ongoing SEO can be added as a separate service.',
  },
  {
    question: 'Do you track what sells?',
    answer: 'Yes. Product views, add-to-cart, and checkout events are wired analytics-ready, so your analytics tool can report funnels, top products, and drop-off points.',
  },
  {
    question: 'Do you help after launch?',
    answer: 'Yes. Website maintenance covers updates, small changes, backups, and monitoring, so your store stays stable as you add products and take more orders.',
  },
];

const RELATED = [
  { label: 'Website Development', to: '/website-development' },
  { label: 'Web Application Development', to: '/web-application-development' },
  { label: 'Website Maintenance', to: '/website-maintenance' },
];

const INCLUDED = [
  {
    title: 'Product catalogs',
    text: 'Categories, search, and filters help shoppers browse by need. Product pages carry clear images, variants, pricing, and availability.',
  },
  {
    title: 'Cart and checkout flow',
    text: 'A simple cart, address step, and order review reduce drop-offs. Guests can check out without forced accounts, with validation that prevents common errors.',
  },
  {
    title: 'Familiar payment options',
    text: 'Pay via Razorpay, Stripe, UPI, or PayPal. We wire the gateway you use and handle success, failure, and pending states clearly for buyers.',
  },
  {
    title: 'Order management basics',
    text: 'Orders, customer details, and statuses store in Firebase or Supabase with a straightforward admin view, so you can review, update, and track the daily sales flow.',
  },
  {
    title: 'Mobile-first shopping',
    text: 'Product grids, carts, and payments are tested on phones first. Large tap targets and quick screens keep mobile buyers moving toward payment.',
  },
  {
    title: 'Analytics-ready, search foundations',
    text: 'Key events — product views, add-to-cart, checkout steps — are ready for your analytics tool. Clean URLs, meta setup, and fast templates give search engines a clear map.',
  },
];

const BENEFITS = [
  {
    title: 'Direct sales, fewer calls',
    text: 'Shoppers order themselves, day or night, instead of waiting on phone or chat for every single item.',
  },
  {
    title: 'Trust at payment',
    text: 'Known gateways and clear order confirmations lower hesitation at the final, most fragile step.',
  },
  {
    title: 'Less manual work',
    text: 'Central order records and status updates replace scattered spreadsheets for everyday fulfilment.',
  },
  {
    title: 'Clear view of demand',
    text: 'Analytics-ready events show which products get viewed, added, and bought, so restocks follow evidence rather than guesswork.',
  },
  {
    title: 'Ready to grow',
    text: 'Add products, categories, or a CRM-style customer view later without rebuilding the store from scratch.',
  },
];

const STEPS = [
  {
    n: '01',
    title: 'Map',
    text: 'We list your products, categories, payment needs, and shipping logic, then agree on catalog structure and checkout steps.',
  },
  {
    n: '02',
    title: 'Shape',
    text: 'We outline the homepage, category, product, cart, and order flows so browsing and buying stay simple.',
  },
  {
    n: '03',
    title: 'Build',
    text: 'We develop the storefront in React and Tailwind CSS, connect Firebase or Supabase, and integrate Razorpay, Stripe, UPI, or PayPal.',
  },
  {
    n: '04',
    title: 'Test and launch',
    text: 'We trial orders end to end on phones and desktops, checking payments, speed, and search basics before launch.',
  },
];

const INDUSTRIES = [
  { label: 'Small Business', to: '/industries/small-business' },
  { label: 'Startups', to: '/industries/startups' },
];

const GUIDES = [
  {
    title: 'How Much Does a Business Website Cost in India in 2026?',
    text: 'The factors that shape pricing, from page count to functionality.',
    to: '/blogs/business-website-cost-india-2026',
  },
];

export const metadata = {
  title: 'Ecommerce Website Development Company India | Webentric',
  description: DESCRIPTION,
  keywords: ['ecommerce website development India', 'online store development', 'ecommerce website design'],
  alternates: { canonical: `${SITE.url}/ecommerce-development` },
  openGraph: {
    title: 'Ecommerce Website Development Company India | Webentric',
    description: DESCRIPTION,
    url: `${SITE.url}/ecommerce-development`,
    type: 'website',
    images: ['https://webentric.in/social-media-cover.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce Website Development Company India | Webentric',
    description: DESCRIPTION,
  },
};

export default function EcommerceDevelopmentPage() {
  return (
    <main className="bg-page text-ink min-h-screen">
      <JsonLd
        data={[
          webPageSchema({
            name: 'Ecommerce Website Development Company India | Webentric',
            url: `${SITE.url}/ecommerce-development`,
            description: DESCRIPTION,
          }),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Ecommerce Development Services',
            url: `${SITE.url}/ecommerce-development`,
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
            { name: 'Ecommerce Development', url: `${SITE.url}/ecommerce-development` },
          ]),
        ]}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 pt-24 md:pt-28 pb-20">
        <Breadcrumbs items={[{ label: 'Services' }, { label: 'Ecommerce', to: '/ecommerce-development' }]} />
        <p className="text-xs tracking-[0.22em] text-muted mb-4">ECOMMERCE DEVELOPMENT SERVICES</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] mb-6">
          Ecommerce Websites Built to Sell
        </h1>
        <div className="max-w-3xl space-y-4 text-muted text-[15px] sm:text-base leading-relaxed mb-14 md:mb-20">
          <p>
            Selling online takes more than a product list. Shoppers need to find items fast, trust the checkout,
            and pay in a way that feels familiar. We create online stores that keep that path short — from
            homepage to category to cart to payment — on phones as well as desktops.
          </p>
          <p>
            Catalogs, carts, and order records run on React with Firebase or Supabase behind the scenes. Payments
            connect through Razorpay, Stripe, UPI, or PayPal, and every store ships with analytics-ready events
            and a search-friendly foundation so you can see what sells and grow steadily.
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
          title="Ready to open an online store that sells?"
          text="Tell us what you sell and how you take payments today. We reply within 24 hours on business days with a clear plan."
        />
      </div>
    </main>
  );
}
