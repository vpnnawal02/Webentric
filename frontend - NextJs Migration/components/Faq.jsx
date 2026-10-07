'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

/*
 * Shared FAQ accordion. Pass items={[{ question, answer }]}.
 * Pair with faqSchema() from lib/seo.js for FAQPage rich results.
 * SEO/GEO note: answers stay in the SSR HTML at all times and collapse
 * via CSS grid-rows only, so crawlers + AI readers see full Q&A text
 * without requiring interaction.
 */
export default function Faq({ items = [], title = 'Frequently Asked Questions' }) {
  const [open, setOpen] = useState(null);
  if (!items.length) return null;
  return (
    <section className="mt-16 md:mt-24" aria-label={title}>
      <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] mb-8">{title}</h2>
      <div className="space-y-3 md:space-y-4">
        {items.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="bg-surface border border-line overflow-hidden">
              <h3 className="m-0">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-button-${i}`}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left hover:bg-raised transition-colors"
                >
                  <span className="font-medium text-ink text-[15px] sm:text-base">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className={`text-muted shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
              </h3>
              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-button-${i}`}
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? '[grid-template-rows:1fr]' : '[grid-template-rows:0fr]'}`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                    <p className="text-muted text-sm sm:text-[15px] leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
