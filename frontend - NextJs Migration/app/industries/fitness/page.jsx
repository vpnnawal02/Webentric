import Link from "next/link";
import Breadcrumbs from "../../../components/Breadcrumbs.jsx";
import Faq from "../../../components/Faq.jsx";
import ServiceCTA from "../../../components/ServiceCTA.jsx";
import JsonLd from "../../../components/JsonLd.jsx";
import { SITE, webPageSchema, faqSchema, breadcrumbSchema } from "../../../lib/seo.js";

const TITLE = "Gym & Fitness Website Development India | Webentric";
const DESCRIPTION =
    "Gym and fitness studio websites that turn visits into trials — membership plans, class timetables, trainer profiles, result photos, and WhatsApp trial booking.";
const URL = `${SITE.url}/industries/fitness`;

const FAQS = [
    {
        question: "Can visitors book a free trial from the site?",
        answer: "Yes. A trial button on every key page opens a WhatsApp message pre-filled with the visitor's interest — trial class, timing, goal — so your team gets a warm lead to confirm instead of a cold form submission to chase.",
    },
    {
        question: "How do we show class timings clearly?",
        answer: "As a proper timetable: batches by day and time, discipline per batch, and the trainer taking it. Morning and evening splits, weekend variations, and holiday pauses are all structured so members check the site instead of calling the front desk.",
    },
    {
        question: "Can we present our trainers and their specialities?",
        answer: "Yes. Each trainer gets a profile with photo, certifications, and specialities like strength, conditioning, yoga, or personal training. People commit to coaches, not equipment lists — visible trainers shorten that decision.",
    },
    {
        question: "What happens when plans or timings change?",
        answer: "Plans, batches, and holiday schedules change through the year. The site is structured for quick edits, and our website maintenance service applies updates — new batches, revised plans, festive closures — so members always see current information.",
    },
];

const NEEDS = [
    {
        title: "Membership plan pages",
        text: "Plan names, durations, what's included, and who each suits — with a trial or enquiry call to action beside every option instead of a dead-end price list.",
    },
    {
        title: "Class timetables",
        text: "Batch timings by day, discipline per batch, and trainer per session. Clear schedules cut front-desk calls and help prospects picture their own week.",
    },
    {
        title: "Trainer profiles",
        text: "Photos, certifications, and specialities for every coach. A prospect choosing between two gyms often decides on the trainer they want to learn from.",
    },
    {
        title: "Trial booking via WhatsApp",
        text: "Pre-filled trial requests from every page — goal, preferred timing, location. The lowest-friction step between curiosity and walking through your door.",
    },
    {
        title: "Results galleries",
        text: "Member transformations and training photos, shared with consent. Real progress from real members persuades more than any equipment inventory.",
    },
    {
        title: "Timings, location, and contact",
        text: "Morning and evening splits, holiday closures, an embedded map, and direct call paths — the practical details that decide whether someone shows up tomorrow.",
    },
];

const RELATED = [
    { label: "Website Development", to: "/website-development" },
    { label: "Landing Page Development", to: "/landing-page-development" },
    { label: "Website Maintenance", to: "/website-maintenance" },
];

export const metadata = {
    title: TITLE,
    description: DESCRIPTION,
    keywords: ["gym website development", "fitness studio website India", "gym website Delhi"],
    alternates: { canonical: "https://webentric.in/industries/fitness" },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: "https://webentric.in/industries/fitness",
        type: "website",
        images: ["https://webentric.in/social-media-cover.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION,
    },
};

export default function FitnessPage() {
    return (
        <main className="bg-page text-ink min-h-screen">
            <JsonLd
                data={[
                    webPageSchema({ name: TITLE, url: URL, description: DESCRIPTION }),
                    faqSchema(FAQS),
                    breadcrumbSchema([
                        { name: "Home", url: SITE.url },
                        { name: "Industries" },
                        { name: "Fitness", url: URL },
                    ]),
                ]}
            />
            <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 pt-24 md:pt-28 pb-20">
                <Breadcrumbs items={[{ label: "Industries" }, { label: "Fitness", to: "/industries/fitness" }]} />
                <p className="text-xs tracking-[0.22em] text-muted mb-4">INDUSTRIES — WEBENTRIC</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] mb-6">
                    Websites for Gyms &amp; Fitness Studios
                </h1>
                <div className="max-w-3xl space-y-4 text-muted text-[15px] sm:text-base leading-relaxed mb-14 md:mb-20">
                    <p>
                        A fitness membership is a commitment decision, and prospects
                        research it like one: which plans exist, when batches run, who
                        the trainers are, and whether a trial is possible before paying.
                        A gym site that shows only equipment photos and a phone number
                        leaves every real question unanswered.
                    </p>
                    <p>
                        We build studio sites around the trial funnel — plans prospects
                        can compare, timetables they can picture themselves in, trainer
                        profiles that earn confidence, and WhatsApp trial booking from
                        every page. The goal is simple: turn an evening of comparison
                        browsing into a Monday morning visit.
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
                        For Gymshala we built a fitness website covering programs,
                        schedules, and trainer sections with trial enquiry paths that
                        move visitors from browsing to booking their first session.{" "}
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
                    title="Need a site that fills trial slots?"
                    text="Tell us about your programs, batches, and how trials reach you today. We reply within 24 hours on business days with a clear plan and timeline."
                />
            </div>
        </main>
    );
}
