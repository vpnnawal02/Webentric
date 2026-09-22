import Link from 'next/link';
import { Star } from 'lucide-react';
import JsonLd from '../../components/JsonLd';
import Breadcrumbs from '../../components/Breadcrumbs';
import { SITE, webPageSchema, breadcrumbSchema } from '../../lib/seo';

export const metadata = {
  title: 'Client Reviews & Google Ratings',
  description:
    'Read verified Google reviews for Webentric — Delhi businesses rate our website design & development 5 stars for communication, quality and on-time delivery.',
  keywords: ['webentric reviews', 'webentric google reviews', 'website developer reviews Delhi'],
  alternates: { canonical: 'https://webentric.in/reviews' },
  openGraph: {
    title: 'Client Reviews & Google Ratings',
    description:
      'Read verified Google reviews for Webentric — Delhi businesses rate our website design & development 5 stars.',
    url: 'https://webentric.in/reviews',
    type: 'website',
    images: ['https://webentric.in/social-media-cover.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Reviews & Google Ratings',
    description:
      'Read verified Google reviews for Webentric — Delhi businesses rate our website design & development 5 stars.',
  },
};

const GOOGLE_PROFILE_URL = 'https://g.page/r/CYenMI9Ic6IKEAE/review';

const REVIEWS = [
  {
    name: 'Prachi Rani',
    meta: '0 reviews · 0 photos',
    time: '3 days ago',
    rating: 5,
    text: null, // 5-star Google rating with no written comment
    tag: 'Google review',
  },
  {
    name: 'Jaanvi Goyal',
    meta: '8 reviews · 0 photos',
    time: '4 weeks ago',
    rating: 5,
    text: 'Webentric ke saath website banwane ka experience kaafi smooth raha. Team ne requirements achhe se samjhi aur website exactly waise hi banayi jaisi hume chahiye thi. Highly recommended!',
    tag: 'Google review',
  },
  {
    name: 'Shahdab Khan',
    meta: 'Local Guide · 19 reviews · 4 photos',
    time: '5 weeks ago',
    rating: 5,
    text: 'Really happy with the website Webentric built for us. They understood our style and made everything look clean, modern, and professional. Great work and easy to work with!',
    tag: 'Google review',
  },
  {
    name: 'Soni Singh',
    meta: '3 reviews · 0 photos',
    time: '10 weeks ago',
    rating: 5,
    text: 'It was nice working with them. They explained everything clearly in the first 10 minutes itself and then delivered the website timely. Highly recommended.',
    tag: 'Google review',
  },
  {
    name: 'Kishanshu Mehra',
    meta: '5 reviews · 0 photos',
    time: '20 weeks ago',
    rating: 5,
    text: 'Working with Webentric was honestly a very smooth experience. Vipin was patient, easy to communicate with, and genuinely interested in understanding our business properly before starting. Since this was our first website, we had a lot of questions and confusion, but everything was explained clearly and the whole process felt comfortable. The support, responsiveness, and attention to detail throughout the project were really appreciated. Would definitely recommend Webentric to anyone looking to get their business online.',
    tag: 'Google review',
  },
  {
    name: 'Neha Kumari',
    meta: '1 review · 1 photo',
    time: '20 weeks ago',
    rating: 5,
    text: 'Had a great experience working with Webentric for our salon website. Vipin was very cooperative, easy to communicate with, and handled all our suggestions patiently. The whole process felt smooth and stress free, especially since it was our first time getting a website made. Really happy with the support and overall experience.',
    tag: 'Google review · Salon website',
  },
];

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? 'fill-amber-400 text-amber-400' : 'text-ink/20'}
          aria-hidden
        />
      ))}
    </div>
  );
}

function initial(name) {
  return (name || 'W').trim().charAt(0).toUpperCase();
}

export default function ReviewsPage() {
  const totalReviews = REVIEWS.length;
  const avgRating = (REVIEWS.reduce((s, r) => s + r.rating, 0) / totalReviews).toFixed(1);

  return (
    <section className="bg-page text-ink py-10 md:py-14">
      <JsonLd
        data={[
          webPageSchema({
            name: 'Webentric Reviews — Client Reviews & Google Ratings',
            url: `${SITE.url}/reviews`,
            description: 'Verified Google reviews for Webentric website design and development services in Delhi, India.',
          }),
          breadcrumbSchema([
            { name: 'Home', url: SITE.url },
            { name: 'Reviews', url: `${SITE.url}/reviews` },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Webentric',
            url: `${SITE.url}/reviews`,
            image: SITE.logo,
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: avgRating,
              reviewCount: String(totalReviews),
              bestRating: '5',
            },
            review: REVIEWS.filter((r) => r.text).map((r) => ({
              '@type': 'Review',
              author: { '@type': 'Person', name: r.name },
              datePublished: r.time,
              reviewRating: { '@type': 'Rating', ratingValue: String(r.rating), bestRating: '5' },
              reviewBody: r.text,
            })),
          },
        ]}
      />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <Breadcrumbs items={[{ label: 'Reviews' }]} />

        {/* Heading */}
        <div className="text-center max-w-[720px] mx-auto">
          <p className="text-[12px] uppercase tracking-[0.22em] text-ink/60 mb-4">Reviews</p>
          <h1 className="text-[36px] md:text-[50px] font-medium leading-tight tracking-[-0.03em]">
            What clients say about Webentric
          </h1>
          <p className="mt-4 text-sm md:text-base lg:text-lg text-ink/60 leading-relaxed">
            Real Google reviews from businesses we&apos;ve built websites for — smooth process,
            clear communication, and websites delivered on time.
          </p>
        </div>

        {/* Rating summary */}
        <div className="mt-10 bg-surface border border-edge p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <span className="text-5xl md:text-6xl font-medium tracking-tight">{avgRating}</span>
            <div>
              <Stars rating={5} />
              <p className="mt-2 text-sm text-ink/60">
                {totalReviews} Google reviews · all 5-star
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={GOOGLE_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-on-accent text-sm font-medium hover:bg-accent/85 transition-colors"
            >
              Review us on Google
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-edge text-sm font-medium hover:bg-accent hover:text-on-accent hover:border-ink transition-all"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS.map((review) => (
            <article
              key={review.name}
              className="flex flex-col bg-surface border border-edge p-6 md:p-7 hover:bg-raised transition-colors duration-300"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <Stars rating={review.rating} />
                <span className="text-[11px] uppercase tracking-[0.14em] text-ink/40 shrink-0">
                  {review.time}
                </span>
              </div>

              {review.text ? (
                <blockquote className="text-[15px] text-ink/75 leading-relaxed flex-1">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
              ) : (
                <p className="text-[15px] text-ink/50 leading-relaxed flex-1 italic">
                  5-star Google rating — no written comment left.
                </p>
              )}

              <div className="mt-6 pt-5 border-t border-line flex items-center gap-3">
                <span
                  className="w-10 h-10 rounded-full bg-accent text-on-accent flex items-center justify-center text-sm font-semibold shrink-0"
                  aria-hidden
                >
                  {initial(review.name)}
                </span>
                <div className="min-w-0">
                  <p className="font-medium text-ink text-[15px] truncate">{review.name}</p>
                  <p className="text-xs text-ink/45 mt-0.5 truncate">
                    {review.meta} · {review.tag}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-sm sm:text-base text-ink/70 mb-4">
            Want a website your customers will rave about?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-accent text-on-accent font-medium hover:bg-accent/85 transition-colors w-full sm:w-auto"
            >
              Start Your Project
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-edge font-medium hover:bg-accent hover:text-on-accent transition-all w-full sm:w-auto"
            >
              View Our Work
            </Link>
          </div>
          <p className="mt-6 text-xs sm:text-sm text-ink/45">
            Or explore our{' '}
            <Link href="/pricing" className="underline underline-offset-4 hover:text-ink transition-colors">
              pricing
            </Link>
            {' '}and{' '}
            <Link href="/website-development" className="underline underline-offset-4 hover:text-ink transition-colors">
              website development
            </Link>
            {' '}services.
          </p>
        </div>
      </div>
    </section>
  );
}
