import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Ducex Solicitors',
  description: 'Privacy Policy for Ducex Solicitors Limited — how we collect, use, store, and protect your personal information.',
};

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    backgroundColor: 'var(--color-white)',
    minHeight: '100vh',
    padding: '5rem 0 6rem',
  },
  inner: {
    maxWidth: '860px',
    margin: '0 auto',
    padding: '0 1.5rem',
  },
  badge: {
    display: 'inline-block',
    background: 'var(--color-brass, #c9a96e)',
    color: '#fff',
    fontSize: '0.72rem',
    fontWeight: '700',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    padding: '0.3rem 0.85rem',
    borderRadius: '20px',
    marginBottom: '1rem',
  },
  title: {
    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
    fontWeight: '800',
    color: 'var(--color-slate, #1a2a3a)',
    marginBottom: '0.5rem',
    fontFamily: 'var(--font-heading)',
    lineHeight: '1.2',
  },
  meta: {
    fontSize: '0.875rem',
    color: 'var(--color-slate-light, #6b7280)',
    marginBottom: '0.25rem',
  },
  intro: {
    fontSize: '0.875rem',
    color: 'var(--color-slate-light, #6b7280)',
    fontStyle: 'italic',
    borderLeft: '3px solid var(--color-brass, #c9a96e)',
    paddingLeft: '1rem',
    marginTop: '1.5rem',
    marginBottom: '2.5rem',
    lineHeight: '1.7',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #e5e7eb',
    margin: '2.5rem 0',
  },
  h2: {
    fontSize: '1.15rem',
    fontWeight: '800',
    marginTop: '2.75rem',
    marginBottom: '0.6rem',
    color: 'var(--color-slate, #1a2a3a)',
    fontFamily: 'var(--font-heading)',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid var(--color-brass, #c9a96e)',
  },
  h3: {
    fontSize: '0.975rem',
    fontWeight: '700',
    marginTop: '1.5rem',
    marginBottom: '0.4rem',
    color: 'var(--color-ink, #0d1b2a)',
  },
  p: {
    marginBottom: '0.9rem',
    lineHeight: '1.85',
    fontSize: '0.95rem',
    color: 'var(--color-ink, #0d1b2a)',
  },
  ul: {
    paddingLeft: '1.5rem',
    marginBottom: '0.9rem',
    lineHeight: '1.85',
    fontSize: '0.95rem',
    color: 'var(--color-ink, #0d1b2a)',
  },
  li: {
    marginBottom: '0.3rem',
  },
  warning: {
    background: '#fff8ed',
    border: '1px solid #e0a045',
    borderLeft: '4px solid #e0a045',
    borderRadius: '6px',
    padding: '1rem 1.25rem',
    marginBottom: '1.25rem',
    fontSize: '0.92rem',
    lineHeight: '1.75',
    color: '#6b3c00',
  },
  infoBox: {
    background: 'var(--color-smoke, #f7f7f5)',
    border: '1px solid #ddd',
    borderLeft: '4px solid var(--color-brass, #c9a96e)',
    borderRadius: '6px',
    padding: '1rem 1.25rem',
    marginBottom: '1.25rem',
    fontSize: '0.92rem',
    lineHeight: '1.75',
    color: 'var(--color-ink, #0d1b2a)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    fontSize: '0.9rem',
    marginBottom: '1.25rem',
  },
  th: {
    background: 'var(--color-slate, #1a2a3a)',
    color: '#fff',
    padding: '0.6rem 1rem',
    textAlign: 'left' as const,
    fontWeight: '700',
    fontSize: '0.8rem',
    letterSpacing: '0.04em',
  },
  td: {
    padding: '0.55rem 1rem',
    borderBottom: '1px solid #e5e7eb',
    verticalAlign: 'top' as const,
  },
  tdAlt: {
    padding: '0.55rem 1rem',
    borderBottom: '1px solid #e5e7eb',
    verticalAlign: 'top' as const,
    background: '#f9f9f7',
  },
  contactCard: {
    background: 'var(--color-slate, #1a2a3a)',
    color: '#fff',
    borderRadius: '8px',
    padding: '1.5rem 1.75rem',
    marginTop: '0.5rem',
    marginBottom: '1.25rem',
    lineHeight: '1.9',
    fontSize: '0.93rem',
  },
  link: {
    color: 'var(--color-brass, #c9a96e)',
    textDecoration: 'none',
  },
};

const Li = ({ children }: { children: React.ReactNode }) => (
  <li style={styles.li}>{children}</li>
);

export default function PrivacyPolicyPage() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.inner}>

        {/* Header */}
        <span style={styles.badge}>Legal Document</span>
        <h1 style={styles.title}>Privacy Policy</h1>
        <p style={styles.meta}><strong>Last Updated:</strong> 27 July 2026</p>
        <p style={styles.meta}><strong>Effective Date:</strong> 27 July 2026</p>
        <p style={styles.intro}>
          This Privacy Policy applies to all personal data collected, used and processed by Ducex Solicitors Limited through our website, client portal, digital services, and legal practice. It should be read alongside our Cookie Policy, Terms of Use, Client Engagement/Retainer Agreement, Data Processing Agreements, and applicable jurisdiction-specific notices.
        </p>

        <hr style={styles.divider} />

        {/* 1 */}
        <h2 style={styles.h2}>1. Introduction</h2>
        <p style={styles.p}>
          <strong>Ducex Solicitors Limited</strong> (&ldquo;Ducex Solicitors&rdquo;, &ldquo;Ducex&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting the personal data and confidential information entrusted to us.
        </p>
        <p style={styles.p}>This Privacy Policy explains how we collect, use, disclose, store, protect and otherwise process personal data when you:</p>
        <ul style={styles.ul}>
          {[
            'Visit our website;',
            'Use our online platforms and digital services;',
            'Submit an enquiry;',
            'Use our Legal Navigator;',
            'Request a consultation or book an appointment;',
            'Contact us by email, telephone or other communication channels;',
            'Apply for employment or other opportunities;',
            'Use our client portal;',
            'Upload or exchange documents through our platform;',
            'Communicate with our lawyers, staff or representatives; or',
            'Otherwise interact with Ducex Solicitors.',
          ].map((s, i) => <Li key={i}>{s}</Li>)}
        </ul>
        <p style={styles.p}>This Privacy Policy applies to users located in Nigeria and internationally, subject to applicable local data-protection laws.</p>
        <div style={styles.infoBox}>
          <p style={{ margin: '0 0 0.4rem 0' }}><strong>Registered Name:</strong> Ducex Solicitors Limited</p>
          <p style={{ margin: '0 0 0.4rem 0' }}><strong>Business Address:</strong> 2 Onatamere Ihemando Close, Abule Ado, Ojo, Lagos, Nigeria</p>
          <p style={{ margin: '0 0 0.4rem 0' }}><strong>Website:</strong> <a href="https://www.ducexsolicitors.com" style={styles.link}>www.ducexsolicitors.com</a></p>
          <p style={{ margin: 0 }}><strong>Privacy Contact:</strong> <a href="mailto:info@ducexsolicitors.com" style={styles.link}>info@ducexsolicitors.com</a></p>
        </div>
        <p style={styles.p}>
          Ducex Solicitors generally acts as the <strong>data controller</strong> or equivalent responsible entity for personal data collected and processed through its website, legal enquiries, consultations, client relationships and business operations. Where we process personal data strictly on behalf of another organisation under its instructions, we may act as a data processor, service provider, or equivalent role under applicable law.
        </p>

        {/* 2 */}
        <h2 style={styles.h2}>2. Important Information for Prospective Clients</h2>
        <div style={styles.warning}>
          <strong>This Privacy Policy is not legal advice.</strong> It explains our data practices only and does not create a solicitor-client relationship.
        </div>
        <h3 style={styles.h3}>2.1 Website enquiries do not automatically create a solicitor-client relationship</h3>
        <p style={styles.p}>
          Submitting an online enquiry, using our Legal Navigator, sending an email or contacting Ducex Solicitors does not, by itself, establish a solicitor-client relationship. A solicitor-client relationship is established only where formally agreed in accordance with applicable professional and legal requirements.
        </p>
        <h3 style={styles.h3}>2.2 Be careful when submitting confidential information</h3>
        <p style={styles.p}>Until a formal professional relationship has been established, you should avoid submitting highly sensitive or confidential information through a general contact form. This is particularly important because:</p>
        <ul style={styles.ul}>
          {[
            'We may need to conduct conflict checks;',
            'We may not be able to accept your matter;',
            'Communications may not be protected by legal professional privilege until a professional relationship exists;',
            'General website communication channels may not provide the same security as our designated client communication systems.',
          ].map((s, i) => <Li key={i}>{s}</Li>)}
        </ul>

        {/* 3 */}
        <h2 style={styles.h2}>3. Personal Data We May Collect</h2>
        <p style={styles.p}>The personal data we collect depends on how you interact with us.</p>

        <h3 style={styles.h3}>3.1 Identity and Contact Information</h3>
        <ul style={styles.ul}>
          {['Full name and preferred name', 'Email address', 'Telephone number', 'Residential or business address', 'Country and city', 'Date of birth (where necessary)', 'Nationality (where necessary)', 'Preferred communication method'].map((s, i) => <Li key={i}>{s}</Li>)}
        </ul>

        <h3 style={styles.h3}>3.2 Enquiry and Consultation Information</h3>
        <ul style={styles.ul}>
          {['The legal area relevant to your enquiry', 'General description of your legal issue', 'Preferred consultation date, time and type', 'Communication preferences', 'Information required for conflict checks and client onboarding'].map((s, i) => <Li key={i}>{s}</Li>)}
        </ul>

        <h3 style={styles.h3}>3.3 Client and Matter Information</h3>
        <p style={styles.p}>If you become a client, we may process information necessary to provide legal services, including matter details, legal instructions, correspondence, documents, contracts, property, corporate, financial, tax, litigation, court-related, family, estate, succession information, and information relating to opposing parties and other relevant individuals.</p>
        <p style={styles.p}>Where you provide us with another person&apos;s personal data, you should do so only where you have a lawful basis or authority to provide that information.</p>

        <h3 style={styles.h3}>3.4 Sensitive and Special-Category Information</h3>
        <p style={styles.p}>Depending on the nature of a legal matter, we may process data concerning:</p>
        <ul style={styles.ul}>
          {['Health information (e.g. personal injury, employment, or family matters)', 'Criminal allegations or proceedings (e.g. criminal defence matters)', 'Biometric information', 'Religious beliefs, political opinions, or sexual orientation where relevant to a matter', 'Financial information', "Children's information (e.g. family, custody, or estate matters)", 'Racial or ethnic origin where relevant'].map((s, i) => <Li key={i}>{s}</Li>)}
        </ul>
        <p style={styles.p}>We process such information only where permitted by applicable law and where necessary for a legitimate legal, professional or business purpose. You should avoid submitting sensitive information unless reasonably necessary for your enquiry or legal matter.</p>

        <h3 style={styles.h3}>3.5 Documents</h3>
        <p style={styles.p}>You may provide identification documents, contracts, property documents, court documents, corporate documents, tax documents, estate documents, financial documents, correspondence, evidence and other documents relevant to a legal matter. Please do not upload unnecessary personal information.</p>

        <h3 style={styles.h3}>3.6 Account and Authentication Information</h3>
        <p style={styles.p}>For users of our client portal, we may process username, email address, account identifier, authentication information, password-related security information, login records, session information and multi-factor authentication information. We do not store passwords in readable plain text.</p>

        <h3 style={styles.h3}>3.7 Communications</h3>
        <p style={styles.p}>We may process information contained in emails, contact forms, portal messages, consultation communications, telephone records where lawfully recorded, customer-support communications and other communications with us.</p>

        <h3 style={styles.h3}>3.8 Technical and Device Information</h3>
        <p style={styles.p}>When you use our website or digital platforms, we may automatically receive: IP address, browser type, device type, operating system, approximate location derived from technical information, language preference, time zone, referring website, pages viewed, interaction information, error logs and security/diagnostic information.</p>
        <p style={styles.p}>We do not use technical information to identify you beyond what is reasonably necessary for legitimate purposes.</p>

        <h3 style={styles.h3}>3.9 Cookies and Similar Technologies</h3>
        <p style={styles.p}>We may use strictly necessary cookies, security and authentication cookies, preference cookies, analytics cookies and performance technologies. Non-essential cookies may require consent depending on applicable law. Please see our <strong>Cookie Policy</strong> for full details.</p>

        <h3 style={styles.h3}>3.10 Employment and Recruitment Information</h3>
        <p style={styles.p}>If you apply for employment, we may collect your CV, application information, qualifications, professional history, references, contact details, interview information and right-to-work information where legally required.</p>

        {/* 4 */}
        <h2 style={styles.h2}>4. How We Collect Personal Data</h2>
        <h3 style={styles.h3}>Directly from you</h3>
        <p style={styles.p}>For example when you complete a form, book a consultation, register an account, upload a document, contact us, communicate with a lawyer or apply for a position.</p>
        <h3 style={styles.h3}>Automatically</h3>
        <p style={styles.p}>Through website technologies, cookies, server logs, security systems, and device and browser information.</p>
        <h3 style={styles.h3}>From third parties</h3>
        <p style={styles.p}>Where lawful and necessary, we may receive information from clients, authorised representatives, referrers, professional advisers, courts, regulators, public authorities, publicly available sources, and other parties involved in a legal matter.</p>

        {/* 5 */}
        <h2 style={styles.h2}>5. Why We Use Personal Data</h2>

        {[
          { title: '5.1 Providing Legal Services', items: ['Understand your legal needs', 'Conduct conflict checks', 'Assess whether we can act', 'Provide legal advice and representation', 'Manage legal matters and communicate with clients', 'Prepare documents and conduct research', 'Meet professional obligations'] },
          { title: '5.2 Responding to Enquiries', items: ['Respond to your request', 'Determine the relevant practice area', 'Contact you and arrange an initial consultation', 'Determine whether we can assist'] },
          { title: '5.4 Consultation Booking', items: ['Schedule consultations and manage appointments', 'Send confirmations and reminders', 'Manage cancellations and rescheduling'] },
          { title: '5.5 Client Portal Operations', items: ['Authenticate users', 'Provide access to authorised matters', 'Exchange documents', 'Facilitate communications and display appointments', 'Provide notifications and maintain security'] },
          { title: '5.7 Compliance with Law and Professional Obligations', items: ['Comply with applicable law and respond to lawful requests', 'Meet regulatory and professional obligations', 'Comply with court orders', 'Prevent fraud and abuse', 'Maintain appropriate records'] },
          { title: '5.8 Security', items: ['Protect our systems', 'Detect suspicious activity and prevent unauthorised access', 'Investigate security incidents'] },
        ].map(({ title, items }) => (
          <div key={title}>
            <h3 style={styles.h3}>{title}</h3>
            <ul style={styles.ul}>{items.map((i, idx) => <Li key={idx}>{i}</Li>)}</ul>
          </div>
        ))}

        <h3 style={styles.h3}>5.3 Operating the Legal Navigator</h3>
        <p style={styles.p}>Our Legal Navigator may process information you provide to identify a potentially relevant practice area, provide general educational information, suggest a possible next step, and direct you to relevant services. <strong>The Legal Navigator does not provide legal advice and should not be relied upon as a substitute for a qualified lawyer.</strong></p>

        <h3 style={styles.h3}>5.9 Business Administration</h3>
        <p style={styles.p}>To manage our business, maintain records, manage accounts, process payments where applicable, manage suppliers and maintain internal operations.</p>

        <h3 style={styles.h3}>5.10 Website Improvement</h3>
        <p style={styles.p}>To understand how users interact with our website, improve usability, diagnose technical problems and improve our services.</p>

        <h3 style={styles.h3}>5.11 Marketing</h3>
        <p style={styles.p}>Where permitted by applicable law, we may send legal insights, firm news, educational materials, service updates and marketing communications. You may unsubscribe at any time. We do not condition the provision of legal services on your consent to receive marketing communications.</p>

        {/* 6 */}
        <h2 style={styles.h2}>6. Legal Bases for Processing</h2>
        <p style={styles.p}>Depending on the applicable law and circumstances, we may rely on:</p>
        <ul style={styles.ul}>
          <Li><strong>Consent</strong> — where you have freely given specific and informed consent. You may withdraw consent where applicable; withdrawal does not invalidate prior processing.</Li>
          <Li><strong>Contract and pre-contractual steps</strong> — where processing is necessary to provide services, perform an agreement, or take steps you requested before entering into an agreement.</Li>
          <Li><strong>Legal obligation</strong> — where processing is necessary to comply with a legal or regulatory obligation.</Li>
          <Li><strong>Legitimate interests</strong> — for example cybersecurity, fraud prevention, business administration, conflict checks, service improvement and legal claims, where those interests are not overridden by your privacy rights.</Li>
          <Li><strong>Vital interests</strong> — where necessary to protect life or physical safety.</Li>
          <Li><strong>Legal claims</strong> — where necessary to establish, exercise or defend legal claims.</Li>
          <Li><strong>Public interest</strong> — where recognised by applicable law.</Li>
        </ul>

        {/* 7 */}
        <h2 style={styles.h2}>7. Special Categories and Sensitive Personal Data</h2>
        <p style={styles.p}>Some legal matters may involve information considered sensitive or specially protected under applicable law, including health, criminal, biometric, financial, religious, political, and children&apos;s information. We process such information only where it is necessary for a legitimate purpose, we have an appropriate lawful basis, applicable law permits the processing, and appropriate safeguards are applied.</p>

        {/* 8 */}
        <h2 style={styles.h2}>8. Children&apos;s Privacy</h2>
        <p style={styles.p}>Our general website and legal services are not intentionally directed at children unless a legal matter requires us to process information relating to a child (e.g. family, custody or estate matters). In those circumstances, information about children is processed where lawful and necessary for providing legal services, protecting the child&apos;s interests, or complying with legal obligations. We do not knowingly use children&apos;s personal data for targeted advertising.</p>

        {/* 9 */}
        <h2 style={styles.h2}>9. How We Share Personal Data</h2>
        <p style={styles.p}>We do not sell personal data as a business model. We may disclose personal data where necessary and lawful to:</p>

        <h3 style={styles.h3}>9.1 Technology Providers</h3>
        <p style={styles.p}>Our technology infrastructure includes:</p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Provider</th>
              <th style={styles.th}>Function</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Netlify', 'Frontend hosting and global content delivery for our public website'],
              ['Render', 'Node.js backend / API infrastructure hosting'],
              ['Supabase', 'Database, document storage and file infrastructure (hosted on AWS)'],
              ['Business Webmail / SMTP', 'Email delivery for business communications and notifications'],
            ].map(([provider, fn], i) => (
              <tr key={i}>
                <td style={i % 2 === 0 ? styles.td : styles.tdAlt}><strong>{provider}</strong></td>
                <td style={i % 2 === 0 ? styles.td : styles.tdAlt}>{fn}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={styles.p}>The use of a technology provider does not mean that the provider may use client data for its own unrelated purposes. Where applicable law requires it, we enter into appropriate data-processing arrangements.</p>

        <h3 style={styles.h3}>9.2 Professional Advisers</h3>
        <p style={styles.p}>We may share information with accountants, auditors, insurers, consultants and other professional advisers where necessary and lawful.</p>

        <h3 style={styles.h3}>9.3 Courts and Legal Authorities</h3>
        <p style={styles.p}>Where necessary or legally required, we may disclose information to courts, tribunals, regulators, law-enforcement agencies and government authorities.</p>

        <h3 style={styles.h3}>9.4 Other Parties Involved in Legal Matters</h3>
        <p style={styles.p}>Where necessary to provide legal services, we may share information with opposing counsel, courts, expert witnesses, mediators, arbitrators, barristers, notaries and other authorised representatives.</p>

        <h3 style={styles.h3}>9.5 Business Transactions</h3>
        <p style={styles.p}>If Ducex Solicitors is involved in a merger, acquisition, restructuring, sale of assets or reorganisation, personal data may be transferred as part of that transaction, subject to applicable law and appropriate safeguards.</p>

        {/* 10 */}
        <h2 style={styles.h2}>10. International Data Transfers</h2>
        <p style={styles.p}>Because Ducex Solicitors serves international clients and uses technology providers that may process data in different countries, personal data may be transferred to or accessed from countries outside Nigeria or your country of residence.</p>
        <p style={styles.p}>Specifically:</p>
        <ul style={styles.ul}>
          <Li>Data stored in <strong>Supabase</strong> may reside on AWS infrastructure in the United States or other AWS regions.</Li>
          <Li>Data processed by <strong>Netlify</strong> and <strong>Render</strong> is handled on servers in the United States.</Li>
          <Li>Data processed by our analytics tools may be transferred to and processed in the United States and other countries.</Li>
        </ul>
        <p style={styles.p}>Where applicable law restricts international transfers, we will use appropriate lawful mechanisms, which may include adequacy decisions, Standard Contractual Clauses, approved contractual safeguards, or other legally recognised transfer mechanisms recognised under Nigeria&apos;s NDP Act, EU/UK GDPR, and other applicable frameworks.</p>

        {/* 11 */}
        <h2 style={styles.h2}>11. Our Technology Infrastructure</h2>
        <div style={styles.infoBox}>
          <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: '0.85rem', lineHeight: '1.9' }}>
{`USER
  ↓
DUCEX WEBSITE (www.ducexsolicitors.com)
  ↓
NETLIFY  (Frontend Hosting)
  ↓
NODE.JS BACKEND / API
  ↓
RENDER  (Backend Hosting)
  ↓
SUPABASE  (Database & Document Storage)

EMAIL: Business Webmail / SMTP`}
          </pre>
        </div>

        {/* 12 */}
        <h2 style={styles.h2}>12. Legal Professional Confidentiality and Privilege</h2>
        <p style={styles.p}>Ducex Solicitors is committed to maintaining appropriate confidentiality in relation to legal matters. However:</p>
        <ul style={styles.ul}>
          <Li>Privacy protection is not identical to legal professional privilege;</Li>
          <Li>A Privacy Policy cannot create legal professional privilege;</Li>
          <Li>Privilege depends on applicable law and the circumstances of the communication;</Li>
          <Li>Communications before a professional relationship is established may not be privileged;</Li>
          <Li>We may be required to disclose information where legally required.</Li>
        </ul>
        <p style={styles.p}>We apply appropriate confidentiality and access controls to legal information.</p>

        {/* 13 */}
        <h2 style={styles.h2}>13. Data Retention</h2>
        <p style={styles.p}>We retain personal data only for as long as reasonably necessary for the purpose for which it was collected, unless a longer period is required or permitted by law. Indicative periods include:</p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Data Category</th>
              <th style={styles.th}>Indicative Retention</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Website enquiries', 'As long as reasonably necessary to respond and maintain records; typically up to 12 months'],
              ['Client matter files', 'Minimum 6 years from matter conclusion; longer where required by professional rules or law'],
              ['Portal account data', 'Duration of active account plus a reasonable period thereafter (typically 2 years)'],
              ['AML / KYC records', 'Minimum 5 years from end of business relationship as required by applicable AML law'],
              ['Recruitment (unsuccessful)', 'Up to 6 months from recruitment decision unless you consent to longer'],
              ['Security and audit logs', 'As reasonably necessary to detect and prevent security incidents'],
              ['Marketing preferences/suppressions', 'Retained to honour your opt-out request'],
            ].map(([cat, ret], i) => (
              <tr key={i}>
                <td style={i % 2 === 0 ? styles.td : styles.tdAlt}><strong>{cat}</strong></td>
                <td style={i % 2 === 0 ? styles.td : styles.tdAlt}>{ret}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={styles.p}>When personal data is no longer required, we will delete it, anonymise it, aggregate it, or securely destroy it.</p>

        {/* 14 */}
        <h2 style={styles.h2}>14. Data Security</h2>
        <p style={styles.p}>We implement reasonable technical and organisational measures to protect personal data, including:</p>
        <ul style={styles.ul}>
          {['HTTPS/TLS encryption for all data in transit', 'Supabase database encryption at rest', 'Role-based access controls on the client portal', 'Password hashing (no plain-text password storage)', 'Authentication controls on all portal accounts', 'Activity logging and security monitoring', 'Staff confidentiality obligations', 'Incident-response procedures', 'Backup and recovery controls'].map((s, i) => <Li key={i}>{s}</Li>)}
        </ul>
        <p style={styles.p}>However, no internet transmission or storage system can be guaranteed to be completely secure. You should use strong passwords, avoid reusing passwords, protect your account credentials, log out of shared devices, and report suspicious activity promptly.</p>

        {/* 15 */}
        <h2 style={styles.h2}>15. Data Breaches and Security Incidents</h2>
        <p style={styles.p}>If we become aware of a personal-data breach, we will assess the incident and take steps required by applicable law. Depending on the circumstances, this may include containing and investigating the incident, assessing the risk, preserving evidence, notifying regulators (including the Nigeria Data Protection Commission), notifying affected individuals, and taking remedial action.</p>

        {/* 16 */}
        <h2 style={styles.h2}>16. Your Privacy Rights</h2>
        <p style={styles.p}>Depending on where you live and which law applies, you may have rights including:</p>
        <ul style={styles.ul}>
          {[
            'Right to be informed about how your personal data is processed;',
            'Right of access to personal data we hold about you;',
            'Right to rectification of inaccurate or incomplete personal data;',
            'Right to erasure (subject to lawful exceptions);',
            'Right to restrict processing in circumstances permitted by law;',
            'Right to object to certain processing activities;',
            'Right to data portability (where applicable);',
            'Right to withdraw consent where processing is based on consent;',
            'Rights relating to automated decision-making (where applicable);',
            'Right to complain to the relevant data-protection authority.',
          ].map((s, i) => <Li key={i}>{s}</Li>)}
        </ul>
        <p style={styles.p}>Rights may be subject to lawful exemptions, including obligations relating to legal professional confidentiality, legal claims, court proceedings, regulatory obligations and retention requirements.</p>

        {/* 17 */}
        <h2 style={styles.h2}>17. How to Exercise Your Rights</h2>
        <p style={styles.p}>To exercise a privacy right, contact us at: <a href="mailto:info@ducexsolicitors.com" style={styles.link}>info@ducexsolicitors.com</a></p>
        <p style={styles.p}>Please include your full name, the right you wish to exercise, a description of your request, and sufficient information to help us verify your identity. We will respond within the timeframe required by applicable law. We may request additional information, apply lawful exemptions, restrict the scope of a response, or charge a lawful fee where permitted. If we cannot comply with a request, we will generally explain why, subject to legal restrictions.</p>

        {/* 18 */}
        <h2 style={styles.h2}>18. California Privacy Rights</h2>
        <p style={styles.p}>Where applicable California privacy law applies, California residents may have additional rights including the right to know or access personal information collected, request deletion or correction, and opt out of the sale or sharing of personal information. <strong>Ducex Solicitors does not sell personal information as a business model.</strong> We do not knowingly sell personal information of children. Where applicable California law (CCPA/CPRA) requires additional disclosures, we will provide those disclosures and rights mechanisms.</p>

        {/* 19 */}
        <h2 style={styles.h2}>19. Marketing Communications</h2>
        <p style={styles.p}>You may unsubscribe from marketing communications at any time by clicking the unsubscribe mechanism in any marketing email or by contacting us at <a href="mailto:info@ducexsolicitors.com" style={styles.link}>info@ducexsolicitors.com</a>. Opting out of marketing will not stop essential service communications, legal matter communications, security notifications, consultation management communications or other important service communications.</p>

        {/* 20 */}
        <h2 style={styles.h2}>20. Cookies and Tracking Technologies</h2>
        <p style={styles.p}>Our website may use cookies and similar technologies to operate essential website functions, maintain security, remember preferences, maintain authenticated sessions, understand website usage, and improve website performance. Where required, we will request consent before placing non-essential cookies. You may manage cookies through our cookie-consent mechanism, your browser settings or device settings. Blocking some cookies may affect website functionality. Please see our <strong>Cookie Policy</strong> for full details including specific cookies, purposes, providers, durations and consent controls.</p>

        {/* 21 */}
        <h2 style={styles.h2}>21. Third-Party Websites</h2>
        <p style={styles.p}>Our website may contain links to third-party websites. We are not responsible for their privacy practices, content, security or data-processing activities. You should review the privacy policy of each third-party website you visit.</p>

        {/* 22 */}
        <h2 style={styles.h2}>22. Automated Processing and the Legal Navigator</h2>
        <div style={styles.warning}>
          The Ducex Legal Navigator is an educational and service-navigation tool only. It does <strong>not</strong> act as a lawyer, establish a solicitor-client relationship, provide definitive legal advice, make a final legal determination, or guarantee any legal outcome. Do not rely on it as a substitute for qualified legal advice.
        </div>
        <p style={styles.p}>Where applicable law provides rights relating to solely automated decisions that produce legal or similarly significant effects, those rights will be respected and appropriate human oversight applied.</p>

        {/* 23 */}
        <h2 style={styles.h2}>23. Data Relating to Other People</h2>
        <p style={styles.p}>If you provide personal data relating to another person, you should ensure that you are legally permitted to provide it, you have an appropriate lawful basis, the information is accurate, and you have informed the person where required by law. This is particularly important in family, property, corporate, litigation, criminal and estate matters.</p>

        {/* 24–25 */}
        <h2 style={styles.h2}>24. Data Controller and Processor Roles</h2>
        <p style={styles.p}>For personal data collected directly by Ducex Solicitors for our own purposes, we generally act as the controller or equivalent responsible entity. Where Ducex processes personal data on behalf of a client or another organisation under documented instructions, our role may be that of a processor or equivalent service provider. The legal role depends on the actual purpose and means of processing, not merely the label used in a contract.</p>

        <h2 style={styles.h2}>25. Third-Party Processors</h2>
        <p style={styles.p}>Our provider categories include website hosting, backend hosting, database infrastructure, secure document storage, email and SMTP, security services, analytics, communications and professional advisers. We seek to select providers that offer appropriate security and privacy safeguards and enter into appropriate data-processing arrangements where required by applicable law. Our provider list may change as our technology infrastructure evolves.</p>

        {/* 26 */}
        <h2 style={styles.h2}>26. International Clients</h2>
        <p style={styles.p}>If you access our services from outside Nigeria, your personal data may be processed in Nigeria and other jurisdictions where our service providers or professional advisers operate. Where applicable law requires a specific transfer mechanism, we will seek to use it.</p>

        {/* 27 */}
        <h2 style={styles.h2}>27. Your Responsibility for Account Security</h2>
        <p style={styles.p}>If you create an account, you are responsible for keeping your credentials confidential, using a strong password, and not sharing your login information. Notify us immediately at <a href="mailto:info@ducexsolicitors.com" style={styles.link}>info@ducexsolicitors.com</a> if you believe your password has been compromised, your account has been accessed without authorisation, or a document has been accessed improperly.</p>

        {/* 28 */}
        <h2 style={styles.h2}>28. Changes to This Privacy Policy</h2>
        <p style={styles.p}>We may update this Privacy Policy from time to time to reflect changes in law, our services, technology, providers, or data-processing practices. When we make material changes, we may provide additional notice where required. The &ldquo;Last Updated&rdquo; date at the top of this page indicates when the policy was most recently revised. The latest version will always be published on our website.</p>

        {/* 29 */}
        <h2 style={styles.h2}>29. Contact Us</h2>
        <div style={styles.contactCard}>
          <p style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', fontWeight: '700' }}>Ducex Solicitors Limited</p>
          <p style={{ margin: '0 0 0.35rem 0' }}>📍 2 Onatamere Ihemando Close, Abule Ado, Ojo, Lagos, Nigeria</p>
          <p style={{ margin: '0 0 0.35rem 0' }}>📧 <a href="mailto:info@ducexsolicitors.com" style={styles.link}>info@ducexsolicitors.com</a></p>
          <p style={{ margin: 0 }}>🌐 <a href="https://www.ducexsolicitors.com" style={styles.link}>www.ducexsolicitors.com</a></p>
        </div>

        {/* 30 */}
        <h2 style={styles.h2}>30. Supervisory Authorities</h2>
        <p style={styles.p}>Depending on where you live, you may have the right to contact your local data-protection authority:</p>
        <ul style={styles.ul}>
          <Li><strong>Nigeria:</strong> Nigeria Data Protection Commission (NDPC) — <a href="https://ndpc.gov.ng" target="_blank" rel="noopener noreferrer" style={styles.link}>ndpc.gov.ng</a></Li>
          <Li><strong>UK:</strong> Information Commissioner&apos;s Office (ICO) — <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" style={styles.link}>ico.org.uk</a></Li>
          <Li><strong>EU:</strong> Your local EU data-protection supervisory authority.</Li>
          <Li><strong>California:</strong> California Privacy Protection Agency (CPPA) — <a href="https://cppa.ca.gov" target="_blank" rel="noopener noreferrer" style={styles.link}>cppa.ca.gov</a></Li>
          <Li><strong>Brazil:</strong> Autoridade Nacional de Proteção de Dados (ANPD) — <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" style={styles.link}>gov.br/anpd</a></Li>
          <Li><strong>Australia:</strong> Office of the Australian Information Commissioner (OAIC) — <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" style={styles.link}>oaic.gov.au</a></Li>
        </ul>

        {/* 31 */}
        <h2 style={styles.h2}>31. Governing Privacy Principles</h2>
        <p style={styles.p}>Ducex Solicitors seeks to process personal data in accordance with principles including lawfulness, fairness, transparency, purpose limitation, data minimisation, accuracy, storage limitation, integrity, confidentiality, accountability, privacy by design, and appropriate security. These principles are consistent with the direction of major data-protection frameworks, including Nigeria&apos;s NDP Act, the EU/UK GDPR, and other applicable legislation.</p>

        <hr style={styles.divider} />
        <p style={{ fontSize: '0.8rem', color: 'var(--color-slate-light, #9ca3af)', textAlign: 'center', marginTop: '1rem' }}>
          © {new Date().getFullYear()} Ducex Solicitors Limited. All rights reserved. &nbsp;|&nbsp; Last Updated: 27 July 2026
        </p>

      </div>
    </div>
  );
}
