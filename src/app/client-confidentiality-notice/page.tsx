import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Client Confidentiality Notice | Ducex Solicitors',
  description: 'Ducex Solicitors Limited client confidentiality notice — your obligations, our obligations, and the scope of legal professional privilege.',
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
  important: { background: '#fef2f2', border: '1px solid #fca5a5', borderLeft: '4px solid #ef4444', borderRadius: '6px', padding: '1rem 1.25rem', marginBottom: '1.25rem', fontSize: '0.92rem', lineHeight: '1.75', color: '#7f1d1d' },
  link: { color: 'var(--color-brass, #c9a96e)' },
  contactCard: { background: 'var(--color-slate, #1a2a3a)', color: '#fff', borderRadius: '8px', padding: '1.5rem 1.75rem', marginTop: '0.5rem', marginBottom: '1.25rem', lineHeight: '1.9', fontSize: '0.93rem' },
};

const Li = ({ children }: { children: React.ReactNode }) => <li style={s.li}>{children}</li>;

export default function ClientConfidentialityNoticePage() {
  return (
    <div style={s.wrapper}>
      <div style={s.inner}>

        <span style={s.badge}>Legal Document</span>
        <h1 style={s.title}>Client Confidentiality Notice</h1>
        <p style={s.meta}><strong>Last Updated:</strong> 27 July 2026</p>
        <p style={s.meta}><strong>Effective Date:</strong> 27 July 2026</p>
        <p style={s.intro}>
          This Client Confidentiality Notice explains the confidentiality obligations of Ducex Solicitors Limited, the scope of legal professional privilege, how we protect your information, and what this means for your legal matter. It should be read alongside our{' '}
          <Link href="/privacy-policy" style={s.link}>Privacy Policy</Link> and your Client Engagement / Retainer Agreement.
        </p>

        <hr style={s.divider} />

        {/* 1 */}
        <h2 style={s.h2}>1. Our Firm</h2>
        <div style={s.infoBox}>
          <p style={{ margin: '0 0 0.35rem 0' }}><strong>Ducex Solicitors Limited</strong></p>
          <p style={{ margin: '0 0 0.35rem 0' }}>📍 2 Onatamere Ihemando Close, Abule Ado, Ojo, Lagos, Nigeria</p>
          <p style={{ margin: '0 0 0.35rem 0' }}>📧 <a href="mailto:info@ducexsolicitors.com" style={s.link}>info@ducexsolicitors.com</a></p>
          <p style={{ margin: 0 }}>🌐 <a href="https://www.ducexsolicitors.com" style={s.link}>www.ducexsolicitors.com</a></p>
        </div>

        {/* 2 */}
        <h2 style={s.h2}>2. Our Duty of Confidentiality</h2>
        <p style={s.p}>
          Ducex Solicitors Limited owes a professional duty of confidentiality to its clients. This duty is a fundamental principle of legal practice and is recognised under Nigerian professional rules, common-law principles, and applicable professional conduct regulations.
        </p>
        <p style={s.p}>Our confidentiality obligation means that:</p>
        <ul style={s.ul}>
          <Li>We will not disclose confidential information about your legal matter to third parties without your authority, except where required or permitted by law;</Li>
          <Li>We will take reasonable steps to keep confidential information secure;</Li>
          <Li>Our lawyers, staff and authorised personnel are bound by confidentiality obligations;</Li>
          <Li>We apply appropriate technical and organisational measures to protect client information in our systems.</Li>
        </ul>
        <p style={s.p}>The duty of confidentiality generally continues after our professional relationship ends.</p>

        {/* 3 */}
        <h2 style={s.h2}>3. What Is Legal Professional Privilege?</h2>
        <p style={s.p}>
          Legal professional privilege (also referred to as attorney-client privilege or solicitor-client privilege) is a legal right, distinct from a general confidentiality duty. It protects confidential communications between a lawyer and client from disclosure in legal proceedings or to regulatory authorities in certain circumstances.
        </p>
        <p style={s.p}>Privilege may cover:</p>
        <ul style={s.ul}>
          <Li><strong>Legal advice privilege</strong> — confidential communications between a lawyer and client made for the purpose of giving or receiving legal advice;</Li>
          <Li><strong>Litigation privilege</strong> — confidential communications created for the dominant purpose of litigation that is reasonably anticipated or already underway.</Li>
        </ul>
        <div style={s.warning}>
          <strong>Important:</strong> Legal professional privilege belongs to the <em>client</em>, not the lawyer. Only you (as the client) can waive or assert it.
        </div>

        {/* 4 */}
        <h2 style={s.h2}>4. When Confidentiality and Privilege Apply</h2>
        <p style={s.p}>Confidentiality and privilege generally apply once a formal solicitor-client relationship has been established. The following situations may affect the scope of protection:</p>

        <h3 style={s.h3}>4.1 Before a formal engagement</h3>
        <div style={s.important}>
          Communications made before a formal solicitor-client relationship is established — such as initial website enquiries, contact form submissions, or general emails — may <strong>not</strong> be protected by legal professional privilege, even if they are treated confidentially by our firm.
        </div>
        <p style={s.p}>You should not submit highly sensitive, time-critical or privileged information through a general contact form or the Legal Navigator until a formal engagement has been agreed.</p>

        <h3 style={s.h3}>4.2 After a formal engagement</h3>
        <p style={s.p}>Once a formal engagement has been established and your matter has been accepted, communications made for the purpose of legal advice or anticipated litigation may attract legal professional privilege, subject to the requirements of applicable law.</p>

        <h3 style={s.h3}>4.3 Communications made to third parties</h3>
        <p style={s.p}>Privilege may be lost if a communication is shared with a third party who is not subject to legal professional privilege obligations or who is not part of the confidential communication circle of the legal matter.</p>

        <h3 style={s.h3}>4.4 Where privilege does not apply</h3>
        <p style={s.p}>Privilege generally does not protect:</p>
        <ul style={s.ul}>
          <Li>Communications in furtherance of fraud, crime or other unlawful purposes;</Li>
          <Li>General business advice that does not involve legal advice;</Li>
          <Li>Information that has entered the public domain;</Li>
          <Li>Communications where privilege has been waived;</Li>
          <Li>Information required to be disclosed under applicable anti-money-laundering legislation;</Li>
          <Li>Information subject to a lawful court order or regulatory requirement.</Li>
        </ul>

        {/* 5 */}
        <h2 style={s.h2}>5. Permitted Disclosures</h2>
        <p style={s.p}>Our duty of confidentiality is not absolute. We may be required or permitted to disclose confidential information in limited circumstances, including:</p>
        <ul style={s.ul}>
          <Li>Where you have given your informed consent or authority;</Li>
          <Li>Where disclosure is required by law, court order, or regulatory obligation;</Li>
          <Li>Where required by applicable anti-money-laundering or counter-terrorism financing legislation;</Li>
          <Li>Where necessary to prevent serious harm to life or safety;</Li>
          <Li>Where disclosure is to other lawyers, counsel, or professional advisers working on your matter under equivalent confidentiality obligations;</Li>
          <Li>Where necessary to obtain legal advice for Ducex Solicitors itself (e.g. professional indemnity matters), subject to appropriate restrictions;</Li>
          <Li>Where permitted by applicable professional conduct rules.</Li>
        </ul>
        <p style={s.p}>Where we are required to disclose information, we will generally notify you to the extent permitted by law.</p>

        {/* 6 */}
        <h2 style={s.h2}>6. Conflict of Interest Checks</h2>
        <p style={s.p}>
          Before accepting a new matter, we conduct conflict-of-interest checks. This process may require us to use limited information about you and your matter to check our records for potential conflicts. This is a necessary part of responsible legal practice and is consistent with our confidentiality obligations.
        </p>
        <p style={s.p}>
          Information used in conflict checks is handled within our firm under appropriate confidentiality controls and is not disclosed to external parties as part of the conflict-check process.
        </p>

        {/* 7 */}
        <h2 style={s.h2}>7. Third Parties Involved in Your Matter</h2>
        <p style={s.p}>In the course of providing legal services, we may need to share your information with third parties involved in your matter. This may include:</p>
        <ul style={s.ul}>
          <Li>Counsel, barristers, or advocates;</Li>
          <Li>Expert witnesses;</Li>
          <Li>Courts and tribunals;</Li>
          <Li>Mediators and arbitrators;</Li>
          <Li>Other professional advisers;</Li>
          <Li>Opposing parties&apos; representatives where required by law or for the conduct of the matter.</Li>
        </ul>
        <p style={s.p}>We will only share your information with third parties to the extent necessary for your matter and where it is appropriate to do so. We will discuss material third-party disclosures with you as part of the conduct of your matter.</p>

        {/* 8 */}
        <h2 style={s.h2}>8. How We Protect Your Information</h2>
        <p style={s.p}>We apply technical and organisational measures to protect your information, including:</p>
        <ul style={s.ul}>
          <Li>Secure client portal with authenticated, role-based access;</Li>
          <Li>Encryption in transit (HTTPS/TLS) for all digital communications;</Li>
          <Li>Encrypted database and document storage through Supabase;</Li>
          <Li>Access controls and matter-level authorisation;</Li>
          <Li>Staff confidentiality obligations and access restrictions;</Li>
          <Li>Secure document exchange through our portal rather than unencrypted email where possible;</Li>
          <Li>Activity logging and security monitoring.</Li>
        </ul>

        {/* 9 */}
        <h2 style={s.h2}>9. Using Our Client Portal</h2>
        <p style={s.p}>
          For formal client communications and document exchange, we encourage you to use our secure client portal at <a href="https://www.ducexsolicitors.com/portal/login" style={s.link}>ducexsolicitors.com/portal</a>. The portal provides a more secure communication environment than general email and helps protect the confidentiality of your matter.
        </p>
        <div style={s.infoBox}>
          <strong>Portal Security Responsibilities:</strong>
          <ul style={{ ...s.ul, marginBottom: 0, marginTop: '0.5rem' }}>
            <Li>Keep your login credentials confidential;</Li>
            <Li>Use a strong, unique password;</Li>
            <Li>Do not share your account access with anyone;</Li>
            <Li>Log out after each session, especially on shared devices;</Li>
            <Li>Notify us immediately if you suspect unauthorised access.</Li>
          </ul>
        </div>

        {/* 10 */}
        <h2 style={s.h2}>10. Anti-Money Laundering and Regulatory Obligations</h2>
        <p style={s.p}>
          As a law firm, Ducex Solicitors Limited is subject to anti-money-laundering (AML) and counter-terrorism financing (CTF) obligations under applicable Nigerian law and, where relevant, international AML standards. These obligations may require us to:
        </p>
        <ul style={s.ul}>
          <Li>Verify your identity before accepting instructions (Know Your Client / KYC);</Li>
          <Li>Request information about the source of funds or assets involved in a transaction;</Li>
          <Li>Report certain transactions or activities to relevant authorities without notifying you (where &ldquo;tipping-off&rdquo; restrictions apply);</Li>
          <Li>Retain AML and KYC records for legally required periods.</Li>
        </ul>
        <p style={s.p}>
          These obligations take precedence over our general confidentiality duty where applicable law requires disclosure. We will comply with our AML obligations while seeking to minimise any impact on your confidentiality interests to the extent permitted by law.
        </p>

        {/* 11 */}
        <h2 style={s.h2}>11. Confidentiality After the Matter Ends</h2>
        <p style={s.p}>
          Our duty of confidentiality in relation to your matter continues after the conclusion of your legal matter and after the end of our professional relationship. We will continue to protect your confidential information in accordance with applicable professional rules, legal obligations and our internal policies.
        </p>

        {/* 12 */}
        <h2 style={s.h2}>12. Relationship to Our Privacy Policy</h2>
        <p style={s.p}>
          This Client Confidentiality Notice complements but does not replace our{' '}
          <Link href="/privacy-policy" style={s.link}>Privacy Policy</Link>. The Privacy Policy explains how we collect, use, and process personal data under applicable data-protection law. The duty of confidentiality and legal professional privilege are distinct legal concepts that arise from our professional obligations as solicitors, not only from data-protection legislation.
        </p>
        <p style={s.p}>
          <strong>Privacy law and legal professional privilege are different protections:</strong> Privacy law gives you rights over your personal data. Legal professional privilege protects confidential communications with your lawyer from compelled disclosure. Both may apply to the same communication, but the conditions, scope, and exceptions are different.
        </p>

        {/* 13 */}
        <h2 style={s.h2}>13. Questions and Concerns</h2>
        <p style={s.p}>
          If you have any questions about our confidentiality obligations, the scope of legal professional privilege in your matter, or how we handle your information, please speak directly with the lawyer handling your matter or contact us at:
        </p>
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
