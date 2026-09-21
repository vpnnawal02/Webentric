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
        "/",
        "/portfolio",
        "/pricing",
        "/contact",
        "/blogs",
        "/price-calculator",
        ...SERVICES,
        ...LOCATIONS,
        ...INDUSTRIES,
        "/privacy-policy",
        "/terms",
    ];

    const staticEntries = staticRoutes.map((route) => ({
        url: `${SITE.url}${route === "/" ? "" : route}`,
        lastModified: new Date(),
    }));

    const blogEntries = blogs.map((blog) => ({
        url: `${SITE.url}/blogs/${blog.slug}`,
        lastModified: toISODate(blog.date) ? new Date(toISODate(blog.date)) : new Date(),
    }));

    return [...staticEntries, ...blogEntries];
}
