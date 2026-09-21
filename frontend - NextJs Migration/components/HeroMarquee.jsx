import Link from 'next/link';
import { FiArrowUpRight } from "react-icons/fi";
import { projects } from '../lib/data.js';

/*
 * Infinite marquee showcase: two rows of small project cards
 * drifting in opposite directions. Pauses on hover/focus,
 * static scrollable strip under prefers-reduced-motion.
 */
function ProjectCard({ project, hidden }) {
    const href = project.link || "/portfolio";
    const external = /^https?:\/\//i.test(href);
    const inner = (
        <>
            <div className="aspect-[16/10] overflow-hidden bg-subtle">
                <img
                    src={project.image}
                    alt={
                        hidden
                            ? ""
                            : `${project.title} — website designed and developed by Webentric`
                    }
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="p-4 flex items-center justify-between gap-3">
                <div className="min-w-0">
                    <h3 className="text-sm font-medium truncate">{project.title}</h3>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-muted truncate">
                        {project.tech}
                    </p>
                </div>
                <FiArrowUpRight
                    size={15}
                    aria-hidden="true"
                    className="text-muted group-hover:text-ink transition-colors shrink-0"
                />
            </div>
        </>
    );
    const cls =
        "group block w-60 sm:w-72 shrink-0 bg-surface border border-line overflow-hidden hover:border-edge transition-colors";
    if (external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden={hidden || undefined}
                tabIndex={hidden ? -1 : 0}
                aria-label={hidden ? undefined : `Open ${project.title} live site`}
                className={cls}
            >
                {inner}
            </a>
        );
    }
    return (
        <Link href={href}
            aria-hidden={hidden || undefined}
            tabIndex={hidden ? -1 : 0}
            aria-label={hidden ? undefined : `More about ${project.title}`}
            className={cls}
        >
            {inner}
        </Link>
    );
}

function MarqueeRow({ items, reverse, duration }) {
    const doubled = [...items, ...items];
    return (
        <div className="marquee-hover">
            <div className="marquee-viewport overflow-hidden">
                <div
                    className="hero-marquee-track flex w-max gap-4 sm:gap-5 py-1"
                    style={{
                        animationDuration: duration,
                        ...(reverse ? { animationDirection: "reverse" } : {}),
                    }}
                >
                    {doubled.map((project, i) => (
                        <ProjectCard
                            key={`${project.title}-${i}`}
                            project={project}
                            hidden={i >= items.length}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function HeroMarquee() {
    if (projects.length === 0) return null;

    return (
        <section aria-label="Selected work" className="border-b border-edge">
            <div className="flex items-center justify-between gap-4 px-5 sm:px-8 lg:px-10 py-4 border-b border-edge">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-ink/70">
                    Selected work
                </p>
                <Link href="/portfolio"
                    className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs uppercase tracking-[0.18em] text-ink/70 hover:text-ink transition-colors"
                >
                    View all
                    <FiArrowUpRight size={13} aria-hidden="true" />
                </Link>
            </div>

            <div className="py-5 sm:py-7">
                <MarqueeRow items={projects} duration="60s" />
            </div>
        </section>
    );
}
