"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Lock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import styles from './Forgot.module.css';
import apiClient from '@/utils/apiClient';

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');
    
    try {
      await apiClient.post('/auth/forgot-password', { email });
      setSuccess('If that email exists in our system, you will receive a password reset link shortly.');
      setEmail('');
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || err.response?.data?.error || 'Failed to process request');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.splitLayout}>
      
      {/* Left Side - Image/Branding */}
      <div className={styles.imageHalf}>
        <div className={styles.imageOverlay}></div>
        <Image 
          src="/images/hero/hero3.jpg" 
          alt="Ducex Solicitors Password Reset" 
          fill 
          style={{ objectFit: 'cover' }} 
          priority
        />
        <div className={styles.imageText}>
          <h2 style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-2)', fontFamily: 'var(--font-heading)' }}>Account Recovery</h2>
          <p style={{ color: 'var(--color-parchment)', fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)' }}>
            Securely reset your password to regain access to your confidential client portal and legal documents.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className={styles.formHalf}>
        <div className={styles.formContainer}>
          <ScrollReveal direction="up">
            <Link href="/" className={styles.logoWrapper}>
              <div style={{ position: 'relative', width: '150px', height: '30px' }}>
                <Image src="/images/logo.png" alt="Ducex Solicitors" fill style={{ objectFit: 'contain', filter: 'brightness(0)' }} />
              </div>
            </Link>

            <h1 className={styles.title}>Forgot Password</h1>
            <p className={styles.subtitle}>Enter your email address and we'll send you a link to reset your password.</p>

            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className={styles.input} 
                  placeholder="client@company.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>

              {error && <div style={{ color: 'red', marginBottom: '1rem', fontSize: '14px' }}>{error}</div>}
              {success && <div style={{ color: 'green', marginBottom: '1rem', fontSize: '14px', backgroundColor: '#e6ffe6', padding: '10px', borderRadius: '4px' }}>{success}</div>}

              <Button 
                type="submit" 
                variant="accent" 
                size="large" 
                fullWidth 
                isLoading={isLoading}
                style={{ marginTop: 'var(--space-4)' }}
              >
                Send Reset Link
              </Button>
            </form>

            <div className={styles.divider}>or</div>

            <Link href="/portal/login" style={{ width: '100%', display: 'block' }}>
              <Button variant="secondary" size="large" fullWidth>
                Return to Login
              </Button>
            </Link>

            <div className={styles.secureBadge}>
              <Lock size={14} />
              <span>256-bit Encrypted Connection</span>
            </div>
          </ScrollReveal>
        </div>
      </div>

    </div>
  );
}
