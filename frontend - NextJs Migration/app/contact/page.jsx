import ContactForm from '../../components/ContactForm';
import JsonLd from '../../components/JsonLd';
import { SITE, webPageSchema, localBusinessSchema, breadcrumbSchema } from '../../lib/seo';

export const metadata = {
  title: 'Contact Website Developers in Delhi',
  description: 'Get a free quote for website design & development in Delhi, India. Call, WhatsApp or send an enquiry — we reply within 24 hours on business days.',
  keywords: ['contact web designer Delhi', 'hire website developer Delhi', 'website quote India'],
  alternates: { canonical: 'https://webentric.in/contact' },
  openGraph: {
    title: 'Contact Website Developers in Delhi',
    description: 'Get a free quote for website design & development in Delhi, India. Call, WhatsApp or send an enquiry — we reply within 24 hours on business days.',
    url: 'https://webentric.in/contact',
    type: 'website',
    images: ['https://webentric.in/social-media-cover.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Website Developers in Delhi',
    description: 'Get a free quote for website design & development in Delhi, India. Call, WhatsApp or send an enquiry — we reply within 24 hours on business days.',
  },
};

export default function ContactPage() {
  return (
    <section className="bg-page text-ink min-h-screen">
      <JsonLd
        data={[
          webPageSchema({ name: 'Contact Webentric — Website Developers in Delhi', url: `${SITE.url}/contact`, description: 'Contact Webentric for website design and development in Delhi, India.' }),
          localBusinessSchema(),
          breadcrumbSchema([{ name: 'Home', url: SITE.url }, { name: 'Contact', url: `${SITE.url}/contact` }]),
        ]}
      />
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-14 py-14 md:py-20">
        <div className="max-w-3xl mb-12 md:mb-16">

          <h1 className="text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.04em] font-medium text-ink max-w-[12ch]">
            Let&apos;s build something clear, fast, and memorable.
          </h1>
          <p className="mt-5 text-sm md:text-base text-ink/58 max-w-[56ch] leading-relaxed">
            Tell us what you&apos;re building, what you need, and where you want to go next.
            We reply within 24 hours on business days.
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-ink/45">Based in New Delhi · Serving clients across India</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-8 lg:gap-10 items-start">
          <div className="bg-surface border border-edge p-6 md:p-8 lg:p-10">
            <div className="flex items-center justify-between gap-4 mb-8 border-b border-ink/40 pb-5">
              <h2 className="text-xl md:text-2xl font-medium tracking-[-0.02em] text-ink">
                Send a project enquiry
              </h2>
              <span className="text-[20px] uppercase tracking-[0.18em] text-ink/60">
                Webentric
              </span>
            </div>

            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="bg-surface border border-line p-6 md:p-7">
              <h3 className="text-sm font-medium tracking-[0.08em] uppercase text-ink/70 mb-6">
                Quick Contact
              </h3>

              <div className="space-y-5 text-sm">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-ink/35 mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:webentric2026@gmail.com"
                    className="text-ink hover:text-ink/70 transition-colors break-all"
                  >
                    webentric2026@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-ink/35 mb-1">
                    Phone / WhatsApp
                  </p>
                  <p className="text-ink/82">+91 9560342636</p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-ink/35 mb-1">
                    Availability
                  </p>
                  <p className="text-ink/82">Mon–Fri, 10 AM – 6 PM IST</p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-7 mt-7 border-t border-line text-ink/72">
                <a
                  href="https://www.linkedin.com/company/webentric"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/webentric.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.44-.645 1.44-1.44c0-.796-.644-1.44-1.44-1.44z" />
                  </svg>
                </a>

                <a
                  href="https://wa.me/message/IK7VVIWKOELZL1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink transition-colors"
                  aria-label="WhatsApp"
                >
                  <img
                    className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity"
                    src="https://img.icons8.com/material-outlined/96/whatsapp--v1.png"
                    alt="WhatsApp"
                  />
                </a>
              </div>
            </div>

            <div className="bg-surface border border-line p-6 md:p-7">
              <h3 className="text-sm font-medium tracking-[0.08em] uppercase text-ink/70 mb-4">
                What to include
              </h3>
              <ul className="space-y-3 text-sm text-ink/68">
                <li>Type of website or web application</li>
                <li>Key features and pages you need</li>
                <li>Ideal timeline or launch date</li>
                <li>Estimated budget range</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
