"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Lock, Mail, Eye, EyeOff, User, Phone, ShieldCheck, Clock, Users, UserPlus, CheckCircle2 } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { ScrollReveal } from '../../../components/animations/ScrollReveal';
import styles from './Register.module.css';
import apiClient from '../../../utils/apiClient';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // Password validation checks
  const hasMinLength = formData.password.length >= 8;
  const hasUpper = /[A-Z]/.test(formData.password);
  const hasLower = /[a-z]/.test(formData.password);
  const hasNumberOrSpecial = /[0-9!@#$%^&*]/.test(formData.password);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    if (!agreedToTerms) {
      setError("You must agree to the Privacy Policy and Terms of Use.");
      setIsLoading(false);
      return;
    }

    if (!hasMinLength || !hasUpper || !hasLower || !hasNumberOrSpecial) {
      setError("Please ensure your password meets all requirements.");
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }
    
    try {
      const response = await apiClient.post('/auth/register', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });
      const { accessToken, refreshToken } = response.data.data;
      
      Cookies.set('ducex_access_token', accessToken, { expires: 1/96 });
      Cookies.set('ducex_refresh_token', refreshToken, { expires: 7 });
      
      router.push('/portal/dashboard');
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || err.response?.data?.error || 'Registration failed');
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
          src="/images/hero/hero2.png" 
          alt="Ducex Solicitors Registration" 
          fill 
          style={{ objectFit: 'cover' }} 
          priority
        />
        
        <div className={styles.heroContent}>
          <div className={styles.logoWrapper}>
            <Link href="/" aria-label="Ducex Solicitors Home">
              <div style={{ position: 'relative', width: '180px', height: '40px' }}>
                <Image src="/images/logo-transparent-white.png" alt="Ducex Solicitors" fill style={{ objectFit: 'contain' }} />
              </div>
            </Link>
          </div>

          <h1 className={styles.heroTitle}>
            Create Your<br/>Secure <span>Account</span>
          </h1>
          
          <p className={styles.heroDescription}>
            Join the Ducex Solicitors client portal to access your case files, track progress, communicate with your legal team, and manage your documents securely.
          </p>

          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <div className={styles.featureIconCircle}>
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className={styles.featureTitle}>Secure & Private</h3>
                <p className={styles.featureDesc}>Your information is protected with bank-grade encryption.</p>
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.featureIconCircle}>
                <Clock size={24} />
              </div>
              <div>
                <h3 className={styles.featureTitle}>Instant Access</h3>
                <p className={styles.featureDesc}>Get started in minutes and access your dashboard right away.</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIconCircle}>
                <Users size={24} />
              </div>
              <div>
                <h3 className={styles.featureTitle}>Stay Informed</h3>
                <p className={styles.featureDesc}>Receive real-time updates about your matters and deadlines.</p>
              </div>
            </div>
          </div>

          <div className={styles.testimonialCard}>
            <div className={styles.quoteIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21L16.417 14.59C16.591 14.07 16.666 13.56 16.666 13.06C16.666 11.83 16.29 10.74 15.539 9.8C14.787 8.85 13.821 8.38 12.64 8.38C12.358 8.38 12.062 8.44 11.751 8.56C11.662 7.82 11.905 7.02 12.482 6.16C13.058 5.3 13.834 4.54 14.811 3.88L12.982 3C11.517 3.99 10.375 5.15 9.558 6.48C8.74 7.81 8.331 9.21 8.331 10.68C8.331 11.71 8.544 12.63 8.97 13.44C9.395 14.25 9.948 14.89 10.629 15.36C11.311 15.83 12.052 16.07 12.854 16.07C13.045 16.07 13.25 16.04 13.47 15.98L12.017 21H14.017ZM20.017 21L22.417 14.59C22.591 14.07 22.666 13.56 22.666 13.06C22.666 11.83 22.29 10.74 21.539 9.8C20.787 8.85 19.821 8.38 18.64 8.38C18.358 8.38 18.062 8.44 17.751 8.56C17.662 7.82 17.905 7.02 18.482 6.16C19.058 5.3 19.834 4.54 20.811 3.88L18.982 3C17.517 3.99 16.375 5.15 15.558 6.48C14.74 7.81 14.331 9.21 14.331 10.68C14.331 11.71 14.544 12.63 14.97 13.44C15.395 14.25 15.948 14.89 16.629 15.36C17.311 15.83 18.052 16.07 18.854 16.07C19.045 16.07 19.25 16.04 19.47 15.98L18.017 21H20.017Z" />
              </svg>
            </div>
            <p className={styles.testimonialText}>
              "The client portal has made it easy to stay updated and communicate with my legal team whenever I need to."
            </p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorAvatar}>
                <Image src="/images/hero/hero4.png" alt="Adaobi M." fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.authorInfo}>
                <h4>Adaobi M.</h4>
                <span className={styles.verifiedClient}>
                  Verified Client <CheckCircle2 size={12} className={styles.verifiedIcon} fill="var(--color-brass)" color="white" />
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className={styles.formHalf}>
        
        <div className={styles.formWrapper}>
          <ScrollReveal direction="up">
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className={styles.formCard}>
              
              <div className={styles.iconCircle}>
                <UserPlus size={32} />
              </div>

              <h2 className={styles.title}>Create Account</h2>
              <p className={styles.subtitle}>Register to access your secure client workspace.</p>

              <form onSubmit={handleSubmit}>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="firstName" className={styles.label}>First Name</label>
                    <div className={styles.inputWrapper}>
                      <User className={styles.inputIcon} size={18} />
                      <input type="text" id="firstName" className={styles.input} placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="lastName" className={styles.label}>Last Name</label>
                    <div className={styles.inputWrapper}>
                      <User className={styles.inputIcon} size={18} />
                      <input type="text" id="lastName" className={styles.input} placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                    </div>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email Address</label>
                  <div className={styles.inputWrapper}>
                    <Mail className={styles.inputIcon} size={18} />
                    <input type="email" id="email" className={styles.input} placeholder="jefferyonaction@gmail.com" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>Phone Number</label>
                  <div className={styles.inputWrapper}>
                    <Phone className={styles.inputIcon} size={18} />
                    <input type="text" id="phone" className={styles.input} placeholder="+234 800 000 0000" value={formData.phone} onChange={handleChange} />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="password" className={styles.label}>Password</label>
                    <div className={styles.inputWrapper}>
                      <Lock className={styles.inputIcon} size={18} />
                      <input type={showPassword ? "text" : "password"} id="password" className={styles.input} placeholder="••••••••••••" value={formData.password} onChange={handleChange} required />
                      <button type="button" className={styles.eyeIcon} onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
                    <div className={styles.inputWrapper}>
                      <Lock className={styles.inputIcon} size={18} />
                      <input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" className={styles.input} placeholder="••••••••••••" value={formData.confirmPassword} onChange={handleChange} required />
                      <button type="button" className={styles.eyeIcon} onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className={styles.passwordRules}>
                  <ShieldCheck size={20} className={styles.rulesIcon} />
                  <div className={styles.rulesList}>
                    <h4>Password must contain:</h4>
                    <div className={`${styles.ruleItem} ${hasMinLength ? styles.valid : ''}`}>
                      <CheckCircle2 size={14} /> At least 8 characters
                    </div>
                    <div className={`${styles.ruleItem} ${hasUpper ? styles.valid : ''}`}>
                      <CheckCircle2 size={14} /> One uppercase letter
                    </div>
                    <div className={`${styles.ruleItem} ${hasLower ? styles.valid : ''}`}>
                      <CheckCircle2 size={14} /> One lowercase letter
                    </div>
                    <div className={`${styles.ruleItem} ${hasNumberOrSpecial ? styles.valid : ''}`}>
                      <CheckCircle2 size={14} /> One number or special character
                    </div>
                  </div>
                </div>

                <label className={styles.termsCheckbox}>
                  <input 
                    type="checkbox" 
                    className={styles.customCheckbox}
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                  />
                  <span className={styles.termsLabel}>
                    I agree to the <Link href="/privacy-policy">Privacy Policy</Link> and <Link href="/terms-of-use">Terms of Use</Link>
                  </span>
                </label>

                {error && <div style={{ color: 'red', marginBottom: '1.5rem', fontSize: '14px', textAlign: 'center' }}>{error}</div>}

                <Button type="submit" variant="accent" size="large" fullWidth isLoading={isLoading}>
                  REGISTER ACCOUNT
                </Button>
              </form>

              <div className={styles.divider}>or</div>

              <div className={styles.loginLink}>
                Already have an account? <Link href="/portal/login">Sign In</Link>
              </div>

              <div className={styles.encryptionBadge}>
                <Lock size={14} />
                <span>256-bit Encrypted Connection</span>
              </div>
            </div>
            </div>
          </ScrollReveal>
        </div>

        <div className={styles.fullFooter}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Link href="/" aria-label="Ducex Solicitors Home">
              <div style={{ position: 'relative', width: '120px', height: '24px' }}>
                <Image src="/images/logo-transparent-white.png" alt="Ducex Solicitors" fill style={{ objectFit: 'contain' }} />
              </div>
            </Link>
            <span>© {new Date().getFullYear()} Ducex Solicitors. All rights reserved.</span>
          </div>
          <div>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-use">Terms of Use</Link>
          </div>
        </div>
      </div>

    </div>
  );
}
