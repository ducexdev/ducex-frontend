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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.slug);
  if (!service) return {};
  return {
    title: `${service.title} | Ducex Solicitors`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const assignedLawyers = team.filter(member => service.relevantLawyerSlugs.includes(member.slug));

  return <ServiceDetailClient service={service} assignedLawyers={assignedLawyers} />;
}
