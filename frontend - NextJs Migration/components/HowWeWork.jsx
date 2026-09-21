import React from 'react'
import { processSteps } from '../lib/data.js';

const HowWeWork = () => {
    return (
        <section className="bg-page py-20 sm:py-24 lg:py-28 text-ink" id="process">
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Heading */}
                <div data-aos="fade-right" className="text-center max-w-[700px] mx-auto overflow-hidden">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight tracking-[-0.04em] text-ink">
                        How We Turn <span className='text-ink/70 underline underline-offset-4 decoration-ink/30'>Your Idea</span> Into a Powerful Website
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-ink/55 leading-relaxed">
                        Our streamlined development process ensures your website is built
                        efficiently, professionally, and tailored to your business goals.
                    </p>
                </div>

                {/* Process grid */}
                <div className="relative mt-16">
                    {/* Desktop connector lines */}
                    <div className="hidden lg:flex absolute top-1/2 left-16 right-16 -translate-y-1/2 h-px bg-ink/12" />

                    <div data-aos="fade-right" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {processSteps.map((step, index) => {
                            const Icon = step.icon;
                            const isFirst = index === 0;
                            const isLast = index === processSteps.length - 1;

                            return (
                                <div
                                    key={step.number}
                                    className={`relative bg-surface rounded-none p-8 border border-edge hover:bg-raised hover:border-edge transition-all duration-300
                    ${!isFirst && !isLast ? 'lg:mx-4' : ''}`}
                                >
                                    {/* Step number badge */}
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-accent text-on-accent rounded-none flex items-center justify-center">
                                        <span className="text-lg font-semibold leading-none tracking-tight">
                                            {step.number}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-[30px] font-medium text-ink mb-3 text-center tracking-[-0.02em] mt-10">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-ink/60 leading-relaxed text-center">
                                        {step.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowWeWork