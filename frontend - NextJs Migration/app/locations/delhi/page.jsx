import Link from "next/link";
import Breadcrumbs from "../../../components/Breadcrumbs.jsx";
import Faq from "../../../components/Faq.jsx";
import ServiceCTA from "../../../components/ServiceCTA.jsx";
import JsonLd from "../../../components/JsonLd.jsx";
import { SITE, webPageSchema, faqSchema, breadcrumbSchema } from "../../../lib/seo.js";

const PAGE = {
    name: "Website Development Company in Delhi | Webentric",
    url: `${SITE.url}/locations/delhi`,
    description:
        "Webentric is a website development company in Delhi serving South, West, North, East Delhi and New Delhi with custom websites, redesigns, ecommerce and SEO.",
};

const FAQS = [
    {
        question: "Can we meet in person before starting the project?",
        answer: "Yes. We are based in New Delhi, so an in-person meeting in Delhi can usually be arranged for discovery or key reviews. Most clients still prefer calls and WhatsApp for day-to-day updates because decisions move faster that way.",
    },
    {
        question: "How long does a typical Delhi project take?",
        answer: "A straightforward business website usually takes a few weeks from content sign-off to launch, while ecommerce builds, booking flows, or custom dashboards take longer. After a short discovery conversation we confirm a written timeline before work begins.",
    },
    {
        question: "How is pricing worked out for a website?",
        answer: "Every project is quoted individually in rupees after we understand your pages, features, and integrations. A simple informational site costs far less than a store or a portal with logins, and you receive a fixed written quote within 24 hours on business days.",
    },
    {
        question: "Do you only serve certain parts of Delhi?",
        answer: "No. We serve businesses across South Delhi, West Delhi, North Delhi, East Delhi, and New Delhi on the same terms. Location within the city does not change the process, the pricing, or the level of support.",
    },
    {
        question: "Will you look after the site after it goes live?",
        answer: "Yes. We offer website maintenance for updates, backups, small content changes, and monitoring, plus ongoing SEO services if you want to keep growing search visibility after launch.",
    },
];

const SERVICES = [
    {
        label: "Website Development",
        to: "/website-development",
        desc: "Fast, mobile-first business websites built on React with reliable backends.",
    },
    {
        label: "Web Design",
        to: "/web-design",
        desc: "Calm, editorial layouts that make Delhi service brands look established.",
    },
    {
        label: "Ecommerce Development",
        to: "/ecommerce-development",
        desc: "Catalogues, carts, and checkout flows for retailers selling across the city.",
    },
    {
        label: "Website Redesign",
        to: "/website-redesign",
        desc: "Rebuilds for dated sites that no longer reflect the business behind them.",
    },
    {
        label: "SEO Services",
        to: "/seo-services",
        desc: "Local and national search groundwork so nearby customers can find you.",
    },
    {
        label: "Website Maintenance",
        to: "/website-maintenance",
        desc: "Updates, backups, and small changes handled quietly in the background.",
    },
];

const STEPS = [
    {
        n: "01",
        title: "Intro call",
        text: "A short call or WhatsApp conversation to understand your business, audience, and what the site must do.",
    },
    {
        n: "02",
        title: "Quote in 24 hours",
        text: "A fixed written quote with pages, features, and timeline, sent within 24 hours on business days.",
    },
    {
        n: "03",
        title: "Design previews",
        text: "You review real page designs early and request revisions before anything is locked in.",
    },
    {
        n: "04",
        title: "Launch and support",
        text: "We deploy, test on phones and desktops, and stay available for maintenance afterwards.",
    },
];

export const metadata = {
    title: PAGE.name,
    description: PAGE.description,
    keywords: [
        "website development company in Delhi",
        "web design company Delhi",
        "website development services Delhi",
    ],
    alternates: { canonical: "https://webentric.in/locations/delhi" },
    openGraph: {
        title: PAGE.name,
        description: PAGE.description,
        url: "https://webentric.in/locations/delhi",
        type: "website",
        images: ["https://webentric.in/social-media-cover.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: PAGE.name,
        description: PAGE.description,
    },
};

export default function DelhiLocationPage() {
    return (
        <main className="bg-page text-ink min-h-screen">
            <JsonLd
                data={[
                    webPageSchema({ name: PAGE.name, url: PAGE.url, description: PAGE.description }),
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Website Development Company in Delhi",
                        url: PAGE.url,
                        description: PAGE.description,
                        provider: { "@id": "https://webentric.in/#organization" },
                        areaServed: [
                            { "@type": "City", name: "Delhi" },
                            { "@type": "AdministrativeArea", name: "Delhi NCR" },
                            { "@type": "Country", name: "India" },
                        ],
                    },
                    faqSchema(FAQS),
                    breadcrumbSchema([
                        { name: "Home", url: SITE.url },
                        { name: "Locations" },
                        { name: "Delhi", url: PAGE.url },
                    ]),
                ]}
            />
            <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 pt-24 md:pt-28 pb-20">
                <Breadcrumbs items={[{ label: "Locations" }, { label: "Delhi", to: "/locations/delhi" }]} />
                <p className="text-xs tracking-[0.22em] text-muted mb-4">WEBENTRIC — DELHI · NCR · INDIA</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] mb-6">
                    Website Development Company in Delhi
                </h1>
                <div className="max-w-3xl space-y-4 text-muted text-[15px] sm:text-base leading-relaxed mb-14 md:mb-20">
                    <p>
                        Delhi is our home ground. Webentric is based in New Delhi, and the businesses we build for here
                        are the ones we know best — South Delhi clinics, boutiques, and consultancies that live on
                        reputation; West Delhi traders and retailers who need catalogues customers can browse on a phone;
                        North Delhi coaching centres and institutions with admissions to fill; East Delhi service firms
                        competing on responsiveness. Each pocket of the city buys differently, and the sites we design
                        reflect that.
                    </p>
                    <p>
                        Being local means the practical things are easy: an in-person meeting can be arranged when it
                        matters, references are nearby, and support runs on your working hours. Most of the engagement
                        still happens remotely — shared previews, calls, and WhatsApp — so projects move quickly without
                        losing the directness of working with a team from your own city. If you are comparing options
                        for a website development company in Delhi, start with a conversation and a written quote, not a
                        sales deck.
                    </p>
                </div>

                <section>
                    <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">Services in Delhi</h2>
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

                <section className="mt-16 md:mt-20">
                    <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">
                        How working together works
                    </h2>
                    <ol className="border-t border-line">
                        {STEPS.map((step) => (
                            <li key={step.n} className="grid sm:grid-cols-[64px_1fr] gap-2 sm:gap-6 py-6 border-b border-line">
                                <span className="text-xs tracking-[0.22em] text-muted pt-1">{step.n}</span>
                                <div>
                                    <h3 className="text-lg font-medium tracking-[-0.01em] mb-1">{step.title}</h3>
                                    <p className="text-muted text-sm sm:text-[15px] leading-relaxed max-w-2xl">{step.text}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </section>

                <section className="mt-16 md:mt-20">
                    <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-6">Recent work</h2>
                    <p className="text-muted text-[15px] sm:text-base leading-relaxed max-w-3xl">
                        Recent builds include a school website with admissions and notices, the Avanza Survey corporate
                        site, and a salon landing page with booking-led sections.{" "}
                        <Link href="/portfolio" className="text-ink underline underline-offset-4 hover:text-muted transition-colors">
                            View portfolio
                        </Link>{" "}
                        for the full set, or read our guide on{" "}
                        <Link
                            href="/blogs/website-development-company-delhi"
                            className="text-ink underline underline-offset-4 hover:text-muted transition-colors"
                        >
                            choosing a website development company in Delhi
                        </Link>
                        .
                    </p>
                </section>

                <Faq items={FAQS} />
                <ServiceCTA title="Building something in Delhi? Let's talk." />
            </div>
        </main>
    );
}
