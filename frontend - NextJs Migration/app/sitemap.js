import blogs from "../lib/blog-data.js";
import { SITE, toISODate } from "../lib/seo.js";

const SERVICES = [
    "/website-development",
    "/web-design",
    "/ecommerce-development",
    "/custom-software-development",
    "/web-application-development",
    "/landing-page-development",
    "/website-redesign",
    "/website-maintenance",
    "/seo-services",
];

const LOCATIONS = [
    "/locations/delhi",
    "/locations/delhi-ncr",
    "/locations/noida",
    "/locations/gurgaon",
];

const INDUSTRIES = [
    "/industries/small-business",
    "/industries/startups",
    "/industries/education",
    "/industries/restaurants-cafes",
    "/industries/fitness",
];

// NOTE: /admin, /admin/login and the 404 page are intentionally excluded.
export default function sitemap() {
    const staticRoutes = [
        { route: "/", priority: 1.0, changeFrequency: "weekly" },
        { route: "/about", priority: 0.8, changeFrequency: "monthly" },
        { route: "/portfolio", priority: 0.8, changeFrequency: "monthly" },
        { route: "/pricing", priority: 0.9, changeFrequency: "monthly" },
        { route: "/reviews", priority: 0.7, changeFrequency: "monthly" },
        { route: "/contact", priority: 0.9, changeFrequency: "monthly" },
        { route: "/careers", priority: 0.6, changeFrequency: "weekly" },
        { route: "/blogs", priority: 0.8, changeFrequency: "weekly" },
        { route: "/price-calculator", priority: 0.8, changeFrequency: "monthly" },
        ...SERVICES.map((r) => ({ route: r, priority: 0.9, changeFrequency: "monthly" })),
        ...LOCATIONS.map((r) => ({ route: r, priority: 0.7, changeFrequency: "monthly" })),
        ...INDUSTRIES.map((r) => ({ route: r, priority: 0.7, changeFrequency: "monthly" })),
        { route: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
        { route: "/terms", priority: 0.3, changeFrequency: "yearly" },
    ];

    const staticEntries = staticRoutes.map(({ route, priority, changeFrequency }) => ({
        url: `${SITE.url}${route === "/" ? "" : route}`,
        lastModified: new Date("2026-10-01T00:00:00.000Z"),
        changeFrequency,
        priority,
    }));

    const blogEntries = blogs.map((blog) => ({
        url: `${SITE.url}/blogs/${blog.slug}`,
        lastModified: toISODate(blog.date) ? new Date(toISODate(blog.date)) : new Date("2026-10-01T00:00:00.000Z"),
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    return [...staticEntries, ...blogEntries];
}
