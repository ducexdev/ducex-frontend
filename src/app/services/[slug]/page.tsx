import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { services } from '../../../data/services';
import { team } from '../../../data/team';
import { ServiceDetailClient } from './ServiceDetailClient';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

const BASE_URL = 'https://www.ducexsolicitors.com';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.slug);
  if (!service) return {};
  const canonical = `${BASE_URL}/services/${service.slug}`;
  return {
    title: `${service.title} Solicitors in Lagos, Nigeria`,
    description: `Looking for expert ${service.title.toLowerCase()} solicitors in Lagos? Ducex Solicitors provides specialist ${service.title.toLowerCase()} legal services in Nigeria. Contact us for a confidential consultation.`,
    keywords: [`${service.title.toLowerCase()} lawyer Lagos`, `${service.title.toLowerCase()} solicitor Nigeria`, `${service.title.toLowerCase()} law firm Lagos`],
    alternates: { canonical },
    openGraph: {
      title: `${service.title} Solicitors in Lagos, Nigeria | Ducex Solicitors`,
      description: `Expert ${service.title.toLowerCase()} legal services in Lagos and Nigeria. Ducex Solicitors — trusted, experienced, results-driven.`,
      url: canonical,
      type: 'website',
      siteName: 'Ducex Solicitors',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} Solicitors in Lagos | Ducex Solicitors`,
      description: `Expert ${service.title.toLowerCase()} legal services in Lagos, Nigeria. Book a confidential consultation today.`,
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const assignedLawyers = team.filter(member => service.relevantLawyerSlugs.includes(member.slug));

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        serviceType: service.title,
        name: `${service.title} — Ducex Solicitors`,
        description: service.shortDescription,
        provider: {
          '@type': 'LegalService',
          name: 'Ducex Solicitors Limited',
          url: 'https://www.ducexsolicitors.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '2 Onatamere Ihemando Close, Abule Ado',
            addressLocality: 'Ojo',
            addressRegion: 'Lagos',
            addressCountry: 'NG',
          },
        },
        areaServed: [{ '@type': 'Country', name: 'Nigeria' }, { '@type': 'City', name: 'Lagos' }],
        url: `https://www.ducexsolicitors.com/services/${service.slug}`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ducexsolicitors.com' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.ducexsolicitors.com/services' },
          { '@type': 'ListItem', position: 3, name: service.title, item: `https://www.ducexsolicitors.com/services/${service.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServiceDetailClient service={service} assignedLawyers={assignedLawyers} />
    </>
  );
}
