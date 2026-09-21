import Link from "next/link";
import Image from "next/image";
import { getExcerpt } from "../lib/blog-utils.js";

export default function BlogCard({ blog }) {
    const excerpt = getExcerpt(blog, 130);
    return (
        <article className="group bg-surface border border-line overflow-hidden flex flex-col">

            {/* Image */}
            <Link href={`/blogs/${blog.slug}`}
                className="relative block w-full aspect-[4/3] overflow-hidden bg-subtle"
            >
                <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute top-3 left-3 text-[10px] sm:text-[11px] tracking-wide text-white bg-black/70 backdrop-blur px-2.5 py-1 rounded-full border border-white/10">
                    {blog.category}
                </span>
            </Link>

            {/* Content */}
            <div className="p-4 sm:p-5 flex flex-col flex-1">

                {/* Meta */}
                <div className="flex items-center gap-2 text-[11px] sm:text-xs text-muted mb-2">
                    <span>{blog.date}</span>

                    <span>•</span>

                    <span>{blog.readTime}</span>
                </div>

                {/* Title */}
                <h2 className="text-base sm:text-lg font-medium mb-2 leading-snug line-clamp-2">
                    <Link href={`/blogs/${blog.slug}`}
                        className="hover:underline"
                    >
                        {blog.title}
                    </Link>
                </h2>

                {/* Excerpt */}
                {excerpt && (
                    <p className="text-sm text-muted leading-relaxed line-clamp-2 mb-4">
                        {excerpt}
                    </p>
                )}

                {/* Read Article */}
                <Link href={`/blogs/${blog.slug}`}
                    className="mt-auto text-xs sm:text-sm inline-flex items-center gap-1 text-ink/80 hover:text-ink"
                >
                    Read article

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </Link>
            </div>
        </article>
    );
}