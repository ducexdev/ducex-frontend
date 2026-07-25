'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck, Clock, Award, MapPin, Phone, Mail, Globe,
  Calendar, Headset, User, Send, Navigation, Lock
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { ScrollReveal } from '../../components/animations/ScrollReveal';
import styles from './Contact.module.css';

export const ContactClient = () => {
  return (
    <>
      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroLeft}>
            <ScrollReveal direction="up">
              <div className={styles.heroContent}>
                <span className={styles.kicker}>Contact Us</span>
                <h1 className={styles.heroTitle}>We're Here to Help</h1>
                <p className={styles.heroSubtitle}>
                  Schedule a consultation or reach out to our team with your legal inquiries.
                </p>

                <div className={styles.trustMarkers}>
                  <div className={styles.trustMarker}>
                    <div className={styles.trustIcon}><ShieldCheck size={18} /></div>
                    <div className={styles.trustText}>
                      <strong>Confidential</strong>
                      <span>Your privacy is always protected.</span>
                    </div>
                  </div>
                  <div className={styles.trustMarker}>
                    <div className={styles.trustIcon}><Clock size={18} /></div>
                    <div className={styles.trustText}>
                      <strong>Quick Response</strong>
                      <span>We respond within 24 hours.</span>
                    </div>
                  </div>
                  <div className={styles.trustMarker}>
                    <div className={styles.trustIcon}><Award size={18} /></div>
                    <div className={styles.trustText}>
                      <strong>Expert Guidance</strong>
                      <span>Get advice from experienced lawyers.</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className={styles.heroImageColumn}>
            <Image
              src="/images/contact-hero.jpg"
              alt="Ducex Solicitors Contact"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. Main Grid (Office & Form) */}
      <section className={styles.mainSection}>
        <div className="container">
          <div className={styles.mainGrid}>
            
            {/* Left: Office Info */}
            <div className={styles.leftColumn}>
              <ScrollReveal direction="up" delay={0.1}>
                <h2 className={styles.sectionTitle}>Our Office</h2>
                <div className={styles.sectionLine}></div>

                <div className={styles.officeCard}>
                  <div className={styles.officeHeader}>
                    <div className={styles.officeIcon}><MapPin size={24} /></div>
                    <div>
                      <h4>Lagos Headquarters</h4>
                      <p>Ilepo Abulado, Abule Ado,<br />Satellite Town, Ojo,<br />Lagos, Nigeria</p>
                    </div>
                  </div>
                  <ul className={styles.contactList}>
                    <li className={styles.contactListItem}>
                      <Phone size={18} />
                      <a href="tel:+2348034567890">+234 803 456 7890</a>
                    </li>
                    <li className={styles.contactListItem}>
                      <Mail size={18} />
                      <a href="mailto:info@ducexsolicitors.com">info@ducexsolicitors.com</a>
                    </li>
                    <li className={styles.contactListItem}>
                      <Globe size={18} />
                      <a href="https://www.ducexsolicitors.com" target="_blank" rel="noreferrer">www.ducexsolicitors.com</a>
                    </li>
                  </ul>
                </div>

                <h2 className={styles.sectionTitle}>Business Hours</h2>
                <div className={styles.sectionLine}></div>
                
                <div className={styles.hoursCard}>
                  <ul className={styles.hoursList}>
                    <li className={styles.hoursItem}>
                      <span>Monday - Friday</span>
                      <strong>8:00 AM - 5:30 PM</strong>
                    </li>
                    <li className={`${styles.hoursItem} ${styles.closed}`}>
                      <span>Saturday</span>
                      <strong>Closed</strong>
                    </li>
                    <li className={`${styles.hoursItem} ${styles.closed}`}>
                      <span>Sunday</span>
                      <strong>Closed</strong>
                    </li>
                  </ul>
                </div>

                <div className={styles.featuresGrid}>
                  <div className={styles.featureCard}>
                    <div className={styles.featureIcon}><Calendar size={24} /></div>
                    <h5>Book Online</h5>
                    <p>Schedule a consultation at your convenience.</p>
                  </div>
                  <div className={styles.featureCard}>
                    <div className={styles.featureIcon}><Headset size={24} /></div>
                    <h5>Call Us</h5>
                    <p>Speak directly with our legal experts.</p>
                  </div>
                  <div className={styles.featureCard}>
                    <div className={styles.featureIcon}><ShieldCheck size={24} /></div>
                    <h5>Confidential</h5>
                    <p>Your information is 100% secure.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Contact Form */}
            <div className={styles.rightColumn}>
              <ScrollReveal direction="up" delay={0.2}>
                <div className={styles.formCard}>
                  <div className={styles.formHeader}>
                    <h3>Send Us an Inquiry</h3>
                    <p>Fill out the form below and a member of our team will get back to you promptly.</p>
                  </div>
                  
                  <div className={styles.formBody}>
                    <form className={styles.formGrid}>
                      <div className={styles.formGroup}>
                        <label>Full Name</label>
                        <div className={styles.inputWrapper}>
                          <User size={18} className={styles.inputIcon} />
                          <input type="text" className={styles.inputField} placeholder="Jane Doe" required />
                        </div>
                      </div>

                      <div className={styles.formGroup}>
                        <label>Email Address</label>
                        <div className={styles.inputWrapper}>
                          <Mail size={18} className={styles.inputIcon} />
                          <input type="email" className={styles.inputField} placeholder="jane@example.com" required />
                        </div>
                      </div>

                      <div className={styles.formGroup}>
                        <label>Phone Number</label>
                        <div className={styles.inputWrapper}>
                          <Phone size={18} className={styles.inputIcon} />
                          <input type="tel" className={styles.inputField} placeholder="+234 803 456 7890" />
                        </div>
                      </div>

                      <div className={styles.formGroup}>
                        <label>Area of Interest</label>
                        <select className={styles.selectField} required>
                          <option value="">Select a practice area...</option>
                          <option value="corporate">Corporate & Commercial</option>
                          <option value="real-estate">Real Estate & Property</option>
                          <option value="litigation">Litigation & Dispute Resolution</option>
                          <option value="family">Family Law</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className={styles.formGroup}>
                        <label>Message</label>
                        <textarea className={styles.textareaField} placeholder="How can we assist you?" required></textarea>
                      </div>

                      <button type="submit" className={styles.submitBtn}>
                        Submit Inquiry <Send size={18} />
                      </button>

                      <div className={styles.formFooter}>
                        <Lock size={14} />
                        <p>By submitting this form, you agree to our Privacy Policy.<br />We do not share your information with third parties.</p>
                      </div>
                    </form>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Map Section */}
      <section className={styles.mapSection}>
        <Image
          src="/images/contact-map.jpg"
          alt="Satellite Town Map"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.mapCard}>
          <h3>Visit Our Office</h3>
          <p>We are conveniently located in Satellite Town, Ojo, Lagos.</p>
          <a href="https://maps.google.com" target="_blank" rel="noreferrer" className={styles.directionsBtn}>
            Get Directions <Navigation size={16} />
          </a>
        </div>
      </section>

      {/* 4. Bottom CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaBannerInner}>
            <div className={styles.ctaBannerLeft}>
              <div className={styles.ctaIconWrapper}>
                <Headset size={28} />
              </div>
              <div>
                <h3 className={styles.ctaBannerTitle}>Need Immediate Assistance?</h3>
                <p className={styles.ctaBannerDesc}>Our team is ready to provide the legal support you need.</p>
              </div>
            </div>
            
            <div className={styles.ctaButtons}>
              <Link href="/consultation">
                <Button variant="accent" size="large">
                  <Calendar size={18} /> Book a Consultation
                </Button>
              </Link>
              <a href="tel:+2348034567890" className={styles.callNowBtn}>
                <Phone size={18} /> Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
