import Link from 'next/link';
import { FiArrowUpRight } from "react-icons/fi";

const SERVICES = [
    {
        to: "/website-development",
        label: "Website Development",
        desc: "Custom, fast websites engineered around your business goals.",
    },
    {
        to: "/web-design",
        label: "Web Design",
        desc: "Interfaces that turn visitors into enquiries.",
    },
    {
        to: "/ecommerce-development",
        label: "Ecommerce Development",
        desc: "Online stores with smooth checkout and trusted payments.",
    },
    {
        to: "/custom-software-development",
        label: "Custom Software",
        desc: "Dashboards, CRMs and internal tools for your workflows.",
    },
    {
        to: "/web-application-development",
        label: "Web Applications",
        desc: "Customer portals and systems for complex operations.",
    },
    {
        to: "/landing-page-development",
        label: "Landing Pages",
        desc: "Campaign pages built to convert visitors fast.",
    },
    {
        to: "/website-redesign",
        label: "Website Redesign",
        desc: "Modern rebuilds that protect your search rankings.",
    },
    {
        to: "/website-maintenance",
        label: "Maintenance & Support",
        desc: "Updates, backups, security and ongoing care.",
    },
    {
        to: "/seo-services",
        label: "SEO Services",
        desc: "Technical and local SEO that compounds over time.",
    },
];

const INDUSTRIES = [
    { to: "/industries/small-business", label: "Small Business" },
    { to: "/industries/startups", label: "Startups" },
    { to: "/industries/education", label: "Education" },
    { to: "/industries/restaurants-cafes", label: "Restaurants & Cafes" },
    { to: "/industries/fitness", label: "Fitness" },
];

const LOCATIONS = [
    { to: "/locations/delhi", label: "Delhi" },
    { to: "/locations/delhi-ncr", label: "Delhi NCR" },
    { to: "/locations/noida", label: "Noida" },
    { to: "/locations/gurgaon", label: "Gurgaon" },
];

/*
 * Homepage services hub: navigational heart of the site's topical map.
 * Links every service, industry and location page for crawlers and visitors.
 */
export default function HomeServiceHub() {
    return (
        <section id="services" className="bg-page text-ink py-20 sm:py-24 lg:py-28 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-muted mb-5">
                    What we build
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.04em] leading-tight max-w-3xl">
                    A Website Development Company in Delhi, Built for India
                </h2>
                <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
                    Webentric is a web development and digital solutions company based in
                    Delhi, helping businesses across Delhi NCR and India build fast,
                    scalable and conversion-focused digital experiences — from first
                    landing page to custom software.
                </p>

                <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                    {SERVICES.map((service) => (
                        <Link
                            key={service.to}
                            href={service.to}
                            className="group bg-surface border border-line p-6 md:p-7 hover:border-edge hover:bg-raised transition-all duration-300"
                        >
                            <div className="flex items-start justify-between gap-4 mb-3">
                                <h3 className="text-lg font-medium tracking-[-0.02em]">
                                    {service.label}
                                </h3>
                                <FiArrowUpRight
                                    size={17}
                                    aria-hidden="true"
                                    className="text-muted group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1"
                                />
                            </div>
                            <p className="text-sm text-muted leading-relaxed">
                                {service.desc}
                            </p>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 border-t border-line pt-10 md:pt-12">
                    <div>
                        <h3 className="text-[11px] uppercase tracking-[0.22em] text-muted mb-5">
                            Industries we serve
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {INDUSTRIES.map((industry) => (
                                <Link
                                    key={industry.to}
                                    href={industry.to}
                                    className="text-xs sm:text-sm border border-line px-4 py-2 text-ink/80 hover:text-ink hover:border-edge hover:bg-raised transition-colors"
                                >
                                    {industry.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-[11px] uppercase tracking-[0.22em] text-muted mb-5">
                            Areas we serve
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {LOCATIONS.map((location) => (
                                <Link
                                    key={location.to}
                                    href={location.to}
                                    className="text-xs sm:text-sm border border-line px-4 py-2 text-ink/80 hover:text-ink hover:border-edge hover:bg-raised transition-colors"
                                >
                                    {location.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
