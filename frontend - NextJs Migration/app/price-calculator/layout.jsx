import { SITE } from '../../lib/seo';

const TITLE = 'Website Cost Calculator India (2026) | Webentric';
const DESCRIPTION =
  'Estimate your website cost in India in under a minute: choose site type, pages, features and timeline for a transparent instant estimate in rupees.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['website cost calculator India', 'website price estimator', 'website development cost India'],
  alternates: { canonical: `${SITE.url}/price-calculator` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/price-calculator`,
    type: 'website',
    images: [{ url: `${SITE.url}/social-media-cover.png`, width: 1200, height: 630, alt: 'Webentric website cost calculator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE.url}/social-media-cover.png`],
  },
};

export default function PriceCalculatorLayout({ children }) {
  return children;
}
