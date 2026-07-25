import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { LinkedinIcon, FacebookIcon, TwitterIcon, InstagramIcon } from '../ui/SocialIcons';
import { services } from '../../data/services';

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-ink)', color: 'var(--color-stone)', padding: 'var(--space-20) 0 var(--space-8)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-12)', marginBottom: 'var(--space-12)' }}>
        
        {/* Column 1: Brand & Socials */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: 'var(--space-6)' }}>
            <Link href="/" aria-label="Ducex Solicitors Home">
              <div style={{ width: '220px', position: 'relative' }}>
                <Image src="/images/logo-transparent-white.png" alt="Ducex Solicitors Logo" width={220} height={45} style={{ objectFit: 'contain' }} />
              </div>
            </Link>
          </div>
          <p style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)', marginBottom: 'var(--space-6)' }}>
            We are committed to delivering innovative legal solutions with integrity, professionalism, and excellence.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
            <a href="#" style={{ color: 'var(--color-white)' }}><LinkedinIcon size={18} /></a>
            <a href="#" style={{ color: 'var(--color-white)' }}><FacebookIcon size={18} /></a>
            <a href="#" style={{ color: 'var(--color-white)' }}><TwitterIcon size={18} /></a>
            <a href="#" style={{ color: 'var(--color-white)' }}><InstagramIcon size={18} /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 style={{ color: 'var(--color-white)', marginBottom: 'var(--space-6)' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <li><Link href="/" style={{ color: 'var(--color-stone)', textDecoration: 'none', fontSize: 'var(--text-sm)' }}>Home</Link></li>
            <li><Link href="/about" style={{ color: 'var(--color-stone)', textDecoration: 'none', fontSize: 'var(--text-sm)' }}>About Us</Link></li>
            <li><Link href="/services" style={{ color: 'var(--color-stone)', textDecoration: 'none', fontSize: 'var(--text-sm)' }}>Practice Areas</Link></li>
            <li><Link href="/team" style={{ color: 'var(--color-stone)', textDecoration: 'none', fontSize: 'var(--text-sm)' }}>Our Team</Link></li>
            <li><Link href="/insights" style={{ color: 'var(--color-stone)', textDecoration: 'none', fontSize: 'var(--text-sm)' }}>Articles</Link></li>
            <li><Link href="/contact" style={{ color: 'var(--color-stone)', textDecoration: 'none', fontSize: 'var(--text-sm)' }}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Practice Areas */}
        <div>
          <h4 style={{ color: 'var(--color-white)', marginBottom: 'var(--space-6)' }}>Practice Areas</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {services.slice(0, 6).map(service => (
              <li key={service.id}>
                <Link href={`/services/${service.slug}`} style={{ color: 'var(--color-stone)', textDecoration: 'none', fontSize: 'var(--text-sm)' }}>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div>
          <h4 style={{ color: 'var(--color-white)', marginBottom: 'var(--space-6)' }}>Contact Us</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <li style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
              <Phone size={16} color="var(--color-brass)" style={{ marginTop: '2px' }} />
              <span style={{ fontSize: 'var(--text-sm)' }}>+234 803 456 7890</span>
            </li>
            <li style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
              <Mail size={16} color="var(--color-brass)" style={{ marginTop: '2px' }} />
              <span style={{ fontSize: 'var(--text-sm)' }}>info@ducexsolicitors.com</span>
            </li>
            <li style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
              <MapPin size={16} color="var(--color-brass)" style={{ marginTop: '2px' }} />
              <span style={{ fontSize: 'var(--text-sm)' }}>3b, Victoria Island, Lagos, Nigeria.</span>
            </li>
            <li style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
              <Clock size={16} color="var(--color-brass)" style={{ marginTop: '2px' }} />
              <span style={{ fontSize: 'var(--text-sm)' }}>Mon - Fri: 8:00AM - 6:00PM</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 'var(--space-8)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
        <p style={{ fontSize: 'var(--text-sm)', margin: 0 }}>&copy; {new Date().getFullYear()} Ducex Solicitors. All rights reserved.</p>
        <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
          <Link href="/privacy-policy" style={{ color: 'var(--color-stone)', textDecoration: 'none', fontSize: 'var(--text-sm)' }}>Privacy Policy</Link>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
          <Link href="/terms-of-use" style={{ color: 'var(--color-stone)', textDecoration: 'none', fontSize: 'var(--text-sm)' }}>Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
};
