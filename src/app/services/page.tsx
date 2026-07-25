import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Users, Home, Building, Scale, FileSignature, 
  Building2, HeartCrack, Gavel, Briefcase, Calculator,
  ShieldCheck, Target, ArrowRight, Calendar, HeadphonesIcon
} from 'lucide-react';
import { services } from '../../data/services';
import { Button } from '../../components/ui/Button';
import styles from './Services.module.css';

// Helper to map service IDs to specific icons
const getServiceIcon = (id: string) => {
  switch (id) {
    case 'family-law': return <Users size={24} />;
    case 'property-law': return <Home size={24} />;
    case 'corporate-law': return <Building size={24} />;
    case 'litigation': return <Scale size={24} />;
    case 'wills-estates': return <FileSignature size={24} />;
    case 'real-estate': return <Building2 size={24} />;
    case 'divorce': return <HeartCrack size={24} />;
    case 'criminal-law': return <Gavel size={24} />;
    case 'business-law': return <Briefcase size={24} />;
    case 'taxation': return <Calculator size={24} />;
    default: return <Scale size={24} />;
  }
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <Image 
          src="/images/services/litigation-hero.png" 
          alt="Ducex Solicitors Practice Areas" 
          fill 
          style={{ objectFit: 'cover', objectPosition: 'center' }} 
          priority
        />
        
        <div className={styles.heroContent}>
          <div className={styles.heroPretitle}>Our Practice Areas</div>
          <h1 className={styles.heroTitle}>
            Comprehensive Legal Solutions<br />Tailored to <span>Your Needs</span>
          </h1>
          <p className={styles.heroDesc}>
            Ducex Solicitors offers a wide range of legal services designed to protect your interests and help you achieve your goals.
          </p>
          
          <div className={styles.heroTrustFeatures}>
            <div className={styles.heroTrustItem}>
              <ShieldCheck size={32} className={styles.heroTrustIcon} />
              <div className={styles.heroTrustText}>
                <h4>Trusted Expertise</h4>
                <p>Years of proven legal excellence.</p>
              </div>
            </div>
            <div className={styles.heroTrustItem}>
              <Users size={32} className={styles.heroTrustIcon} />
              <div className={styles.heroTrustText}>
                <h4>Client-Centered</h4>
                <p>Personalized solutions focused on your needs.</p>
              </div>
            </div>
            <div className={styles.heroTrustItem}>
              <Target size={32} className={styles.heroTrustIcon} />
              <div className={styles.heroTrustText}>
                <h4>Results Driven</h4>
                <p>Strategic advice that delivers real value.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className={styles.pageContainer}>
        <div className={styles.servicesGrid}>
          {services.map(service => (
            <Link key={service.id} href={`/services/${service.slug}`} className={styles.serviceCard}>
              <div className={styles.serviceIconWrapper}>
                {getServiceIcon(service.id)}
              </div>
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <div className={styles.goldLine}></div>
                <p className={styles.serviceDesc}>
                  {service.shortDescription}
                </p>
                <div className={styles.viewDetails}>
                  View Full Details <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaBackground}></div>
            
            <div className={styles.ctaLeft}>
              <div className={styles.ctaIcon}>
                <Calendar size={28} />
              </div>
              <div className={styles.ctaContent}>
                <h2 className={styles.ctaTitle}>Need Legal Advice?</h2>
                <p className={styles.ctaDesc}>
                  Schedule a confidential consultation with our experienced legal team today.
                </p>
              </div>
            </div>
            
            <div className={styles.ctaButtons}>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Button variant="accent" size="large">
                  BOOK A CONSULTATION <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                </Button>
              </Link>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Button variant="secondary" size="large" style={{ color: 'var(--color-white)', borderColor: 'rgba(255,255,255,0.3)' }}>
                  CONTACT US <HeadphonesIcon size={16} style={{ marginLeft: '0.5rem' }} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
