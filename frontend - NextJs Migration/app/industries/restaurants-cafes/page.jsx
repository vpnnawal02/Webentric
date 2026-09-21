import Link from "next/link";
import Breadcrumbs from "../../../components/Breadcrumbs.jsx";
import Faq from "../../../components/Faq.jsx";
import ServiceCTA from "../../../components/ServiceCTA.jsx";
import JsonLd from "../../../components/JsonLd.jsx";
import { SITE, webPageSchema, faqSchema, breadcrumbSchema } from "../../../lib/seo.js";

const TITLE = "Restaurant Website Development India | Webentric";
const DESCRIPTION =
    "Restaurant and cafe websites that turn hungry searches into footfall — menus, hours, location, photos, and WhatsApp reservation paths, tuned for phones.";
const URL = `${SITE.url}/industries/restaurants-cafes`;

const FAQS = [
    {
        question: "Can customers see our menu without downloading a PDF?",
        answer: "Yes. Menus are built as readable pages — categories, items, and prices that load instantly on a phone and can be updated when dishes or rates change. No downloads, no pinching and zooming on a scanned file.",
    },
    {
        question: "How do table bookings work on the site?",
        answer: "Through a WhatsApp reservation path: party size, date, and time are pre-filled into the message, so the booking lands in your chat ready to confirm. It suits how most diners in India actually reserve — a quick message, not a long form or an account.",
    },
    {
        question: "Will the site load fast on mobile data?",
        answer: "Yes. Food photography is compressed carefully so pages stay appetising without turning heavy, and layouts are kept lean for visitors searching on the move — often standing nearby deciding where to eat.",
    },
    {
        question: "Can we update timings, specials, and holiday hours?",
        answer: "Yes. Menus, specials, and hours are structured for quick edits, and our website maintenance service can apply changes — festive hours, new dishes, price updates — so the site never shows last season's information.",
    },
];

const NEEDS = [
    {
        title: "Readable menu pages",
        text: "Categories, dishes, and prices with veg markers and chef specials — scannable in seconds by someone standing nearby, hungry, on mobile data.",
    },
    {
        title: "Hours, address, and map",
        text: "Opening hours with holiday variations, an embedded map, and nearby landmarks. Most dining decisions end with one question: how do I get there, and is it open?",
    },
    {
        title: "Photography that whets appetite",
        text: "Interiors, signature dishes, and ambience shots — compressed so they load fast. Diners choose with their eyes long before they read a word.",
    },
    {
        title: "WhatsApp reservations",
        text: "One-tap table requests with party size, date, and time pre-filled. Low friction for the diner, an organised message thread for your staff.",
    },
    {
        title: "Search-friendly basics",
        text: "Semantic structure, clear headings, and clean URLs so your menu and location pages can surface when someone searches for your cuisine nearby.",
    },
    {
        title: "Reviews and social proof",
        text: "Direct paths to your review profiles and Instagram, plus space for press mentions. A diner choosing between two cafes picks the one others visibly enjoyed.",
    },
];

const RELATED = [
    { label: "Web Design", to: "/web-design" },
    { label: "Website Development", to: "/website-development" },
    { label: "SEO Services", to: "/seo-services" },
];

export const metadata = {
    title: TITLE,
    description: DESCRIPTION,
    keywords: ["restaurant website development", "cafe website India", "restaurant website Delhi"],
    alternates: { canonical: "https://webentric.in/industries/restaurants-cafes" },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: "https://webentric.in/industries/restaurants-cafes",
        type: "website",
        images: ["https://webentric.in/social-media-cover.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION,
    },
};

export default function RestaurantsCafesPage() {
    return (
        <main className="bg-page text-ink min-h-screen">
            <JsonLd
                data={[
                    webPageSchema({ name: TITLE, url: URL, description: DESCRIPTION }),
                    faqSchema(FAQS),
                    breadcrumbSchema([
                        { name: "Home", url: SITE.url },
                        { name: "Industries" },
                        { name: "Restaurants & Cafes", url: URL },
                    ]),
                ]}
            />
            <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 pt-24 md:pt-28 pb-20">
                <Breadcrumbs items={[{ label: "Industries" }, { label: "Restaurants & Cafes", to: "/industries/restaurants-cafes" }]} />
                <p className="text-xs tracking-[0.22em] text-muted mb-4">INDUSTRIES — WEBENTRIC</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] mb-6">
                    Websites for Restaurants &amp; Cafes That Fill Tables
                </h1>
                <div className="max-w-3xl space-y-4 text-muted text-[15px] sm:text-base leading-relaxed mb-14 md:mb-20">
                    <p>
                        Nobody chooses dinner from a desktop. Your visitors are on phones,
                        often already nearby, asking four things: what&apos;s on the menu,
                        what does it cost, are you open, and where exactly are you. If any
                        answer hides behind a PDF download or a slow gallery, they tap
                        back to the next listing.
                    </p>
                    <p>
                        We build dining sites around that moment of hunger: instant menu
                        pages, accurate hours and maps, photography that loads fast on
                        mobile data, and WhatsApp reservation paths that convert a craving
                        into a confirmed table. Discovery from search plus a frictionless
                        booking step is what turns traffic into footfall.
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
                        For my-cafe and cats-cafe we built menu-first sites with hours,
                        location maps, photo galleries, and direct contact paths —
                        everything a visitor needs to pick the place and walk in.{" "}
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
                    title="Need a site that fills tables?"
                    text="Tell us about your menu, location, and how reservations reach you today. We reply within 24 hours on business days with a clear plan and timeline."
                />
            </div>
        </main>
    );
}
