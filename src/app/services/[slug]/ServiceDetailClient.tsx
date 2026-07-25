"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone, ShieldCheck, Heart, TrendingUp,
  Users, Home, Briefcase, Building2, Scale, FileText,
  Calculator, Shield, HelpCircle, ArrowRight, Plus, Minus,
  MessageSquare, Clock, Award, Star, ChevronRight, Gavel, Lightbulb
} from 'lucide-react';
import { Service } from '../../../data/services';
import { TeamMember } from '../../../data/team';
import { Button } from '../../../components/ui/Button';
import { ScrollReveal } from '../../../components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../../components/animations/StaggerContainer';
import styles from './ServiceDetail.module.css';

// Map trust marker icons
const getTrustIcon = (iconName: string) => {
  switch (iconName) {
    case 'ShieldCheck': return <ShieldCheck size={18} />;
    case 'Heart': return <Heart size={18} />;
    case 'TrendingUp': return <TrendingUp size={18} />;
    case 'Lightbulb': return <Lightbulb size={18} />;
    case 'Briefcase': return <Briefcase size={18} />;
    case 'Scale': return <Scale size={18} />;
    case 'Clock': return <Clock size={18} />;
    case 'FileText': return <FileText size={18} />;
    case 'Calculator': return <Calculator size={18} />;
    case 'Building2': return <Building2 size={18} />;
    case 'Phone': return <Phone size={18} />;
    default: return <Award size={18} />;
  }
};

// Map service keywords to icons
const getServiceIcon = (serviceName: string) => {
  const name = serviceName.toLowerCase();
  if (name.includes('child') || name.includes('custody') || name.includes('guardian') || name.includes('family') || name.includes('adoption')) return <Users size={20} />;
  if (name.includes('property') || name.includes('land') || name.includes('real estate') || name.includes('tenancy') || name.includes('lease') || name.includes('landlord')) return <Home size={20} />;
  if (name.includes('business') || name.includes('contract') || name.includes('employment') || name.includes('corporate') || name.includes('commercial') || name.includes('partner')) return <Briefcase size={20} />;
  if (name.includes('company') || name.includes('merger') || name.includes('acquisition') || name.includes('governance') || name.includes('incorporat') || name.includes('shareholder')) return <Building2 size={20} />;
  if (name.includes('litigation') || name.includes('dispute') || name.includes('court') || name.includes('media') || name.includes('arbitrat') || name.includes('appeal')) return <Scale size={20} />;
  if (name.includes('will') || name.includes('estate') || name.includes('trust') || name.includes('probate') || name.includes('succession')) return <FileText size={20} />;
  if (name.includes('tax') || name.includes('firs') || name.includes('compliance') || name.includes('audit')) return <Calculator size={20} />;
  if (name.includes('criminal') || name.includes('bail') || name.includes('defence') || name.includes('police') || name.includes('white-collar')) return <Shield size={20} />;
  if (name.includes('divorce') || name.includes('matrimon') || name.includes('separation') || name.includes('spousal')) return <Heart size={20} />;
  return <Gavel size={20} />;
};

interface ServiceDetailClientProps {
  service: Service;
  assignedLawyers: TeamMember[];
}

export const ServiceDetailClient: React.FC<ServiceDetailClientProps> = ({ service, assignedLawyers }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Urgent Banner */}
      {service.isUrgent && (
        <div className={styles.urgentBanner}>
          Urgent Legal Assistance? Call our 24/7 Crisis Line:{' '}
          <a href="tel:+2348034640550" style={{ color: 'white', textDecoration: 'underline' }}>+234 803 464 0550</a>
        </div>
      )}

      {/* 1. Hero Section — container-width text, full-bleed image on right */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroInner}`}>
          {/* Left: Text Content — respects container width */}
          <div className={styles.heroLeft}>
            <ScrollReveal direction="up">
              <div className={styles.heroContent}>
                {/* Breadcrumb */}
                <div className={styles.breadcrumb}>
                  <Link href="/">Home</Link>
                  <ChevronRight size={14} />
                  <Link href="/services">Practice Areas</Link>
                  <ChevronRight size={14} />
                  <span>{service.title}</span>
                </div>

                <h1 className={styles.heroTitle}>{service.title}</h1>
                <p className={styles.heroSubtitle}>{service.shortDescription}</p>

                {/* Trust Markers */}
                {service.trustMarkers && service.trustMarkers.length > 0 && (
                  <div className={styles.trustMarkers}>
                    {service.trustMarkers.map((marker, idx) => (
                      <div key={idx} className={styles.trustMarker}>
                        <div className={styles.trustIcon}>{getTrustIcon(marker.icon)}</div>
                        <div className={styles.trustText}>
                          <strong>{marker.label}</strong>
                          <span>{marker.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTAs */}
                <div className={styles.heroCtas}>
                  <Link href="/contact">
                    <Button variant="accent" size="large">Request a Consultation →</Button>
                  </Link>
                  <a href="tel:+2348034567890" className={styles.callBtn}>
                    <Phone size={16} /> Call Us Now
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Hero Image — absolutely positioned to bleed to viewport edge */}
          <div className={styles.heroImageColumn}>
            <Image
              src={service.heroImage}
              alt={service.title}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. Overview & Stats */}
      <section className={styles.overviewSection}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <ScrollReveal direction="left">
              <div className={styles.overviewImageWrapper}>
                <Image src={service.heroImage} alt={`${service.title} Overview`} fill style={{ objectFit: 'cover' }} />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className={styles.overviewRight}>
                <h2>About Ducex Solicitors</h2>
                <p>
                  Ducex Solicitors has extensive experience in {service.title.toLowerCase()} matters in Lagos, Nigeria and beyond. Since 2010, we have helped countless clients navigate complex domestic and family legal matters with professionality, professionalism, and integrity.
                </p>
                <p>
                  Our mission is to provide clear legal guidance and secure the best possible outcomes for you and your loved ones.
                </p>

                <div className={styles.statsRow}>
                  <div className={styles.statItem}>
                    <span className={styles.statNum}>10+</span>
                    <span className={styles.statLabel}>Years of Experience</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statNum}>500+</span>
                    <span className={styles.statLabel}>Clients Served</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statNum}>98%</span>
                    <span className={styles.statLabel}>Client Satisfaction</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statNum}>20+</span>
                    <span className={styles.statLabel}>Legal Experts</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Challenge & How We Help */}
      <section className={styles.challengeSection}>
        <div className="container">
          <div className={styles.challengeGrid}>
            <ScrollReveal direction="left">
              <div className={styles.challengeCard}>
                <div className={styles.challengeIconBox}><Users size={24} /></div>
                <h3>The Challenge</h3>
                <p>{service.clientProblem}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className={styles.challengeCard}>
                <div className={styles.challengeIconBox}><ShieldCheck size={24} /></div>
                <h3>How Ducex Can Help</h3>
                <p>{service.howWeHelp}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Expertise Grid */}
      <section className={styles.expertiseSection}>
        <div className="container">
          <ScrollReveal direction="up">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>
              <span style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--font-bold)', color: 'var(--color-brass)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Our Specialisations
              </span>
              <h2 style={{ fontSize: 'var(--text-3xl)', color: 'var(--color-ink)', marginTop: 'var(--space-2)' }}>Our {service.title} Expertise</h2>
              <p style={{ color: 'var(--color-slate)', maxWidth: '600px', margin: '0 auto' }}>Comprehensive legal solutions tailored to your specific requirements.</p>
            </div>
          </ScrollReveal>

          <StaggerContainer className={styles.expertiseGrid}>
            {service.specificServices.map((item, index) => (
              <StaggerItem key={index}>
                <div className={styles.expertiseItem}>
                  <span className={styles.expertiseItemIcon}>{getServiceIcon(item)}</span>
                  <div className={styles.expertiseItemText}>
                    <strong>{item}</strong>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. Process Timeline */}
      <section className={styles.processSection}>
        <div className="container">
          <ScrollReveal direction="up">
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: 'var(--text-3xl)', color: 'var(--color-ink)' }}>Our Approach & Process</h2>
              <p style={{ color: 'var(--color-slate)', marginTop: 'var(--space-2)' }}>A systematic methodology designed to secure the best possible legal outcomes.</p>
            </div>
          </ScrollReveal>

          <div className={styles.processTimeline}>
            {service.process.map((step, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <div className={styles.processStep}>
                  <div className={styles.processCircle}>{index + 1}</div>
                  <div className={styles.processBody}>
                    <h4>{step.step}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQs + Expert Representation */}
      <section className={styles.faqExpertSection}>
        <div className="container">
          <div className={styles.faqExpertGrid}>

            {/* FAQ Column */}
            <ScrollReveal direction="left">
              <h2 className={styles.faqTitle}>Common Questions</h2>
              <div>
                {service.faqs.map((faq, index) => (
                  <div key={index} className={styles.faqItem}>
                    <button className={styles.faqQuestion} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                      {faq.question}
                      {openFaq === index ? <Minus size={16} style={{ flexShrink: 0, color: 'var(--color-brass)' }} /> : <Plus size={16} style={{ flexShrink: 0 }} />}
                    </button>
                    {openFaq === index && <p className={styles.faqAnswer}>{faq.answer}</p>}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Expert Representation Column */}
            <ScrollReveal direction="right">
              <h2 className={styles.expertTitle}>Expert Representation</h2>
              <p className={styles.expertSubtitle}>
                Your case will be handled by our distinguished specialists in {service.title}.
              </p>
              <div className={styles.expertCards}>
                {assignedLawyers.length > 0 ? (
                  assignedLawyers.map(lawyer => (
                    <div key={lawyer.id} className={styles.expertCard}>
                      <div className={styles.expertAvatar}>
                        <Image src={lawyer.image} alt={lawyer.name} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
                      </div>
                      <div className={styles.expertInfo}>
                        <h4>{lawyer.name}</h4>
                        <p className={styles.expertRole}>{lawyer.role}</p>
                        <Link href={`/team/${lawyer.slug}`} className={styles.expertLink}>
                          View Profile <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className={styles.expertCard}>
                    <div className={styles.expertAvatar}>
                      <Image src="/images/team/Barr Emma Duruigbo.png" alt="Ducex Legal Team" fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
                    </div>
                    <div className={styles.expertInfo}>
                      <h4>Emmanuel U. Duruigbo</h4>
                      <p className={styles.expertRole}>Senior Associate</p>
                      <Link href="/team/emmanuel-u-duruigbo" className={styles.expertLink}>
                        View Profile <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 7. Bottom CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className={styles.ctaBannerInner}>
              <div className={styles.ctaBannerLeft}>
                <div className={styles.ctaIconWrapper}>
                  <MessageSquare size={28} />
                </div>
                <div>
                  <h3 className={styles.ctaBannerTitle}>Need Expert Advice on {service.title}?</h3>
                  <p className={styles.ctaBannerDesc}>Schedule a confidential consultation with our specialized legal team today.</p>
                </div>
              </div>
              <Link href="/contact">
                <Button variant="accent" size="large">Request a Consultation →</Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};
