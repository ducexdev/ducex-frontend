import { Metadata } from 'next';
import { ContactClient } from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | Ducex Solicitors',
  description: 'Schedule a consultation or reach out to our team with your legal inquiries. We are here to help.',
};

export default function ContactPage() {
  return <ContactClient />;
}
