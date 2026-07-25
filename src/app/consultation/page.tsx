import React from 'react';
import { BookingWizard } from '../../components/booking/BookingWizard';
import { SectionHeading } from '../../components/page/SectionHeading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Consultation | Ducex Solicitors',
  description: 'Schedule a secure, confidential legal consultation with our expert team.',
};

export default function ConsultationPage() {
  return (
    <main style={{ padding: 'var(--space-20) 0', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <SectionHeading 
          title="Book a Consultation"
          subtitle="Our smart booking system securely gathers your information so we can pair you with the best lawyer for your case."
          align="center"
        />
        <div style={{ marginTop: 'var(--space-12)' }}>
          <BookingWizard />
        </div>
      </div>
    </main>
  );
}
