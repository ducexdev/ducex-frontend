"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Calendar, Video, MapPin, Plus } from 'lucide-react';
import styles from './Appointments.module.css';
import portalApiClient from '@/utils/portalApiClient';

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await portalApiClient.get('/portal/appointments');
        setAppointments(data.data);
      } catch (err) {
        console.error('Failed to load appointments', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAppointments();
  }, []);

  if (isLoading) {
    return <div>Loading appointments...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>My Appointments</h1>
        <Link href="/contact" className={styles.newBtn}>
          <Plus size={18} /> Request Appointment
        </Link>
      </div>

      <div className={styles.appointmentsList}>
        {appointments.length === 0 ? (
          <div className={styles.emptyState}>
            <h3>No appointments scheduled</h3>
            <p>You don't have any upcoming or past appointments.</p>
          </div>
        ) : (
          appointments.map(appt => {
            const date = new Date(appt.scheduledAt);
            const isPast = date < new Date();
            
            return (
              <div key={appt.id} className={`${styles.appointmentCard} ${isPast ? styles.pastAppointment : ''}`}>
                <div className={styles.dateBox}>
                  <span className={styles.month}>{date.toLocaleString('default', { month: 'short' })}</span>
                  <span className={styles.day}>{date.getDate()}</span>
                  <span className={styles.time}>{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
                
                <div className={styles.info}>
                  <h3 className={styles.appointmentTitle}>Consultation with {appt.lawyer ? `${appt.lawyer.user.firstName} ${appt.lawyer.user.lastName}` : 'Assigned Lawyer'}</h3>
                  
                  <div className={styles.detailRow}>
                    {appt.meetingType === 'VIRTUAL' ? <Video size={16} className={styles.detailIcon} /> : <MapPin size={16} className={styles.detailIcon} />}
                    <span>{appt.meetingType === 'VIRTUAL' ? 'Online Meeting (Link will be provided)' : 'In-Person at Ducex Office'}</span>
                  </div>
                  
                  {appt.meetingLink && (
                    <div className={styles.detailRow} style={{ color: 'var(--color-text-light)', fontSize: '0.875rem' }}>
                      Meeting link: {appt.meetingLink}
                    </div>
                  )}

                  <div>
                    <span className={styles.statusBadge} style={{ 
                      backgroundColor: appt.status === 'SCHEDULED' ? '#e0f2fe' : appt.status === 'COMPLETED' ? '#dcfce7' : '#f1f5f9',
                      color: appt.status === 'SCHEDULED' ? '#0284c7' : appt.status === 'COMPLETED' ? '#15803d' : '#475569'
                    }}>
                      {appt.status}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
