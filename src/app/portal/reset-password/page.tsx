"use client";
import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Lock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import styles from './Reset.module.css';
import apiClient from '@/utils/apiClient';
import { useRouter, useSearchParams } from 'next/navigation';

function ResetPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      setError('Invalid or missing reset token.');
    }
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    
    setIsLoading(true);
    setError('');
    setSuccess('');
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }
    
    try {
      await apiClient.post('/auth/reset-password', { token, password });
      setSuccess('Your password has been successfully reset. You will be redirected to login.');
      setTimeout(() => {
        router.push('/portal/login');
      }, 3000);
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || err.response?.data?.error || 'Failed to reset password');
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
          src="/images/hero/hero4.jpg" 
          alt="Ducex Solicitors Password Reset" 
          fill 
          style={{ objectFit: 'cover' }} 
          priority
        />
        <div className={styles.imageText}>
          <h2 style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-2)', fontFamily: 'var(--font-heading)' }}>Set New Password</h2>
          <p style={{ color: 'var(--color-parchment)', fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)' }}>
            Choose a strong password to protect your client portal access.
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

            <h1 className={styles.title}>Reset Password</h1>
            <p className={styles.subtitle}>Enter your new password below.</p>

            {success ? (
              <div style={{ color: 'green', marginBottom: '1rem', fontSize: '16px', backgroundColor: '#e6ffe6', padding: '15px', borderRadius: '4px', textAlign: 'center' }}>
                {success}
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="password" className={styles.label}>New Password</label>
                  <input 
                    type="password" 
                    id="password" 
                    className={styles.input} 
                    placeholder="••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                    minLength={8}
                    disabled={!token}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="confirmPassword" className={styles.label}>Confirm New Password</label>
                  <input 
                    type="password" 
                    id="confirmPassword" 
                    className={styles.input} 
                    placeholder="••••••••" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required 
                    minLength={8}
                    disabled={!token}
                  />
                </div>

                {error && <div style={{ color: 'red', marginBottom: '1rem', fontSize: '14px' }}>{error}</div>}

                <Button 
                  type="submit" 
                  variant="accent" 
                  size="large" 
                  fullWidth 
                  isLoading={isLoading}
                  style={{ marginTop: 'var(--space-4)' }}
                  disabled={!token}
                >
                  Reset Password
                </Button>
              </form>
            )}

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

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordForm />
    </Suspense>
  );
}
