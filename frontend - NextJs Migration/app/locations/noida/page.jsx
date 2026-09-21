import Link from "next/link";
import Breadcrumbs from "../../../components/Breadcrumbs.jsx";
import Faq from "../../../components/Faq.jsx";
import ServiceCTA from "../../../components/ServiceCTA.jsx";
import JsonLd from "../../../components/JsonLd.jsx";
import { SITE, webPageSchema, faqSchema, breadcrumbSchema } from "../../../lib/seo.js";

const PAGE = {
    name: "Website Development Company in Noida | Webentric",
    url: `${SITE.url}/locations/noida`,
    description:
        "Webentric is a website development company in Noida serving startups and IT corridor businesses with custom websites, landing pages, web apps and SEO.",
};

const FAQS = [
    {
        question: "Do you work with early-stage startups in Noida?",
        answer: "Yes, regularly. Startup engagements usually start lean — a sharp landing page or a compact marketing site that can grow into a fuller product later. The React base we build on means dashboards and internal tools can be added without starting over.",
    },
    {
        question: "Can we meet in person in Noida?",
        answer: "Yes. We are based in New Delhi, so Noida is a short trip and an in-person meeting can be arranged for kickoffs or key reviews. Day-to-day collaboration runs over calls and WhatsApp, which keeps feedback cycles tight.",
    },
    {
        question: "How fast can a startup website go live?",
        answer: "A focused landing page or a compact site can move from content sign-off to launch in a matter of weeks; larger marketing sites, portals, or stores take longer. You get a written timeline with your quote before any work starts.",
    },
    {
        question: "How do you charge for projects?",
        answer: "Every quote is fixed and written in rupees after a discovery conversation about scope. Startup founders often begin with a landing page or a small site and extend it as traction grows, which keeps the initial outlay sensible.",
    },
    {
        question: "Do you provide ongoing support after launch?",
        answer: "Yes. Website maintenance covers updates, backups, and small changes, and SEO services are available when you are ready to invest in organic visibility. Many startup clients keep us on for iterative improvements between funding rounds.",
    },
];

const SERVICES = [
    {
        label: "Website Development",
        to: "/website-development",
        desc: "Marketing sites for startups that need to look funded before they are.",
    },
    {
        label: "Landing Page Development",
        to: "/landing-page-development",
        desc: "Launch and waitlist pages that convert corridor footfall and ad clicks.",
    },
    {
        label: "Web Application Development",
        to: "/web-application-development",
        desc: "MVPs, dashboards, and portals for product-led teams.",
    },
    {
        label: "Custom Software Development",
        to: "/custom-software-development",
        desc: "Internal tools and CRM-style views for growing operations.",
    },
    {
        label: "Web Design",
        to: "/web-design",
        desc: "Clean, credible interfaces that survive investor scrutiny.",
    },
    {
        label: "SEO Services",
        to: "/seo-services",
        desc: "Foundational search setup so early traction compounds.",
    },
];

const STEPS = [
    {
        n: "01",
        title: "Founder call",
        text: "A focused call or WhatsApp exchange on your product, audience, and what this site must prove.",
    },
    {
        n: "02",
        title: "Quote in 24 hours",
        text: "A fixed written quote with scope and timeline, sent within 24 hours on business days.",
    },
    {
        n: "03",
        title: "Design previews",
        text: "Real page designs to react to early, with revisions before build-out.",
    },
    {
        n: "04",
        title: "Launch and iterate",
        text: "Ship, measure, and extend — maintenance and new modules available as you grow.",
    },
];

export const metadata = {
    title: PAGE.name,
    description: PAGE.description,
    keywords: [
        "website development company in Noida",
        "web design Noida",
        "website developers Noida",
    ],
    alternates: { canonical: "https://webentric.in/locations/noida" },
    openGraph: {
        title: PAGE.name,
        description: PAGE.description,
        url: "https://webentric.in/locations/noida",
        type: "website",
        images: ["https://webentric.in/social-media-cover.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: PAGE.name,
        description: PAGE.description,
    },
};

export default function NoidaLocationPage() {
    return (
        <main className="bg-page text-ink min-h-screen">
            <JsonLd
                data={[
                    webPageSchema({ name: PAGE.name, url: PAGE.url, description: PAGE.description }),
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Website Development Company in Noida",
                        url: PAGE.url,
                        description: PAGE.description,
                        provider: { "@id": "https://webentric.in/#organization" },
                        areaServed: [
                            { "@type": "City", name: "Noida" },
                            { "@type": "AdministrativeArea", name: "Delhi NCR" },
                            { "@type": "Country", name: "India" },
                        ],
                    },
                    faqSchema(FAQS),
                    breadcrumbSchema([
                        { name: "Home", url: SITE.url },
                        { name: "Locations" },
                        { name: "Noida", url: PAGE.url },
                    ]),
                ]}
            />
            <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 pt-24 md:pt-28 pb-20">
                <Breadcrumbs items={[{ label: "Locations" }, { label: "Noida", to: "/locations/noida" }]} />
                <p className="text-xs tracking-[0.22em] text-muted mb-4">WEBENTRIC — NOIDA · NCR · INDIA</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] mb-6">
                    Website Development Company in Noida
                </h1>
                <div className="max-w-3xl space-y-4 text-muted text-[15px] sm:text-base leading-relaxed mb-14 md:mb-20">
                    <p>
                        Noida runs on shipping speed. Between the Sector 62 and 63 IT corridor, the startups around
                        Sector 18 and the expressway, and the service firms filling every new tower, nobody here has
                        patience for a six-month website project. Webentric is based in nearby New Delhi and serves
                        Noida businesses remotely, with in-person meetings arranged when a kickoff or review warrants
                        one — a setup that matches how corridor teams already work.
                    </p>
                    <p>
                        For startups, the usual starting point is deliberately small: a landing page that captures a
                        launch, or a compact marketing site that makes a young company look credible to customers and
                        investors alike. Because everything is built on a React foundation with room for databases and
                        dashboards, that starting point grows with you. If you are evaluating a website development
                        company in Noida, judge us on how fast we get you to something real — then keep us around for
                        what comes next.
                    </p>
                </div>

                <section>
                    <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">Services in Noida</h2>
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
                        Startup-relevant builds include the Avanza Survey corporate site, a business consulting website
                        shaped around lead generation, and a custom e-commerce store with secure checkout.{" "}
                        <Link href="/portfolio" className="text-ink underline underline-offset-4 hover:text-muted transition-colors">
                            View portfolio
                        </Link>{" "}
                        for the full range, or read our comparison of{" "}
                        <Link
                            href="/blogs/custom-website-vs-wordpress"
                            className="text-ink underline underline-offset-4 hover:text-muted transition-colors"
                        >
                            custom websites versus WordPress
                        </Link>{" "}
                        if you are deciding what to build on.
                    </p>
                </section>

                <Faq items={FAQS} />
                <ServiceCTA title="Launching in Noida? Ship a site that keeps up." />
            </div>
        </main>
    );
}
