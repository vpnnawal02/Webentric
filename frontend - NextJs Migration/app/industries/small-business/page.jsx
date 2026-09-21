import Link from "next/link";
import Breadcrumbs from "../../../components/Breadcrumbs.jsx";
import Faq from "../../../components/Faq.jsx";
import ServiceCTA from "../../../components/ServiceCTA.jsx";
import JsonLd from "../../../components/JsonLd.jsx";
import { SITE, webPageSchema, faqSchema, breadcrumbSchema } from "../../../lib/seo.js";

const TITLE = "Small Business Website Development India | Webentric";
const DESCRIPTION =
    "Small business websites that build credibility on a sensible budget — clear services, reviews, maps, and call or WhatsApp paths, built mobile-first for customers across India.";
const URL = `${SITE.url}/industries/small-business`;

const FAQS = [
    {
        question: "How much content do I need before we start?",
        answer: "Not much. A list of your services, rough pricing or how quotes work, a few real photos, and your phone number, address, and timings are enough to begin. We shape those into clear pages and flag anything missing so you can add it without delaying the launch.",
    },
    {
        question: "I already have a free DIY builder site. Why move?",
        answer: "DIY builders are fine for getting started, but they often load slowly, limit how your pages are structured, and keep you tied to their platform and subdomain rules. A dedicated build gives you your own domain setup, faster mobile pages, and a layout organised around the questions your customers actually ask.",
    },
    {
        question: "Can customers reach me directly from the site?",
        answer: "Yes. Every page carries obvious tap-to-call and WhatsApp paths, plus a short enquiry form and an embedded map with your hours. Visitors on a phone can ring you or message you in one tap instead of hunting for contact details.",
    },
    {
        question: "What happens after launch when my hours or prices change?",
        answer: "Small details change often — timings, menus, price lists, new photos. Our website maintenance service covers those updates along with backups and monitoring, so the site stays accurate without you touching any code.",
    },
];

const NEEDS = [
    {
        title: "Services and pricing pages",
        text: "Plain-language pages that say what you sell, who it suits, and what it costs — or how a quote works. Visitors decide faster when they don't have to guess.",
    },
    {
        title: "Trust signals that close the gap",
        text: "Real photos of your work and premises, customer reviews, and a short story of the business help a small shop stand beside bigger competitors on a phone screen.",
    },
    {
        title: "Call and WhatsApp on every page",
        text: "Tap-to-call buttons and WhatsApp chat links sit where thumbs already are. Most small-business enquiries start as a call or a message, not a long form.",
    },
    {
        title: "Location, hours, and maps",
        text: "Address with landmarks, an embedded map, and accurate opening hours — including holiday changes — so nearby customers actually find your door.",
    },
    {
        title: "Short enquiry forms",
        text: "Three or four fields at most: name, contact, and what they need. Requests land in your inbox or chat instead of vanishing into a generic contact page.",
    },
    {
        title: "Easy updates and care",
        text: "Price lists, timings, and offers change through the year. A simple structure plus ongoing maintenance keeps the site accurate without rebuilding anything.",
    },
];

const RELATED = [
    { label: "Website Development", to: "/website-development" },
    { label: "Web Design", to: "/web-design" },
    { label: "Website Maintenance", to: "/website-maintenance" },
];

export const metadata = {
    title: TITLE,
    description: DESCRIPTION,
    keywords: ["small business website development", "small business website India", "affordable business website Delhi"],
    alternates: { canonical: "https://webentric.in/industries/small-business" },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: "https://webentric.in/industries/small-business",
        type: "website",
        images: ["https://webentric.in/social-media-cover.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION,
    },
};

export default function SmallBusinessPage() {
    return (
        <main className="bg-page text-ink min-h-screen">
            <JsonLd
                data={[
                    webPageSchema({ name: TITLE, url: URL, description: DESCRIPTION }),
                    faqSchema(FAQS),
                    breadcrumbSchema([
                        { name: "Home", url: SITE.url },
                        { name: "Industries" },
                        { name: "Small Business", url: URL },
                    ]),
                ]}
            />
            <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 pt-24 md:pt-28 pb-20">
                <Breadcrumbs items={[{ label: "Industries" }, { label: "Small Business", to: "/industries/small-business" }]} />
                <p className="text-xs tracking-[0.22em] text-muted mb-4">INDUSTRIES — WEBENTRIC</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] mb-6">
                    Website Development for Small Businesses
                </h1>
                <div className="max-w-3xl space-y-4 text-muted text-[15px] sm:text-base leading-relaxed mb-14 md:mb-20">
                    <p>
                        A small business is usually judged against larger competitors on a
                        five-inch screen: whoever answers questions clearly — what you do,
                        what it costs, where you are, how to reach you — wins the call.
                        Tight budgets make every rupee count, so the site has to earn trust
                        fast instead of impressing with decoration.
                    </p>
                    <p>
                        Many owners start on a DIY builder and hit the same walls: slow
                        pages, rigid layouts, and enquiry paths that leak visitors. We
                        build lean, mobile-first sites around your real funnel — services,
                        proof, contact — so a customer can go from search to WhatsApp
                        message in under a minute. If you are weighing whether it is worth
                        it, read our guide on{" "}
                        <Link
                            href="/blogs/why-small-business-needs-website"
                            className="text-ink underline underline-offset-4 decoration-line hover:decoration-ink transition-colors"
                        >
                            why your small business needs a website from day one
                        </Link>
                        .
                    </p>
                </div>

                <section>
                    <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">
                        What your website needs
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {NEEDS.map((item) => (
                            <div key={item.title} className="bg-surface border border-line p-6">
                                <h3 className="font-medium mb-2">{item.title}</h3>
                                <p className="text-sm text-muted leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mt-16 md:mt-20">
                    <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">
                        Relevant work
                    </h2>
                    <p className="text-muted max-w-3xl text-[15px] sm:text-base leading-relaxed">
                        For Neha&apos;s salon we built service listings with a gallery and
                        direct booking paths; for cafe sites such as my-cafe and cats-cafe
                        we created menu, hours, location, and photo-led layouts; and for a
                        box-print company we built product and enquiry pages that explain
                        custom print runs clearly.{" "}
                        <Link
                            href="/portfolio"
                            className="text-ink underline underline-offset-4 decoration-line hover:decoration-ink transition-colors"
                        >
                            See all work
                        </Link>
                        .
                    </p>
                </section>

                <section className="mt-16 md:mt-20">
                    <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">
                        Related services
                    </h2>
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

                <Faq items={FAQS} />

                <ServiceCTA
                    title="Need a business site that earns trust on a budget?"
                    text="Tell us what you sell and how customers reach you today. We reply within 24 hours on business days with a clear plan and timeline."
                />
            </div>
        </main>
    );
}
