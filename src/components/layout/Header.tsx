"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { services } from '../../data/services';
import { Phone, Mail, Clock } from 'lucide-react';
import { LinkedinIcon, FacebookIcon, TwitterIcon, InstagramIcon } from '../ui/SocialIcons';
import styles from './Header.module.css';

export const Header = () => {
  const handleLinkClick = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <header className={styles.header}>
      {/* Topbar */}
      <div className={styles.topbar}>
        <div className={`container ${styles.topbarContainer}`}>
          <div className={styles.topbarLeft}>
            <span className={styles.topbarItem}><Phone size={14} /> +234 803 456 7890</span>
            <span className={styles.topbarItem}><Mail size={14} /> info@ducexsolicitors.com</span>
            <span className={styles.topbarItem}><Clock size={14} /> Mon - Fri, 8:00AM - 6:00PM</span>
          </div>
          <div className={styles.topbarRight}>
            <a href="#" className={styles.socialIcon} aria-label="LinkedIn"><LinkedinIcon size={16} /></a>
            <a href="#" className={styles.socialIcon} aria-label="Facebook"><FacebookIcon size={16} /></a>
            <a href="#" className={styles.socialIcon} aria-label="Twitter"><TwitterIcon size={16} /></a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram"><InstagramIcon size={16} /></a>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <Link href="/" aria-label="Ducex Solicitors Home">
            <div className={styles.logoText}>
              <Image src="/images/logo.png" alt="Ducex Solicitors Logo" width={180} height={36} style={{ objectFit: 'contain' }} priority />
            </div>
          </Link>
        </div>
        
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          <ul className={styles.navLinks}>
            <li className={styles.navItemContainer}><Link href="/about" className={styles.navLink}>About</Link></li>
            
            <li className={styles.navItemContainer}>
              <Link href="/services" className={styles.navLink}>Services</Link>
              <div className={styles.megaMenu}>
                {services.map((service) => (
                  <Link key={service.id} href={`/services/${service.slug}`} className={styles.megaMenuLink} onClick={handleLinkClick}>
                    <span className={styles.megaMenuTitle}>{service.title}</span>
                    <span className={styles.megaMenuDesc}>{service.shortDescription}</span>
                  </Link>
                ))}
              </div>
            </li>

            <li className={styles.navItemContainer}><Link href="/team" className={styles.navLink}>Our Team</Link></li>
            <li className={styles.navItemContainer}><Link href="/insights" className={styles.navLink}>Insights</Link></li>
            <li className={styles.navItemContainer}><Link href="/testimonials" className={styles.navLink}>Client Stories</Link></li>
            <li className={styles.navItemContainer}><Link href="/legal-navigator" className={styles.navLink}>Legal Navigator</Link></li>
          </ul>
        </nav>
        
        <div className={styles.actions}>
          <Link href="/portal/login">
            <Button variant="ghost" className={styles.loginBtn}>Client Portal</Button>
          </Link>
          <Link href="/contact">
            <Button variant="primary" size="small">Book a Consultation</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
