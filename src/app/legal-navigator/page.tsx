"use client";
import React from 'react';
import { LegalNavigator } from '../../components/navigator/LegalNavigator';
import { navigatorQuestions, navigatorResults } from '../../data/navigator';
import { ScrollReveal } from '../../components/animations/ScrollReveal';
import { Button } from '../../components/ui/Button';
import { ShieldCheck, Clock, UserCheck, Info } from 'lucide-react';
import Link from 'next/link';
import styles from './LegalNavigatorPage.module.css';

export default function LegalNavigatorPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-white)', minHeight: '100vh', paddingBottom: 0 }}>
      
      {/* 1. Cinematic Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}></div>
        <div className="container">
          <ScrollReveal direction="up">
            <div className={styles.heroContent}>
              <span className={styles.sectionLabel}>LEGAL NAVIGATOR</span>
              
              <h1 className={styles.heroTitle}>
                Find The Right Legal Solution, <span className={styles.brassText}>Faster.</span>
              </h1>
              
              <p className={styles.heroDesc}>
                Answer a few simple questions and we'll connect you with the most relevant legal services and experts for your situation.
              </p>

              <div className={styles.trustMarkers}>
                <div className={styles.trustMarker}>
                  <ShieldCheck size={20} className={styles.trustIcon} /> Confidential
                </div>
                <div className={styles.trustMarker}>
                  <Clock size={20} className={styles.trustIcon} /> Quick & Easy
                </div>
                <div className={styles.trustMarker}>
                  <UserCheck size={20} className={styles.trustIcon} /> Expert Matched
                </div>
              </div>

              <div className={styles.disclaimerBox}>
                <Info size={24} className={styles.infoIcon} />
                <p className={styles.disclaimerText}>
                  <strong>Disclaimer:</strong> This tool provides general information to help you identify a potentially relevant area of legal assistance. <strong>It does not constitute legal advice and does not create an attorney-client relationship.</strong>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Interactive Wizard Container */}
      <section style={{ padding: 'var(--space-8) 0' }}>
        <div className="container">
          <ScrollReveal>
            <LegalNavigator 
              questions={navigatorQuestions} 
              results={navigatorResults} 
            />
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Dark CTA Banner */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBg}></div>
        <div className="container">
          <ScrollReveal direction="up">
            <div className={styles.ctaContent}>
              <div>
                <h2 className={styles.ctaTitle}>Need expert guidance?</h2>
                <p className={styles.ctaDesc}>Speak with our team and get the right legal support tailored to your needs.</p>
              </div>
              <div className={styles.ctaButtons}>
                <Link href="/contact">
                  <Button variant="accent">Book a Consultation</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="secondary">Contact Us</Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
