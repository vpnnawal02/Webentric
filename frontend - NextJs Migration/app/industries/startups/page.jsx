import Link from "next/link";
import Breadcrumbs from "../../../components/Breadcrumbs.jsx";
import Faq from "../../../components/Faq.jsx";
import ServiceCTA from "../../../components/ServiceCTA.jsx";
import JsonLd from "../../../components/JsonLd.jsx";
import { SITE, webPageSchema, faqSchema, breadcrumbSchema } from "../../../lib/seo.js";

const TITLE = "Startup Website Development India | Webentric";
const DESCRIPTION =
    "Launch-ready startup websites — sharp positioning, an investor-friendly story, waitlist capture, and analytics-ready builds that move at startup speed.";
const URL = `${SITE.url}/industries/startups`;

const FAQS = [
    {
        question: "How fast can we launch?",
        answer: "Speed depends mostly on content readiness — positioning, product screenshots, and team details. We usually start with a sharp landing page that captures signups, then expand into deeper pages once your messaging settles, so you are never waiting on a months-long build to start talking to users.",
    },
    {
        question: "Should we start with a landing page or a full site?",
        answer: "If you are validating or pre-launch, a focused landing page with waitlist capture is the right call. If you are raising or selling, add story pages — problem, solution, traction, team — so investors and early customers find answers without a call. Either way the base is built to grow, not to be thrown away.",
    },
    {
        question: "Can the site grow into a product or dashboard later?",
        answer: "Yes. We build on React with a backend-ready setup on Firebase or Supabase, so waitlist forms today can become auth, dashboards, or CRM-style views tomorrow without starting over. Scope is phased deliberately so the MVP stays lean.",
    },
    {
        question: "Will we be able to measure signups and traffic sources?",
        answer: "Yes. Page and event tracking is wired in from day one — signups, button clicks, and traffic sources — so you can see which channel and which message actually convert instead of guessing after a launch.",
    },
];

const NEEDS = [
    {
        title: "Positioning-first homepage",
        text: "A one-line value proposition, who it is for, and a single clear call to action. Visitors and investors should grasp the idea in ten seconds.",
    },
    {
        title: "Investor-ready story pages",
        text: "Problem, solution, traction, and team sections that answer pitch-room questions before the meeting — with a direct contact path for follow-ups.",
    },
    {
        title: "Waitlist and signup capture",
        text: "Early-access forms that write straight to your database with clear confirmation states, so no interested visitor slips away uncounted.",
    },
    {
        title: "Product visuals and demos",
        text: "Space for screenshots, demo videos, and release notes that show momentum. A startup that ships visibly earns more confidence than one that describes.",
    },
    {
        title: "Analytics from day one",
        text: "Page views plus event tracking on signups and key clicks, so every campaign and every headline change can be judged on numbers.",
    },
    {
        title: "MVP scope control",
        text: "A phased roadmap: launch lean, learn, then extend. Features are sequenced by what unlocks signups or funding — not by what sounds impressive.",
    },
];

const RELATED = [
    { label: "Landing Page Development", to: "/landing-page-development" },
    { label: "Web Application Development", to: "/web-application-development" },
    { label: "Web Design", to: "/web-design" },
];

export const metadata = {
    title: TITLE,
    description: DESCRIPTION,
    keywords: ["startup website development", "startup website India", "MVP website development Delhi"],
    alternates: { canonical: "https://webentric.in/industries/startups" },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: "https://webentric.in/industries/startups",
        type: "website",
        images: ["https://webentric.in/social-media-cover.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION,
    },
};

export default function StartupsPage() {
    return (
        <main className="bg-page text-ink min-h-screen">
            <JsonLd
                data={[
                    webPageSchema({ name: TITLE, url: URL, description: DESCRIPTION }),
                    faqSchema(FAQS),
                    breadcrumbSchema([
                        { name: "Home", url: SITE.url },
                        { name: "Industries" },
                        { name: "Startups", url: URL },
                    ]),
                ]}
            />
            <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 pt-24 md:pt-28 pb-20">
                <Breadcrumbs items={[{ label: "Industries" }, { label: "Startups", to: "/industries/startups" }]} />
                <p className="text-xs tracking-[0.22em] text-muted mb-4">INDUSTRIES — WEBENTRIC</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] mb-6">
                    Websites for Startups That Need to Move Fast
                </h1>
                <div className="max-w-3xl space-y-4 text-muted text-[15px] sm:text-base leading-relaxed mb-14 md:mb-20">
                    <p>
                        An early-stage company lives on speed and credibility at once:
                        ship before the pitch, look fundable before the traction. Founders
                        juggle landing copy, investor questions, and a product that keeps
                        changing — while scope creep quietly eats the runway the site was
                        meant to protect.
                    </p>
                    <p>
                        We build launch-first sites for startups: a sharp landing page that
                        captures waitlist signups now, story pages that carry the pitch
                        later, and an analytics-ready base that grows into dashboards and
                        product views without a rebuild. If you are still deciding on
                        platform direction, read our comparison of a{" "}
                        <Link
                            href="/blogs/custom-website-vs-wordpress"
                            className="text-ink underline underline-offset-4 decoration-line hover:decoration-ink transition-colors"
                        >
                            custom website vs WordPress
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
                        For a travel agency we built destination pages with clear enquiry
                        flows that turn browsing into trip requests, and for an ecommerce
                        store we created catalog and checkout paths designed to carry
                        early sales volume.{" "}
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
                    title="Need to launch before your next pitch?"
                    text="Tell us your launch date and what the site must prove. We reply within 24 hours on business days with a phased plan that hits your timeline."
                />
            </div>
        </main>
    );
}
