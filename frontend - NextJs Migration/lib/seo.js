export const SITE = {
    name: 'Webentric',
    url: 'https://webentric.in',
    logo: 'https://webentric.in/logo_circle.png',
    phone: '+91-9560342636',
    locale: 'en_IN',
    address: {
        locality: 'New Delhi',
        region: 'Delhi',
        country: 'IN',
    },
    geo: { lat: 28.6139, lng: 77.2090 },
    socials: [
        'https://www.instagram.com/webentric.in/',
        'https://www.linkedin.com/company/webentric',
        'https://www.facebook.com/profile.php?id=61574354051186',
    ],
};

export const ORG_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;
export const BUSINESS_ID = `${SITE.url}/#local-business`;

export function toAbsolute(path) {
    if (!path) return SITE.url;
    if (/^https?:\/\//i.test(path)) return path;
    return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`;
}

export function toISODate(dateStr) {
    const t = new Date(dateStr).getTime();
    if (Number.isNaN(t)) return undefined;
    return new Date(t).toISOString();
}

export function organizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': ORG_ID,
        name: SITE.name,
        url: SITE.url,
        logo: {
            '@type': 'ImageObject',
            url: SITE.logo,
        },
        sameAs: SITE.socials,
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: SITE.phone,
            contactType: 'sales',
            areaServed: 'IN',
            availableLanguage: ['English', 'Hindi'],
        },
    };
}

export function websiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        name: SITE.name,
        url: SITE.url,
        inLanguage: 'en-IN',
        publisher: { '@id': ORG_ID },
    };
}

export function localBusinessSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': BUSINESS_ID,
        name: `${SITE.name} — Web Design & Development Company in Delhi`,
        url: SITE.url,
        image: SITE.logo,
        telephone: SITE.phone,
        priceRange: '₹₹',
        address: {
            '@type': 'PostalAddress',
            addressLocality: SITE.address.locality,
            addressRegion: SITE.address.region,
            addressCountry: SITE.address.country,
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: SITE.geo.lat,
            longitude: SITE.geo.lng,
        },
        areaServed: [
            { '@type': 'City', name: 'New Delhi' },
            { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
            { '@type': 'Country', name: 'India' },
        ],
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '10:00',
            closes: '18:00',
        },
        sameAs: SITE.socials,
    };
}

export function breadcrumbSchema(items) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

export function webPageSchema({ name, url, description }) {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name,
        url,
        description,
        inLanguage: 'en-IN',
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': ORG_ID },
    };
}

export function blogSchema({ name, url, description, posts }) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name,
        url,
        description,
        inLanguage: 'en-IN',
        publisher: { '@id': ORG_ID },
        blogPost: posts.map((post) => ({
            '@type': 'BlogPosting',
            headline: post.title,
            url: `${SITE.url}/blogs/${post.slug}`,
            image: toAbsolute(post.coverImage),
            datePublished: toISODate(post.date),
            author: { '@type': 'Organization', name: SITE.name },
        })),
    };
}

export function articleSchema(blog, excerpt) {
    const iso = toISODate(blog.date);
    const words = (blog.content || [])
        .flatMap((block) => {
            if (block.type === 'paragraph' || block.type === 'heading') return [block.text];
            if (block.type === 'list' && Array.isArray(block.items)) return block.items;
            return [];
        })
        .join(' ')
        .split(/\s+/)
        .filter(Boolean).length;

    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: blog.title,
        description: excerpt,
        image: toAbsolute(blog.coverImage),
        url: `${SITE.url}/blogs/${blog.slug}`,
        inLanguage: 'en-IN',
        datePublished: iso,
        dateModified: iso,
        author: {
            '@type': 'Organization',
            name: SITE.name,
            url: SITE.url,
        },
        publisher: {
            '@type': 'Organization',
            name: SITE.name,
            logo: { '@type': 'ImageObject', url: SITE.logo },
        },
        keywords: (blog.tags || []).join(', '),
        ...(words > 0 ? { wordCount: words } : {}),
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${SITE.url}/blogs/${blog.slug}`,
        },
    };
}

export function faqSchema(faqs) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
    };
}

export function itemListSchema({ name, url, items }) {
    return {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name,
        url,
        itemListElement: items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            ...(item.url
                ? {
                      '@type': 'ListItem',
                      item: {
                          '@type': 'CreativeWork',
                          name: item.name,
                          url: item.url,
                          ...(item.description ? { description: item.description } : {}),
                          ...(item.image ? { image: toAbsolute(item.image) } : {}),
                      },
                  }
                : { name: item.name }),
        })),
    };
}
