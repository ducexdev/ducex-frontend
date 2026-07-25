import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../components/ui/Button';
import { ScrollReveal } from '../../components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../components/animations/StaggerContainer';
import { AttorneyCard } from '../../components/page/AttorneyCard';
import { team } from '../../data/team';
import { 
  Play,
  CheckCircle2,
  ShieldCheck,
  Award,
  Users,
  Lock,
  Target,
  MapPin,
  MessageCircle
} from 'lucide-react';
import styles from './About.module.css';

export default function AboutPage() {
  const featuredTeam = team.slice(0, 4);

  return (
    <>
      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg}>
          <Image 
            src="/images/hero/hero1.png" 
            alt="Law scales and gavel" 
            fill 
            style={{ objectFit: 'cover' }} 
            priority
          />
        </div>
        <div className="container">
          <ScrollReveal>
            <div className={styles.heroContent}>
              <span className={styles.sectionLabel}>About Us</span>
              <h1 style={{ fontSize: 'clamp(var(--text-5xl), 5vw, 64px)', lineHeight: 1.1, marginBottom: 'var(--space-6)', color: 'var(--color-white)' }}>
                Built on <span className={styles.brassText}>Integrity.</span><br/>
                Driven by <span className={styles.brassText}>Results.</span>
              </h1>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-parchment)', lineHeight: 'var(--lh-relaxed)' }}>
                Ducex Solicitors is a premium law firm based in Lagos, Nigeria, 
                committed to delivering exceptional legal services and measurable results.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section style={{ padding: 'var(--space-24) 0', backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className={styles.storyGrid}>
            <ScrollReveal direction="left">
              <div style={{ maxWidth: '500px' }}>
                <span className={styles.sectionLabel}>Our Story</span>
                <h2 style={{ fontSize: 'var(--text-4xl)', color: 'var(--color-ink)', lineHeight: 1.1 }}>
                  Focused on Justice.<br/>Committed to You.
                </h2>
                <div className={styles.divider}></div>
                <div style={{ fontSize: 'var(--text-base)', color: 'var(--color-slate)', lineHeight: 'var(--lh-relaxed)', marginBottom: 'var(--space-8)' }}>
                  <p style={{ marginBottom: 'var(--space-4)' }}>
                    Founded in a passion for integrity, excellence, and unwavering dedication to our clients, Ducex Solicitors has grown into a trusted legal partner for individuals, businesses, and organizations.
                  </p>
                  <p>
                    Our journey began with a simple yet powerful mission: to provide world-class legal representation that is accessible, transparent, and results-driven. Over the years, we have built a reputation for navigating complex legal challenges with strategic insight and personalized solutions.
                  </p>
                </div>
                <Link href="/team">
                  <Button variant="accent">Meet Our Team &rarr;</Button>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className={styles.storyRight}>
                <div className={styles.storyImageWrapper}>
                  <Image src="/images/about/ducex-about.png" alt="Lady Justice" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.statsBar}>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>10+</span>
                    <span className={styles.statLabel}>Years of<br/>Excellence</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>500+</span>
                    <span className={styles.statLabel}>Clients<br/>Represented</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>20+</span>
                    <span className={styles.statLabel}>Practice<br/>Areas</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>95%</span>
                    <span className={styles.statLabel}>Client<br/>Satisfaction</span>
                  </div>
                </div>
                
                <div className={styles.foundersCard}>
                  <div className={styles.foundersImages}>
                    {featuredTeam.slice(0, 2).map((member, i) => (
                      <div key={member.id} style={{ position: 'absolute', left: i * 40, width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--color-white)', zIndex: 2 - i }}>
                        <Image src={member.image} alt={member.name} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 style={{ fontSize: 'var(--text-sm)', color: 'var(--color-ink)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-1)' }}>Founders & Leaders</h4>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-slate)', lineHeight: 1.4, marginBottom: 'var(--space-2)' }}>
                      Led by experienced legal professionals with a shared vision for excellence.
                    </p>
                    <Link href="/team" style={{ fontSize: 'var(--text-xs)', color: 'var(--color-brass)', fontWeight: 'var(--font-bold)' }}>
                      Learn More About Our Team &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Our Approach Section */}
      <section className={styles.approachSection}>
        <div className="container">
          <div className={styles.approachGrid}>
            <ScrollReveal direction="left">
              <div className={styles.approachLeft}>
                <div className={styles.videoCard}>
                  <Image src="/images/about/duce1.png" alt="Legal Consultation Video" fill style={{ objectFit: 'cover' }} />
                  <div className={styles.playButton}>
                    <Play size={24} fill="currentColor" />
                  </div>
                </div>
                <div className={styles.featureList}>
                  <div className={styles.featureItem}>
                    <Target size={32} className={styles.featureIcon} />
                    <span className={styles.featureTitle}>Client-Centered</span>
                    <p className={styles.featureDesc}>We listen, understand, and tailor solutions that meet your unique needs.</p>
                  </div>
                  <div className={styles.featureItem}>
                    <MapPin size={32} className={styles.featureIcon} />
                    <span className={styles.featureTitle}>Strategic & Practical</span>
                    <p className={styles.featureDesc}>We combine legal expertise with practical thinking to deliver effective outcomes.</p>
                  </div>
                  <div className={styles.featureItem}>
                    <MessageCircle size={32} className={styles.featureIcon} />
                    <span className={styles.featureTitle}>Responsive & Transparent</span>
                    <p className={styles.featureDesc}>We keep you informed every step of the way with clarity and honesty.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div style={{ paddingLeft: 'var(--space-12)' }}>
                <span className={styles.sectionLabel}>Our Approach</span>
                <h2 style={{ fontSize: 'var(--text-4xl)', color: 'var(--color-ink)', lineHeight: 1.1 }}>
                  Strategic. Practical.<br/>Client-Focused.
                </h2>
                <div className={styles.divider}></div>
                
                <div style={{ fontSize: 'var(--text-base)', color: 'var(--color-slate)', lineHeight: 'var(--lh-relaxed)' }}>
                  <p style={{ marginBottom: 'var(--space-4)' }}>
                    We believe that effective legal representation is about more than just knowing the law—it&apos;s about understanding your goals and delivering solutions that make a real difference.
                  </p>
                  <p>
                    Our approach is highly personalized. We take the time to listen, analyze, and craft strategies that are aligned with your objectives. We combine deep legal knowledge with commercial insight to help you move forward with confidence.
                  </p>
                </div>
                
                <div className={styles.checkList}>
                  <div className={styles.checkItem}>
                    <CheckCircle2 size={20} className={styles.checkIcon} />
                    <span>We deliver tailored legal solutions</span>
                  </div>
                  <div className={styles.checkItem}>
                    <CheckCircle2 size={20} className={styles.checkIcon} />
                    <span>We act with integrity and professionalism</span>
                  </div>
                  <div className={styles.checkItem}>
                    <CheckCircle2 size={20} className={styles.checkIcon} />
                    <span>We are committed to your success</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Core Values Section */}
      <section className={styles.valuesSection}>
        <div className="container">
          <div className={styles.valuesHeader}>
            <ScrollReveal direction="left">
              <div>
                <span className={styles.sectionLabel}>Our Core Values</span>
                <h2 style={{ fontSize: 'var(--text-4xl)', color: 'var(--color-white)', lineHeight: 1.1 }}>
                  The principles that<br/>guide everything we do.
                </h2>
              </div>
            </ScrollReveal>
          </div>
          
          <StaggerContainer className={styles.valuesGrid}>
            <StaggerItem>
              <div className={styles.valueCard}>
                <div className={styles.valueIconWrapper}><ShieldCheck size={48} strokeWidth={1.5} /></div>
                <h3 className={styles.valueTitle}>Integrity</h3>
                <p className={styles.valueDesc}>We uphold the highest ethical standards in every case we handle.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className={styles.valueCard}>
                <div className={styles.valueIconWrapper}><Award size={48} strokeWidth={1.5} /></div>
                <h3 className={styles.valueTitle}>Excellence</h3>
                <p className={styles.valueDesc}>We are committed to delivering superior legal solutions and results.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className={styles.valueCard}>
                <div className={styles.valueIconWrapper}><Users size={48} strokeWidth={1.5} /></div>
                <h3 className={styles.valueTitle}>Dedication</h3>
                <p className={styles.valueDesc}>Our clients&apos; success is our mission. We go the extra mile.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className={styles.valueCard}>
                <div className={styles.valueIconWrapper}><Lock size={48} strokeWidth={1.5} /></div>
                <h3 className={styles.valueTitle}>Confidentiality</h3>
                <p className={styles.valueDesc}>We protect your information with the utmost discretion.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 5. Our People Section */}
      <section className={styles.peopleSection}>
        <div className="container">
          <div className={styles.peopleGrid}>
            <ScrollReveal direction="left">
              <div>
                <span className={styles.sectionLabel}>Our People</span>
                <h2 style={{ fontSize: 'var(--text-4xl)', color: 'var(--color-ink)', lineHeight: 1.1 }}>
                  Experience. Expertise.<br/>Results.
                </h2>
                <div className={styles.divider}></div>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-slate)', lineHeight: 'var(--lh-relaxed)', marginBottom: 'var(--space-8)' }}>
                  Our team of seasoned attorneys brings a wealth of experience across diverse practice areas. We work collaboratively to provide innovative solutions and exceptional service.
                </p>
                <Link href="/team">
                  <Button variant="primary">View Our Attorneys &rarr;</Button>
                </Link>
              </div>
            </ScrollReveal>

            <StaggerContainer className={styles.teamGrid}>
              {featuredTeam.map(member => (
                <StaggerItem key={member.id}>
                  <AttorneyCard member={member} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className={styles.ctaFlex}>
              <div>
                <h2 className={styles.ctaTitle}>Let&apos;s work together to<br/>achieve the best outcome.</h2>
                <p style={{ color: 'var(--color-slate-light)', fontSize: 'var(--text-base)' }}>We&apos;re ready to listen and provide the legal support you need.</p>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                <Link href="/contact">
                  <Button variant="accent">Book a Consultation</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="ghost" style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'var(--color-white)' }}>Contact Us</Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
