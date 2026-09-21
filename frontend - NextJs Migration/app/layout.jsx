import './globals.css';
import { Arimo } from 'next/font/google';
import Script from 'next/script';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactButtons from '../components/ContactButtons';
import JsonLd from '../components/JsonLd';
import { SITE, organizationSchema, websiteSchema, localBusinessSchema } from '../lib/seo';

const arimo = Arimo({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap', variable: '--font-arimo' });

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: 'Website Development Company in Delhi, India | Webentric', template: '%s' },
  description:
    'Webentric is a website development company in Delhi, India building fast, SEO-friendly business websites, e-commerce stores & landing pages that convert.',
  alternates: { canonical: SITE.url },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    locale: 'en_IN',
    url: SITE.url,
    title: 'Webentric - Web Design & Website Development Services in Delhi',
    description: 'Professional web design and website development services in Delhi for businesses, startups, and brands.',
    images: [{ url: `${SITE.url}/social-media-cover.png`, width: 1200, height: 630, alt: 'Webentric' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webentric - Web Design & Website Development Services in Delhi',
    description: 'Modern, fast, SEO-friendly websites for businesses and startups.',
    images: [`${SITE.url}/social-media-cover.png`],
  },
  icons: { icon: '/logo_circle.png', apple: '/logo_circle.png' },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-WR2BRHB44H';

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        {/* Pre-paint theme guard: apply saved theme before first render (no flash) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('webentric-theme')==='light'){document.documentElement.classList.add('light');var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content','#fafafa');}}catch(e){}`,
          }}
        />
      </head>
      <body className={`${arimo.variable} arimo-font antialiased`}>
        <ThemeProvider>
          <Navbar />
          <ContactButtons />
          {children}
          <Footer />
        </ThemeProvider>
        <JsonLd data={[organizationSchema(), websiteSchema(), localBusinessSchema()]} />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
      </body>
    </html>
  );
}
