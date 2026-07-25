"use client";
import React, { useState, useRef } from 'react';
import { Button } from '../ui/Button';
import styles from './BookingWizard.module.css';
import { services } from '../../data/services';

const consultationTypes = [
  'General enquiry',
  'Urgent legal assistance',
  'Document review',
  'Business consultation',
  'Property consultation',
  'Family consultation'
];

export const BookingWizard = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    service_type: '',
    consultation_type: '',
    matter_summary: '',
    preferred_date: '',
    preferred_time: '',
    client_name: '',
    email: '',
    phone: '',
    honeypot: '',
  });

  const [file, setFile] = useState<File | null>(null);

  const handleNext = () => {
    // Basic validation per step
    if (step === 1 && !formData.service_type) return setErrorMsg('Please select a legal area.');
    if (step === 2 && !formData.consultation_type) return setErrorMsg('Please select a consultation type.');
    if (step === 3 && formData.matter_summary.length < 10) return setErrorMsg('Please provide more details (min 10 characters).');
    if (step === 4 && (!formData.preferred_date || !formData.preferred_time)) return setErrorMsg('Please select both date and time.');
    if (step === 5 && (!formData.client_name || !formData.email || !formData.phone)) return setErrorMsg('Please fill out all contact fields.');

    setErrorMsg('');
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setErrorMsg('');
    setStep(prev => prev - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0];
      const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/jpg'];
      if (!validTypes.includes(selected.type)) {
        setErrorMsg('Invalid file type. Only PDF, DOCX, and JPG are allowed.');
        return;
      }
      if (selected.size > 10 * 1024 * 1024) {
        setErrorMsg('File too large. Maximum size is 10MB.');
        return;
      }
      setErrorMsg('');
      setFile(selected);
    }
  };

  const submitBooking = async () => {
    setIsSubmitting(true);
    setErrorMsg('');

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    if (file) {
      data.append('document', file);
    }

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
      const response = await fetch(`${apiUrl}/consultations`, {
        method: 'POST',
        body: data,
      });

      const result = await response.json();
      if (result.success) {
        setStep(8); // Success step
      } else {
        setErrorMsg(result.message || 'An error occurred. Please try again.');
      }
    } catch (err) {
      setErrorMsg('Failed to connect to the server. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.wizardContainer}>
      {step < 8 && (
        <div className={styles.progressBar}>
          {[1, 2, 3, 4, 5, 6, 7].map((s) => (
            <div 
              key={s} 
              className={`${styles.progressSegment} ${s === step ? styles.active : ''} ${s < step ? styles.completed : ''}`}
            />
          ))}
        </div>
      )}

      <div className={styles.stepContent}>
        {step === 1 && (
          <div>
            <div className={styles.stepHeader}>
              <h2 className={styles.stepTitle}>Select Legal Area</h2>
              <p className={styles.stepSubtitle}>Which practice area best matches your needs?</p>
            </div>
            <div className={styles.radioGrid}>
              {services.map(s => (
                <label key={s.id} className={styles.radioLabel}>
                  <input type="radio" name="service_type" value={s.title} className={styles.radioInput} onChange={handleChange} checked={formData.service_type === s.title} />
                  <span>{s.title}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <div className={styles.stepHeader}>
              <h2 className={styles.stepTitle}>Consultation Type</h2>
              <p className={styles.stepSubtitle}>What kind of consultation are you looking for?</p>
            </div>
            <div className={styles.radioGrid}>
              {consultationTypes.map(t => (
                <label key={t} className={styles.radioLabel}>
                  <input type="radio" name="consultation_type" value={t} className={styles.radioInput} onChange={handleChange} checked={formData.consultation_type === t} />
                  <span>{t}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <div className={styles.stepHeader}>
              <h2 className={styles.stepTitle}>Matter Description</h2>
              <p className={styles.stepSubtitle}>Briefly describe your legal issue.</p>
            </div>
            <div className={styles.formGroup}>
              <textarea 
                name="matter_summary" 
                className={styles.textarea} 
                placeholder="Please provide a brief overview of your situation..." 
                value={formData.matter_summary} 
                onChange={handleChange} 
              />
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <div className={styles.stepHeader}>
              <h2 className={styles.stepTitle}>Preferred Date & Time</h2>
              <p className={styles.stepSubtitle}>When would you like to schedule your consultation?</p>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Date</label>
              <input type="date" name="preferred_date" className={styles.input} onChange={handleChange} value={formData.preferred_date} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Time</label>
              <select name="preferred_time" className={styles.select} onChange={handleChange} value={formData.preferred_time}>
                <option value="">Select a time</option>
                <option value="Morning (9AM - 12PM)">Morning (9AM - 12PM)</option>
                <option value="Afternoon (12PM - 4PM)">Afternoon (12PM - 4PM)</option>
                <option value="Late Afternoon (4PM - 6PM)">Late Afternoon (4PM - 6PM)</option>
              </select>
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <div className={styles.stepHeader}>
              <h2 className={styles.stepTitle}>Contact Information</h2>
              <p className={styles.stepSubtitle}>How can we reach you?</p>
            </div>
            {/* Honeypot field for anti-spam */}
            <input type="text" name="honeypot" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" onChange={handleChange} value={formData.honeypot} />
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Full Name</label>
              <input type="text" name="client_name" className={styles.input} onChange={handleChange} value={formData.client_name} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Email Address</label>
              <input type="email" name="email" className={styles.input} onChange={handleChange} value={formData.email} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Phone Number</label>
              <input type="tel" name="phone" className={styles.input} onChange={handleChange} value={formData.phone} />
            </div>
          </div>
        )}

        {step === 6 && (
          <div>
            <div className={styles.stepHeader}>
              <h2 className={styles.stepTitle}>Optional Document Upload</h2>
              <p className={styles.stepSubtitle}>Securely upload any relevant documents (PDF, DOCX, JPG only. Max 10MB).</p>
            </div>
            <div className={styles.fileInputWrapper}>
              <input type="file" accept=".pdf,.docx,.jpg,.jpeg" ref={fileInputRef} onChange={handleFileChange} className={styles.input} style={{ display: 'none' }} id="file-upload" />
              <label htmlFor="file-upload" style={{ cursor: 'pointer', display: 'block', padding: 'var(--space-4)' }}>
                {file ? <strong>Selected: {file.name}</strong> : <span>Click to select a file or drag and drop</span>}
              </label>
              {file && (
                <button type="button" onClick={() => setFile(null)} style={{ marginTop: 'var(--space-2)', color: 'var(--color-error)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
                  Remove file
                </button>
              )}
            </div>
          </div>
        )}

        {step === 7 && (
          <div>
            <div className={styles.stepHeader}>
              <h2 className={styles.stepTitle}>Review & Confirm</h2>
              <p className={styles.stepSubtitle}>Please review your details before submitting.</p>
            </div>
            <div className={styles.summaryBlock}>
              <div className={styles.summaryItem}><span className={styles.summaryLabel}>Legal Area:</span> <span className={styles.summaryValue}>{formData.service_type}</span></div>
              <div className={styles.summaryItem}><span className={styles.summaryLabel}>Type:</span> <span className={styles.summaryValue}>{formData.consultation_type}</span></div>
              <div className={styles.summaryItem}><span className={styles.summaryLabel}>Matter:</span> <span className={styles.summaryValue}>{formData.matter_summary}</span></div>
              <div className={styles.summaryItem}><span className={styles.summaryLabel}>Date & Time:</span> <span className={styles.summaryValue}>{formData.preferred_date} - {formData.preferred_time}</span></div>
              <div className={styles.summaryItem}><span className={styles.summaryLabel}>Contact:</span> <span className={styles.summaryValue}>{formData.client_name} ({formData.email}, {formData.phone})</span></div>
              {file && <div className={styles.summaryItem}><span className={styles.summaryLabel}>Attached File:</span> <span className={styles.summaryValue}>{file.name}</span></div>}
            </div>
          </div>
        )}

        {step === 8 && (
          <div className={styles.successState}>
            <div className={styles.successIcon}>✓</div>
            <h2 className={styles.stepTitle}>Consultation Requested!</h2>
            <p className={styles.stepSubtitle}>Your request has been securely submitted. Our team will contact you shortly to confirm your booking.</p>
            <div style={{ marginTop: 'var(--space-8)' }}>
              <Button variant="primary" onClick={() => window.location.href = '/'}>Return to Homepage</Button>
            </div>
          </div>
        )}

        {errorMsg && <p className={styles.error}>{errorMsg}</p>}
      </div>

      {step < 8 && (
        <div className={styles.actions}>
          {step > 1 ? (
            <Button variant="ghost" onClick={handleBack} disabled={isSubmitting}>Back</Button>
          ) : <div></div>}
          
          {step < 7 ? (
            <Button variant="primary" onClick={handleNext}>Next Step</Button>
          ) : (
            <Button variant="accent" onClick={submitBooking} disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
