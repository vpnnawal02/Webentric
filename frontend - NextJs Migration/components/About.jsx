import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { images } from '../lib/assets.js';

const About = () => {
    return (
        <section className="bg-page text-ink overflow-hidden">
            <div className="w-full max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-14 py-14 sm:py-16 lg:py-20">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-14 xl:gap-20 items-center min-h-[78vh]">

                    {/* Left content */}
                    <div className="lg:w-[750px]">

                        <h2 className="text-[40px] md:text-[60px] leading-[1.03] tracking-[-0.05em] font-medium max-w-[11ch]">
                            We design, build, and scale digital products that make an impact
                        </h2>

                        <p className="mt-6 text-[15px] sm:text-[18px] leading-relaxed text-ink/55 max-w-[540px]">
                            Our multidisciplinary team of designers, developers, and strategists
                            helps brands elevate their digital presence. From user-focused
                            interfaces to scalable web platforms, we combine creativity and
                            technology to deliver meaningful results.
                        </p>
                    </div>

                    {/* Right visual layout */}
                    <div className="relative w-full">

                        <div className=" gap-4 sm:gap-5 pt-10 sm:pt-12">
                            <div className="col-span-7">
                                <div className="overflow-hidden bg-subtle w-full h-[230px] sm:h-[360px] md:h-[260px] lg:h-[390px]">
                                    <img
                                        src={images.about}
                                        alt="Workspace and design environment"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                {/* Bottom stats */}
                <div className="mt-14 sm:mt-16 lg:mt-18 pt-8 border-t border-edge flex justify-center">
                    <div className="flex justify-around gap-8 sm:gap-10 lg:gap-12 w-full overflow-scroll no-scrollbar">
                        <div className="flex gap-4 flex items-center ">
                            <span className="text-[2rem] sm:text-[2.3rem] lg:text-[2.5rem] leading-none font-light tracking-[-0.04em] text-ink ">
                                50+
                            </span>
                            <p className="text-ink text-[15px] sm:text-xs leading-relaxed pt-1">
                                Completed
                                <br />
                                Projects
                            </p>
                        </div>

                        <div className="flex items-center gap-4 ">
                            <span className="text-[2rem] sm:text-[2.3rem] lg:text-[2.5rem] leading-none font-light tracking-[-0.04em] text-ink">
                                20+
                            </span>
                            <p className="text-ink text-[15px] sm:text-xs leading-relaxed pt-1">
                                Best
                                <br />
                                Partnered
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="text-[2rem] sm:text-[2.3rem] lg:text-[2.5rem] leading-none font-light tracking-[-0.04em] text-ink">
                                6+
                            </span>
                            <p className="text-ink text-[15px] sm:text-xs leading-relaxed pt-1">
                                Years of
                                <br />
                                Experiences
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;