'use client';
// ProjectCostCalculator — migrated from src/pages/CalculateProjectCost.jsx
import { useState, useMemo } from 'react';
import { WEBSITE_TYPES, PRICE_PER_EXTRA_PAGE, BASE_PAGES, FEATURE_LIST, TIMELINE_OPTIONS } from '../../lib/data';
import PopUpForm from '../../components/PopUpForm';
import JsonLd from '../../components/JsonLd';
import { SITE, webPageSchema, breadcrumbSchema } from '../../lib/seo';

// ─── Helpers ──────────────────────────────────────────────────────────────────
const formatINR = (n) =>
    new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
    }).format(n);

const buildMessage = (siteType, pages, features, timeline, total) => {
    const type = WEBSITE_TYPES.find((t) => t.key === siteType);
    const feats = FEATURE_LIST.filter((f) => features[f.key]).map((f) => f.label);
    const tl = TIMELINE_OPTIONS.find((t) => t.key === timeline);
    return [
        `Website Type: ${type?.label}`,
        `Pages: ${pages}`,
        `Features: ${feats.length ? feats.join(', ') : 'None selected'}`,
        `Timeline: ${tl?.label}`,
        `─────────────────────`,
        `Estimated Total: ${formatINR(total)}`,
    ].join('\n');
};

// ─── Modal ────────────────────────────────────────────────────────────────────
function ContactModal({ onClose, defaultMessage }) {
    const [form, setForm] = useState({ name: '', email: '', message: defaultMessage });
    const [sent, setSent] = useState(false);
    const handle = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">

            <div className="bg-surface rounded-xs shadow-2xl w-full max-w-lg p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-muted hover:text-ink/80 transition-colors text-xl font-bold"
                >✕</button>

                {sent ? (
                    <div className="flex flex-col items-center py-10 gap-4 text-center">
                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl">✓</div>
                        <h3 className="text-xl font-semibold text-ink">Estimate Sent!</h3>
                        <p className="text-muted text-sm">We&apos;ll get back to you within 24 hours.</p>
                        <button
                            onClick={onClose}
                            className="mt-2 px-6 py-2.5 bg-blue-600 text-white rounded-xs text-sm font-semibold hover:bg-blue-700 transition-colors"
                        >Close</button>
                    </div>
                ) : (
                    <>
                        <h2 className="text-xl font-bold text-ink mb-1">Contact Us With Your Estimate</h2>
                        <p className="text-sm text-muted mb-5">We&apos;ll review your requirements and get back to you shortly.</p>
                        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="flex flex-col gap-4">
                            <div>
                                <label className="block text-xs font-semibold text-muted mb-1.5 uppercase tracking-wide">Name</label>
                                <input required name="name" value={form.name} onChange={handle} placeholder="Your full name"
                                    className="w-full px-3.5 py-2.5 text-sm border border-line rounded-xs focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-muted mb-1.5 uppercase tracking-wide">Email</label>
                                <input required type="email" name="email" value={form.email} onChange={handle} placeholder="you@example.com"
                                    className="w-full px-3.5 py-2.5 text-sm border border-line rounded-xs focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-muted mb-1.5 uppercase tracking-wide">Project Details</label>
                                <textarea required name="message" value={form.message} onChange={handle} rows={7}
                                    className="w-full px-3.5 py-2.5 text-sm border border-line rounded-xs focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none font-mono" />
                            </div>
                            <button type="submit"
                                className="w-full py-3 bg-blue-600 text-white rounded-xs font-semibold text-sm hover:bg-blue-700 active:scale-95 transition-all">
                                Send Estimate Request →
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

// ─── Feature Card ─────────────────────────────────────────────────────────────
function FeatureCard({ label, price, checked, onChange }) {
    return (
        <label className={`flex items-center justify-between gap-3 p-3.5 rounded-xs border cursor-pointer transition-all duration-200 select-none
      ${checked ? 'border-line shadow-md' : 'border-line bg-surface hover:border-blue-300 hover:bg-subtle'}`}>
            <div className="flex items-center gap-2.5 min-w-0">
                <div className={`w-4 h-4 rounded flex-shrink-0 flex items-center justify-center border transition-colors
          ${checked ? 'bg-blue-600 border-blue-600' : 'border-edge bg-surface'}`}>
                    {checked && (
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    )}
                </div>
                <span className="text-sm font-medium text-ink/80 truncate">{label}</span>
            </div>
            <span className={`text-xs font-semibold flex-shrink-0 ${checked ? 'text-blue-600' : 'text-muted'}`}>
                +{formatINR(price)}
            </span>
            <input type="checkbox" className="hidden" checked={checked} onChange={onChange} />
        </label>
    );
}

// ─── Timeline Card ────────────────────────────────────────────────────────────
function TimelineCard({ option, selected, onChange }) {
    const active = selected === option.key;
    return (
        <label className={`flex items-center justify-between gap-3 p-4 rounded-xs border cursor-pointer transition-all duration-200 select-none
      ${active ? 'border-blue-500 bg-blue-500/10 shadow-sm' : 'border-line bg-surface hover:border-blue-300 hover:bg-subtle'}`}>
            <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors
          ${active ? 'border-blue-600' : 'border-edge'}`}>
                    {active && <div className="w-2 h-2 rounded-full bg-blue-600" />}
                </div>
                <div>
                    <p className="text-sm font-semibold text-ink">{option.label}</p>
                    <p className="text-xs text-muted mt-0.5">{option.desc}</p>
                </div>
            </div>
            <span className={`text-xs font-bold flex-shrink-0 ${active ? 'text-blue-600' : 'text-muted'}`}>
                {option.price === 0 ? 'Free' : `+${formatINR(option.price)}`}
            </span>
            <input type="radio" className="hidden" checked={active} onChange={onChange} />
        </label>
    );
}

// ─── Summary Row ──────────────────────────────────────────────────────────────
function SummaryRow({ label, value, sub, highlight }) {
    return (
        <div className={`flex items-start justify-between py-2 gap-2 ${highlight ? 'border-t border-line mt-1 pt-3' : ''}`}>
            <div>
                <span className={`text-sm ${highlight ? 'font-bold text-ink' : 'text-muted'}`}>{label}</span>
                {sub && <p className="text-xs text-muted mt-0.5">{sub}</p>}
            </div>
            <span className={`text-sm font-semibold whitespace-nowrap ${highlight ? 'text-blue-700 text-base' : 'text-ink'}`}>{value}</span>
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function PriceCalculatorPage() {
    const [siteType, setSiteType] = useState('business');
    const [pages, setPages] = useState(0);
    const [features, setFeatures] = useState(Object.fromEntries(FEATURE_LIST.map((f) => [f.key, false])));
    const [timeline, setTimeline] = useState('standard');
    const [modalOpen, setModalOpen] = useState(false);
    const [open, setOpen] = useState(false);


    const selectedType = WEBSITE_TYPES.find((t) => t.key === siteType);
    const basePrice = selectedType?.price ?? 0;
    const extraPages = Math.max(0, pages - BASE_PAGES);
    const extraPageCost = extraPages * PRICE_PER_EXTRA_PAGE;
    const featureCost = useMemo(
        () => FEATURE_LIST.filter((f) => features[f.key]).reduce((s, f) => s + f.price, 0),
        [features]
    );
    const timelineCost = TIMELINE_OPTIONS.find((t) => t.key === timeline)?.price ?? 0;
    const total = basePrice + extraPageCost + featureCost + timelineCost;

    const handlePages = (val) => {
        const n = parseInt(val, 10);
        if (!isNaN(n)) setPages(Math.max(BASE_PAGES, Math.min(50, n)));
    };

    const toggleFeature = (key) => setFeatures((p) => ({ ...p, [key]: !p[key] }));

    // Reset pages & features when switching type
    const handleTypeChange = (key) => {
        setSiteType(key);
        setPages(5);
        setFeatures(Object.fromEntries(FEATURE_LIST.map((f) => [f.key, false])));
        setTimeline('standard');
    };

    return (
        <section className="min-h-screen bg-transparent from-slate-50 to-blue-50/30 py-5 px-4">
            <JsonLd
                data={[
                    webPageSchema({ name: 'Website Cost Calculator India', url: `${SITE.url}/price-calculator`, description: 'Interactive calculator to estimate website development cost in India.' }),
                    breadcrumbSchema([{ name: 'Home', url: SITE.url }, { name: 'Website Cost Calculator', url: `${SITE.url}/price-calculator` }]),
                ]}
            />
            <PopUpForm open={open} setOpen={setOpen} />
            <div className="max-w-6xl mx-auto">

                {/* ── Header ── */}
                <div className="text-center mb-10">
                    <h1 className="text-2xl md:text-3xl sm:text-4xl font-bold text-ink mb-3 tracking-tight">
                        Calculate Your Project Cost
                    </h1>
                    <p className="text-muted hidden md:flex text-base max-w-xl mx-auto">
                        Select the features you need to estimate your website development cost in India — transparent pricing in rupees.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 items-start">
                    {/* ══ LEFT: Calculator ══ */}
                    <div className="w-full lg:flex-1 flex flex-col gap-5">
                        {/* ── SECTION 1: Website Type Selector ── */}
                        <div className="bg-surface rounded-xs border border-line shadow-sm p-5">
                            <h2 className="text-base font-bold text-ink mb-1">Choose Website Type</h2>
                            <p className="text-xs text-muted mb-4">Select the type that best fits your project needs.</p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {WEBSITE_TYPES.map((type) => {
                                    const active = siteType === type.key;
                                    return (
                                        <button
                                            key={type.key}
                                            onClick={() => handleTypeChange(type.key)}
                                            className={`relative flex flex-col items-start text-left p-4 rounded-xs border-2 transition-all duration-200 group
                        ${active
                                                    ? 'border-blue-500 bg-blue-500/10 shadow-md shadow-blue-100'
                                                    : 'border-line bg-surface hover:border-blue-300 hover:bg-subtle'
                                                }`}
                                        >
                                            {active && (
                                                <span className="absolute top-3 right-3 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </span>
                                            )}
                                            <span className="text-2xl mb-2">{type.icon}</span>
                                            <p className={`text-sm font-bold mb-0.5 ${active ? 'text-blue-700' : 'text-ink'}`}>
                                                {type.label}
                                            </p>
                                            <p className="text-xs text-muted mb-3 leading-snug">{type.desc}</p>
                                            <p className={`text-lg font-extrabold ${active ? 'text-blue-600' : 'text-ink/80'}`}>
                                                {formatINR(type.price)}
                                            </p>
                                            <ul className="mt-2.5 flex flex-col gap-1">
                                                {type.highlights.map((h) => (
                                                    <li key={h} className="flex items-center gap-1.5 text-xs text-muted">
                                                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${active ? 'bg-blue-400' : 'bg-ink/20'}`} />
                                                        {h}
                                                    </li>
                                                ))}
                                            </ul>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* ── SECTION 3: Additional Pages ── */}
                        <div className="bg-surface rounded-xs border border-line shadow-sm p-5">
                            <h2 className="text-base font-bold text-ink mb-1">Number of Pages</h2>
                            <p className="text-xs text-muted mb-4">
                                First 5 pages are free. Additional pages cost {formatINR(PRICE_PER_EXTRA_PAGE)}/page.
                            </p>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => handlePages(pages - 1)}
                                    disabled={pages <= BASE_PAGES}
                                    className="w-9 h-9 rounded-xs border border-line flex items-center justify-center text-muted hover:bg-blue-500/10 hover:border-blue-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all font-bold text-lg"
                                >−</button>
                                <input
                                    type="number"
                                    value={pages}
                                    min={BASE_PAGES}
                                    max={50}
                                    onChange={(e) => handlePages(e.target.value)}
                                    className="w-16 text-center text-lg font-bold text-ink border border-line rounded-xs py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button
                                    onClick={() => handlePages(pages + 1)}
                                    className="w-9 h-9 rounded-xs border border-line flex items-center justify-center text-muted hover:bg-blue-500/10 hover:border-blue-300 transition-all font-bold text-lg"
                                >+</button>
                                <div className="ml-2 flex-1">
                                    <input
                                        type="range"
                                        min={BASE_PAGES}
                                        max={25}
                                        value={pages}
                                        onChange={(e) => handlePages(e.target.value)}
                                        className="w-full accent-blue-600 h-2 cursor-pointer"
                                    />
                                    <div className="flex justify-between text-xs text-muted mt-1">
                                        <span>5</span><span>15</span><span>25</span>
                                    </div>
                                </div>
                            </div>
                            {extraPages > 0 && (
                                <div className="mt-3 flex items-center justify-between bg-amber-50 border border-amber-200 rounded-xs px-3 py-2">
                                    <span className="text-xs text-amber-700 font-medium">
                                        {extraPages} extra page{extraPages > 1 ? 's' : ''} × {formatINR(PRICE_PER_EXTRA_PAGE)}
                                    </span>
                                    <span className="text-xs font-bold text-amber-700">+{formatINR(extraPageCost)}</span>
                                </div>
                            )}
                        </div>

                        {/* ── SECTION 4: Optional Features ── */}
                        <div className="bg-surface rounded-xs border border-line shadow-sm p-5">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h2 className="text-base font-bold text-ink">Optional Features</h2>
                                    <p className="text-xs text-muted mt-0.5">Add capabilities to your project</p>
                                </div>
                                {featureCost > 0 && (
                                    <span className="text-xs bg-blue-100 text-blue-700 font-semibold px-2.5 py-1 rounded-full">
                                        +{formatINR(featureCost)}
                                    </span>
                                )}
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {FEATURE_LIST.map((f) => (
                                    <FeatureCard
                                        key={f.key}
                                        label={f.label}
                                        price={f.price}
                                        checked={features[f.key]}
                                        onChange={() => toggleFeature(f.key)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* ── SECTION 5: Delivery Timeline ── */}
                        <div className="bg-surface rounded-xs border border-line shadow-sm p-5">
                            <h2 className="text-base font-bold text-ink mb-1">Delivery Timeline</h2>
                            <p className="text-xs text-muted mb-4">How fast do you need your project?</p>
                            <div className="flex flex-col gap-2.5">
                                {TIMELINE_OPTIONS.map((opt) => (
                                    <TimelineCard
                                        key={opt.key}
                                        option={opt}
                                        selected={timeline}
                                        onChange={() => setTimeline(opt.key)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ══ RIGHT: Sticky Summary ══ */}
                    <div className="w-full lg:w-80 xl:w-96 self-start sticky top-21">
                        <div className="bg-surface rounded-xs border border-line shadow-lg overflow-hidden">
                            <div className="bg-surface border-b border-line px-5 py-4 ">
                                <h2 className="text-ink font-bold text-base">Cost Summary</h2>
                            </div>

                            <div className="px-5 py-4 flex flex-col gap-0.5">
                                <SummaryRow
                                    label={`${selectedType?.icon} ${selectedType?.label}`}
                                    value={formatINR(basePrice)}
                                    sub="Base package"
                                />
                                <SummaryRow
                                    label={`Additional Pages (${extraPages})`}
                                    value={extraPageCost > 0 ? `+${formatINR(extraPageCost)}` : '—'}
                                    sub={extraPages > 0 ? `${extraPages} × ₹500` : '5 pages included'}
                                />
                                <SummaryRow
                                    label="Optional Features"
                                    value={featureCost > 0 ? `+${formatINR(featureCost)}` : '—'}
                                    sub={featureCost > 0
                                        ? `${FEATURE_LIST.filter((f) => features[f.key]).length} feature(s) selected`
                                        : 'None selected'}
                                />
                                <SummaryRow
                                    label="Timeline Add-on"
                                    value={timelineCost > 0 ? `+${formatINR(timelineCost)}` : 'Free'}
                                />
                                <SummaryRow label="Estimated Total" value={formatINR(total)} highlight />
                            </div>

                            {/* Selected Feature Tags */}
                            {FEATURE_LIST.some((f) => features[f.key]) && (
                                <div className="px-5 pb-4">
                                    <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-2">Selected Features</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {FEATURE_LIST.filter((f) => features[f.key]).map((f) => (
                                            <span key={f.key}
                                                className="text-xs bg-blue-500/10 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-xs font-medium">
                                                {f.label}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="px-5">
                                <div className="mb-4 ">
                                    <p className="text-xs text-muted leading-relaxed text-right">
                                        This is an estimate. Final price may vary based on detailed project requirements.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setOpen(true)}
                            className="w-full py-3.5 bg-blue-500 text-white rounded-xs font-semibold text-sm active:scale-95 transition-all duration-200 shadow-md shadow-blue-200"
                        >
                            Contact Us
                        </button>
                    </div>

                </div>
            </div>

            {/* ── Modal ── */}
            {modalOpen && (
                <ContactModal
                    onClose={() => setModalOpen(false)}
                    defaultMessage={buildMessage(siteType, pages, features, timeline, total)}
                />
            )}
        </section>
    );
}
