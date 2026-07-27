import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use | Ducex Solicitors',
  description: 'Terms of Use for the Ducex Solicitors website, client portal, Legal Navigator, and digital services.',
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
  link: { color: 'var(--color-brass, #c9a96e)' },
  contactCard: { background: 'var(--color-slate, #1a2a3a)', color: '#fff', borderRadius: '8px', padding: '1.5rem 1.75rem', marginTop: '0.5rem', marginBottom: '1.25rem', lineHeight: '1.9', fontSize: '0.93rem' },
};

const Li = ({ children }: { children: React.ReactNode }) => <li style={s.li}>{children}</li>;

export default function TermsOfUsePage() {
  return (
    <div style={s.wrapper}>
      <div style={s.inner}>

        <span style={s.badge}>Legal Document</span>
        <h1 style={s.title}>Terms of Use</h1>
        <p style={s.meta}><strong>Last Updated:</strong> 27 July 2026</p>
        <p style={s.meta}><strong>Effective Date:</strong> 27 July 2026</p>
        <p style={s.intro}>
          These Terms of Use govern your access to and use of the Ducex Solicitors website, client portal, Legal Navigator, and all related digital services. Please read them carefully before using our website or services. By accessing or using our website, you agree to be bound by these Terms of Use. If you do not agree, please do not use our website or services.
        </p>

        <hr style={s.divider} />

        {/* Firm */}
        <div style={s.infoBox}>
          <p style={{ margin: '0 0 0.35rem 0' }}><strong>Ducex Solicitors Limited</strong></p>
          <p style={{ margin: '0 0 0.35rem 0' }}>📍 2 Onatamere Ihemando Close, Abule Ado, Ojo, Lagos, Nigeria</p>
          <p style={{ margin: '0 0 0.35rem 0' }}>📧 <a href="mailto:info@ducexsolicitors.com" style={s.link}>info@ducexsolicitors.com</a></p>
          <p style={{ margin: 0 }}>🌐 <a href="https://www.ducexsolicitors.com" style={s.link}>www.ducexsolicitors.com</a></p>
        </div>

        {/* 1 */}
        <h2 style={s.h2}>1. About These Terms</h2>
        <p style={s.p}>
          These Terms of Use (&ldquo;Terms&rdquo;) apply to your use of the Ducex Solicitors website at <a href="https://www.ducexsolicitors.com" style={s.link}>www.ducexsolicitors.com</a>, our client portal, the Ducex Legal Navigator, and all other digital services, tools, and platforms operated by Ducex Solicitors Limited that link to these Terms.
        </p>
        <p style={s.p}>
          These Terms should be read alongside our:
        </p>
        <ul style={s.ul}>
          <Li><Link href="/privacy-policy" style={s.link}>Privacy Policy</Link> — how we collect and process personal data;</Li>
          <Li><Link href="/cookie-policy" style={s.link}>Cookie Policy</Link> — how we use cookies and similar technologies;</Li>
          <Li><Link href="/client-confidentiality-notice" style={s.link}>Client Confidentiality Notice</Link> — our confidentiality obligations and legal professional privilege;</Li>
          <Li>Your Client Engagement / Retainer Agreement — the specific terms governing your legal matter.</Li>
        </ul>
        <p style={s.p}>
          In the event of any conflict between these Terms of Use and a signed Client Engagement / Retainer Agreement, the Client Engagement / Retainer Agreement will prevail to the extent of the conflict.
        </p>

        {/* 2 */}
        <h2 style={s.h2}>2. Important Disclaimer — No Legal Advice</h2>
        <div style={s.warning}>
          <strong>The content on this website does not constitute legal advice.</strong> All information published on our website, including articles, guides, FAQs, blog posts, service descriptions, and Legal Navigator output, is provided for general informational and educational purposes only. It is not a substitute for professional legal advice tailored to your specific circumstances.
        </div>
        <p style={s.p}>
          You should not act or refrain from acting on the basis of any content on this website without first seeking qualified legal advice from a lawyer who is familiar with the specific facts of your situation. Laws and legal requirements may change and may differ between jurisdictions.
        </p>

        {/* 3 */}
        <h2 style={s.h2}>3. No Solicitor-Client Relationship</h2>
        <p style={s.p}>
          Accessing or using our website, submitting an online enquiry, contacting us by email or telephone, or using the Legal Navigator does not, by itself, create a solicitor-client or attorney-client relationship between you and Ducex Solicitors Limited.
        </p>
        <p style={s.p}>A solicitor-client relationship is established only where:</p>
        <ul style={s.ul}>
          <Li>We have completed our required conflict-of-interest checks;</Li>
          <Li>We have formally agreed to act for you; and</Li>
          <Li>The relevant engagement or retainer arrangements have been formally accepted by both parties.</Li>
        </ul>
        <p style={s.p}>Until a formal engagement has been established, you should not treat any communication from us as legal advice.</p>

        {/* 4 */}
        <h2 style={s.h2}>4. The Legal Navigator</h2>
        <p style={s.p}>
          The Ducex Legal Navigator is a general information and service-navigation tool. It is designed to help you identify a potentially relevant area of law and find general educational information about our practice areas.
        </p>
        <div style={s.warning}>
          The Legal Navigator does <strong>not</strong>:
          <ul style={{ ...s.ul, marginTop: '0.5rem', marginBottom: 0 }}>
            <Li>Provide legal advice;</Li>
            <Li>Establish a solicitor-client relationship;</Li>
            <Li>Make a final legal determination about your situation;</Li>
            <Li>Guarantee any legal outcome;</Li>
            <Li>Replace a qualified, licensed lawyer.</Li>
          </ul>
        </div>
        <p style={s.p}>
          You should not rely on the Legal Navigator as a substitute for professional legal advice. Always consult a qualified solicitor before taking or refraining from taking any legal action.
        </p>

        {/* 5 */}
        <h2 style={s.h2}>5. Permitted Use of Our Website</h2>
        <p style={s.p}>You may use our website for lawful purposes only. You agree not to:</p>
        <ul style={s.ul}>
          <Li>Use our website in any way that breaches applicable law or regulation;</Li>
          <Li>Use our website in any fraudulent or dishonest manner, or for any unlawful purpose;</Li>
          <Li>Transmit unsolicited or unauthorised advertising, promotional material, or spam;</Li>
          <Li>Attempt to gain unauthorised access to our website, server, database, or any system connected to our website;</Li>
          <Li>Introduce viruses, malware, or any other harmful code to our website or systems;</Li>
          <Li>Attempt to interfere with the availability or performance of our website;</Li>
          <Li>Copy, reproduce, republish, upload, post, transmit, or distribute our website content without our prior written permission, except for your own personal, non-commercial use;</Li>
          <Li>Scrape, crawl, or use automated tools to extract content or data from our website without our written permission;</Li>
          <Li>Impersonate any person or misrepresent your affiliation with any person or organisation;</Li>
          <Li>Collect or harvest personal data about other users of our website.</Li>
        </ul>

        {/* 6 */}
        <h2 style={s.h2}>6. Client Portal — Terms of Access</h2>
        <p style={s.p}>Access to the Ducex Solicitors client portal is restricted to authorised users. If you have been granted access to the client portal:</p>
        <ul style={s.ul}>
          <Li>You must keep your login credentials confidential;</Li>
          <Li>You must not share your account with any other person;</Li>
          <Li>You must use a strong and unique password;</Li>
          <Li>You are responsible for all activity that occurs under your account;</Li>
          <Li>You must notify us immediately if you suspect unauthorised access to your account;</Li>
          <Li>You must only access matters, documents, and information to which you are expressly authorised;</Li>
          <Li>You must not attempt to access matters or information belonging to other clients.</Li>
        </ul>
        <p style={s.p}>
          We reserve the right to suspend or terminate portal access if we believe your account has been compromised, misused, or if these Terms have been breached.
        </p>

        {/* 7 */}
        <h2 style={s.h2}>7. Intellectual Property</h2>
        <p style={s.p}>
          All content on the Ducex Solicitors website — including text, graphics, logos, images, icons, articles, guides, design, layout, and code — is the intellectual property of Ducex Solicitors Limited or its licensors and is protected by applicable copyright, trademark, and intellectual property laws.
        </p>
        <p style={s.p}>
          You are permitted to view, download, and print pages from our website for your own personal, non-commercial use, provided you do not modify the content and you retain all copyright and other proprietary notices.
        </p>
        <p style={s.p}>You may not:</p>
        <ul style={s.ul}>
          <Li>Republish, reproduce, or redistribute our website content for commercial purposes without our prior written consent;</Li>
          <Li>Create a database by systematically downloading content from our website;</Li>
          <Li>Use our name, logos, or trademarks without our prior written consent;</Li>
          <Li>Frame our website on any other website without our prior written consent.</Li>
        </ul>
        <p style={s.p}>
          Where our website contains links to third-party content, we do not claim any ownership over that content. Any third-party trademarks, names, or logos are the property of their respective owners.
        </p>

        {/* 8 */}
        <h2 style={s.h2}>8. User-Submitted Content</h2>
        <p style={s.p}>
          If you submit content through our website — for example, through an enquiry form, consultation request form, portal message, or document upload — you:
        </p>
        <ul style={s.ul}>
          <Li>Confirm that you have the right to submit that content;</Li>
          <Li>Grant us a limited licence to use that content for the purpose for which it was submitted;</Li>
          <Li>Are responsible for ensuring the content does not infringe any third-party rights;</Li>
          <Li>Agree not to submit content that is unlawful, fraudulent, threatening, abusive, defamatory, obscene, or otherwise objectionable.</Li>
        </ul>
        <p style={s.p}>
          We reserve the right to remove or refuse any user-submitted content that we determine, in our reasonable discretion, to be in breach of these Terms or applicable law.
        </p>

        {/* 9 */}
        <h2 style={s.h2}>9. Accuracy of Information</h2>
        <p style={s.p}>
          We take reasonable care to ensure that the information on our website is accurate and up to date. However, we do not guarantee the completeness, accuracy, or currency of any content on our website. Legal information may change, and laws differ between jurisdictions.
        </p>
        <p style={s.p}>
          You should independently verify any information on our website that you intend to rely upon and seek professional legal advice before taking any action.
        </p>

        {/* 10 */}
        <h2 style={s.h2}>10. Third-Party Links</h2>
        <p style={s.p}>
          Our website may contain links to third-party websites, resources, or services. These links are provided for your convenience only. We do not endorse, control, or take responsibility for the content, privacy practices, or availability of any third-party website.
        </p>
        <p style={s.p}>
          You access linked third-party websites at your own risk. You should review the terms of use and privacy policy of any third-party website you visit.
        </p>

        {/* 11 */}
        <h2 style={s.h2}>11. Limitation of Liability</h2>
        <p style={s.p}>To the fullest extent permitted by applicable law:</p>
        <ul style={s.ul}>
          <Li>Ducex Solicitors Limited excludes all liability for any loss or damage arising from your use of, or inability to use, our website or its content;</Li>
          <Li>We are not liable for any indirect, consequential, special, incidental, or punitive loss or damage;</Li>
          <Li>We are not liable for any reliance placed on the content of our website, Legal Navigator output, or any general information published by us;</Li>
          <Li>We are not liable for any technical or other issues affecting the availability, performance, or security of our website.</Li>
        </ul>
        <p style={s.p}>
          Nothing in these Terms limits or excludes our liability for fraud, death or personal injury caused by our negligence, or any other liability that cannot lawfully be excluded or limited.
        </p>
        <p style={s.p}>
          Where Ducex Solicitors has agreed to provide legal services to you under a formal engagement, our liability is governed by the terms of your Client Engagement / Retainer Agreement and applicable professional indemnity arrangements, not by these website Terms of Use alone.
        </p>

        {/* 12 */}
        <h2 style={s.h2}>12. Website Availability</h2>
        <p style={s.p}>
          We aim to keep our website available at all times, but we do not guarantee uninterrupted access. Our website may be temporarily unavailable due to maintenance, technical issues, or circumstances beyond our reasonable control. We are not liable for any loss caused by the unavailability of our website.
        </p>

        {/* 13 */}
        <h2 style={s.h2}>13. Privacy and Cookies</h2>
        <p style={s.p}>
          Your use of our website is also governed by our{' '}
          <Link href="/privacy-policy" style={s.link}>Privacy Policy</Link> and{' '}
          <Link href="/cookie-policy" style={s.link}>Cookie Policy</Link>, which are incorporated into these Terms by reference. By using our website, you acknowledge that you have read and understood those policies.
        </p>

        {/* 14 */}
        <h2 style={s.h2}>14. Security</h2>
        <p style={s.p}>
          You must not misuse our website by knowingly introducing viruses, trojans, worms, logic bombs, or any other material that is malicious or technologically harmful. You must not attempt to gain unauthorised access to our website, the server on which our website is stored, or any server, computer, or database connected to our website.
        </p>
        <p style={s.p}>
          We reserve the right to report any such breach to relevant law-enforcement authorities and to cooperate with those authorities by disclosing your identity. In the event of such a breach, your right to use our website will immediately cease.
        </p>

        {/* 15 */}
        <h2 style={s.h2}>15. Anti-Money Laundering Compliance</h2>
        <p style={s.p}>
          Ducex Solicitors Limited is subject to applicable anti-money-laundering (AML) legislation and professional obligations. We may be required to verify your identity and the source of any funds involved in a matter before accepting or continuing instructions. We reserve the right to decline or terminate instructions where we are unable to satisfy our AML obligations.
        </p>

        {/* 16 */}
        <h2 style={s.h2}>16. Changes to These Terms</h2>
        <p style={s.p}>
          We may update these Terms of Use from time to time. The &ldquo;Last Updated&rdquo; date at the top of this page indicates when the Terms were most recently revised. Continued use of our website after any changes are posted constitutes your acceptance of the updated Terms. We encourage you to review these Terms periodically.
        </p>
        <p style={s.p}>
          If we make material changes, we may take steps to bring those changes to your attention where reasonably practicable.
        </p>

        {/* 17 */}
        <h2 style={s.h2}>17. Governing Law and Jurisdiction</h2>
        <p style={s.p}>
          These Terms of Use are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any dispute arising from or related to these Terms or your use of our website shall be subject to the jurisdiction of the courts of Nigeria, without prejudice to any mandatory consumer protection rights you may have in your jurisdiction.
        </p>
        <p style={s.p}>
          Where you access our services from outside Nigeria, you do so voluntarily and are responsible for compliance with applicable local laws.
        </p>

        {/* 18 */}
        <h2 style={s.h2}>18. Severability</h2>
        <p style={s.p}>
          If any provision of these Terms is found to be unlawful, invalid, or unenforceable by a court of competent jurisdiction, that provision shall be deemed severed from the remaining Terms, which shall continue in full force and effect.
        </p>

        {/* 19 */}
        <h2 style={s.h2}>19. Entire Agreement</h2>
        <p style={s.p}>
          These Terms of Use, together with our Privacy Policy, Cookie Policy, and Client Confidentiality Notice, constitute the entire agreement between you and Ducex Solicitors Limited in relation to your use of our website and digital services. They supersede any previous terms of use or website policies.
        </p>
        <p style={s.p}>
          Where you have a signed Client Engagement / Retainer Agreement with Ducex Solicitors, the terms of that agreement govern the provision of legal services and prevail over these Terms of Use to the extent of any conflict.
        </p>

        {/* 20 */}
        <h2 style={s.h2}>20. Contact Us</h2>
        <p style={s.p}>
          If you have any questions about these Terms of Use or wish to report a concern, please contact us:
        </p>
        <div style={s.contactCard}>
          <p style={{ margin: '0 0 0.5rem 0', fontWeight: '700', fontSize: '1rem' }}>Ducex Solicitors Limited</p>
          <p style={{ margin: '0 0 0.35rem 0' }}>📍 2 Onatamere Ihemando Close, Abule Ado, Ojo, Lagos, Nigeria</p>
          <p style={{ margin: '0 0 0.35rem 0' }}>📧 <a href="mailto:info@ducexsolicitors.com" style={s.link}>info@ducexsolicitors.com</a></p>
          <p style={{ margin: 0 }}>🌐 <a href="https://www.ducexsolicitors.com" style={s.link}>www.ducexsolicitors.com</a></p>
        </div>

        {/* Related Documents */}
        <hr style={s.divider} />
        <h2 style={{ ...s.h2, marginTop: '0' }}>Related Legal Documents</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {[
            { href: '/privacy-policy', title: 'Privacy Policy', desc: 'How we collect and handle your personal data' },
            { href: '/cookie-policy', title: 'Cookie Policy', desc: 'Our use of cookies and similar technologies' },
            { href: '/client-confidentiality-notice', title: 'Client Confidentiality Notice', desc: 'Legal professional privilege and confidentiality' },
          ].map(({ href, title, desc }) => (
            <Link key={href} href={href} style={{ display: 'block', padding: '1rem', background: 'var(--color-smoke, #f7f7f5)', borderRadius: '8px', border: '1px solid #e5e7eb', textDecoration: 'none', transition: 'border-color 0.2s', borderLeft: '3px solid var(--color-brass, #c9a96e)' }}>
              <p style={{ margin: '0 0 0.25rem 0', fontWeight: '700', color: 'var(--color-slate, #1a2a3a)', fontSize: '0.9rem' }}>{title}</p>
              <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-slate-light, #6b7280)', lineHeight: '1.5' }}>{desc}</p>
            </Link>
          ))}
        </div>

        <hr style={s.divider} />
        <p style={{ fontSize: '0.8rem', color: 'var(--color-slate-light, #9ca3af)', textAlign: 'center' as const }}>
          © {new Date().getFullYear()} Ducex Solicitors Limited. All rights reserved. &nbsp;|&nbsp; Last Updated: 27 July 2026
        </p>

      </div>
    </div>
  );
}
