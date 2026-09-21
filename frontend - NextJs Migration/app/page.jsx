import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import HomeServiceHub from '../components/HomeServiceHub';
import WhyChooseUs from '../components/WhyChooseUs';
import HowWeWork from '../components/HowWeWork';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';
import ServiceCTA from '../components/ServiceCTA';
import JsonLd from '../components/JsonLd';
import { SITE, organizationSchema, websiteSchema, localBusinessSchema, breadcrumbSchema, faqSchema } from '../lib/seo';

const HOME_FAQS = [
  {
    question: 'How much does a business website cost in India?',
    answer: 'It depends on scope: a professional business website typically ranges from a few thousand to several tens of thousands of rupees, while ecommerce stores and custom web applications cost more. Use our website cost calculator for an instant estimate, or see our pricing page for package starting points.',
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'Most business websites take 1–3 weeks from kickoff to launch, depending on pages and features. Ecommerce stores and custom web applications take longer. You get a clear timeline with your quote — and we stick to it.',
  },
  {
    question: 'Will my website rank on Google?',
    answer: 'Every website we build follows SEO fundamentals: fast loading, mobile-first responsive design, clean structure, metadata and sitemaps. Actual rankings also depend on competition, content and authority — which our SEO services help you build over time.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Yes. We audit your current site for UX, speed and SEO issues, then rebuild it with a modern design while preserving your search rankings with proper redirects and metadata migration.',
  },
  {
    question: 'Do you work with clients outside Delhi?',
    answer: 'Yes. We are based in New Delhi and work with clients across Delhi NCR and all of India. Our process is remote-first — calls, WhatsApp updates and live previews — with the same 24-hour response promise everywhere.',
  },
  {
    question: 'What technologies do you build with?',
    answer: 'We build modern websites and web apps with React, Tailwind CSS and JavaScript, backed by Firebase or Supabase with REST API integrations — including Razorpay, Stripe, UPI and PayPal for payments.',
  },
];

export const metadata = {
  title: 'Website Development Company in Delhi, India',
  description:
    'Webentric is a website development company in Delhi, India building fast, SEO-friendly business websites, e-commerce stores & landing pages that convert.',
  keywords: [
    'website development company in Delhi',
    'web design services Delhi',
    'website designer Delhi',
    'website development services India',
    'ecommerce website development Delhi',
    'landing page design India',
  ],
  alternates: { canonical: 'https://webentric.in' },
  openGraph: {
    title: 'Website Development Company in Delhi, India',
    description:
      'Webentric is a website development company in Delhi, India building fast, SEO-friendly business websites, e-commerce stores & landing pages that convert.',
    url: 'https://webentric.in',
    type: 'website',
    images: ['https://webentric.in/social-media-cover.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Company in Delhi, India',
    description:
      'Webentric is a website development company in Delhi, India building fast, SEO-friendly business websites, e-commerce stores & landing pages that convert.',
  },
};

export default function HomePage() {
  return (
    <main>
      <JsonLd
        data={[
          organizationSchema(),
          websiteSchema(),
          localBusinessSchema(),
          breadcrumbSchema([{ name: 'Home', url: SITE.url }]),
          faqSchema(HOME_FAQS),
        ]}
      />
      <Hero />
      <About />
      <Services />
      <HomeServiceHub />
      <WhyChooseUs />
      <HowWeWork />
      <Testimonials />
      <div className="bg-page text-ink">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 pb-20">
          <Faq items={HOME_FAQS} />
          <ServiceCTA
            title="Let's build your growth engine."
            text="Tell us about your business and goals. Get a clear quote, timeline and plan — within 24 hours on business days."
          />
        </div>
      </div>
    </main>
  );
}
