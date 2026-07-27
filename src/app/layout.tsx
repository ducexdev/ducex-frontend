import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '../context/AuthContext';
import { ConditionalLayoutWrapper } from '../components/layout/ConditionalLayoutWrapper';
import { CookieConsent } from '../components/widgets/CookieConsent';
import { WhatsAppButton } from '../components/widgets/WhatsAppButton';
import { GoogleAnalytics } from '../components/analytics/GoogleAnalytics';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const BASE_URL = 'https://www.ducexsolicitors.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Ducex Solicitors | Expert Legal Services in Lagos, Nigeria',
    template: '%s | Ducex Solicitors',
  },
  description:
    'Ducex Solicitors Limited provides expert legal services in Lagos, Nigeria — Family Law, Property Law, Corporate Law, Litigation, Real Estate, Criminal Law, Wills & Estates, and more.',
  keywords: [
    'law firm Lagos Nigeria',
    'solicitors Nigeria',
    'family law Nigeria',
    'property law Lagos',
    'corporate law Nigeria',
    'litigation Nigeria',
    'criminal law Lagos',
    'Ducex Solicitors',
    'legal services Ojo Lagos',
    'real estate lawyer Nigeria',
  ],
  authors: [{ name: 'Ducex Solicitors Limited', url: BASE_URL }],
  creator: 'Ducex Solicitors Limited',
  publisher: 'Ducex Solicitors Limited',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: BASE_URL,
    siteName: 'Ducex Solicitors',
    title: 'Ducex Solicitors | Expert Legal Services in Lagos, Nigeria',
    description:
      'Expert legal services in Lagos, Nigeria — Family Law, Property Law, Corporate Law, Litigation, Real Estate, and more. Book a confidential consultation today.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Ducex Solicitors Limited — Expert Legal Services Lagos Nigeria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ducex Solicitors | Expert Legal Services in Lagos, Nigeria',
    description:
      'Expert legal services in Lagos, Nigeria. Book a confidential consultation with our experienced solicitors today.',
    images: ['/images/logo.png'],
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? '',
  },
};

// Organization + LegalService structured data for the whole site
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LegalService',
      '@id': `${BASE_URL}/#organization`,
      name: 'Ducex Solicitors Limited',
      url: BASE_URL,
      logo: `${BASE_URL}/images/logo.png`,
      image: `${BASE_URL}/images/logo.png`,
      description:
        'Ducex Solicitors Limited is a law firm in Lagos, Nigeria providing expert legal services including Family Law, Property Law, Corporate Law, Litigation, Real Estate, Criminal Law, Wills and Estates, Business Law, Divorce Law, and Taxation.',
      telephone: '+234803460550',
      email: 'info@ducexsolicitors.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2 Onatamere Ihemando Close, Abule Ado',
        addressLocality: 'Ojo',
        addressRegion: 'Lagos',
        addressCountry: 'NG',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '6.4698',
        longitude: '3.2489',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00',
        },
      ],
      areaServed: [
        { '@type': 'Country', name: 'Nigeria' },
        { '@type': 'City', name: 'Lagos' },
      ],
      priceRange: '$$',
      sameAs: [],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Legal Services',
        itemListElement: [
          'Family Law', 'Property Law', 'Corporate Law', 'Litigation and Dispute Resolution',
          'Wills and Estate Planning', 'Real Estate Law', 'Divorce Law', 'Criminal Law',
          'Business Law', 'Taxation',
        ].map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'LegalService', name },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Ducex Solicitors',
      publisher: { '@id': `${BASE_URL}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/insights?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <GoogleAnalytics />
        <AuthProvider>
          <ConditionalLayoutWrapper>
            {children}
          </ConditionalLayoutWrapper>
        </AuthProvider>
        <CookieConsent />
        <WhatsAppButton />
      </body>
    </html>
  );
}
