import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import Faq from '../../components/Faq';
import ServiceCTA from '../../components/ServiceCTA';
import JsonLd from '../../components/JsonLd';
import { SITE, webPageSchema, faqSchema, breadcrumbSchema } from '../../lib/seo';

const DESCRIPTION =
  'Webentric builds React-based web applications with dashboards, logins and REST API integrations for businesses in Delhi NCR and across India.';
const URL = `${SITE.url}/web-application-development`;

const FAQS = [
  {
    question: 'What is the difference between a website and a web application?',
    answer: 'A website presents information — visitors read about your services and contact you. A web application is a working system your team logs into daily: dashboards, bookings, records and reports that update in real time. Many businesses eventually need both, each built for its own job.',
  },
  {
    question: 'What technology do you build web apps with?',
    answer: 'The interface is built in React with Tailwind CSS and JavaScript, data and authentication run on Firebase or Supabase, and outside services connect through REST API integration. It is a clean, modern stack that stays maintainable as the application grows.',
  },
  {
    question: 'Can our team have logins with different permissions?',
    answer: 'Yes. Every application ships with secure login and role-based access — owners, managers, staff and even clients can each have a view matched to their responsibility, with sensitive areas kept restricted.',
  },
  {
    question: 'Can the app connect to tools or data we already use?',
    answer: 'In most cases, yes. We connect through REST APIs wherever the other service allows it, and we map existing spreadsheets into structured data during setup — so you start from your real records, not a blank slate.',
  },
  {
    question: 'Can it handle bookings, leads and payments?',
    answer: 'Yes. Lead capture, slot booking and follow-up stages are built around how your team sells, with WhatsApp and SMTP notifications on every movement and Razorpay, Stripe, UPI or PayPal collection wired into the workflow.',
  },
  {
    question: 'Who maintains the application after launch?',
    answer: 'We do. After a guided rollout and training for your team, we stay on for fixes, improvements and upkeep — and because the system is built module by module, new workflows can be added without rebuilding what works.',
  },
];

const RELATED = [
  { label: 'Custom Software Development', to: '/custom-software-development' },
  { label: 'Ecommerce Development', to: '/ecommerce-development' },
  { label: 'Website Development', to: '/website-development' },
];

export const metadata = {
  title: 'Web Application Development Company India | Webentric',
  description: DESCRIPTION,
  keywords: ['web application development company', 'custom web app development India', 'business dashboard development'],
  alternates: { canonical: URL },
  openGraph: {
    title: 'Web Application Development Company India | Webentric',
    description: DESCRIPTION,
    url: URL,
    type: 'website',
    images: ['https://webentric.in/social-media-cover.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Application Development Company India | Webentric',
    description: DESCRIPTION,
  },
};

export default function WebApplicationDevelopmentPage() {
  return (
    <main className="bg-page text-ink min-h-screen">
      <JsonLd
        data={[
          webPageSchema({ name: 'Custom Web Applications for Complex Business Workflows', url: URL, description: DESCRIPTION }),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Business Web Applications',
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
            { name: 'Web Applications', url: URL },
          ]),
        ]}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 pt-24 md:pt-28 pb-20">
        <Breadcrumbs items={[{ label: 'Services' }, { label: 'Web Applications', to: '/web-application-development' }]} />
        <p className="text-xs uppercase tracking-[0.22em] text-muted mb-4">Services — Business Applications</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] mb-6">
          Custom Web Applications for Complex Business Workflows
        </h1>
        <div className="max-w-3xl space-y-4 text-muted text-[15px] sm:text-base leading-relaxed mb-14 md:mb-20">
          <p>
            A website tells people who you are. A web application does the work alongside you — your team logs in
            each morning to manage bookings, track leads, check dashboards and update records. If your day runs
            inside a browser tab, you need the second kind.
          </p>
          <p>
            We design and build those working systems in React, backed by Firebase or Supabase and connected
            through REST APIs. One focused round of web application development replaces scattered sheets and chat
            threads with a single login your whole team shares.
          </p>
        </div>

        <section>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">Website vs web application</h2>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-surface border border-line p-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted mb-3">A website</p>
              <h3 className="font-medium mb-2">Presents</h3>
              <p className="text-sm text-muted leading-relaxed">
                Pages about your services, work and contact details. Visitors read, then call or fill a form.
                Keeping it fresh means editing content.
              </p>
            </div>
            <div className="bg-surface border border-line p-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted mb-3">A web application</p>
              <h3 className="font-medium mb-2">Operates</h3>
              <p className="text-sm text-muted leading-relaxed">
                Logins, dashboards, bookings and records. Your team works inside it every day. Keeping it fresh
                means the state of your business changing in real time.
              </p>
            </div>
          </div>
          <p className="text-muted text-[15px] sm:text-base leading-relaxed max-w-3xl mt-6">
            Many growing businesses end up with both — a marketing site that brings enquiries, and a login-based
            system that fulfils them. We build each for its own job.
          </p>
        </section>

        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">What&apos;s included</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-surface border border-line p-6">
              <h3 className="font-medium mb-2">Interactive dashboards</h3>
              <p className="text-sm text-muted leading-relaxed">
                Live views of bookings, leads, payments and tasks, with filters your team will actually use.
              </p>
            </div>
            <div className="bg-surface border border-line p-6">
              <h3 className="font-medium mb-2">Accounts, roles &amp; permissions</h3>
              <p className="text-sm text-muted leading-relaxed">
                Secure login with role-based access for owners, staff and clients alike.
              </p>
            </div>
            <div className="bg-surface border border-line p-6">
              <h3 className="font-medium mb-2">Database design</h3>
              <p className="text-sm text-muted leading-relaxed">
                Structured data models on Firebase or Supabase that stay reliable as records and users grow.
              </p>
            </div>
            <div className="bg-surface border border-line p-6">
              <h3 className="font-medium mb-2">REST API integrations</h3>
              <p className="text-sm text-muted leading-relaxed">
                Connections to the services you already use, so data flows on its own instead of being retyped.
              </p>
            </div>
            <div className="bg-surface border border-line p-6">
              <h3 className="font-medium mb-2">Booking &amp; lead flows</h3>
              <p className="text-sm text-muted leading-relaxed">
                Enquiry capture, slot booking and follow-up stages built around how your team sells.
              </p>
            </div>
            <div className="bg-surface border border-line p-6">
              <h3 className="font-medium mb-2">Notifications &amp; payments</h3>
              <p className="text-sm text-muted leading-relaxed">
                WhatsApp and SMTP alerts plus Razorpay, Stripe, UPI or PayPal collection inside the workflow.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">Benefits</h2>
          <div className="border border-line divide-y divide-line">
            <div className="px-6 py-5">
              <h3 className="font-medium mb-1">Your process, on screen</h3>
              <p className="text-sm text-muted leading-relaxed">
                The application mirrors the way your team already works — not the other way round.
              </p>
            </div>
            <div className="px-6 py-5">
              <h3 className="font-medium mb-1">Everyone works from the same data</h3>
              <p className="text-sm text-muted leading-relaxed">One shared record ends the daily argument about which sheet is current.</p>
            </div>
            <div className="px-6 py-5">
              <h3 className="font-medium mb-1">Access that matches responsibility</h3>
              <p className="text-sm text-muted leading-relaxed">
                Role-based views keep sensitive numbers restricted while staff move fast on their own tasks.
              </p>
            </div>
            <div className="px-6 py-5">
              <h3 className="font-medium mb-1">Ready to extend</h3>
              <p className="text-sm text-muted leading-relaxed">
                New workflows, reports and integrations slot into the existing structure — nothing needs rebuilding.
              </p>
            </div>
            <div className="px-6 py-5">
              <h3 className="font-medium mb-1">Maintained by people you can call</h3>
              <p className="text-sm text-muted leading-relaxed">
                Fixes and improvements come from the team that built it, on timelines you agree together.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">How we work</h2>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-surface border border-line p-6">
              <p className="text-xs tracking-[0.22em] text-muted mb-3">01</p>
              <h3 className="font-medium mb-2">Understand the workflow</h3>
              <p className="text-sm text-muted leading-relaxed">
                We map who logs in, what they do, and which numbers matter before drawing a single screen.
              </p>
            </div>
            <div className="bg-surface border border-line p-6">
              <p className="text-xs tracking-[0.22em] text-muted mb-3">02</p>
              <h3 className="font-medium mb-2">Prototype the screens</h3>
              <p className="text-sm text-muted leading-relaxed">
                Key dashboards and forms are designed first, so your team can react to something real.
              </p>
            </div>
            <div className="bg-surface border border-line p-6">
              <p className="text-xs tracking-[0.22em] text-muted mb-3">03</p>
              <h3 className="font-medium mb-2">Build data + logic</h3>
              <p className="text-sm text-muted leading-relaxed">
                React front end, Firebase or Supabase backend, REST APIs connecting the pieces into one system.
              </p>
            </div>
            <div className="bg-surface border border-line p-6">
              <p className="text-xs tracking-[0.22em] text-muted mb-3">04</p>
              <h3 className="font-medium mb-2">Roll out &amp; refine</h3>
              <p className="text-sm text-muted leading-relaxed">
                Guided launch for your team, then steady improvements shaped by real daily use.
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
                How to tell when scattered sheets should become one structured system.
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
          title="Need more than a website?"
          text="Describe the workflow you want the system to handle. We reply within 24 hours on business days with a clear plan, quote and timeline."
        />
      </div>
    </main>
  );
}
