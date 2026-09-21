import Link from 'next/link';
import JsonLd from '../../components/JsonLd';
import { SITE, webPageSchema } from '../../lib/seo';

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Webentric\u2019s website design & development services in Delhi, India.',
  alternates: { canonical: 'https://webentric.in/terms' },
  openGraph: {
    title: 'Terms of Service',
    description: 'Terms of service for Webentric\u2019s website design & development services in Delhi, India.',
    url: 'https://webentric.in/terms',
    type: 'website',
    images: ['https://webentric.in/social-media-cover.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service',
    description: 'Terms of service for Webentric\u2019s website design & development services in Delhi, India.',
  },
};

export default function TermsPage() {
  return (
    <div className="bg-page min-h-screen">
      <JsonLd
        data={[webPageSchema({ name: 'Terms of Service — Webentric', url: `${SITE.url}/terms`, description: "Terms of service for Webentric's web design and development services." })]}
      />
      <div className="max-w-[900px] mx-auto px-6 py-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-[40px] font-bold text-ink leading-tight">
            Terms of Service
          </h1>
          <p className="text-sm text-muted mt-3">Last Updated: March 2026</p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* 1. Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-ink mb-4">1. Introduction</h2>
            <p className="text-muted leading-relaxed text-[16px] max-w-[800px]">
              These Terms of Service govern your access to and use of the Webentric website and services.
              By accessing our website or engaging our services, you agree to be bound by these terms.
              If you do not agree, please do not use our website or services.
            </p>
          </section>

          {/* 2. Services Provided */}
          <section>
            <h2 className="text-2xl font-semibold text-ink mb-4">2. Services Provided</h2>
            <p className="text-muted leading-relaxed text-[16px] mb-6">
              Webentric provides professional web development services including:
            </p>
            <ul className="space-y-3 text-muted text-[16px] max-w-[800px]">
              <li>• Website development and design</li>
              <li>• E-commerce development</li>
              <li>• Website redesign and maintenance</li>
              <li>• Landing page creation</li>
              <li>• SEO optimization</li>
              <li>• Related digital services</li>
            </ul>
            <p className="text-muted leading-relaxed text-[16px] mt-4">
              Service details, scope, and pricing are determined based on individual project requirements
              and will be outlined in project proposals or agreements.
            </p>
          </section>

          {/* 3. Use of the Website */}
          <section>
            <h2 className="text-2xl font-semibold text-ink mb-4">3. Use of the Website</h2>
            <p className="text-muted leading-relaxed text-[16px]">
              You agree to use our website only for lawful purposes and in a way that does not infringe
              the rights of others or restrict their use and enjoyment of the website. Prohibited activities include:
            </p>
            <ul className="space-y-3 text-muted text-[16px] max-w-[800px] mt-4">
              <li>• Attempting to hack, damage, or disrupt the website</li>
              <li>• Distributing malicious software or harmful content</li>
              <li>• Violating applicable laws or regulations</li>
              <li>• Unauthorized use of our services or content</li>
            </ul>
          </section>

          {/* 4. Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold text-ink mb-4">4. Intellectual Property</h2>
            <p className="text-muted leading-relaxed text-[16px]">
              All content on the Webentric website, including text, images, designs, branding, logos,
              and code, is the intellectual property of Webentric unless otherwise stated. You may not:
            </p>
            <ul className="space-y-3 text-muted text-[16px] max-w-[800px] mt-4">
              <li>• Copy, reproduce, or distribute website content without permission</li>
              <li>• Modify or create derivative works from our content</li>
              <li>• Use our branding or logos without written authorization</li>
            </ul>
          </section>

          {/* 5. Client Responsibilities */}
          <section>
            <h2 className="text-2xl font-semibold text-ink mb-4">5. Client Responsibilities</h2>
            <p className="text-muted leading-relaxed text-[16px]">
              To ensure successful project completion, clients agree to:
            </p>
            <ul className="space-y-3 text-muted text-[16px] max-w-[800px] mt-4">
              <li>• Provide accurate project requirements and specifications</li>
              <li>• Supply necessary content, images, and materials</li>
              <li>• Respond to communications and provide feedback promptly</li>
              <li>• Make payments according to agreed terms</li>
            </ul>
            <p className="text-muted leading-relaxed text-[16px] mt-4">
              Project delays may occur if required materials or information are not provided on time.
            </p>
          </section>

          {/* 6. Payment and Pricing */}
          <section>
            <h2 className="text-2xl font-semibold text-ink mb-4">6. Payment and Pricing</h2>
            <p className="text-muted leading-relaxed text-[16px]">
              Project pricing will be discussed and agreed upon before work begins. Payment terms may include:
            </p>
            <ul className="space-y-3 text-muted text-[16px] max-w-[800px] mt-4">
              <li>• Upfront deposits for project initiation</li>
              <li>• Milestone payments based on project progress</li>
              <li>• Final payment upon project completion and client approval</li>
            </ul>
            <p className="text-muted leading-relaxed text-[16px] mt-4">
              All pricing is determined based on project scope, complexity, and requirements.
            </p>
          </section>

          {/* 7. Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold text-ink mb-4">7. Limitation of Liability</h2>
            <p className="text-muted leading-relaxed text-[16px]">
              Webentric strives to provide reliable services but cannot guarantee uninterrupted operation.
              We are not responsible for any direct, indirect, incidental, or consequential damages resulting
              from the use of our website or services, including but not limited to loss of data or profits.
            </p>
          </section>

          {/* 8. Third-Party Services */}
          <section>
            <h2 className="text-2xl font-semibold text-ink mb-4">8. Third-Party Services</h2>
            <p className="text-muted leading-relaxed text-[16px]">
              Our website and services may integrate with third-party platforms including hosting providers,
              payment processors, and plugins. Webentric is not responsible for the performance, availability,
              or security of these third-party services.
            </p>
          </section>

          {/* 9. Termination */}
          <section>
            <h2 className="text-2xl font-semibold text-ink mb-4">9. Termination</h2>
            <p className="text-muted leading-relaxed text-[16px]">
              Webentric reserves the right to terminate or suspend access to the website or services at
              any time if users violate these Terms of Service or engage in activities harmful to our
              operations or other users.
            </p>
          </section>

          {/* 10. Changes to Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-ink mb-4">10. Changes to Terms</h2>
            <p className="text-muted leading-relaxed text-[16px]">
              We may update these Terms of Service periodically. Changes will be posted on this page
              with an updated &quot;Last Updated&quot; date. Your continued use of our website or services after
              changes constitutes acceptance of the revised terms.
            </p>
          </section>

          {/* 11. Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-ink mb-4">11. Contact Information</h2>
            <div className="bg-surface p-8 rounded-2xl border border-line">
              <p className="text-muted text-[16px] mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="font-semibold text-ink mb-1">Webentric</p>
                  <p className="text-muted">Delhi, India</p>
                </div>
                <div>
                  <p className="font-semibold text-ink mb-1">Email:</p>
                  <a href="mailto:vn.nawal02@gmail.com" className="text-blue-600 hover:text-blue-700 font-medium">
                    vn.nawal02@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="border-t border-line mt-20 pt-12">
          <div className="flex flex-wrap gap-6 justify-center text-sm text-muted">
            <Link href="/" className="hover:text-blue-600 transition-colors font-medium">Home</Link>
            <Link href="/privacy-policy" className="hover:text-blue-600 transition-colors font-medium">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors font-medium">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
