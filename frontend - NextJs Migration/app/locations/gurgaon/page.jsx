import Link from "next/link";
import Breadcrumbs from "../../../components/Breadcrumbs.jsx";
import Faq from "../../../components/Faq.jsx";
import ServiceCTA from "../../../components/ServiceCTA.jsx";
import JsonLd from "../../../components/JsonLd.jsx";
import { SITE, webPageSchema, faqSchema, breadcrumbSchema } from "../../../lib/seo.js";

const PAGE = {
    name: "Website Development Company in Gurgaon | Webentric",
    url: `${SITE.url}/locations/gurgaon`,
    description:
        "Webentric is a website development company in Gurgaon serving corporates, startups and hospitality brands with custom websites, landing pages, stores and SEO.",
};

const FAQS = [
    {
        question: "Do you work with corporate clients in Gurgaon?",
        answer: "Yes. Corporate engagements usually involve more stakeholders, brand guidelines, and approval rounds, and our process is built for that — structured previews, documented revisions, and a single point of contact throughout.",
    },
    {
        question: "Can we meet in person in Gurgaon?",
        answer: "Yes, an in-person meeting can be arranged for discovery sessions or milestone reviews. Most collaboration still happens over calls and WhatsApp so approvals do not wait on calendars.",
    },
    {
        question: "How long does a typical project take?",
        answer: "A corporate marketing site or hospitality website usually moves from content sign-off to launch in a matter of weeks; ecommerce builds and custom portals take longer. Your written quote includes a confirmed timeline before work begins.",
    },
    {
        question: "How is pricing structured?",
        answer: "Projects are quoted individually in rupees after discovery — page count, integrations, and content requirements all shape the figure. You receive a fixed written quote within 24 hours on business days, with no hidden additions later.",
    },
    {
        question: "Do you support the site after it launches?",
        answer: "Yes. Website maintenance covers updates, backups, and small content changes, and SEO services are available for brands competing in Gurgaon's crowded corporate and hospitality search results.",
    },
];

const SERVICES = [
    {
        label: "Website Development",
        to: "/website-development",
        desc: "Corporate and startup sites engineered for speed and credibility.",
    },
    {
        label: "Web Design",
        to: "/web-design",
        desc: "Polished, boardroom-ready design that respects brand guidelines.",
    },
    {
        label: "Landing Page Development",
        to: "/landing-page-development",
        desc: "Campaign and event pages for launches along the Golf Course Road belt.",
    },
    {
        label: "Ecommerce Development",
        to: "/ecommerce-development",
        desc: "Direct-to-customer stores for brands selling beyond marketplaces.",
    },
    {
        label: "Website Redesign",
        to: "/website-redesign",
        desc: "Modern rebuilds for established firms outgrowing old templates.",
    },
    {
        label: "SEO Services",
        to: "/seo-services",
        desc: "Search groundwork for competitive corporate and local queries.",
    },
];

const STEPS = [
    {
        n: "01",
        title: "Discovery session",
        text: "A structured call covering brand, audience, stakeholders, and what the site must achieve.",
    },
    {
        n: "02",
        title: "Quote in 24 hours",
        text: "A fixed written quote with scope, pages, and timeline within 24 hours on business days.",
    },
    {
        n: "03",
        title: "Design previews",
        text: "Staged reviews with your team, revised against brand guidelines before build-out.",
    },
    {
        n: "04",
        title: "Launch and support",
        text: "Deployment, cross-device testing, handover, and optional ongoing care.",
    },
];

export const metadata = {
    title: PAGE.name,
    description: PAGE.description,
    keywords: [
        "website development company in Gurgaon",
        "web design Gurgaon",
        "website development Gurugram",
    ],
    alternates: { canonical: "https://webentric.in/locations/gurgaon" },
    openGraph: {
        title: PAGE.name,
        description: PAGE.description,
        url: "https://webentric.in/locations/gurgaon",
        type: "website",
        images: ["https://webentric.in/social-media-cover.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: PAGE.name,
        description: PAGE.description,
    },
};

export default function GurgaonLocationPage() {
    return (
        <main className="bg-page text-ink min-h-screen">
            <JsonLd
                data={[
                    webPageSchema({ name: PAGE.name, url: PAGE.url, description: PAGE.description }),
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Website Development Company in Gurgaon",
                        url: PAGE.url,
                        description: PAGE.description,
                        provider: { "@id": "https://webentric.in/#organization" },
                        areaServed: [
                            { "@type": "City", name: "Gurgaon" },
                            { "@type": "AdministrativeArea", name: "Delhi NCR" },
                            { "@type": "Country", name: "India" },
                        ],
                    },
                    faqSchema(FAQS),
                    breadcrumbSchema([
                        { name: "Home", url: SITE.url },
                        { name: "Locations" },
                        { name: "Gurgaon", url: PAGE.url },
                    ]),
                ]}
            />
            <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 pt-24 md:pt-28 pb-20">
                <Breadcrumbs items={[{ label: "Locations" }, { label: "Gurgaon", to: "/locations/gurgaon" }]} />
                <p className="text-xs tracking-[0.22em] text-muted mb-4">WEBENTRIC — GURGAON · NCR · INDIA</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] mb-6">
                    Website Development Company in Gurgaon
                </h1>
                <div className="max-w-3xl space-y-4 text-muted text-[15px] sm:text-base leading-relaxed mb-14 md:mb-20">
                    <p>
                        Gurgaon — Gurugram on official letterheads, Gurgaon in every conversation — sets a particular
                        bar. Cyber City headquarters, funded startups in shared workspaces, and hospitality brands along
                        Golf Course Road all judge a website the way they judge a pitch: quickly, and against serious
                        competition. Webentric is based in New Delhi and serves Gurgaon businesses remotely, with
                        in-person meetings arranged for discovery sessions and milestone reviews when face time earns its
                        keep.
                    </p>
                    <p>
                        What that clientele has in common is process discipline. Multiple stakeholders need to see
                        staged previews, brand guidelines need respecting rather than reinventing, and launch dates
                        often tie to campaigns that cannot slip. If you are shortlisting a website development company
                        in Gurgaon, that operational steadiness matters as much as the design portfolio — so our quotes
                        are fixed, our timelines are written, and our revision rounds are part of the plan, not an
                        afterthought.
                    </p>
                </div>

                <section>
                    <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">Services in Gurgaon</h2>
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
                        Hospitality and corporate-leaning builds include an interior design showcase site, a cafe
                        website with menu-led sections, and a business consulting website built for lead generation.{" "}
                        <Link href="/portfolio" className="text-ink underline underline-offset-4 hover:text-muted transition-colors">
                            View portfolio
                        </Link>{" "}
                        for the complete set, or read our piece on{" "}
                        <Link
                            href="/blogs/why-your-business-needs-a-website"
                            className="text-ink underline underline-offset-4 hover:text-muted transition-colors"
                        >
                            why your business needs a website
                        </Link>{" "}
                        to make the internal case.
                    </p>
                </section>

                <Faq items={FAQS} />
                <ServiceCTA title="Need a site that holds up in Gurgaon? Let's build it." />
            </div>
        </main>
    );
}
