import BlogCard from "../../components/BlogCard";
import Breadcrumbs from "../../components/Breadcrumbs";
import JsonLd from "../../components/JsonLd";
import blogs from "../../lib/blog-data.js";
import { SITE, blogSchema, breadcrumbSchema } from "../../lib/seo.js";
import { sortBlogs } from "../../lib/blog-utils.js";

export const metadata = {
    title: "Web Design & Development Blog India",
    description:
        "Practical guides on website cost, design, SEO & maintenance for Indian businesses — from a website development company in Delhi.",
    alternates: { canonical: "https://webentric.in/blogs" },
};

export default function BlogsPage() {
    const sortedBlogs = sortBlogs(blogs, "newest");

    return (
        <section className="min-h-screen bg-page text-ink px-4 sm:px-8 md:px-16 lg:px-24 pt-28 pb-20">
            <JsonLd
                data={[
                    blogSchema({
                        name: "Webentric Blog — Web Design & Development Insights",
                        url: `${SITE.url}/blogs`,
                        description:
                            "Guides on website design, cost, SEO and maintenance for businesses in India.",
                        posts: blogs,
                    }),
                    breadcrumbSchema([
                        { name: "Home", url: SITE.url },
                        { name: "Blogs", url: `${SITE.url}/blogs` },
                    ]),
                ]}
            />
            <div className="max-w-6xl mx-auto">
                <Breadcrumbs items={[{ label: "Blogs" }]} />

                {/* Header */}
                <p className="text-xs sm:text-sm tracking-widest text-muted mb-3">
                    INSIGHTS &amp; ARTICLES
                </p>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 max-w-2xl leading-tight">
                    Thoughts on Design, Development &amp; Growth
                </h1>
                <p className="text-sm md:text-base text-ink/58 max-w-2xl leading-relaxed mb-8 md:mb-10">
                    Practical guides on website design, cost, SEO and maintenance —
                    written for businesses in Delhi &amp; across India.
                </p>

                {/* Blog grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {sortedBlogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </section>
    );
}
