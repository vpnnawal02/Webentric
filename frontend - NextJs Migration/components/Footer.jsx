import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-page text-ink border-t border-ink/50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 py-20">
          <div>
            <div className="text-2xl font-medium tracking-[-0.04em] text-ink mb-4">
              Webentric<span className="text-ink/45">.</span>
            </div>
            <p className="text-sm leading-relaxed text-ink/55 mb-6 max-w-[280px]">
              Webentric builds modern, high-performance websites that help businesses establish a strong online
              presence and grow digitally.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/webentric"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Webentric on LinkedIn"
                className="text-ink/45 hover:text-ink transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/webentric.in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Webentric on Instagram"
                className="text-ink/45 hover:text-ink transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.44-.645 1.44-1.44c0-.796-.644-1.44-1.44-1.44z" />
                </svg>
              </a>
            </div>
          </div>
          <nav aria-label="Quick links">
            <h2 className="text-ink font-medium text-lg tracking-[-0.02em] mb-6">Quick Links</h2>
            <div className="space-y-3">
              <Link href="/" className="text-sm text-ink/55 hover:text-ink transition-colors block">Home</Link>
              <Link href="/portfolio" className="text-sm text-ink/55 hover:text-ink transition-colors block">Portfolio</Link>
              <Link href="/pricing" className="text-sm text-ink/55 hover:text-ink transition-colors block">Pricing</Link>
              <Link href="/blogs" className="text-sm text-ink/55 hover:text-ink transition-colors block">Blogs</Link>
              <Link href="/price-calculator" className="text-sm text-ink/55 hover:text-ink transition-colors block">Cost Calculator</Link>
              <Link href="/contact" className="text-sm text-ink/55 hover:text-ink transition-colors block">Contact</Link>
            </div>
          </nav>
          <nav aria-label="Services">
            <h2 className="text-ink font-medium text-lg tracking-[-0.02em] mb-6">Services</h2>
            <div className="space-y-3">
              <Link href="/website-development" className="text-sm text-ink/55 hover:text-ink transition-colors block">Website Development</Link>
              <Link href="/web-design" className="text-sm text-ink/55 hover:text-ink transition-colors block">Web Design</Link>
              <Link href="/ecommerce-development" className="text-sm text-ink/55 hover:text-ink transition-colors block">E-Commerce Development</Link>
              <Link href="/custom-software-development" className="text-sm text-ink/55 hover:text-ink transition-colors block">Custom Software</Link>
              <Link href="/web-application-development" className="text-sm text-ink/55 hover:text-ink transition-colors block">Web Applications</Link>
              <Link href="/landing-page-development" className="text-sm text-ink/55 hover:text-ink transition-colors block">Landing Pages</Link>
              <Link href="/website-redesign" className="text-sm text-ink/55 hover:text-ink transition-colors block">Website Redesign</Link>
              <Link href="/website-maintenance" className="text-sm text-ink/55 hover:text-ink transition-colors block">Maintenance &amp; Support</Link>
              <Link href="/seo-services" className="text-sm text-ink/55 hover:text-ink transition-colors block">SEO Services</Link>
            </div>
          </nav>
          <div>
            <h2 className="text-ink font-medium text-lg tracking-[-0.02em] mb-6">Contact</h2>
            <div className="space-y-4 mb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-ink/35 mb-1">Phone</p>
                <a href="tel:+919560342636" className="text-sm text-ink/60 hover:text-ink transition-colors">+91 9560342636</a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-ink/35 mb-1">Email</p>
                <a href="mailto:webentric2026@gmail.com" className="text-sm text-ink/60 hover:text-ink transition-colors">webentric2026@gmail.com</a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-ink/35 mb-1">Location</p>
                <p className="text-sm text-ink/60">Delhi, India</p>
              </div>
            </div>
            <a
              href="https://wa.me/message/IK7VVIWKOELZL1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-line bg-accent text-on-accent text-sm font-medium hover:bg-accent/85 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <div className="border-t border-line" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-7 text-sm text-ink/45">
          <p>&copy; 2026 Webentric. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-ink transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-ink transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
