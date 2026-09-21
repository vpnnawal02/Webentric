import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import Faq from '../../components/Faq';
import ServiceCTA from '../../components/ServiceCTA';
import JsonLd from '../../components/JsonLd';
import { SITE, webPageSchema, faqSchema, breadcrumbSchema } from '../../lib/seo';

const DESCRIPTION =
  'Webentric crafts clear, mobile-first interfaces in Delhi & India with React, Tailwind CSS, and JavaScript — focused on readability, enquiry flow, and quick loading on every screen.';

const FAQS = [
  {
    question: 'What do you need from me to start?',
    answer: 'Your services, logo and photos if you have them, and a few references you like. We handle structure, interface, and the build in React and Tailwind CSS — you review and approve at each step before anything goes live.',
  },
  {
    question: 'Will my pages work well on mobile?',
    answer: 'Yes. Phone layouts are designed first and tested on common screen sizes for readability, navigation, and tap targets, so visitors can read and act without pinching or hunting for buttons.',
  },
  {
    question: 'Can you match my existing brand?',
    answer: 'Yes. We carry your colours, type, and tone across all pages so the whole site feels like one place. If you do not have guidelines yet, we set a simple, reusable visual direction for you to keep.',
  },
  {
    question: 'Do you handle accessibility?',
    answer: 'We cover practical basics: readable contrast, legible sizes, clear headings, alt-text prompts for images, and keyboard-friendly navigation, so more visitors can use your pages comfortably.',
  },
  {
    question: 'Will the layout help with enquiries?',
    answer: 'Yes. Each page gets a clear goal with visible next steps — contact forms, booking links, or call buttons — and lead flows that can store submissions to Firebase or Supabase for your team to follow up.',
  },
  {
    question: 'Can you improve my current site instead of starting over?',
    answer: 'Often, yes. Our website redesign service refreshes structure, visuals, and speed while keeping what already works. If a fresh start genuinely makes more sense, we will tell you plainly before you commit.',
  },
];

const RELATED = [
  { label: 'Website Development', to: '/website-development' },
  { label: 'Landing Page Development', to: '/landing-page-development' },
  { label: 'Website Redesign', to: '/website-redesign' },
];

const INCLUDED = [
  {
    title: 'UX research and page goals',
    text: 'We study your audience, offers, and where visitors hesitate, then define one goal per page and a simple path to reach it. Structure follows intent, not decoration.',
  },
  {
    title: 'Custom interface layouts',
    text: 'Page sections, navigation, and content blocks are arranged around your brand — type, spacing, and colour used consistently so every page feels like part of one place.',
  },
  {
    title: 'Mobile-first presentation',
    text: 'Phone layouts come first. Content stacks cleanly, calls to action stay visible, and menus stay simple on small screens before we adapt the experience to desktop.',
  },
  {
    title: 'Accessibility basics',
    text: 'Readable contrast, legible sizes, clear focus states, and keyboard-friendly navigation help more people move through your pages with less friction.',
  },
  {
    title: 'Layouts tied to action',
    text: 'Enquiry forms, booking links, call buttons, and lead flows sit where visitors expect them. Each section points toward a next step: enquire, book, call, or visit.',
  },
  {
    title: 'Consistent brand, light pages',
    text: 'We reuse components and keep styling lean in Tailwind CSS, holding images and scripts to a performance budget so pages stay quick on mobile networks.',
  },
];

const BENEFITS = [
  {
    title: 'Faster trust',
    text: 'A clear, consistent interface signals a real, organised operation before anyone picks up the phone.',
  },
  {
    title: 'More enquiries from the same traffic',
    text: 'Focused sections and visible next steps turn passing visits into form fills, calls, and bookings.',
  },
  {
    title: 'Better phone experience',
    text: 'Most visitors arrive on mobile. Legible, tappable layouts keep them reading instead of leaving.',
  },
  {
    title: 'Easier updates',
    text: 'Reusable React components and tidy Tailwind styling make future edits and new pages straightforward to add.',
  },
  {
    title: 'Lasting brand recall',
    text: 'Steady use of type, spacing, and tone across pages helps people remember you after they leave.',
  },
];

const STEPS = [
  {
    n: '01',
    title: 'Understand',
    text: 'We study your offers, audience, and references, then agree on which pages you need and what each one must achieve.',
  },
  {
    n: '02',
    title: 'Outline',
    text: 'We sketch the structure and content order for key pages, placing calls to action and proof where they help most.',
  },
  {
    n: '03',
    title: 'Design and build',
    text: 'We craft the interface and develop it in React, Tailwind CSS, and JavaScript, connecting forms to Firebase or Supabase where needed.',
  },
  {
    n: '04',
    title: 'Refine and launch',
    text: 'We test readability, contrast, speed, and flows on phones and desktops, then polish the details and release.',
  },
];

const INDUSTRIES = [
  { label: 'Startups', to: '/industries/startups' },
  { label: 'Restaurants & Cafes', to: '/industries/restaurants-cafes' },
  { label: 'Fitness', to: '/industries/fitness' },
];

const GUIDES = [
  {
    title: 'Website Designer: Why Your Business Needs a Professional Website in 2026',
    text: 'What a professionally built site does for credibility, enquiries, and growth.',
    to: '/blogs/website-designer',
  },
  {
    title: 'Custom Website vs WordPress: Which Is Better for Your Business in 2026?',
    text: 'How custom builds and WordPress compare on cost, control, and scale.',
    to: '/blogs/custom-website-vs-wordpress',
  },
];

export const metadata = {
  title: 'Web Design Company in Delhi & India | Webentric',
  description: DESCRIPTION,
  keywords: ['web design company Delhi', 'website design services India', 'responsive web design', 'custom web design'],
  alternates: { canonical: `${SITE.url}/web-design` },
  openGraph: {
    title: 'Web Design Company in Delhi & India | Webentric',
    description: DESCRIPTION,
    url: `${SITE.url}/web-design`,
    type: 'website',
    images: ['https://webentric.in/social-media-cover.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Delhi & India | Webentric',
    description: DESCRIPTION,
  },
};

export default function WebDesignPage() {
  return (
    <main className="bg-page text-ink min-h-screen">
      <JsonLd
        data={[
          webPageSchema({
            name: 'Web Design Company in Delhi & India | Webentric',
            url: `${SITE.url}/web-design`,
            description: DESCRIPTION,
          }),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Web Design Services',
            url: `${SITE.url}/web-design`,
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
            { name: 'Web Design', url: `${SITE.url}/web-design` },
          ]),
        ]}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 pt-24 md:pt-28 pb-20">
        <Breadcrumbs items={[{ label: 'Services' }, { label: 'Design', to: '/web-design' }]} />
        <p className="text-xs tracking-[0.22em] text-muted mb-4">WEB DESIGN SERVICES</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] mb-6">
          Web Design That Turns Visitors Into Customers
        </h1>
        <div className="max-w-3xl space-y-4 text-muted text-[15px] sm:text-base leading-relaxed mb-14 md:mb-20">
          <p>
            Visitors decide quickly whether to stay or leave. Clear hierarchy, honest copy, and a calm visual
            direction help them understand what you offer and what to do next. We shape pages around that moment
            — especially for first-time visitors arriving from search or social.
          </p>
          <p>
            From startups to cafes and fitness studios, we plan interfaces that are easy to scan on a phone,
            consistent with your brand, and tied to a single action per section: enquire, book, call, or visit.
            Layouts are built in React with Tailwind CSS and JavaScript, with Firebase or Supabase added when
            forms need storage.
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
          title="Want pages that turn visits into enquiries?"
          text="Share your current site or idea and the action you want visitors to take. We reply within 24 hours on business days with a clear plan."
        />
      </div>
    </main>
  );
}
