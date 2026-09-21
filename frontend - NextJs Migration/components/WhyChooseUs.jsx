import React from "react";
import { icons } from '../lib/assets.js';

const CodeIcon = icons.code2_icon;

const benefits = [
    {
        title: "Experienced Developers",
        desc: "Our team builds scalable, reliable websites with a strong focus on maintainable architecture and real business outcomes.",
        stat: "08+",
        label: "Years building modern web solutions",
    },
    {
        title: "Modern Technology",
        desc: "We use current frameworks, clean development practices, and performance-first implementation to keep your website fast and future-ready.",
        stat: "100%",
        label: "Responsive, performance-driven builds",
    },
    {
        title: "Fast Delivery",
        desc: "Our streamlined workflow helps us move quickly without compromising quality, clarity, or long-term scalability.",
        stat: "Faster",
        label: "Execution with structured process",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="bg-page text-ink py-20 sm:py-24 lg:py-28">
            <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-14">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20 items-start">
                    {/* Left */}
                    <div
                        className="flex flex-col justify-between h-full"
                        data-aos="fade-right"
                    >
                        <div className="max-w-[540px]">
                            <p className="text-[15px] uppercase tracking-[0.22em] text-ink/45 mb-5">
                                WHY CHOOSE WEBENTRIC
                            </p>

                            <h2 className="text-[clamp(2.2rem,4.6vw,4.2rem)] leading-[1.02] tracking-[-0.04em] font-medium text-ink mb-6">
                                Built with clarity, performance, and long-term reliability.
                            </h2>

                            <p className="text-ink/58 text-[15px] sm:text-base leading-relaxed max-w-[520px]">
                                We create modern websites for businesses that need more than just
                                design. Every project is approached with a focus on usability,
                                scalability, performance, and strong technical foundations.
                            </p>
                        </div>

                        <div className="mt-10 pt-8 border-t border-edge max-w-[520px]">
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 border border-edge bg-surface flex items-center justify-center flex-shrink-0">
                                    <CodeIcon className="w-5 h-5 text-ink" />
                                </div>
                                <div>
                                    <p className="text-ink text-sm font-medium mb-1">
                                        Modern tools. Clean execution.
                                    </p>
                                    <p className="text-ink/48 text-sm leading-relaxed">
                                        Built using current technologies and practical development
                                        standards that support growth over time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="relative" data-aos="fade-down">
                        <div className="absolute inset-y-0 -left-7 hidden lg:block w-px bg-ink/10" />

                        <div className="space-y-5">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={benefit.title}
                                    className="group border border-edge bg-surface hover:bg-raised transition-all duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 120}
                                >
                                    <div className="grid sm:grid-cols-[120px_1fr] gap-6 p-6 sm:p-7 lg:p-8">
                                        <div className="flex flex-col justify-between">
                                            <div className="text-[2rem] sm:text-[2.35rem] leading-none tracking-[-0.05em] font-light text-ink">
                                                {benefit.stat}
                                            </div>
                                            <div className="text-[11px] uppercase tracking-[0.12em] text-muted mt-3 max-w-[110px] leading-relaxed">
                                                {benefit.label}
                                            </div>
                                        </div>

                                        <div className="min-w-0">
                                            <h3 className="text-ink text-xl font-medium tracking-[-0.02em] mb-2 group-hover:text-ink/90 transition-colors">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-ink/56 text-sm sm:text-[15px] leading-relaxed max-w-[54ch]">
                                                {benefit.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;