'use client';
import React, { useState } from "react";
import { CONTACT_ITEMS } from '../lib/data.js';

const ContactButtons = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="fixed right-0 top-3/4 md:top-60 -translate-y-1/2 z-40 hidden md:flex items-center"
            onMouseLeave={() => setIsOpen(false)}
        >
            {/* Contact panel */}
            <div
                className={`mr-2 border border-line bg-surface/90 backdrop-blur-md flex flex-col gap-2 p-3 transition-all duration-300 ease-out
                ${isOpen ? "opacity-100 translate-x-0 pointer-events-auto visible" : "opacity-0 translate-x-4 pointer-events-none invisible"}`}
            >
                {CONTACT_ITEMS.map((item) => {
                    const Icon = item.icon;

                    return (
                        <a
                            key={item.id}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={item.label}
                            className="group flex items-center gap-3 min-w-[180px] text-sm text-ink/70 hover:text-ink transition-colors"
                        >
                            <span
                                className={`inline-flex h-9 w-9 items-center justify-center border border-line bg-ink/5 text-ink transition-all duration-300 group-hover:bg-accent group-hover:text-on-accent`}
                            >
                                <Icon className="text-[15px]" />
                            </span>

                            <span className="font-medium tracking-[-0.01em]">
                                {item.label}
                            </span>
                        </a>
                    );
                })}
            </div>

            {/* Toggle tab */}
            <button
                type="button"
                onMouseEnter={() => setIsOpen(true)}
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
                aria-label="Open contact options"
                className="h-36 w-11 md:w-12 border border-edge bg-accent text-on-accent text-[10px] font-semibold flex items-center justify-center tracking-[0.18em] uppercase rotate-180 [writing-mode:vertical-rl] transition-all duration-300 hover:bg-accent/85 pointer-events-auto"
            >
                Contact
            </button>
        </div>
    );
};

export default ContactButtons;