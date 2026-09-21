import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Star, Phone } from "lucide-react";
import HeroMarquee from "./HeroMarquee.jsx";

/* Official Google "G" mark in brand colors. */
const GoogleG = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className}>
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

const Hero = () => {
  return (
    <section className="bg-page text-ink border-t border-line">
      <div className="w-full">
        {/* Top layout */}
        <div className="flex flex-col-reverse md:flex-row justify-center lg:gap-30 border-b border-ink/40 lg:h-[50vh]">

          {/* Left intro block | Lower Block for Mobile */}
          <div className="border-b lg:border-b-0 lg:border-r border-ink/40 px-5 sm:px-8 lg:px-10 pb-10 py-0 sm:py-12 lg:py-14 flex items-center">
            <div className="max-w-[360px]">
              <p className="text-ink/70 text-[18px] leading-6 mb-5 sm:mb-6">
                We’re a full-service website design and development agency crafting modern
                brands, websites, and products that drive results.
              </p>
              <a href="tel:+919560342636" className="inline-flex items-center gap-2 text-sm font-medium text-ink/70 mb-5 sm:mb-6">
                <button className="inline-flex items-center gap-2 bg-accent text-on-accent px-5 py-2.5 text-sm font-medium hover:bg-accent/85 transition-all duration-300">
                  Call Now
                  <FiArrowUpRight size={14} />
                </button></a>

              <div className="mt-8 sm:mt-10 md:hidden flex flex-row items-center justify-start md:justify-start gap-4 sm:gap-8">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2" aria-hidden="true">
                    <span className="w-7 h-7 rounded-full ring-2 ring-page bg-indigo-500 text-white text-[10px] font-semibold flex items-center justify-center">
                      NK
                    </span>
                    <span className="w-7 h-7 rounded-full ring-2 ring-page bg-emerald-500 text-white text-[10px] font-semibold flex items-center justify-center">
                      KM
                    </span>
                    <span className="w-7 h-7 rounded-full ring-2 ring-page bg-amber-500 text-white text-[10px] font-semibold flex items-center justify-center">
                      V
                    </span>
                  </div>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold">20+</p>
                    <p className="block text-[10px] uppercase tracking-[0.14em] text-ink/55">
                      Happy customers
                    </p>
                  </div>
                </div>

                <span aria-hidden="true" className="block h-8 w-px bg-ink/15" />

                <div className="flex items-center gap-2">
                  <GoogleG className="w-6 h-6 shrink-0" />
                  <div className="leading-tight">
                    <div className="flex items-center gap-1.5">
                      <span className="flex items-center gap-[2px]" role="img" aria-label="Rated 5 out of 5 stars on Google">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={11} className="fill-amber-400 text-amber-400" aria-hidden="true" />
                        ))}
                      </span>
                      <span className="text-sm font-semibold">5.0</span>
                    </div>
                    <p className="block mt-0.5 text-[10px] uppercase tracking-[0.14em] text-ink/55">
                      Google rating
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right intro block | Upper Block for Mobile */}
          <div className="px-5 sm:px-8 lg:px-12 py-12 sm:py-14 lg:py-16 flex flex-col justify-center">
            <div className="max-w-[560px]">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-ink/55 mb-5">
                Website Design &amp; Development Company — Delhi, India
              </p>
              <h1 className="text-[40px] md:text-[60px] text-left leading-[0.98] tracking-[-0.05em] font-medium">
                Your Next Great
                <br />
                Design Partnership
              </h1>
            </div>

            {/* Social proof — in-flow row pinned under the headline, never overlapping */}
            <div className="mt-8 sm:mt-10 hidden md:flex flex-row items-center justify-center md:justify-start gap-4 sm:gap-8">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2" aria-hidden="true">
                  <span className="w-7 h-7 rounded-full ring-2 ring-page bg-indigo-500 text-white text-[10px] font-semibold flex items-center justify-center">
                    NK
                  </span>
                  <span className="w-7 h-7 rounded-full ring-2 ring-page bg-emerald-500 text-white text-[10px] font-semibold flex items-center justify-center">
                    KM
                  </span>
                  <span className="w-7 h-7 rounded-full ring-2 ring-page bg-amber-500 text-white text-[10px] font-semibold flex items-center justify-center">
                    V
                  </span>
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-semibold">20+</p>
                  <p className="hidden sm:block text-[10px] uppercase tracking-[0.14em] text-ink/55">
                    Happy customers
                  </p>
                </div>
              </div>

              <span aria-hidden="true" className="hidden sm:block h-8 w-px bg-ink/15" />

              <div className="flex items-center gap-2">
                <GoogleG className="w-6 h-6 shrink-0" />
                <div className="leading-tight">
                  <div className="flex items-center gap-1.5">
                    <span className="flex items-center gap-[2px]" role="img" aria-label="Rated 5 out of 5 stars on Google">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={11} className="fill-amber-400 text-amber-400" aria-hidden="true" />
                      ))}
                    </span>
                    <span className="text-sm font-semibold">5.0</span>
                  </div>
                  <p className="hidden sm:block mt-0.5 text-[10px] uppercase tracking-[0.14em] text-ink/55">
                    Google rating
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selected work marquee */}
        <HeroMarquee />
      </div>
    </section>
  );
};

export default Hero;