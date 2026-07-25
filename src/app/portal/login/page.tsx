"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Lock, Mail, Eye, EyeOff, Users, MessageSquare, Scale, Shield, Headphones, ShieldCheck, HeadphonesIcon, ArrowRight, UserPlus } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { ScrollReveal } from '../../../components/animations/ScrollReveal';
import styles from './Login.module.css';
import apiClient from '../../../utils/apiClient';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await apiClient.post('/auth/login', { email, password });
      const { accessToken, refreshToken } = response.data.data;
      
      Cookies.set('ducex_access_token', accessToken, { expires: rememberMe ? 7 : 1/96 });
      Cookies.set('ducex_refresh_token', refreshToken, { expires: 7 });
      
      router.push('/portal/dashboard');
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || err.response?.data?.error || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.splitLayout}>
      
      {/* Left Side - Hero Section */}
      <div className={styles.imageHalf}>
        <div className={styles.imageOverlay}></div>
        <Image 
          src="/images/hero/hero1.png" 
          alt="Ducex Solicitors Legal Team" 
          fill 
          style={{ objectFit: 'cover', objectPosition: 'center' }} 
          priority
        />
        
        <div className={styles.heroContent}>
          <div className={styles.logoWrapper}>
            <Link href="/" aria-label="Ducex Solicitors Home">
              <div style={{ position: 'relative', width: '150px', height: '35px' }}>
                <Image src="/images/logo-transparent-white.png" alt="Ducex Solicitors" fill style={{ objectFit: 'contain' }} />
              </div>
            </Link>
          </div>

          <h1 className={styles.heroTitle}>
            Secure. Smart.<br/><span>Seamless.</span>
          </h1>
          <div className={styles.goldLine}></div>
          
          <p className={styles.heroDescription}>
            Access your confidential case files, track real-time litigation progress, and communicate directly with your dedicated legal team through our encrypted client portal.
          </p>

          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <ShieldCheck size={28} className={styles.featureIcon} />
              <div>
                <h3 className={styles.featureTitle}>Bank-Grade Security</h3>
                <p className={styles.featureDesc}>Your data is protected with 256-bit encryption.</p>
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <Users size={28} className={styles.featureIcon} />
              <div>
                <h3 className={styles.featureTitle}>Real-Time Updates</h3>
                <p className={styles.featureDesc}>Stay informed with instant case and document updates.</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <MessageSquare size={28} className={styles.featureIcon} />
              <div>
                <h3 className={styles.featureTitle}>Direct Communication</h3>
                <p className={styles.featureDesc}>Message your legal team securely within the portal.</p>
              </div>
            </div>
          </div>

          <div className={styles.trustFooter}>
            <ShieldCheck size={24} color="var(--color-brass)" />
            <div className={styles.trustText}>
              <p>Trusted by businesses and individuals across Nigeria.</p>
              <p className={styles.trustHighlight}>Your trust. Our commitment.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className={styles.formHalf}>
        
        <div className={styles.supportHeader}>
          <span>Need help?</span>
          <Link href="/contact">
            <HeadphonesIcon size={16} /> Contact Support
          </Link>
        </div>

        <div className={styles.formWrapper}>
          <ScrollReveal direction="up">
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className={styles.formCard}>
              
              <div className={styles.iconCircle}>
                <Scale size={28} />
              </div>

              <h2 className={styles.title}>Welcome Back</h2>
              <p className={styles.subtitle}>Sign in to access your secure Ducex Solicitors client portal.</p>

              <form onSubmit={handleLogin}>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email Address</label>
                  <div className={styles.inputWrapper}>
                    <Mail className={styles.inputIcon} size={18} />
                    <input 
                      type="email" 
                      id="email" 
                      className={styles.input} 
                      placeholder="jefferyonaction@gmail.com"
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      required 
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="password" className={styles.label}>Password</label>
                  <div className={styles.inputWrapper}>
                    <Lock className={styles.inputIcon} size={18} />
                    <input 
                      type={showPassword ? "text" : "password"} 
                      id="password" 
                      className={styles.input} 
                      placeholder="••••••••••••"
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)} 
                      required 
                    />
                    <button 
                      type="button" 
                      className={styles.eyeIcon}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className={styles.formOptions}>
                  <label className={styles.checkboxLabel}>
                    <input 
                      type="checkbox" 
                      className={styles.customCheckbox}
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    Remember me
                  </label>
                  <Link href="/portal/forgot-password" className={styles.forgotPassword}>
                    Forgot Password?
                  </Link>
                </div>

                {error && <div style={{ color: 'red', marginBottom: '1rem', fontSize: '14px', textAlign: 'center' }}>{error}</div>}

                <Button type="submit" variant="accent" size="large" fullWidth isLoading={isLoading} style={{ position: 'relative' }}>
                  ACCESS PORTAL
                  <ArrowRight size={18} style={{ position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)' }} />
                </Button>
              </form>

              <div className={styles.divider}>or</div>

              <Link href="/portal/register" style={{ display: 'block', textDecoration: 'none' }}>
                <Button variant="secondary" fullWidth style={{ borderColor: '#E2E8F0', color: 'var(--color-ink)', fontWeight: 600, padding: '0.65rem 1rem', fontSize: '0.85rem' }}>
                  <UserPlus size={16} style={{ marginRight: '0.5rem' }} />
                  REGISTER FOR PORTAL ACCESS
                </Button>
              </Link>
              
              <div className={styles.encryptionBadge}>
                <Lock size={14} />
                <span>256-bit Encrypted Connection</span>
              </div>
            </div>
            
            <div className={styles.securityBanner}>
              <div className={styles.securityBannerIcon}>
                <ShieldCheck size={20} />
              </div>
              <div className={styles.securityBannerText}>
                <h4>Your security is our priority</h4>
                <p>We use advanced encryption and strict security protocols to protect your information.</p>
              </div>
            </div>
            </div>
          </ScrollReveal>
        </div>

        <div className={styles.pageFooter}>
          <span>&copy; {new Date().getFullYear()} Ducex Solicitors. All rights reserved.</span>
          <div className={styles.footerLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-use">Terms of Use</Link>
          </div>
        </div>
      </div>

    </div>
  );
}
