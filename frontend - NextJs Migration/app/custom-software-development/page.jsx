import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import Faq from '../../components/Faq';
import ServiceCTA from '../../components/ServiceCTA';
import JsonLd from '../../components/JsonLd';
import { SITE, webPageSchema, faqSchema, breadcrumbSchema } from '../../lib/seo';

const DESCRIPTION =
  'Webentric builds tailored business systems in India — lead management, dashboards, workflow automation and role-based access for teams in Delhi NCR and beyond.';
const URL = `${SITE.url}/custom-software-development`;

const FAQS = [
  {
    question: 'We run the business on Excel. Where do we start?',
    answer: 'We start by mapping what your sheets actually do — which ones track orders, payments, stock or follow-ups — and turn the most painful one into the first module. You get a working system early, then extend it sheet by sheet instead of changing everything at once.',
  },
  {
    question: 'How is a tailored system different from off-the-shelf software?',
    answer: 'Off-the-shelf tools ask your team to adapt to their fields, limits and monthly plans. A tailored system is shaped around your process: your stages, your roles, your reports. It fits from day one and changes when your business changes.',
  },
  {
    question: 'What technology do you build with?',
    answer: 'We build the interface in React with Tailwind CSS and JavaScript, backed by Firebase or Supabase for data and authentication, and connect outside services through REST API integration. It is a modern, maintainable setup your future developers can easily understand.',
  },
  {
    question: 'Can different staff members have different access levels?',
    answer: 'Yes. Secure login with role-based access is part of every system we ship — owners see everything, managers see their teams, and staff see only what their job needs. Sensitive records like payments and reports stay restricted.',
  },
  {
    question: 'Can the system send notifications or accept payments?',
    answer: 'Yes. We wire WhatsApp and SMTP alerts into your workflow so the right person hears about every order, booking or follow-up. For collection we integrate Razorpay, Stripe, UPI or PayPal, matched to how your customers prefer to pay.',
  },
  {
    question: 'Do you look after the system after launch?',
    answer: 'Yes. After guided handover and training for your team, we stay on for fixes, small changes and steady upkeep, so the system keeps matching the way you work as the business grows.',
  },
];

const RELATED = [
  { label: 'Web Application Development', to: '/web-application-development' },
  { label: 'Website Development', to: '/website-development' },
  { label: 'Website Maintenance', to: '/website-maintenance' },
];

export const metadata = {
  title: 'Custom Software Development Company India | Webentric',
  description: DESCRIPTION,
  keywords: ['custom software development India', 'business software development', 'custom CRM development'],
  alternates: { canonical: URL },
  openGraph: {
    title: 'Custom Software Development Company India | Webentric',
    description: DESCRIPTION,
    url: URL,
    type: 'website',
    images: ['https://webentric.in/social-media-cover.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Software Development Company India | Webentric',
    description: DESCRIPTION,
  },
};

export default function CustomSoftwareDevelopmentPage() {
  return (
    <main className="bg-page text-ink min-h-screen">
      <JsonLd
        data={[
          webPageSchema({ name: 'Custom Software Built Around Your Business', url: URL, description: DESCRIPTION }),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Tailored Business Systems',
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
            { name: 'Custom Software', url: URL },
          ]),
        ]}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 pt-24 md:pt-28 pb-20">
        <Breadcrumbs items={[{ label: 'Services' }, { label: 'Custom Software', to: '/custom-software-development' }]} />
        <p className="text-xs uppercase tracking-[0.22em] text-muted mb-4">Services — Tailored Business Systems</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] mb-6">
          Custom Software Built Around Your Business
        </h1>
        <div className="max-w-3xl space-y-4 text-muted text-[15px] sm:text-base leading-relaxed mb-14 md:mb-20">
          <p>
            Most of our systems work starts the same way: a business running on spreadsheets, chat threads and
            memory. Orders live in one sheet, payments in another, follow-ups nowhere at all. It holds together
            until the team grows — then every new order adds confusion instead of revenue.
          </p>
          <p>
            We replace that patchwork with one clear place to work. Custom software development, done this way, is
            less about technology and more about clarity: who does what, what happens next, and where every record
            lives. You describe the process; we shape the system around it.
          </p>
        </div>

        <section>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">What&apos;s included</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-surface border border-line p-6">
              <h3 className="font-medium mb-2">Workflow automation</h3>
              <p className="text-sm text-muted leading-relaxed">
                Recurring steps — assignments, approvals, follow-up reminders — run on rules you define, so routine
                work moves without chasing.
              </p>
            </div>
            <div className="bg-surface border border-line p-6">
              <h3 className="font-medium mb-2">Dashboards &amp; reports</h3>
              <p className="text-sm text-muted leading-relaxed">
                Daily numbers, pending tasks and team activity in one view, with simple reports you can read without
                exporting sheets.
              </p>
            </div>
            <div className="bg-surface border border-line p-6">
              <h3 className="font-medium mb-2">Login, roles &amp; permissions</h3>
              <p className="text-sm text-muted leading-relaxed">
                Secure sign-in with role-based access, so owners, managers and staff each see exactly what their job needs.
              </p>
            </div>
            <div className="bg-surface border border-line p-6">
              <h3 className="font-medium mb-2">Database &amp; API foundation</h3>
              <p className="text-sm text-muted leading-relaxed">
                Structured data on Firebase or Supabase with REST API integration, so records stay consistent as you
                add modules.
              </p>
            </div>
            <div className="bg-surface border border-line p-6">
              <h3 className="font-medium mb-2">Payments &amp; notifications</h3>
              <p className="text-sm text-muted leading-relaxed">
                Razorpay, Stripe, UPI or PayPal collection wired into your flow, with WhatsApp and SMTP updates for
                your team and customers.
              </p>
            </div>
            <div className="bg-surface border border-line p-6">
              <h3 className="font-medium mb-2">Lead management &amp; billing basics</h3>
              <p className="text-sm text-muted leading-relaxed">
                CRM-style lead tracking from first enquiry to closure, plus straightforward invoicing and reporting basics.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">Benefits</h2>
          <div className="border border-line divide-y divide-line">
            <div className="px-6 py-5">
              <h3 className="font-medium mb-1">Shaped to your process</h3>
              <p className="text-sm text-muted leading-relaxed">
                No adapting your team to someone else&apos;s fields and menus — the system mirrors how you already work.
              </p>
            </div>
            <div className="px-6 py-5">
              <h3 className="font-medium mb-1">One place for the whole team</h3>
              <p className="text-sm text-muted leading-relaxed">
                Orders, payments, tasks and follow-ups stop living across five sheets and three chat groups.
              </p>
            </div>
            <div className="px-6 py-5">
              <h3 className="font-medium mb-1">Fewer errors from manual entry</h3>
              <p className="text-sm text-muted leading-relaxed">
                Structured forms, validations and automation replace copy-paste between files.
              </p>
            </div>
            <div className="px-6 py-5">
              <h3 className="font-medium mb-1">Grows module by module</h3>
              <p className="text-sm text-muted leading-relaxed">
                Start with the most painful process, then add inventory, billing or reporting when the business is ready.
              </p>
            </div>
            <div className="px-6 py-5">
              <h3 className="font-medium mb-1">You own the system</h3>
              <p className="text-sm text-muted leading-relaxed">
                Built for your business and maintained by people you can reach — no subscription holding your data hostage.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">How we work</h2>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-surface border border-line p-6">
              <p className="text-xs tracking-[0.22em] text-muted mb-3">01</p>
              <h3 className="font-medium mb-2">Map the process</h3>
              <p className="text-sm text-muted leading-relaxed">
                We study how work actually flows — sheets, calls, registers — and agree what the system must do first.
              </p>
            </div>
            <div className="bg-surface border border-line p-6">
              <p className="text-xs tracking-[0.22em] text-muted mb-3">02</p>
              <h3 className="font-medium mb-2">Design the structure</h3>
              <p className="text-sm text-muted leading-relaxed">
                Screens, roles and data fields are sketched around your team, and you approve them before anything is built.
              </p>
            </div>
            <div className="bg-surface border border-line p-6">
              <p className="text-xs tracking-[0.22em] text-muted mb-3">03</p>
              <h3 className="font-medium mb-2">Build &amp; connect</h3>
              <p className="text-sm text-muted leading-relaxed">
                We develop in React with Firebase or Supabase behind it, wiring payments, notifications and APIs as needed.
              </p>
            </div>
            <div className="bg-surface border border-line p-6">
              <p className="text-xs tracking-[0.22em] text-muted mb-3">04</p>
              <h3 className="font-medium mb-2">Launch &amp; support</h3>
              <p className="text-sm text-muted leading-relaxed">
                Your team learns the system with guided handover, and we stay on for fixes, changes and upkeep.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">Useful for</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/industries/small-business" className="border border-line px-5 py-2.5 text-sm hover:border-ink transition-colors">
              Small Businesses
            </Link>
            <Link href="/industries/startups" className="border border-line px-5 py-2.5 text-sm hover:border-ink transition-colors">
              Startups
            </Link>
            <Link href="/industries/education" className="border border-line px-5 py-2.5 text-sm hover:border-ink transition-colors">
              Education
            </Link>
            <Link href="/portfolio" className="border border-line px-5 py-2.5 text-sm hover:border-ink transition-colors">
              See Our Work →
            </Link>
          </div>
        </section>

        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">Guides &amp; resources</h2>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            <Link href="/blogs/custom-crm-vs-excel" className="bg-surface border border-line p-6 hover:border-ink transition-colors block">
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted mb-3">Guide</p>
              <h3 className="font-medium mb-2">Custom CRM vs Excel: When Should Your Business Upgrade?</h3>
              <p className="text-sm text-muted leading-relaxed">
                A plain-language guide to knowing when spreadsheets stop being enough.
              </p>
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
          title="Outgrown your spreadsheets?"
          text="Tell us how work flows through your team today. We reply within 24 hours on business days with a clear plan, quote and timeline."
        />
      </div>
    </main>
  );
}
