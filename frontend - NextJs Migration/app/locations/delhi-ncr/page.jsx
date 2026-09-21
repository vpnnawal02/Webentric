import Link from "next/link";
import Breadcrumbs from "../../../components/Breadcrumbs.jsx";
import Faq from "../../../components/Faq.jsx";
import ServiceCTA from "../../../components/ServiceCTA.jsx";
import JsonLd from "../../../components/JsonLd.jsx";
import { SITE, webPageSchema, faqSchema, breadcrumbSchema } from "../../../lib/seo.js";

const PAGE = {
    name: "Website Development Company in Delhi NCR | Webentric",
    url: `${SITE.url}/locations/delhi-ncr`,
    description:
        "Webentric is a website development company in Delhi NCR serving Delhi, Noida, Gurugram, Ghaziabad and Faridabad with custom websites, apps, stores and SEO.",
};

const FAQS = [
    {
        question: "Which parts of the NCR do you serve?",
        answer: "We serve businesses across Delhi, New Delhi, Noida, Gurugram, Ghaziabad, and Faridabad. The whole engagement is designed to work the same way in each city — shared previews, scheduled calls, and a single point of contact.",
    },
    {
        question: "Do you travel for meetings within the NCR?",
        answer: "Yes. Being based in New Delhi keeps most of the region within practical reach, so an in-person meeting can be arranged for kickoffs or important reviews. Routine work happens over calls and WhatsApp so distance never slows a project down.",
    },
    {
        question: "How long does a website take when the client is in another NCR city?",
        answer: "Distance does not change the timeline. A standard business site typically moves from content sign-off to launch in a few weeks; stores, portals, and custom dashboards take longer. You receive a written schedule before work begins.",
    },
    {
        question: "How is pricing quoted for NCR projects?",
        answer: "Pricing is quoted in rupees per project after a discovery conversation about pages, features, and integrations. The quote is fixed and written, and it does not vary by which NCR city you are in.",
    },
    {
        question: "What happens after launch — who handles updates?",
        answer: "We do, if you want us to. Website maintenance covers updates, backups, and small content changes, and SEO services are available for businesses that want to keep growing their visibility across the region.",
    },
];

const SERVICES = [
    {
        label: "Website Development",
        to: "/website-development",
        desc: "Business websites planned around your customers, not a template.",
    },
    {
        label: "Web Application Development",
        to: "/web-application-development",
        desc: "Dashboards, portals, and internal tools for NCR teams.",
    },
    {
        label: "Ecommerce Development",
        to: "/ecommerce-development",
        desc: "Online stores with catalogues, carts, and secure checkout.",
    },
    {
        label: "Landing Page Development",
        to: "/landing-page-development",
        desc: "Focused pages for launches, campaigns, and paid traffic.",
    },
    {
        label: "Custom Software Development",
        to: "/custom-software-development",
        desc: "CRM-style views and workflows shaped to how you operate.",
    },
    {
        label: "SEO Services",
        to: "/seo-services",
        desc: "Search visibility across the cities your customers search from.",
    },
];

const STEPS = [
    {
        n: "01",
        title: "Discovery call",
        text: "A call or WhatsApp conversation covering your services, audience, competitors, and what success looks like.",
    },
    {
        n: "02",
        title: "Fixed quote",
        text: "Scope, pages, features, and timeline in a written quote within 24 hours on business days.",
    },
    {
        n: "03",
        title: "Design and build",
        text: "Shared previews at each stage, with revision rounds before development is finalised.",
    },
    {
        n: "04",
        title: "Launch and care",
        text: "Deployment, device testing, handover, and optional maintenance going forward.",
    },
];

const AREAS = ["Delhi", "New Delhi", "Noida", "Gurugram", "Ghaziabad", "Faridabad"];

export const metadata = {
    title: PAGE.name,
    description: PAGE.description,
    keywords: [
        "website development company in Delhi NCR",
        "web development company Delhi NCR",
        "website design Delhi NCR",
    ],
    alternates: { canonical: "https://webentric.in/locations/delhi-ncr" },
    openGraph: {
        title: PAGE.name,
        description: PAGE.description,
        url: "https://webentric.in/locations/delhi-ncr",
        type: "website",
        images: ["https://webentric.in/social-media-cover.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: PAGE.name,
        description: PAGE.description,
    },
};

export default function DelhiNCRLocationPage() {
    return (
        <main className="bg-page text-ink min-h-screen">
            <JsonLd
                data={[
                    webPageSchema({ name: PAGE.name, url: PAGE.url, description: PAGE.description }),
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Website Development Company in Delhi NCR",
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
                        { name: "Delhi NCR", url: PAGE.url },
                    ]),
                ]}
            />
            <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 pt-24 md:pt-28 pb-20">
                <Breadcrumbs items={[{ label: "Locations" }, { label: "Delhi NCR", to: "/locations/delhi-ncr" }]} />
                <p className="text-xs tracking-[0.22em] text-muted mb-4">WEBENTRIC — DELHI NCR · INDIA</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] mb-6">
                    Website Development Company in Delhi NCR
                </h1>
                <div className="max-w-3xl space-y-4 text-muted text-[15px] sm:text-base leading-relaxed mb-10 md:mb-12">
                    <p>
                        The NCR behaves like one market spread across six cities. A manufacturer in Ghaziabad supplies
                        buyers in Gurugram; a Faridabad clinic competes with practices in South Delhi; a Noida startup
                        pitches clients who work in Connaught Place. Webentric is based in New Delhi and serves
                        businesses across the whole region, so your site is built with that cross-city reality in mind —
                        customers who commute, compare, and shortlist across municipal lines.
                    </p>
                    <p>
                        Practically, working across the NCR changes nothing about the engagement. Discovery happens over
                        a call, previews are shared online, and in-person meetings can be arranged when a kickoff or a
                        review genuinely benefits from sitting together. As a website development company in Delhi NCR,
                        our job is to make distance invisible: one contact person, one written timeline, and a site that
                        speaks to customers wherever in the region they happen to be.
                    </p>
                </div>

                <div className="mb-14 md:mb-20">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-muted mb-4">Areas we serve</p>
                    <div className="flex flex-wrap gap-2">
                        {AREAS.map((area) => (
                            <span
                                key={area}
                                className="text-xs uppercase tracking-[0.14em] border border-line bg-surface text-ink/80 px-4 py-2"
                            >
                                {area}
                            </span>
                        ))}
                    </div>
                </div>

                <section>
                    <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">Services across the NCR</h2>
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
                        Region-spanning work includes a travel agency site built around packages and enquiries, a box
                        printing company website with quote flows, and a custom e-commerce store.{" "}
                        <Link href="/portfolio" className="text-ink underline underline-offset-4 hover:text-muted transition-colors">
                            View portfolio
                        </Link>{" "}
                        for more, or read our breakdown of{" "}
                        <Link
                            href="/blogs/business-website-cost-india-2026"
                            className="text-ink underline underline-offset-4 hover:text-muted transition-colors"
                        >
                            business website costs in India
                        </Link>{" "}
                        before you budget.
                    </p>
                </section>

                <Faq items={FAQS} />
                <ServiceCTA title="Serving the whole NCR from New Delhi." />
            </div>
        </main>
    );
}
