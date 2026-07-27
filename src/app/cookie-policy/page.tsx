import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy | Ducex Solicitors',
  description: 'Cookie Policy for Ducex Solicitors Limited — explaining what cookies we use, why, and how you can manage them.',
};

const s: Record<string, React.CSSProperties> = {
  wrapper: { backgroundColor: 'var(--color-white)', minHeight: '100vh', padding: '5rem 0 6rem' },
  inner: { maxWidth: '860px', margin: '0 auto', padding: '0 1.5rem' },
  badge: { display: 'inline-block', background: 'var(--color-brass, #c9a96e)', color: '#fff', fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' as const, padding: '0.3rem 0.85rem', borderRadius: '20px', marginBottom: '1rem' },
  title: { fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '800', color: 'var(--color-slate, #1a2a3a)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)', lineHeight: '1.2' },
  meta: { fontSize: '0.875rem', color: 'var(--color-slate-light, #6b7280)', marginBottom: '0.25rem' },
  intro: { fontSize: '0.875rem', color: 'var(--color-slate-light, #6b7280)', fontStyle: 'italic', borderLeft: '3px solid var(--color-brass, #c9a96e)', paddingLeft: '1rem', marginTop: '1.5rem', marginBottom: '2.5rem', lineHeight: '1.7' },
  divider: { border: 'none', borderTop: '1px solid #e5e7eb', margin: '2.5rem 0' },
  h2: { fontSize: '1.15rem', fontWeight: '800', marginTop: '2.75rem', marginBottom: '0.6rem', color: 'var(--color-slate, #1a2a3a)', fontFamily: 'var(--font-heading)', paddingBottom: '0.5rem', borderBottom: '2px solid var(--color-brass, #c9a96e)' },
  h3: { fontSize: '0.975rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.4rem', color: 'var(--color-ink, #0d1b2a)' },
  p: { marginBottom: '0.9rem', lineHeight: '1.85', fontSize: '0.95rem', color: 'var(--color-ink, #0d1b2a)' },
  ul: { paddingLeft: '1.5rem', marginBottom: '0.9rem', lineHeight: '1.85', fontSize: '0.95rem', color: 'var(--color-ink, #0d1b2a)' },
  li: { marginBottom: '0.3rem' },
  infoBox: { background: 'var(--color-smoke, #f7f7f5)', border: '1px solid #ddd', borderLeft: '4px solid var(--color-brass, #c9a96e)', borderRadius: '6px', padding: '1rem 1.25rem', marginBottom: '1.25rem', fontSize: '0.92rem', lineHeight: '1.75', color: 'var(--color-ink, #0d1b2a)' },
  warning: { background: '#fff8ed', border: '1px solid #e0a045', borderLeft: '4px solid #e0a045', borderRadius: '6px', padding: '1rem 1.25rem', marginBottom: '1.25rem', fontSize: '0.92rem', lineHeight: '1.75', color: '#6b3c00' },
  table: { width: '100%', borderCollapse: 'collapse' as const, fontSize: '0.88rem', marginBottom: '1.25rem' },
  th: { background: 'var(--color-slate, #1a2a3a)', color: '#fff', padding: '0.6rem 1rem', textAlign: 'left' as const, fontWeight: '700', fontSize: '0.78rem', letterSpacing: '0.04em' },
  td: { padding: '0.55rem 1rem', borderBottom: '1px solid #e5e7eb', verticalAlign: 'top' as const },
  tdAlt: { padding: '0.55rem 1rem', borderBottom: '1px solid #e5e7eb', verticalAlign: 'top' as const, background: '#f9f9f7' },
  link: { color: 'var(--color-brass, #c9a96e)' },
  contactCard: { background: 'var(--color-slate, #1a2a3a)', color: '#fff', borderRadius: '8px', padding: '1.5rem 1.75rem', marginTop: '0.5rem', marginBottom: '1.25rem', lineHeight: '1.9', fontSize: '0.93rem' },
};

const Li = ({ children }: { children: React.ReactNode }) => <li style={s.li}>{children}</li>;

export default function CookiePolicyPage() {
  return (
    <div style={s.wrapper}>
      <div style={s.inner}>

        <span style={s.badge}>Legal Document</span>
        <h1 style={s.title}>Cookie Policy</h1>
        <p style={s.meta}><strong>Last Updated:</strong> 27 July 2026</p>
        <p style={s.meta}><strong>Effective Date:</strong> 27 July 2026</p>
        <p style={s.intro}>
          This Cookie Policy explains what cookies and similar technologies Ducex Solicitors Limited uses on our website, why we use them, and how you can manage your preferences. It should be read alongside our{' '}
          <Link href="/privacy-policy" style={s.link}>Privacy Policy</Link> and{' '}
          <Link href="/terms-of-use" style={s.link}>Terms of Use</Link>.
        </p>

        <hr style={s.divider} />

        {/* 1 */}
        <h2 style={s.h2}>1. Who We Are</h2>
        <div style={s.infoBox}>
          <p style={{ margin: '0 0 0.35rem 0' }}><strong>Ducex Solicitors Limited</strong></p>
          <p style={{ margin: '0 0 0.35rem 0' }}>📍 2 Onatamere Ihemando Close, Abule Ado, Ojo, Lagos, Nigeria</p>
          <p style={{ margin: '0 0 0.35rem 0' }}>📧 <a href="mailto:info@ducexsolicitors.com" style={s.link}>info@ducexsolicitors.com</a></p>
          <p style={{ margin: 0 }}>🌐 <a href="https://www.ducexsolicitors.com" style={s.link}>www.ducexsolicitors.com</a></p>
        </div>
        <p style={s.p}>
          This Cookie Policy applies to the Ducex Solicitors website at <a href="https://www.ducexsolicitors.com" style={s.link}>www.ducexsolicitors.com</a>, our client portal, and other digital services operated by Ducex Solicitors Limited that link to this policy.
        </p>

        {/* 2 */}
        <h2 style={s.h2}>2. What Are Cookies?</h2>
        <p style={s.p}>
          Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work efficiently, to remember your preferences, and to provide information to website owners.
        </p>
        <p style={s.p}>
          Similar technologies — such as pixel tags, web beacons, local storage, and session storage — perform comparable functions and may also be used. This Cookie Policy covers all such technologies collectively referred to as &ldquo;cookies&rdquo; unless otherwise stated.
        </p>
        <p style={s.p}>Cookies may be:</p>
        <ul style={s.ul}>
          <Li><strong>Session cookies</strong> — temporary files deleted when you close your browser.</Li>
          <Li><strong>Persistent cookies</strong> — remain on your device for a set period or until you delete them.</Li>
          <Li><strong>First-party cookies</strong> — set by the Ducex Solicitors website directly.</Li>
          <Li><strong>Third-party cookies</strong> — set by an external service or provider on our behalf.</Li>
        </ul>

        {/* 3 */}
        <h2 style={s.h2}>3. Cookies We Use</h2>
        <p style={s.p}>We use the following categories of cookies on our website:</p>

        <h3 style={s.h3}>3.1 Strictly Necessary Cookies</h3>
        <p style={s.p}>
          These cookies are essential for our website and client portal to function. They cannot be disabled without significantly affecting how our services work. They do not require your consent under applicable law.
        </p>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Cookie / Technology</th>
              <th style={s.th}>Provider</th>
              <th style={s.th}>Purpose</th>
              <th style={s.th}>Duration</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Session token / auth cookie', 'Ducex / Supabase', 'Maintains your authenticated session in the client portal', 'Session / up to 7 days'],
              ['CSRF protection token', 'Ducex', 'Protects against cross-site request forgery attacks', 'Session'],
              ['Cookie consent preference', 'Ducex (localStorage)', 'Stores your cookie consent decision so we do not ask again', 'Up to 12 months'],
              ['Load balancing / routing', 'Netlify / Render', 'Ensures requests are routed correctly to our servers', 'Session'],
            ].map(([name, provider, purpose, duration], i) => (
              <tr key={i}>
                <td style={i % 2 === 0 ? s.td : s.tdAlt}><strong>{name}</strong></td>
                <td style={i % 2 === 0 ? s.td : s.tdAlt}>{provider}</td>
                <td style={i % 2 === 0 ? s.td : s.tdAlt}>{purpose}</td>
                <td style={i % 2 === 0 ? s.td : s.tdAlt}>{duration}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={s.h3}>3.2 Preference / Functionality Cookies</h3>
        <p style={s.p}>
          These cookies remember choices you make to improve your experience. They are not strictly necessary but enhance usability.
        </p>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Cookie / Technology</th>
              <th style={s.th}>Provider</th>
              <th style={s.th}>Purpose</th>
              <th style={s.th}>Duration</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Language / locale preference', 'Ducex', 'Remembers your preferred language or region setting', 'Up to 12 months'],
              ['UI preference', 'Ducex', 'Stores display preferences such as navigation state', 'Session'],
            ].map(([name, provider, purpose, duration], i) => (
              <tr key={i}>
                <td style={i % 2 === 0 ? s.td : s.tdAlt}><strong>{name}</strong></td>
                <td style={i % 2 === 0 ? s.td : s.tdAlt}>{provider}</td>
                <td style={i % 2 === 0 ? s.td : s.tdAlt}>{purpose}</td>
                <td style={i % 2 === 0 ? s.td : s.tdAlt}>{duration}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={s.h3}>3.3 Analytics and Performance Cookies</h3>
        <div style={s.warning}>
          These cookies are <strong>not strictly necessary</strong>. Where required by applicable law, we will request your consent before placing these cookies.
        </div>
        <p style={s.p}>
          We use <strong>Google Analytics 4 (GA4)</strong> and <strong>Google Search Console (GSC)</strong> to understand how visitors use our website and to improve its performance. These services may collect anonymised data about pages visited, session duration, traffic sources, and user interactions.
        </p>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Cookie</th>
              <th style={s.th}>Provider</th>
              <th style={s.th}>Purpose</th>
              <th style={s.th}>Duration</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['_ga', 'Google Analytics 4', 'Distinguishes unique users by assigning a randomly generated number', '2 years'],
              ['_ga_[ID]', 'Google Analytics 4', 'Stores and counts page views for the GA4 property', '2 years'],
              ['_gid', 'Google Analytics 4', 'Distinguishes users (shorter-lived)', '24 hours'],
              ['_gac_[ID]', 'Google / Ads', 'Stores campaign-related information (if Google Ads is connected)', '90 days'],
            ].map(([name, provider, purpose, duration], i) => (
              <tr key={i}>
                <td style={i % 2 === 0 ? s.td : s.tdAlt}><code>{name}</code></td>
                <td style={i % 2 === 0 ? s.td : s.tdAlt}>{provider}</td>
                <td style={i % 2 === 0 ? s.td : s.tdAlt}>{purpose}</td>
                <td style={i % 2 === 0 ? s.td : s.tdAlt}>{duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={s.p}>
          Google processes data collected by GA4 in accordance with its own privacy policy and data-processing terms. Data may be transferred to and processed in the United States and other countries where Google operates. You can opt out of Google Analytics across all websites by installing the{' '}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={s.link}>Google Analytics Opt-out Browser Add-on</a>.
        </p>
        <p style={s.p}>
          <strong>Important:</strong> We do not send legal matter descriptions, client names, case details or other confidential information to Google Analytics. Analytics data is limited to general behavioural and traffic information.
        </p>

        <h3 style={s.h3}>3.4 Security Cookies</h3>
        <p style={s.p}>
          Our hosting providers (Netlify and Render) and our backend infrastructure may use security-related cookies or tokens to protect our platform against automated attacks, bots, and unauthorised access.
        </p>

        {/* 4 */}
        <h2 style={s.h2}>4. Third-Party Services That May Set Cookies</h2>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Provider</th>
              <th style={s.th}>Role</th>
              <th style={s.th}>Privacy / Cookie Documentation</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Google Analytics 4', 'Website analytics', 'policies.google.com/privacy'],
              ['Google Search Console', 'Search performance monitoring', 'policies.google.com/privacy'],
              ['Netlify', 'Frontend hosting and CDN delivery', 'netlify.com/privacy'],
              ['Render', 'Backend hosting', 'render.com/privacy'],
              ['Supabase', 'Database and document storage', 'supabase.com/privacy'],
            ].map(([provider, role, doc], i) => (
              <tr key={i}>
                <td style={i % 2 === 0 ? s.td : s.tdAlt}><strong>{provider}</strong></td>
                <td style={i % 2 === 0 ? s.td : s.tdAlt}>{role}</td>
                <td style={i % 2 === 0 ? s.td : s.tdAlt}><a href={`https://${doc}`} target="_blank" rel="noopener noreferrer" style={s.link}>{doc}</a></td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* 5 */}
        <h2 style={s.h2}>5. Legal Basis for Using Cookies</h2>
        <ul style={s.ul}>
          <Li><strong>Strictly necessary cookies</strong> — used on the basis of our legitimate interest in operating a functional and secure website and client portal. These do not require your consent.</Li>
          <Li><strong>Preference cookies</strong> — used with your implied consent or legitimate interest where they enhance your experience without tracking you for advertising.</Li>
          <Li><strong>Analytics cookies (GA4)</strong> — used only with your consent where required by applicable law (including the Nigerian Data Protection Act, UK GDPR, EU GDPR, and equivalent frameworks).</Li>
        </ul>

        {/* 6 */}
        <h2 style={s.h2}>6. Your Cookie Choices and How to Manage Them</h2>

        <h3 style={s.h3}>6.1 Our Cookie Consent Tool</h3>
        <p style={s.p}>
          When you first visit our website, a cookie consent notice will appear. You can accept or decline non-essential cookies through that notice. Your preference is stored locally on your device and respected on subsequent visits. You can change your preference at any time by clearing your browser cookies and revisiting the site.
        </p>

        <h3 style={s.h3}>6.2 Browser Settings</h3>
        <p style={s.p}>Most browsers allow you to control cookies through their settings. You can typically:</p>
        <ul style={s.ul}>
          <Li>View cookies stored on your device;</Li>
          <Li>Delete some or all cookies;</Li>
          <Li>Block all cookies (though this may break some website functions);</Li>
          <Li>Block third-party cookies only.</Li>
        </ul>
        <p style={s.p}>How to manage cookies in major browsers:</p>
        <ul style={s.ul}>
          {[
            ['Google Chrome', 'Settings → Privacy and security → Cookies and other site data'],
            ['Mozilla Firefox', 'Settings → Privacy & Security → Cookies and Site Data'],
            ['Apple Safari', 'Preferences → Privacy → Manage Website Data'],
            ['Microsoft Edge', 'Settings → Cookies and site permissions'],
          ].map(([browser, path], i) => <Li key={i}><strong>{browser}:</strong> {path}</Li>)}
        </ul>

        <h3 style={s.h3}>6.3 Google Analytics Opt-Out</h3>
        <p style={s.p}>
          You can opt out of Google Analytics tracking across all websites by installing the{' '}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={s.link}>Google Analytics Opt-out Browser Add-on</a>.
        </p>

        <h3 style={s.h3}>6.4 Consequences of Disabling Cookies</h3>
        <p style={s.p}>Disabling strictly necessary cookies may prevent you from logging into the client portal, using consultation booking features, or accessing other authenticated services. Disabling preference cookies may mean your preferences are not remembered between visits. Disabling analytics cookies will not affect the core functionality of our website.</p>

        {/* 7 */}
        <h2 style={s.h2}>7. Cookies and Legal Confidentiality</h2>
        <div style={s.warning}>
          <strong>Important:</strong> Cookies used on our website do not collect the content of your legal communications or matter details. We do not pass confidential legal information to third-party analytics or advertising providers through cookies or any similar technology.
        </div>

        {/* 8 */}
        <h2 style={s.h2}>8. International Transfers</h2>
        <p style={s.p}>
          Some cookies and similar technologies used on our website involve third-party providers (such as Google) that process data in the United States and other countries. Where applicable law requires specific transfer safeguards for such processing, we rely on the mechanisms provided by those providers (such as Standard Contractual Clauses or adequacy decisions).
        </p>

        {/* 9 */}
        <h2 style={s.h2}>9. Changes to This Cookie Policy</h2>
        <p style={s.p}>
          We may update this Cookie Policy from time to time to reflect changes in our technology, providers, or applicable law. When we make material changes, we will update the &ldquo;Last Updated&rdquo; date at the top of this page. Where required, we will seek fresh consent for any new non-essential cookies.
        </p>

        {/* 10 */}
        <h2 style={s.h2}>10. Contact Us</h2>
        <p style={s.p}>If you have any questions about how we use cookies, please contact:</p>
        <div style={s.contactCard}>
          <p style={{ margin: '0 0 0.5rem 0', fontWeight: '700', fontSize: '1rem' }}>Ducex Solicitors Limited</p>
          <p style={{ margin: '0 0 0.35rem 0' }}>📍 2 Onatamere Ihemando Close, Abule Ado, Ojo, Lagos, Nigeria</p>
          <p style={{ margin: '0 0 0.35rem 0' }}>📧 <a href="mailto:info@ducexsolicitors.com" style={s.link}>info@ducexsolicitors.com</a></p>
          <p style={{ margin: 0 }}>🌐 <a href="https://www.ducexsolicitors.com" style={s.link}>www.ducexsolicitors.com</a></p>
        </div>

        <hr style={s.divider} />
        <p style={{ fontSize: '0.8rem', color: 'var(--color-slate-light, #9ca3af)', textAlign: 'center' as const }}>
          © {new Date().getFullYear()} Ducex Solicitors Limited. All rights reserved. &nbsp;|&nbsp; Last Updated: 27 July 2026
        </p>

      </div>
    </div>
  );
}
