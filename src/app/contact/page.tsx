import type { Metadata } from 'next';
import { ContactClient } from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | Book a Consultation',
  description:
    'Contact Ducex Solicitors in Lagos, Nigeria. Book a confidential legal consultation, call us, or send a message. We are here to help with all your legal needs.',
  alternates: { canonical: 'https://www.ducexsolicitors.com/contact' },
  openGraph: {
    title: 'Contact Ducex Solicitors | Lagos Nigeria',
    description: 'Get in touch with Ducex Solicitors for expert legal advice. Book a confidential consultation today.',
    url: 'https://www.ducexsolicitors.com/contact',
  },
};

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ducexsolicitors.com' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.ducexsolicitors.com/contact' },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactClient />
    </>
  );
}
