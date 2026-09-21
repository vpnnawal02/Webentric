import Link from "next/link";

const LINKS = [
    { href: "/portfolio", label: "Portfolio" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
    { href: "/blogs", label: "Blogs" },
];

export default function NotFound() {
    return (
        <main className="min-h-screen bg-page text-ink flex items-center justify-center px-4">
            <div className="text-center max-w-xl py-20">
                <p className="text-sm tracking-[0.22em] text-muted mb-4">
                    404
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-4">
                    This page went offline
                </h1>
                <p className="text-muted text-sm sm:text-base leading-relaxed mb-8">
                    The link may be broken or the page may have moved. Here are
                    some useful places to continue:
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
                    {LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-xs sm:text-sm border border-line px-4 py-2 text-ink/80 hover:text-ink hover:border-edge transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <Link
                    href="/"
                    className="inline-flex px-7 py-3.5 bg-accent text-on-accent text-sm font-medium hover:bg-accent/85 transition-colors"
                >
                    Back to Home
                </Link>
            </div>
        </main>
    );
}
