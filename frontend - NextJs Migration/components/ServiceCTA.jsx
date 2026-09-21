import Link from 'next/link';

/*
 * Shared conversion band for commercial pages.
 * Fixed destinations (/contact primary, /pricing secondary) keep
 * conversion paths consistent across every service/location page.
 */
export default function ServiceCTA({
  title = 'Have a project in mind?',
  text = 'Tell us about your goals. We reply within 24 hours on business days with a clear quote and timeline.',
}) {
  return (
    <section className="mt-16 md:mt-24 border border-edge bg-surface px-6 py-10 sm:px-10 sm:py-12 text-center">
      <p className="text-[11px] uppercase tracking-[0.22em] text-muted mb-4">Start your project</p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-[-0.03em] mb-4">{title}</h2>
      <p className="text-muted text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">{text}</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/contact"
          className="w-full sm:w-auto px-7 py-3.5 bg-accent text-on-accent text-sm font-medium hover:bg-accent/85 transition-colors"
        >
          Start Your Project
        </Link>
        <Link
          href="/pricing"
          className="w-full sm:w-auto px-7 py-3.5 border border-edge text-sm text-ink hover:border-ink transition-colors"
        >
          See Pricing
        </Link>
      </div>
    </section>
  );
}
