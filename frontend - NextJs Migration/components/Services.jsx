'use client';
import React, { useRef, useState } from "react";


import Link from 'next/link';
import {
    HiOutlineGlobeAlt,
    HiOutlineShoppingCart,
    HiOutlineArrowPath,
    HiOutlineMegaphone,
    HiOutlineWrenchScrewdriver,
    HiOutlineChartBar,
} from "react-icons/hi2";
import { FiArrowUpRight, FiArrowLeft, FiArrowRight } from "react-icons/fi";

// ─── Service Data ─────────────────────────────────────────────────────────────
const services = [
    {
        id: "business-website",
        icon: HiOutlineGlobeAlt,
        title: "Business Website Development",
        description:
            "Professional, high-conversion websites architected to establish authoritative online presence and articulate your value proposition with precision.",
        size: "large",
        accent: "#ffffff",
        to: "/portfolio",
    },
    {
        id: "ecommerce",
        icon: HiOutlineShoppingCart,
        title: "E-Commerce Development",
        description:
            "Robust digital storefronts featuring secure transaction pipelines, streamlined inventory management.",
        size: "wide",
        accent: "#ffffff",
        to: "/portfolio",
    },
    {
        id: "redesign",
        icon: HiOutlineArrowPath,
        title: "Website Redesign",
        description:
            "Modernization of legacy systems, focusing on performance optimization.",
        size: "small",
        accent: "#ffffff",
        to: "/portfolio",
    },
    {
        id: "landing",
        icon: HiOutlineMegaphone,
        title: "Landing Pages",
        description:
            "Conversion-optimized landing environments engineered for high-yield campaigns.",
        size: "small",
        accent: "#ffffff",
        to: "/portfolio",
    },
    {
        id: "maintenance",
        icon: HiOutlineWrenchScrewdriver,
        title: "Maintenance & Support",
        description:
            "Continuous infrastructure monitoring, security patching, and structural updates.",
        size: "medium",
        accent: "#ffffff",
        to: "/portfolio",
    },
    {
        id: "seo",
        icon: HiOutlineChartBar,
        title: "SEO Optimization",
        description:
            "Technical search engine alignment focusing on core web vitals and metadata architecture.",
        size: "medium",
        accent: "#ffffff",
        to: "/portfolio",
    },
];

// ─── Single Card Component ────────────────────────────────────────────────────
const ServiceCard = ({ service, className = "", aosDelay = 0, mobile = false }) => {
    const Icon = service.icon;

    return (
        <div
            data-aos={!mobile ? "fade-up" : undefined}
            data-aos-delay={!mobile ? aosDelay : undefined}
            data-aos-duration={!mobile ? "550" : undefined}
            data-aos-easing={!mobile ? "ease-out-quart" : undefined}
            data-aos-once={!mobile ? "true" : undefined}
            className={`group relative flex flex-col justify-end overflow-hidden border border-edge bg-page p-6 sm:p-7 transition-all duration-300 hover:border-edge ${className}`}
        >
            {/* Ambient hover wash */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_70%,color-mix(in_srgb,var(--wt-ink)_6%,transparent)_0%,transparent_65%)]" />

            {/* Icon */}
            {/* <div className="mb-5 w-11 h-11 flex items-center justify-center flex-shrink-0 border border-white/12 bg-white/[0.03] transition-transform duration-300 group-hover:scale-105">
                <Icon size={19} className="text-white/88" />
            </div> */}

            {/* Text */}
            <div className="flex-1 flex flex-col justify-end">
                <h3 className="text-ink font-medium text-[35px] leading-[1.05] tracking-[-0.04em] mb-3">
                    {service.title}
                </h3>
                <p className="text-ink/60 text-md leading-relaxed line-clamp-3">
                    {service.description}
                </p>
            </div>

            {/* Arrow link */}
            <Link href={service.to}
                className="mt-6 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-ink/72 group-hover:text-ink transition-all duration-300"
                aria-label={`Learn more about ${service.title}`}
            >
                See our work <FiArrowUpRight size={13} />
            </Link>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px transition-all duration-500 bg-ink/70" />
        </div>
    );
};

// ─── Main Services Section ────────────────────────────────────────────────────
const Services = () => {
    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const [businessWebsite, ecommerce, redesign, landing, maintenance, seo] = services;

    const scrollToCard = (index) => {
        if (!sliderRef.current) return;
        const container = sliderRef.current;
        const card = container.children[index];
        if (!card) return;

        container.scrollTo({
            left: card.offsetLeft - 20,
            behavior: "smooth",
        });
        setActiveIndex(index);
    };

    const nextSlide = () => {
        const next = (activeIndex + 1) % services.length;
        scrollToCard(next);
    };

    const prevSlide = () => {
        const prev = (activeIndex - 1 + services.length) % services.length;
        scrollToCard(prev);
    };

    const handleScroll = () => {
        if (!sliderRef.current) return;
        const container = sliderRef.current;
        const children = [...container.children];
        const scrollLeft = container.scrollLeft;

        let closestIndex = 0;
        let closestDistance = Infinity;

        children.forEach((child, index) => {
            const distance = Math.abs(child.offsetLeft - scrollLeft - 20);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });

        setActiveIndex(closestIndex);
    };

    return (
        <section className="relative py-20 sm:py-24 lg:py-28 bg-page text-ink overflow-hidden border-t border-edge">
            <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-14">

                {/* Header */}
                <div
                    className="mb-14 lg:mb-16"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-once="true"
                >


                    <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-14 items-start">
                        <h2 className="text-ink font-medium text-[clamp(2.5rem,5vw,5.4rem)] leading-[0.95] tracking-[-0.06em] max-w-[9ch]">
                            Designed for modern businesses
                        </h2>

                        <p className="text-ink/70 text-[15px] sm:text-[18px] max-w-[520px] leading-relaxed lg:pt-3">
                            A complete range of high-performance web development services
                            engineered to establish, optimize, and scale your digital
                            infrastructure.
                        </p>
                    </div>
                </div>

                {/* Desktop / Tablet Grid */}
                <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-4">
                    <ServiceCard
                        service={businessWebsite}
                        className="sm:row-span-2 min-h-[280px] sm:min-h-[380px]"
                        aosDelay={0}
                    />

                    <ServiceCard
                        service={ecommerce}
                        className="lg:col-span-2 min-h-[180px]"
                        aosDelay={90}
                    />

                    <ServiceCard
                        service={redesign}
                        className="min-h-[180px]"
                        aosDelay={180}
                    />

                    <ServiceCard
                        service={landing}
                        className="min-h-[180px]"
                        aosDelay={270}
                    />

                    <ServiceCard
                        service={maintenance}
                        className="min-h-[180px]"
                        aosDelay={360}
                    />

                    <ServiceCard
                        service={seo}
                        className="sm:col-span-2 lg:col-span-2 min-h-[180px]"
                        aosDelay={450}
                    />
                </div>

                {/* Mobile Slider */}
                <div className="sm:hidden">
                    <div
                        ref={sliderRef}
                        onScroll={handleScroll}
                        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-2"
                    >
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="min-w-[88%] snap-start"
                            >
                                <ServiceCard service={service} className="min-h-[280px]" mobile />
                            </div>
                        ))}
                    </div>

                    {/* Mobile Controls */}
                    <div className="mt-6 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            {services.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => scrollToCard(i)}
                                    className="rounded-full transition-all duration-300"
                                    style={{
                                        width: i === activeIndex ? 22 : 6,
                                        height: 6,
                                        background: i === activeIndex
                                            ? 'var(--wt-ink)'
                                            : 'color-mix(in srgb, var(--wt-ink) 28%, transparent)',
                                    }}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={prevSlide}
                                className="w-11 h-11 border border-line flex items-center justify-center text-ink/80 hover:bg-accent/85 hover:text-on-accent transition-all duration-300"
                                aria-label="Previous service"
                            >
                                <FiArrowLeft size={16} />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-11 h-11 border border-line flex items-center justify-center text-ink/80 hover:bg-accent/85 hover:text-on-accent transition-all duration-300"
                                aria-label="Next service"
                            >
                                <FiArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* CTA strip */}
                <div
                    className="mt-12 pt-8 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                    data-aos="fade-up"
                    data-aos-delay="650"
                    data-aos-duration="500"
                    data-aos-once="true"
                >
                    <p className="text-ink/70 text-sm">
                        Not sure which service fits your project?
                    </p>

                    <Link href="/contact">
                        <button className="inline-flex items-center gap-2 px-0 py-0 text-ink text-sm font-medium border-b border-edge hover:border-ink transition-colors duration-200">
                            Talk to Us <FiArrowUpRight size={14} />
                        </button>
                    </Link>
                </div>
            </div>

            <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
};

export default Services;