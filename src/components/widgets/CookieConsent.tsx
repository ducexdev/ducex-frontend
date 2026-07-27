'use client';

import React, { useState, useEffect } from 'react';
import styles from './CookieConsent.module.css';
import Link from 'next/link';

export const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('ducex_cookie_consent');
    if (!consent) {
      // Small delay so it doesn't flash immediately on load
      const timer = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('ducex_cookie_consent', 'accepted');
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem('ducex_cookie_consent', 'declined');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className={styles.cookieContainer} role="dialog" aria-label="Cookie consent">
      <div className={styles.cookieContent}>
        <p className={styles.cookieTitle}>🍪 We use cookies</p>
        <p className={styles.cookieText}>
          We use strictly necessary cookies to operate our website and optional analytics cookies (Google Analytics 4) to understand how visitors use it. By clicking <strong>&quot;Accept All&quot;</strong>, you consent to our use of all cookies. You can manage your preferences at any time.{' '}
          <Link href="/cookie-policy" className={styles.link}>Cookie Policy</Link>
          {' · '}
          <Link href="/privacy-policy" className={styles.link}>Privacy Policy</Link>
        </p>
        <div className={styles.buttonRow}>
          <button onClick={handleDecline} className={styles.declineButton}>
            Essential Only
          </button>
          <button onClick={handleAccept} className={styles.acceptButton}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};
