import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Scale, Home, Briefcase, Phone, ArrowLeft } from 'lucide-react';
import styles from './NotFound.module.css';

export const metadata: Metadata = {
  title: '404 — Page Not Found | Ducex Solicitors',
  description: 'The page you are looking for could not be found. Return to Ducex Solicitors home page.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        {/* Animated Icon */}
        <div className={styles.iconWrapper}>
          <Scale size={40} strokeWidth={1.5} />
        </div>

        {/* 404 Code */}
        <div className={styles.code}>404</div>

        {/* Heading */}
        <h1 className={styles.title}>Page Not Found</h1>

        {/* Message */}
        <p className={styles.message}>
          The page you&apos;re looking for may have been moved, renamed, or no longer exists.
          Let us help you find what you need.
        </p>

        {/* Primary Actions */}
        <div className={styles.actions}>
          <Link href="/" className={styles.btnPrimary}>
            <Home size={16} /> Return Home
          </Link>
          <Link href="/services" className={styles.btnSecondary}>
            <Briefcase size={16} /> Browse Services
          </Link>
          <Link href="/contact" className={styles.btnSecondary}>
            <Phone size={16} /> Contact Us
          </Link>
        </div>

        <div className={styles.divider} />

        {/* Help Links */}
        <div className={styles.helpLinks}>
          <Link href="/insights" className={styles.helpLink}>Legal Insights</Link>
          <Link href="/team" className={styles.helpLink}>Our Team</Link>
          <Link href="/consultation" className={styles.helpLink}>Book Consultation</Link>
          <Link href="/about" className={styles.helpLink}>About Us</Link>
        </div>
      </div>
    </div>
  );
}
