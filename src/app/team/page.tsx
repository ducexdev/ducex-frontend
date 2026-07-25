"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ArrowRight, Users, Mail } from 'lucide-react';
import { LinkedinIcon } from '../../components/ui/SocialIcons';
import { Button } from '../../components/ui/Button';
import { ScrollReveal } from '../../components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../components/animations/StaggerContainer';
import { team } from '../../data/team';
import styles from './Team.module.css';

const categories = ['All Professionals', 'Partners', 'Senior Associates', 'Associates', 'Support Staff'];

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState('All Professionals');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTeam = team.filter((member) => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          member.practices.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (activeTab === 'All Professionals') return matchesSearch;
    if (activeTab === 'Partners') {
      const isPartnerOrException = member.role.includes('Partner') || member.id === 'perpetua-duruigbo' || member.id === 'adaobi-m-okoye';
      if (isPartnerOrException) return matchesSearch;
    }
    if (activeTab === 'Senior Associates' && member.role.includes('Senior Associate')) return matchesSearch;
    if (activeTab === 'Associates' && member.role === 'Associate') return matchesSearch;
    if (activeTab === 'Support Staff' && member.role.includes('Staff')) return matchesSearch;
    
    return false;
  });

  return (
    <>
      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.heroGrid}>
              <div className={styles.heroLeft}>
                <span className={styles.sectionLabel}>Our Team</span>
                <h1 style={{ fontSize: 'clamp(var(--text-5xl), 5vw, 64px)', lineHeight: 1.1, marginBottom: 'var(--space-6)', color: 'var(--color-white)' }}>
                  Our People. Your <span className={styles.brassText}>Advocates.</span>
                </h1>
                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-parchment)', lineHeight: 'var(--lh-relaxed)' }}>
                  A team of distinguished legal professionals committed to delivering exceptional results with integrity, expertise, and a client-first mindset.
                </p>
              </div>
              <div className={styles.heroRight}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>20+</span>
                  <span className={styles.statLabel}>Legal Experts</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>500+</span>
                  <span className={styles.statLabel}>Clients Served</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>10+</span>
                  <span className={styles.statLabel}>Years of Excellence</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>95%</span>
                  <span className={styles.statLabel}>Client Satisfaction</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Filter & Search Section */}
      <section className={styles.filterSection}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className={styles.filterFlex}>
              <div className={styles.tabs}>
                {categories.map(category => (
                  <button 
                    key={category}
                    onClick={() => setActiveTab(category)}
                    className={`${styles.tabBtn} ${activeTab === category ? styles.tabActive : styles.tabInactive}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className={styles.searchWrapper}>
                <input 
                  type="text" 
                  placeholder="Search team member..." 
                  className={styles.searchInput}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search size={18} className={styles.searchIcon} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Team Grid Section */}
      <section className={styles.gridSection}>
        <div className="container">
          {filteredTeam.length > 0 ? (
            <StaggerContainer className={styles.teamGrid}>
              {filteredTeam.map(member => (
                <StaggerItem key={member.id}>
                  <div className={styles.card}>
                    <div className={styles.cardImageWrapper}>
                      <div className={styles.cardBadge}>{member.role}</div>
                      <Image 
                        src={member.image} 
                        alt={member.name} 
                        fill 
                        style={{ objectFit: 'cover', objectPosition: 'top' }} 
                      />
                    </div>
                    <div className={styles.cardBody}>
                      <h3 className={styles.cardName}>{member.name}</h3>
                      <span className={styles.cardRole}>{member.role}</span>
                      
                      <span className={styles.practiceLabel}>Practice Areas</span>
                      <ul className={styles.practiceList}>
                        {member.practices.map((area, idx) => (
                          <li key={idx} className={styles.practiceItem}>{area}</li>
                        ))}
                      </ul>
                      
                      <div className={styles.cardFooter}>
                        <div className={styles.socialIcons}>
                          <a href={member.social.linkedin || '#'} className={styles.socialIcon} aria-label="LinkedIn">
                            <LinkedinIcon size={20} />
                          </a>
                          <a href={`mailto:${member.social.email || ''}`} className={styles.socialIcon} aria-label="Email">
                            <Mail size={20} />
                          </a>
                        </div>
                        <Link href={`/team/${member.slug}`} className={styles.viewProfile}>
                          View Profile <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <div style={{ textAlign: 'center', padding: 'var(--space-16) 0', color: 'var(--color-slate)' }}>
              <p>No team members found matching your criteria.</p>
              <Button variant="ghost" onClick={() => {setSearchQuery(''); setActiveTab('All Professionals');}} style={{ marginTop: 'var(--space-4)' }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* 4. CTA Banner Section */}
      <section style={{ backgroundColor: 'var(--color-smoke)', paddingBottom: 'var(--space-20)' }}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className={styles.ctaBanner}>
              <div className={styles.ctaLeft}>
                <div className={styles.ctaIconWrapper}>
                  <Users size={32} />
                </div>
                <div>
                  <h2 className={styles.ctaTitle}>Collaborative Minds.<br/>Exceptional Outcomes.</h2>
                  <p className={styles.ctaDesc}>
                    Our diverse team works together to provide innovative legal solutions tailored to your unique needs.
                  </p>
                </div>
              </div>
              <Link href="/contact">
                <Button variant="accent" size="large">Work With Our Team</Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
