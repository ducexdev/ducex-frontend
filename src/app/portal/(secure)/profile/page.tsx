"use client";
import React, { useEffect, useState } from 'react';
import { User, Save } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './Profile.module.css';
import portalApiClient from '@/utils/portalApiClient';

export default function ProfilePage() {
  const [profile, setProfile] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '' // readonly
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await portalApiClient.get('/portal/me');
        setProfile(data.data);
        setFormData({
          firstName: data.data.firstName || '',
          lastName: data.data.lastName || '',
          phone: data.data.phone || '',
          email: data.data.email || ''
        });
      } catch (err) {
        console.error('Failed to load profile', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setError('');
    setSuccess('');

    try {
      await portalApiClient.put('/portal/me', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone
      });
      setSuccess('Profile updated successfully');
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || 'Failed to update profile');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <div>Loading profile...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>My Profile</h1>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>Personal Information</h2>
          <User size={24} color="var(--color-text-light)" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName" className={styles.label}>First Name</label>
              <input 
                type="text" 
                id="firstName" 
                className={styles.input}
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="lastName" className={styles.label}>Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                className={styles.input}
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input 
                type="email" 
                id="email" 
                className={styles.input}
                value={formData.email}
                disabled
                title="Contact administration to change your email address"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>Phone Number</label>
              <input 
                type="text" 
                id="phone" 
                className={styles.input}
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div className={styles.fullWidth}>
              {error && <div style={{ color: 'red', marginBottom: '1rem', fontSize: '14px' }}>{error}</div>}
              {success && <div style={{ color: 'green', marginBottom: '1rem', fontSize: '14px', backgroundColor: '#e6ffe6', padding: '10px', borderRadius: '4px' }}>{success}</div>}
            </div>
          </div>

          <div className={styles.footer}>
            <Button type="submit" variant="accent" isLoading={isSaving}>
              <Save size={18} style={{ marginRight: '8px' }} /> Save Changes
            </Button>
          </div>
        </form>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>Security Settings</h2>
        </div>
        <p style={{ color: 'var(--color-text-light)', marginBottom: '1rem' }}>
          To change your password, please log out and use the "Forgot Password" link on the login screen.
        </p>
      </div>
    </div>
  );
}
