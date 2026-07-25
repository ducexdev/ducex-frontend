import React from 'react';
import { SectionHeading } from '../../components/page/SectionHeading';

export default function PrivacyPolicyPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-white)', minHeight: '100vh', padding: 'var(--space-20) 0' }}>
      <div className="container-narrow">
        <SectionHeading title="Privacy Policy" align="left" />
        
        <div style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-main)' }}>
          <p style={{ marginBottom: 'var(--space-6)' }}>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 style={{ fontSize: 'var(--text-2xl)', marginTop: 'var(--space-8)', marginBottom: 'var(--space-4)', color: 'var(--color-slate)' }}>1. Introduction</h2>
          <p style={{ marginBottom: 'var(--space-4)' }}>Ducex Solicitors (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>

          <h2 style={{ fontSize: 'var(--text-2xl)', marginTop: 'var(--space-8)', marginBottom: 'var(--space-4)', color: 'var(--color-slate)' }}>2. Data We Collect</h2>
          <p style={{ marginBottom: 'var(--space-4)' }}>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul style={{ paddingLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
            <li style={{ marginBottom: 'var(--space-2)' }}><strong>Identity Data:</strong> includes first name, last name, username or similar identifier, title.</li>
            <li style={{ marginBottom: 'var(--space-2)' }}><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li style={{ marginBottom: 'var(--space-2)' }}><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
          </ul>

          <h2 style={{ fontSize: 'var(--text-2xl)', marginTop: 'var(--space-8)', marginBottom: 'var(--space-4)', color: 'var(--color-slate)' }}>3. How We Use Your Data</h2>
          <p style={{ marginBottom: 'var(--space-4)' }}>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul style={{ paddingLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
            <li style={{ marginBottom: 'var(--space-2)' }}>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li style={{ marginBottom: 'var(--space-2)' }}>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li style={{ marginBottom: 'var(--space-2)' }}>Where we need to comply with a legal obligation.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
