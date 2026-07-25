import React from 'react';
import { SectionHeading } from '../../components/page/SectionHeading';

export default function TermsOfUsePage() {
  return (
    <div style={{ backgroundColor: 'var(--color-white)', minHeight: '100vh', padding: 'var(--space-20) 0' }}>
      <div className="container-narrow">
        <SectionHeading title="Terms of Use" align="left" />
        
        <div style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-main)' }}>
          <p style={{ marginBottom: 'var(--space-6)' }}>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 style={{ fontSize: 'var(--text-2xl)', marginTop: 'var(--space-8)', marginBottom: 'var(--space-4)', color: 'var(--color-slate)' }}>1. Acceptance of Terms</h2>
          <p style={{ marginBottom: 'var(--space-4)' }}>By accessing and using the Ducex Solicitors website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>

          <h2 style={{ fontSize: 'var(--text-2xl)', marginTop: 'var(--space-8)', marginBottom: 'var(--space-4)', color: 'var(--color-slate)' }}>2. Legal Advice Disclaimer</h2>
          <p style={{ marginBottom: 'var(--space-4)' }}>The information contained on this website is provided for informational purposes only, and should not be construed as legal advice on any subject matter. You should not act or refrain from acting on the basis of any content included in this site without seeking legal or other professional advice.</p>
          
          <h2 style={{ fontSize: 'var(--text-2xl)', marginTop: 'var(--space-8)', marginBottom: 'var(--space-4)', color: 'var(--color-slate)' }}>3. Attorney-Client Relationship</h2>
          <p style={{ marginBottom: 'var(--space-4)' }}>Transmission of information from this website does not create an attorney-client relationship between you and Ducex Solicitors, nor is it intended to do so. The transmission of the website, in part or in whole, and/or any communication with us via Internet e-mail through this site does not constitute or create an attorney-client relationship between us and any recipients.</p>
        </div>
      </div>
    </div>
  );
}
