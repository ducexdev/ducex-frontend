import React from 'react';
import { notFound } from 'next/navigation';
import { team } from '../../../data/team';
import { Button } from '../../../components/ui/Button';
import { Breadcrumbs } from '../../../components/ui/Breadcrumbs';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
  return team.map((member) => ({
    'lawyer-slug': member.slug,
  }));
}

export default async function LawyerProfilePage({ params }: { params: Promise<{ 'lawyer-slug': string }> }) {
  const resolvedParams = await params;
  const member = team.find(m => m.slug === resolvedParams['lawyer-slug']);

  if (!member) {
    notFound();
  }

  return (
    <div style={{ backgroundColor: 'var(--color-parchment)', minHeight: '100vh', padding: 'var(--space-12) 0' }}>
      <div className="container">
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Our Team', href: '/team' },
            { label: member.name }
          ]} 
          className="mb-8"
        />
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-12)', marginTop: 'var(--space-8)' }}>
          {/* Top Profile Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)', backgroundColor: 'var(--color-white)', padding: 'var(--space-8)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-8)' }}>
              {/* Photo */}
              <div style={{ 
                width: '100%', 
                maxWidth: '300px', 
                height: '350px', 
                backgroundColor: 'var(--color-smoke)', 
                borderRadius: 'var(--radius-md)',
                flexShrink: 0,
                position: 'relative',
                overflow: 'hidden'
              }}>
                <Image src={member.image} alt={member.name} fill style={{ objectFit: 'cover' }} priority />
              </div>
              
              {/* Info */}
              <div style={{ flexGrow: 1 }}>
                <h1 style={{ fontSize: 'clamp(var(--text-4xl), 4vw, var(--text-5xl))', color: 'var(--color-ink)', marginBottom: 'var(--space-2)' }}>
                  {member.name}
                </h1>
                <p style={{ color: 'var(--color-brass)', fontWeight: 'var(--font-bold)', fontSize: 'var(--text-lg)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-6)' }}>
                  {member.role}
                </p>
                
                <div style={{ height: '2px', width: '100%', backgroundColor: 'var(--color-stone)', marginBottom: 'var(--space-6)' }} />
                
                <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-3)' }}>Practice Areas</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginBottom: 'var(--space-8)' }}>
                  {member.practices.map((area, idx) => (
                    <span key={idx} style={{ backgroundColor: 'var(--color-smoke)', padding: 'var(--space-1) var(--space-3)', borderRadius: 'var(--radius-full)', fontSize: 'var(--text-sm)', color: 'var(--color-slate)' }}>
                      {area}
                    </span>
                  ))}
                </div>
                
                <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                  <Link href="/contact">
                    <Button variant="primary">Contact {member.name.split(' ')[0]}</Button>
                  </Link>
                  <Button variant="secondary">Download V-Card</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-12)' }}>
            {/* Bio */}
            <div>
              <h2 style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-6)', color: 'var(--color-slate)' }}>Biography</h2>
              <div style={{ fontSize: 'var(--text-lg)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-main)', whiteSpace: 'pre-wrap' }}>
                <p style={{ marginBottom: 'var(--space-4)' }}>{member.bio}</p>
              </div>
            </div>

            {/* Education & Qualifications */}
            {member.education && (
              <div>
                <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', color: 'var(--color-slate)' }}>Education & Qualifications</h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {member.education.map((edu, idx) => (
                    <li key={idx} style={{ padding: 'var(--space-3) 0', borderBottom: '1px solid var(--color-stone)', color: 'var(--text-main)', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--color-brass)', marginRight: 'var(--space-3)', fontSize: 'var(--text-xl)' }}>•</span>
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
