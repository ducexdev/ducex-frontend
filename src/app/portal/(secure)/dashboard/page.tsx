"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Briefcase, Calendar, MessageSquare, FileText, ArrowRight, Bell } from 'lucide-react';
import styles from './Dashboard.module.css';
import portalApiClient from '@/utils/portalApiClient';

export default function PortalDashboard() {
  const [profile, setProfile] = useState<any>(null);
  const [matters, setMatters] = useState<any[]>([]);
  const [appointments, setAppointments] = useState<any[]>([]);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, mattersRes, apptsRes, notifsRes] = await Promise.all([
          portalApiClient.get('/portal/me'),
          portalApiClient.get('/portal/matters'),
          portalApiClient.get('/portal/appointments'),
          portalApiClient.get('/portal/notifications')
        ]);

        setProfile(profileRes.data.data);
        setMatters(mattersRes.data.data);
        setAppointments(apptsRes.data.data);
        setNotifications(notifsRes.data.data);
      } catch (err) {
        console.error('Failed to load dashboard data', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading dashboard...</div>;
  }

  const openMattersCount = matters.filter(m => m.status === 'OPEN').length;
  const upcomingAppointmentsCount = appointments.filter(a => new Date(a.scheduledAt) > new Date()).length;
  const unreadNotifsCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className={styles.container}>
      <section className={styles.welcomeSection}>
        <h2 className={styles.welcomeTitle}>Welcome back, {profile?.firstName}</h2>
        <p className={styles.welcomeText}>Here is a summary of your ongoing legal matters and recent updates.</p>
      </section>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon} style={{ backgroundColor: '#e0e7ff', color: '#4338ca' }}>
            <Briefcase size={24} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statValue}>{openMattersCount}</span>
            <span className={styles.statLabel}>Active Matters</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon} style={{ backgroundColor: '#dcfce7', color: '#15803d' }}>
            <Calendar size={24} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statValue}>{upcomingAppointmentsCount}</span>
            <span className={styles.statLabel}>Upcoming Appts</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon} style={{ backgroundColor: '#fee2e2', color: '#b91c1c' }}>
            <MessageSquare size={24} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statValue}>{unreadNotifsCount}</span>
            <span className={styles.statLabel}>Unread Messages</span>
          </div>
        </div>
      </div>

      <div className={styles.contentGrid}>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Recent Matters</h3>
            <Link href="/portal/matters" className={styles.viewAll}>View All</Link>
          </div>
          
          <div className={styles.list}>
            {matters.length === 0 ? (
              <div className={styles.emptyState}>No matters found.</div>
            ) : (
              matters.slice(0, 3).map((matter) => (
                <Link href={`/portal/matters/${matter.uuid}`} key={matter.id} style={{ textDecoration: 'none' }}>
                  <div className={styles.listItem}>
                    <div className={styles.itemIcon} style={{ backgroundColor: 'var(--color-bg)' }}>
                      <Briefcase size={20} color="var(--color-primary)" />
                    </div>
                    <div className={styles.itemContent}>
                      <div className={styles.itemTitle}>{matter.title}</div>
                      <div className={styles.itemDesc}>{matter.referenceNumber} • {matter.service?.name}</div>
                    </div>
                    <div className={styles.itemMeta}>
                      <span className={`${styles.statusBadge} ${matter.status === 'OPEN' ? styles.statusOpen : matter.status === 'ON_HOLD' ? styles.statusHold : styles.statusClosed}`}>
                        {matter.status}
                      </span>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Recent Notifications</h3>
          </div>
          
          <div className={styles.list}>
            {notifications.length === 0 ? (
              <div className={styles.emptyState}>No new notifications.</div>
            ) : (
              notifications.slice(0, 5).map((notif) => (
                <div key={notif.id} className={styles.listItem} style={{ opacity: notif.isRead ? 0.6 : 1 }}>
                  <div className={styles.itemIcon} style={{ backgroundColor: notif.isRead ? 'transparent' : '#e0e7ff' }}>
                    <Bell size={16} color="var(--color-primary)" />
                  </div>
                  <div className={styles.itemContent}>
                    <div className={styles.itemTitle} style={{ fontSize: '0.875rem' }}>{notif.title}</div>
                    <div className={styles.itemDesc} style={{ fontSize: '0.75rem' }}>{new Date(notif.createdAt).toLocaleDateString()}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
