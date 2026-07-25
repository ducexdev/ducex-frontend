"use client";
import React from 'react';
import Image from 'next/image';
import { Quote, Star } from 'lucide-react';
import { ScrollReveal } from '../../components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../components/animations/StaggerContainer';
import styles from './Testimonials.module.css';

const MOCK_CASE_STUDIES = [
  {
    id: 1,
    title: "Facilitating a $50M Cross-Border Tech Acquisition",
    challenge: "A leading Nigerian fintech startup required comprehensive legal structuring and due diligence to facilitate an acquisition by a European conglomerate without violating local data sovereignty laws.",
    approach: "Our corporate M&A team restructured the entity's IP holdings, negotiated the purchase agreement, and secured necessary regulatory approvals from the SEC and NDPC.",
    result: "The acquisition closed 3 weeks ahead of schedule with zero regulatory friction, allowing the founders to retain a 15% equity stake.",
    image: "/images/hero/hero1.png"
  },
  {
    id: 2,
    title: "Landmark Environmental Dispute Resolution",
    challenge: "A multinational energy company faced a class-action lawsuit from a local community regarding alleged environmental degradation, seeking massive punitive damages.",
    approach: "Ducex Solicitors deployed a strategic alternative dispute resolution (ADR) mechanism, combining expert environmental analysis with community-focused mediation.",
    result: "Achieved a mutually beneficial settlement that funded a local sustainability project, saving the client millions in litigation costs and preserving their public reputation.",
    image: "/images/about/duce1.png"
  }
];

const MOCK_TESTIMONIALS = [
  {
    id: 1,
    quote: "Ducex Solicitors didn't just provide legal advice; they became true partners in our growth. Their strategic foresight during our Series B funding round was nothing short of brilliant.",
    name: "Dr. Olumide Johnson",
    role: "CEO, TechNova Solutions",
    image: "/images/team/Barr Emma Duruigbo.png"
  },
  {
    id: 2,
    quote: "When faced with a highly complex commercial dispute that threatened our core operations, Ducex Solicitors handled the litigation with aggressive precision and ultimate success.",
    name: "Amina Aliyu",
    role: "Managing Director, Apex Logistics",
    image: "/images/team/Barr Perpetua Duruigbo.png"
  },
  {
    id: 3,
    quote: "Their real estate team is unmatched. They handled the acquisition of our new manufacturing facility flawlessly, identifying and mitigating zoning risks we hadn't even considered.",
    name: "Michael Chen",
    role: "Director of Operations, Global Manufacturing Co.",
    image: "/images/team/Barr Adaobi Miriam Okoli (Nee Okoye).png"
  }
];

export default function TestimonialsPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-smoke)', minHeight: '100vh' }}>
      <section className={styles.heroSection}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className={styles.heroContent}>
              <span className={styles.sectionLabel}>Client Stories</span>
              <h1 style={{ fontSize: 'clamp(var(--text-4xl), 5vw, 56px)', lineHeight: 1.1, marginBottom: 'var(--space-6)', color: 'var(--color-white)' }}>
                Exceptional Outcomes for <span className={styles.brassText}>Exceptional Clients.</span>
              </h1>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-parchment)', lineHeight: 'var(--lh-relaxed)' }}>
                Discover how we have partnered with individuals and corporations to navigate complex legal landscapes and achieve definitive success.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className="container">
          
          {/* Case Studies */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
            <h2 style={{ fontSize: 'var(--text-3xl)', color: 'var(--color-ink)' }}>Landmark Case Studies</h2>
            <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--color-brass)', margin: 'var(--space-4) auto' }}></div>
          </div>
          
          <div className={styles.caseStudyGrid}>
            {MOCK_CASE_STUDIES.map((study, index) => (
              <ScrollReveal key={study.id} direction={index % 2 === 0 ? "left" : "right"}>
                <div className={styles.caseStudyCard}>
                  {index % 2 === 1 && (
                    <div className={styles.caseImageWrapper} style={{ order: 2 }}>
                      <Image src={study.image} alt={study.title} fill style={{ objectFit: 'cover' }} />
                    </div>
                  )}
                  {index % 2 === 0 && (
                    <div className={styles.caseImageWrapper}>
                      <Image src={study.image} alt={study.title} fill style={{ objectFit: 'cover' }} />
                    </div>
                  )}
                  
                  <div className={styles.caseBody} style={{ order: index % 2 === 1 ? 1 : 2 }}>
                    <h3 className={styles.caseTitle}>{study.title}</h3>
                    
                    <div className={styles.caseDetail}>
                      <span className={styles.detailLabel}>The Challenge</span>
                      <p className={styles.detailText}>{study.challenge}</p>
                    </div>
                    
                    <div className={styles.caseDetail}>
                      <span className={styles.detailLabel}>Our Approach</span>
                      <p className={styles.detailText}>{study.approach}</p>
                    </div>
                    
                    <div className={styles.caseDetail}>
                      <span className={styles.detailLabel}>The Result</span>
                      <p className={styles.detailText} style={{ color: 'var(--color-ink)', fontWeight: 'var(--font-medium)' }}>
                        {study.result}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Testimonials */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)', marginTop: 'var(--space-24)' }}>
            <h2 style={{ fontSize: 'var(--text-3xl)', color: 'var(--color-ink)' }}>What Our Clients Say</h2>
            <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--color-brass)', margin: 'var(--space-4) auto' }}></div>
          </div>

          <StaggerContainer className={styles.testimonialGrid}>
            {MOCK_TESTIMONIALS.map(testimonial => (
              <StaggerItem key={testimonial.id}>
                <div className={styles.testimonialCard}>
                  <Quote size={48} className={styles.quoteIcon} />
                  <div className={styles.rating}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className={styles.quoteText}>"{testimonial.quote}"</p>
                  <div className={styles.authorBox}>
                    <div className={styles.authorImage}>
                      <Image src={testimonial.image} alt={testimonial.name} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
                    </div>
                    <div className={styles.authorInfo}>
                      <span className={styles.authorName}>{testimonial.name}</span>
                      <span className={styles.authorRole}>{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>
    </div>
  );
}
