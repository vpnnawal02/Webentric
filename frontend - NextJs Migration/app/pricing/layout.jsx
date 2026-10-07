import { SITE } from '../../lib/seo';

const TITLE = 'Website Design Cost in Delhi, India (2026) | Webentric';
const DESCRIPTION =
  'Transparent website pricing in India: Starter from ₹7,999, Business from ₹14,999, E-commerce from ₹29,999. Fixed quotes in rupees within 24 hours on business days.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['website design cost Delhi', 'website development pricing India', 'website price India'],
  alternates: { canonical: `${SITE.url}/pricing` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/pricing`,
    type: 'website',
    images: [{ url: `${SITE.url}/social-media-cover.png`, width: 1200, height: 630, alt: 'Webentric website pricing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE.url}/social-media-cover.png`],
  },
};

export default function PricingLayout({ children }) {
  return children;
}
