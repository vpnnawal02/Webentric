import Link from 'next/link';
import JsonLd from '../../components/JsonLd';
import { SITE, webPageSchema } from '../../lib/seo';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Read Webentric\u2019s privacy policy — how a website development company in Delhi collects, uses and protects your information.',
  alternates: { canonical: 'https://webentric.in/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy',
    description: 'Read Webentric\u2019s privacy policy — how a website development company in Delhi collects, uses and protects your information.',
    url: 'https://webentric.in/privacy-policy',
    type: 'website',
    images: ['https://webentric.in/social-media-cover.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy',
    description: 'Read Webentric\u2019s privacy policy — how a website development company in Delhi collects, uses and protects your information.',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-page min-h-screen">
      <JsonLd
        data={[webPageSchema({ name: 'Privacy Policy — Webentric', url: `${SITE.url}/privacy-policy`, description: 'Privacy policy of Webentric, a website development company in Delhi, India.' })]}
      />
      <div className="max-w-[900px] mx-auto px-6 py-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-[40px] font-bold text-ink leading-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted mt-3">Last Updated: March 2026</p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* 1. Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-ink mb-4">1. Introduction</h2>
            <p className="text-muted leading-relaxed text-[16px] max-w-[800px]">
              At Webentric, we respect your privacy and are committed to protecting your personal information.
              This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website
              and use our services. By using our website, you consent to the practices described in this policy.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-ink mb-4">2. Information We Collect</h2>
            <p className="text-muted leading-relaxed text-[16px] mb-6">
              We may collect personal information that you voluntarily provide when interacting with our website:
            </p>
            <ul className="space-y-3 text-muted text-[16px] max-w-[800px]">
              <li>• Name</li>
              <li>• Email address</li>
              <li>• Phone number</li>
              <li>• Business name</li>
              <li>• Project details and requirements</li>
            </ul>
            <p className="text-muted leading-relaxed text-[16px] mt-4">
              This information is typically collected when you fill out contact forms, request quotes,
              or communicate with us via email or other channels.
            </p>
          </section>

          {/* 3. Non-Personal Information */}
          <section>
            <h2 className="text-2xl font-semibold text-ink mb-4">3. Non-Personal Information</h2>
            <p className="text-muted leading-relaxed text-[16px] mb-6">
              We also collect non-personal information automatically through cookies and analytics tools:
            </p>
            <ul className="space-y-3 text-muted text-[16px] max-w-[800px]">
              <li>• Browser type and version</li>
              <li>• Device information</li>
              <li>• IP address</li>
              <li>• Pages visited</li>
              <li>• Website usage data and behavior</li>
            </ul>
            <p className="text-muted leading-relaxed text-[16px] mt-4">
              This information helps us improve website functionality, analyze visitor behavior,
              and enhance user experience.
            </p>
          </section>

          {/* 4. How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-semibold text-ink mb-4">4. How We Use Your Information</h2>
            <p className="text-muted leading-relaxed text-[16px] mb-6">
              We use collected information for the following purposes:
            </p>
            <ul className="space-y-3 text-muted text-[16px] max-w-[800px]">
              <li>• Responding to inquiries and providing support</li>
              <li>• Providing and improving our web development services</li>
              <li>• Communicating with clients about projects and services</li>
              <li>• Improving website functionality and user experience</li>
              <li>• Analyzing visitor behavior and website performance</li>
            </ul>
          </section>

          {/* 5. Sharing of Information */}
          <section>
            <h2 className="text-2xl font-semibold text-ink mb-4">5. Sharing of Information</h2>
            <p className="text-muted leading-relaxed text-[16px]">
              Webentric does not sell, trade, or rent your personal information to third parties.
              We may share data only in these limited circumstances:
            </p>
            <ul className="space-y-3 text-muted text-[16px] max-w-[800px] mt-4">
              <li>• As required by law or legal process</li>
              <li>• To protect the security of our website and services</li>
              <li>• With trusted service providers who assist in our operations</li>
            </ul>
          </section>

          {/* 6. Cookies and Tracking Technologies */}
          <section>
            <h2 className="text-2xl font-semibold text-ink mb-4">6. Cookies and Tracking Technologies</h2>
            <p className="text-muted leading-relaxed text-[16px]">
              We use cookies and similar tracking technologies to analyze traffic, improve user experience,
              and optimize website performance. You can disable cookies through your browser settings,
              though this may affect website functionality.
            </p>
          </section>

          {/* 7. Data Security */}
          <section>
            <h2 className="text-2xl font-semibold text-ink mb-4">7. Data Security</h2>
            <p className="text-muted leading-relaxed text-[16px]">
              We implement reasonable administrative, technical, and physical security measures to protect
              your personal information. However, no internet transmission or electronic storage method is
              completely secure, so we cannot guarantee absolute security.
            </p>
          </section>

          {/* 8. Third-Party Links */}
          <section>
            <h2 className="text-2xl font-semibold text-ink mb-4">8. Third-Party Links</h2>
            <p className="text-muted leading-relaxed text-[16px]">
              Our website may contain links to third-party websites. Webentric is not responsible for
              the privacy practices or content of these external sites. We encourage you to review
              their privacy policies.
            </p>
          </section>

          {/* 9. Children's Privacy */}
          <section>
            <h2 className="text-2xl font-semibold text-ink mb-4">9. Children&apos;s Privacy</h2>
            <p className="text-muted leading-relaxed text-[16px]">
              Our services are not intended for children under 13 years of age. We do not knowingly
              collect personal information from children under 13. If we become aware of such data,
              we will take steps to delete it.
            </p>
          </section>

          {/* 10. Changes to This Privacy Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-ink mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-muted leading-relaxed text-[16px]">
              We may update this Privacy Policy periodically. Changes will be posted on this page
              with an updated &quot;Last Updated&quot; date. Your continued use of our website constitutes
              acceptance of the updated policy.
            </p>
          </section>

          {/* 11. Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-ink mb-4">11. Contact Information</h2>
            <div className="bg-surface p-8 rounded-2xl border border-line">
              <p className="text-muted text-[16px] mb-4">
                If you have questions about this Privacy Policy, please contact us:
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
            <Link href="/website-development" className="hover:text-blue-600 transition-colors font-medium">Services</Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors font-medium">Contact</Link>
            <Link href="/terms" className="hover:text-blue-600 transition-colors font-medium">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
