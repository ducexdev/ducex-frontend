'use client';

import React, { useState, useEffect } from 'react';
import styles from './CookieConsent.module.css';
import Link from 'next/link';

export const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('ducex_cookie_consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('ducex_cookie_consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className={styles.cookieContainer}>
      <div className={styles.cookieContent}>
        <p>
          We use cookies to enhance your experience and analyze traffic. 
          By clicking &quot;Accept&quot;, you consent to our use of cookies. 
          Read our <Link href="/privacy-policy" className={styles.link}>Privacy Policy</Link>.
        </p>
        <button onClick={handleAccept} className={styles.acceptButton}>
          Accept
        </button>
      </div>
    </div>
  );
};
