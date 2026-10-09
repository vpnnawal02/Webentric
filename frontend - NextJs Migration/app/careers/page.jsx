import Breadcrumbs from '../../components/Breadcrumbs';
import CareersContent from '../../components/CareersContent';
import ServiceCTA from '../../components/ServiceCTA';
import JsonLd from '../../components/JsonLd';
import { SITE, webPageSchema, breadcrumbSchema } from '../../lib/seo';
import { supabase } from '../../lib/supabase';

export const revalidate = 60;

const TITLE = 'Careers at Webentric — Jobs in Delhi, India';
const DESCRIPTION =
  'Join Webentric, a website development company in New Delhi. View open positions in web design, development and more — or send a general application.';
const URL = `${SITE.url}/careers`;

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['Webentric careers', 'web developer jobs Delhi', 'web design jobs India'],
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: 'website',
    images: [{ url: `${SITE.url}/social-media-cover.png`, width: 1200, height: 630, alt: 'Careers at Webentric' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE.url}/social-media-cover.png`],
  },
};

async function getActiveJobs() {
  try {
    const { data, error } = await supabase
      .from('job_posts')
      .select('id,title,location,type,description,requirements,created_at')
      .eq('is_active', true)
      .order('created_at', { ascending: false });
    if (error || !data) return [];
    return data;
  } catch {
    // Table may not exist yet (migration not run) — page still builds.
    return [];
  }
}

function jobPostingSchema(job) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: [job.description, job.requirements].filter(Boolean).join('\n\n'),
    datePosted: job.created_at ? new Date(job.created_at).toISOString().split('T')[0] : undefined,
    employmentType: job.type?.toUpperCase().includes('PART') ? 'PART_TIME' : 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: SITE.name,
      sameAs: SITE.url,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.locality,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.postalCode,
        addressCountry: SITE.address.country,
      },
    },
  };
}

export default async function CareersPage() {
  const jobs = await getActiveJobs();

  return (
    <main className="bg-page text-ink min-h-screen">
      <JsonLd
        data={[
          webPageSchema({ name: TITLE, url: URL, description: DESCRIPTION }),
          breadcrumbSchema([
            { name: 'Home', url: SITE.url },
            { name: 'Careers', url: URL },
          ]),
          ...jobs.map(jobPostingSchema),
        ]}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 pt-24 md:pt-28 pb-20">
        <Breadcrumbs items={[{ label: 'Careers' }]} />
        <p className="text-xs tracking-[0.22em] text-muted mb-4">CAREERS — WEBENTRIC · NEW DELHI</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] mb-6">
          Build the web with us
        </h1>
        <div className="max-w-3xl space-y-4 text-muted text-[15px] sm:text-base leading-relaxed mb-14 md:mb-20">
          <p>
            Webentric is a website development company based in New Delhi. We&apos;re a small,
            hands-on team of designers and developers building fast, modern websites for
            businesses across India.
          </p>
          <p>
            If you care about clean design, good engineering, and work you can point to —
            we&apos;d like to hear from you.
          </p>
        </div>

        <CareersContent jobs={jobs} />

        <ServiceCTA
          title="Hiring for your own business instead?"
          text="We build websites that help small teams look established and win clients. Get a clear quote within 24 hours on business days."
        />
      </div>
    </main>
  );
}
