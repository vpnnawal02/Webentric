'use client';
import React, { useState, useRef, useEffect } from 'react';
import { pricingPackages, addons, faqs } from '../../lib/data';
import { ChevronDown, ChevronUp, Globe, Check } from 'lucide-react';
import PopUpForm from '../../components/PopUpForm';
import JsonLd from '../../components/JsonLd';
import { SITE, webPageSchema, faqSchema, breadcrumbSchema } from '../../lib/seo';

// Base prices in data.js are in INR.
// INR selected -> show original value as-is (e.g. ₹10,000 stays ₹10,000).
// Any other currency -> double the INR value first, then convert
// (e.g. ₹10,000 -> ₹20,000 base -> $227).
const CURRENCIES = [
    { code: 'INR', label: 'INR – Indian Rupee (₹)', locale: 'en-IN', rate: 1 },
    { code: 'USD', label: 'USD – US Dollar ($)', locale: 'en-US', rate: 1 / 88 },
    { code: 'EUR', label: 'EUR – Euro (€)', locale: 'de-DE', rate: 1 / 102 },
    { code: 'GBP', label: 'GBP – British Pound (£)', locale: 'en-GB', rate: 1 / 118.5 },
    { code: 'AED', label: 'AED – UAE Dirham', locale: 'ar-AE', rate: 1 / 23.97 },
    { code: 'SAR', label: 'SAR – Saudi Riyal', locale: 'ar-SA', rate: 1 / 23.46 },
    { code: 'QAR', label: 'QAR – Qatari Riyal', locale: 'ar-QA', rate: 1 / 24.17 },
    { code: 'KWD', label: 'KWD – Kuwaiti Dinar', locale: 'ar-KW', rate: 1 / 287 },
    { code: 'AUD', label: 'AUD – Australian Dollar', locale: 'en-AU', rate: 1 / 58.2 },
    { code: 'CAD', label: 'CAD – Canadian Dollar', locale: 'en-CA', rate: 1 / 64.1 },
    { code: 'SGD', label: 'SGD – Singapore Dollar', locale: 'en-SG', rate: 1 / 69.1 },
    { code: 'JPY', label: 'JPY – Japanese Yen (¥)', locale: 'ja-JP', rate: 1.7 },
    { code: 'CNY', label: 'CNY – Chinese Yuan (¥)', locale: 'zh-CN', rate: 1 / 12.35 },
    { code: 'KRW', label: 'KRW – South Korean Won (₩)', locale: 'ko-KR', rate: 15.68 },
    { code: 'CHF', label: 'CHF – Swiss Franc', locale: 'de-CH', rate: 1 / 110.5 },
    { code: 'NZD', label: 'NZD – New Zealand Dollar', locale: 'en-NZ', rate: 1 / 52.5 },
    { code: 'ZAR', label: 'ZAR – South African Rand (R)', locale: 'en-ZA', rate: 1 / 5.05 },
    { code: 'BRL', label: 'BRL – Brazilian Real (R$)', locale: 'pt-BR', rate: 1 / 16.4 },
    { code: 'MYR', label: 'MYR – Malaysian Ringgit (RM)', locale: 'ms-MY', rate: 1 / 20.95 },
    { code: 'IDR', label: 'IDR – Indonesian Rupiah (Rp)', locale: 'id-ID', rate: 185.2 },
    { code: 'THB', label: 'THB – Thai Baht (฿)', locale: 'th-TH', rate: 0.37 },
    { code: 'HKD', label: 'HKD – Hong Kong Dollar (HK$)', locale: 'en-HK', rate: 1 / 11.29 },
    { code: 'PHP', label: 'PHP – Philippine Peso (₱)', locale: 'en-PH', rate: 1 / 1.52 },
];

const parseInrAmount = (priceStr) => Number(String(priceStr).replace(/[^0-9]/g, '')) || 0;

const formatConvertedPrice = (priceStr, currency) => {
    const isMonthly = String(priceStr).toLowerCase().includes('/month');
    const baseInr = parseInrAmount(priceStr);
    // Keep INR exactly as set; only foreign currencies use the doubled base.
    const inrForConversion = currency.code === 'INR' ? baseInr : baseInr * 3;
    const converted = inrForConversion * currency.rate;

    try {
        const formatted = new Intl.NumberFormat(currency.locale, {
            style: 'currency',
            currency: currency.code,
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
        }).format(converted);
        return isMonthly ? `${formatted}/month` : formatted;
    } catch {
        return isMonthly ? `${converted.toFixed(0)} ${currency.code}/month` : `${converted.toFixed(0)} ${currency.code}`;
    }
};

export default function PricingPage() {
    const [activeFaq, setActiveFaq] = useState(null);
    const [currencyCode, setCurrencyCode] = useState('INR');
    const currency = CURRENCIES.find((c) => c.code === currencyCode) || CURRENCIES[0];
    const [currencyOpen, setCurrencyOpen] = useState(false);
    const currencyRef = useRef(null);

    useEffect(() => {
        if (!currencyOpen) return;
        const handleClickOutside = (e) => {
            if (currencyRef.current && !currencyRef.current.contains(e.target)) {
                setCurrencyOpen(false);
            }
        };
        const handleEscape = (e) => {
            if (e.key === 'Escape') setCurrencyOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [currencyOpen]);
    const [tooltip, setTooltip] = useState({
        show: false,
        content: '',
        x: 0,
        y: 0,
        id: '',
    });
    const [open, setOpen] = useState(false);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const handleFeatureHover = (e, desc, index, fIndex) => {
        const rect = e.currentTarget.getBoundingClientRect();

        setTooltip({
            show: true,
            content: desc,
            x: rect.left + rect.width / 2,
            y: rect.top - 14,
            id: `tooltip-${index}-${fIndex}`,
        });
    };

    const handleFeatureLeave = () => {
        setTooltip((prev) => ({ ...prev, show: false }));
    };

    return (
        <div className="relative bg-page min-h-screen text-ink">
            <JsonLd
                data={[
                    webPageSchema({ name: 'Website Design Pricing in Delhi, India', url: `${SITE.url}/pricing`, description: 'Website design pricing for businesses in Delhi, India.' }),
                    faqSchema(faqs),
                    breadcrumbSchema([{ name: 'Home', url: SITE.url }, { name: 'Pricing', url: `${SITE.url}/pricing` }]),
                ]}
            />
            <PopUpForm open={open} setOpen={setOpen} />

            {/* Currency switcher — absolute top-right, overlays without pushing layout */}
            <div className="absolute top-3 right-3 sm:top-6 sm:right-6 lg:right-10 z-30">
                <div ref={currencyRef} className="relative flex flex-col items-end gap-1.5">
                    <span
                        id="currency-label"
                        className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-ink/50"
                    >
                        Currency
                    </span>
                    <button
                        type="button"
                        onClick={() => setCurrencyOpen((o) => !o)}
                        aria-expanded={currencyOpen}
                        aria-haspopup="listbox"
                        aria-labelledby="currency-label"
                        className="w-[172px] sm:w-auto sm:min-w-[240px] max-w-[calc(100vw-1.5rem)] flex items-center gap-2 bg-surface border border-edge hover:border-ink/40 text-ink text-xs sm:text-sm font-medium pl-3 pr-3 py-2 sm:py-2.5 outline-none cursor-pointer transition-colors focus:border-ink/60"
                    >
                        <Globe size={16} className="text-ink/50 flex-shrink-0 pointer-events-none" />
                        <span className="flex-1 text-left truncate pointer-events-none">{currency.label}</span>
                        <ChevronDown
                            size={16}
                            className={`text-ink/50 flex-shrink-0 pointer-events-none transition-transform duration-200 ${currencyOpen ? 'rotate-180' : ''}`}
                        />
                    </button>
                    {currencyOpen && (
                        <ul
                            role="listbox"
                            aria-label="Select currency"
                            className="absolute right-0 top-full mt-2 w-[220px] sm:w-[260px] max-w-[calc(100vw-1.5rem)] max-h-64 overflow-y-auto bg-surface border border-edge shadow-2xl shadow-black/60 z-30 py-1"
                        >
                            {CURRENCIES.map((c) => {
                                const selected = c.code === currencyCode;
                                return (
                                    <li key={c.code} role="presentation">
                                        <button
                                            type="button"
                                            role="option"
                                            aria-selected={selected}
                                            onClick={() => {
                                                setCurrencyCode(c.code);
                                                setCurrencyOpen(false);
                                            }}
                                            className={`w-full flex items-center justify-between gap-2 px-4 py-2.5 text-xs sm:text-sm text-left transition-colors cursor-pointer ${selected
                                                ? 'bg-accent text-on-accent font-semibold'
                                                : 'text-muted hover:text-ink hover:bg-ink/5'
                                                }`}
                                        >
                                            <span className="truncate">{c.label}</span>
                                            {selected && <Check size={15} className="flex-shrink-0" />}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    )}

                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16 lg:py-20">

                {/* 1. Pricing Hero */}
                <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 md:mb-20 pt-14 sm:pt-0">
                    <p className="text-[20px] uppercase tracking-[0.22em] text-ink/60">
                        PRICING
                    </p>

                    <h1 className="text-3xl md:text-5xl font-medium tracking-[-0.04em] text-ink leading-tight">
                        Transparent pricing for professional websites
                    </h1>

                    <p className="text-base md:text-lg text-ink/58 leading-relaxed max-w-2xl mx-auto">
                        Choose a website package that fits your business needs. Every build is modern,
                        responsive, and optimized for performance, clarity, and long-term scalability.
                    </p>

                    <p className="text-sm text-ink/38">
                        Custom projects and advanced features are also available.
                    </p>
                </div>

                {/* 2. Pricing Packages */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
                >
                    {pricingPackages.map((plan, index) => (
                        <div
                            key={index}
                            className={`
                                relative border p-8 transition-all duration-300
                                bg-surface border-edge hover:bg-raised hover:border-ink/40
                                ${plan.popular ? 'bg-surface border-ink/50' : ''}
                            `}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-on-accent px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-xl font-medium tracking-[-0.02em] text-ink mb-4 text-center">
                                {plan.title}
                            </h3>

                            <p className="text-center text-ink/50 text-sm uppercase tracking-[0.14em]">
                                Starting from
                            </p>

                            <div className="text-4xl md:text-5xl font-medium tracking-[-0.05em] text-ink mb-2 text-center mt-2">
                                {formatConvertedPrice(plan.price, currency)}
                            </div>

                            <p className="text-ink/50 text-sm text-center mb-8">
                                {plan.delivery}
                            </p>

                            <ul className="space-y-2 mb-10">
                                {plan.features.map((feature, fIndex) => (
                                    <li
                                        key={fIndex}
                                        className="flex items-start gap-3 px-3 py-3 border border-transparent hover:border-edge hover:bg-raised cursor-help transition-all group"
                                        onMouseEnter={(e) => handleFeatureHover(e, feature.desc, index, fIndex)}
                                        onFocus={(e) => handleFeatureHover(e, feature.desc, index, fIndex)}
                                        onMouseLeave={handleFeatureLeave}
                                        onBlur={handleFeatureLeave}
                                        tabIndex={0}
                                        aria-describedby={tooltip.show && tooltip.id === `tooltip-${index}-${fIndex}` ? tooltip.id : undefined}
                                    >
                                        <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-3 h-3 text-ink" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>

                                        <span className="text-ink/80 text-sm md:text-[15px] font-medium flex-1 leading-relaxed">
                                            {feature.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => setOpen(true)}
                                className="w-full bg-accent text-on-accent py-3 px-6 font-medium hover:bg-accent/85 transition-all duration-200"
                            >
                                {plan.popular ? "Start Your Project" : "Get Started"}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Tooltip Overlay */}
                {tooltip.show && (
                    <div
                        id={tooltip.id}
                        role="tooltip"
                        className="fixed z-50 bg-white text-black text-sm px-4 py-3 shadow-2xl max-w-[260px] whitespace-pre-wrap border border-black/10 pointer-events-none"
                        style={{
                            left: `${tooltip.x}px`,
                            top: `${tooltip.y}px`,
                            transform: 'translateX(-50%) translateY(-100%)',
                        }}
                    >
                        {tooltip.content}
                    </div>
                )}

                {/* 3. Add-ons */}
                <div className="mb-20">
                    <h3 className="text-3xl font-medium tracking-[-0.03em] text-ink text-center mb-10 md:mb-12">
                        Optional Add-ons
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {addons.map((addon, index) => (
                            <div
                                key={index}
                                className="bg-surface border border-edge px-6 py-4 text-center hover:bg-raised hover:border-ink/40 transition-all"
                            >
                                <h4 className="font-medium text-ink mb-1 text-sm md:text-base">
                                    {addon.name}
                                </h4>
                                <p className="text-ink/55 font-medium text-sm md:text-lg">
                                    {formatConvertedPrice(addon.price, currency)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. FAQ */}
                <div className="mb-12">
                    <h3 className="text-3xl font-medium tracking-[-0.03em] text-ink text-center mb-12">
                        Frequently Asked Questions
                    </h3>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-surface border border-line overflow-hidden transition-all"
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleFaq(index)}
                                    className="w-full p-6 flex items-center justify-between text-left hover:bg-raised transition-colors"
                                    aria-expanded={activeFaq === index}
                                >
                                    <h4 className="font-medium text-ink text-lg pr-4">
                                        {faq.question}
                                    </h4>

                                    {activeFaq === index ? (
                                        <ChevronUp size={22} className="text-ink/45 flex-shrink-0" />
                                    ) : (
                                        <ChevronDown size={22} className="text-ink/45 flex-shrink-0" />
                                    )}
                                </button>

                                {activeFaq === index && (
                                    <div className="px-6 pb-6 pt-0">
                                        <p className="text-ink/60 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
