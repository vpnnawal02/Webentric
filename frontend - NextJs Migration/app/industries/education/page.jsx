import Link from "next/link";
import Breadcrumbs from "../../../components/Breadcrumbs.jsx";
import Faq from "../../../components/Faq.jsx";
import ServiceCTA from "../../../components/ServiceCTA.jsx";
import JsonLd from "../../../components/JsonLd.jsx";
import { SITE, webPageSchema, faqSchema, breadcrumbSchema } from "../../../lib/seo.js";

const TITLE = "School Website Development India | Webentric";
const DESCRIPTION =
    "School and institute websites that answer admission questions, publish notices and events, and give parents one reliable place for academics, dates, and contact.";
const URL = `${SITE.url}/industries/education`;

const FAQS = [
    {
        question: "Who updates notices and events after launch?",
        answer: "Your office staff shouldn't need a developer for routine updates. We set up a simple update flow for notices, circulars, and event galleries, and our website maintenance service can handle the uploads on a schedule during busy periods like admissions.",
    },
    {
        question: "Can parents submit admission enquiries online?",
        answer: "Yes. Admission pages carry a clear enquiry form — class applied for, student details, parent contact — that lands directly with your office. Eligibility, documents required, and key dates sit alongside so enquiries arrive informed rather than confused.",
    },
    {
        question: "Can the site carry our full academics structure?",
        answer: "Yes. Classes, streams, subjects, and curriculum overviews each get their own place, so parents can trace exactly what their child will study at each stage. The structure stays expandable as new classes or programs are added.",
    },
    {
        question: "Will the site work for parents on basic phones?",
        answer: "Yes. Pages are planned mobile-first and kept light — notices, dates, and contact details load quickly even on slow connections and older devices, which is exactly how most parents will check them.",
    },
];

const NEEDS = [
    {
        title: "Admissions pages that answer everything",
        text: "Eligibility, documents required, key dates, and fee enquiry paths in one place — so admission season brings informed applications instead of repeated phone calls.",
    },
    {
        title: "Clear academics structure",
        text: "Classes, streams, subjects, and curriculum overviews parents can browse by stage. Transparency about what is taught builds confidence before a campus visit.",
    },
    {
        title: "Notices and circulars board",
        text: "A dated, easy-to-scan notice section for holidays, exams, fee reminders, and circulars — the page parents bookmark and check weekly.",
    },
    {
        title: "Events and galleries",
        text: "Annual functions, sports days, and celebrations documented with photos. Active galleries show prospective parents a living campus, not an empty brochure.",
    },
    {
        title: "Faculty and leadership pages",
        text: "A principal's message plus staff and department listings. Parents trust institutions where the people behind the classrooms are visible and accountable.",
    },
    {
        title: "Reach the school easily",
        text: "Address with landmarks, an embedded map, transport routes, office hours, and phone numbers — everything a new parent needs for the first visit.",
    },
];

const RELATED = [
    { label: "Website Development", to: "/website-development" },
    { label: "Website Maintenance", to: "/website-maintenance" },
    { label: "Web Design", to: "/web-design" },
];

export const metadata = {
    title: TITLE,
    description: DESCRIPTION,
    keywords: ["school website development", "school website India", "educational institute website Delhi"],
    alternates: { canonical: "https://webentric.in/industries/education" },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: "https://webentric.in/industries/education",
        type: "website",
        images: ["https://webentric.in/social-media-cover.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION,
    },
};

export default function EducationPage() {
    return (
        <main className="bg-page text-ink min-h-screen">
            <JsonLd
                data={[
                    webPageSchema({ name: TITLE, url: URL, description: DESCRIPTION }),
                    faqSchema(FAQS),
                    breadcrumbSchema([
                        { name: "Home", url: SITE.url },
                        { name: "Industries" },
                        { name: "Education", url: URL },
                    ]),
                ]}
            />
            <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 pt-24 md:pt-28 pb-20">
                <Breadcrumbs items={[{ label: "Industries" }, { label: "Education", to: "/industries/education" }]} />
                <p className="text-xs tracking-[0.22em] text-muted mb-4">INDUSTRIES — WEBENTRIC</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] mb-6">
                    Websites for Schools &amp; Educational Institutes
                </h1>
                <div className="max-w-3xl space-y-4 text-muted text-[15px] sm:text-base leading-relaxed mb-14 md:mb-20">
                    <p>
                        For a school, the website is the office that never closes.
                        Admission season floods the phone with the same questions — dates,
                        documents, fees, transport — while during term time parents need
                        notices, exam schedules, and event updates they can check from a
                        phone. A site that goes stale after launch quietly pushes all of
                        that back onto your staff.
                    </p>
                    <p>
                        We build institute sites around the parent&apos;s journey: clear
                        admissions information, a living notices board, academics they can
                        browse by class, and contact paths that reach the right desk.
                        Everything is kept light and readable on basic phones, because
                        that is where most parents will meet you first.
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
                        For St. Andrew&apos;s school we built a complete institute site
                        with academics sections, admissions information, and dedicated
                        notices and events areas — the full parent-communication loop in
                        one place.{" "}
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
                    title="Need an admission-season-ready school site?"
                    text="Tell us about your classes, admissions process, and what parents ask most. We reply within 24 hours on business days with a clear plan and timeline."
                />
            </div>
        </main>
    );
}
