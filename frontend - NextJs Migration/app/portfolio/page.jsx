import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import PortfolioCtaButton from './PortfolioCtaButton';
import JsonLd from '../../components/JsonLd';
import { SITE, webPageSchema, itemListSchema, breadcrumbSchema } from '../../lib/seo';
import { projects } from '../../lib/data.js';

export const metadata = {
  title: 'Our Web Design Work in Delhi, India',
  description: 'Explore websites designed & developed by Webentric — schools, salons, cafes, stores & startups across Delhi NCR and India.',
  keywords: ['web design portfolio Delhi', 'website examples India', 'web development projects Delhi'],
  alternates: { canonical: 'https://webentric.in/portfolio' },
  openGraph: {
    title: 'Our Web Design Work in Delhi, India',
    description: 'Explore websites designed & developed by Webentric — schools, salons, cafes, stores & startups across Delhi NCR and India.',
    url: 'https://webentric.in/portfolio',
    type: 'website',
    images: ['https://webentric.in/social-media-cover.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Web Design Work in Delhi, India',
    description: 'Explore websites designed & developed by Webentric — schools, salons, cafes, stores & startups across Delhi NCR and India.',
  },
};

export default function PortfolioPage() {
  return (
    <section className="bg-page py-10 md:py-14" id="portfolio">
      <JsonLd
        data={[
          webPageSchema({ name: 'Webentric Portfolio — Web Design Work in Delhi, India', url: `${SITE.url}/portfolio`, description: 'Selected website design and development projects across Delhi NCR and India.' }),
          itemListSchema({ name: 'Webentric portfolio', url: `${SITE.url}/portfolio`, items: projects.map((p) => ({ name: p.title, url: p.link || `${SITE.url}/portfolio`, description: p.description, image: p.image })) }),
          breadcrumbSchema([{ name: 'Home', url: SITE.url }, { name: 'Portfolio', url: `${SITE.url}/portfolio` }]),
        ]}
      />

      <div className="max-w-full mx-auto md:px-20 px-5">
        {/* Heading */}
        <div className="text-center max-w-[700px] mx-auto">
          <h1 className="text-[40px] md:text-[50px] sm:text-4xl font-medium leading-tight tracking-[-0.03em] text-ink">
            Projects That Help Businesses Succeed Online
          </h1>

          <p className="mt-4 text-sm md:text-md lg:text-lg text-ink/58">
            Explore some of the websites and digital experiences we&apos;ve built for
            startups and growing businesses.
          </p>
        </div>

        {/* Projects grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-surface border border-edge rounded-none overflow-hidden hover:bg-raised hover:border-edge transition-all duration-300"
            >
              {/* Project image */}
              <div className="relative overflow-hidden aspect-auto bg-surface">
                <Image
                  src={project.image}
                  alt={`${project.title} — website designed and developed by Webentric`}
                  width={800}
                  height={500}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/22 to-transparent opacity-80 pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-medium tracking-[-0.02em] text-ink mb-2">
                  {project.title}
                </h3>

                <p className="text-[15px] text-ink/70 mb-3 leading-relaxed">
                  {project.description}
                </p>

                <p className="text-xs uppercase tracking-[0.14em] text-ink/35 mb-4">
                  {project.tech}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-ink/70 transition-colors"
                >
                  View Project
                  <FiArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm sm:text-base text-ink/70 mb-4">
            Want a website like these for your business?
          </p>

          <PortfolioCtaButton />

          <p className="mt-6 text-xs sm:text-sm text-ink/45">
            Or explore our{' '}
            <Link href="/website-development" className="text-ink/70 hover:text-ink underline underline-offset-4 transition-colors">
              website development
            </Link>
            {', '}
            <Link href="/ecommerce-development" className="text-ink/70 hover:text-ink underline underline-offset-4 transition-colors">
              ecommerce development
            </Link>
            {' '}and{' '}
            <Link href="/website-redesign" className="text-ink/70 hover:text-ink underline underline-offset-4 transition-colors">
              website redesign
            </Link>
            {' '}services.
          </p>
        </div>
      </div>
    </section>
  );
}
