"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Briefcase, User, Calendar, ArrowRight } from 'lucide-react';
import styles from './Matters.module.css';
import portalApiClient from '@/utils/portalApiClient';

export default function MattersPage() {
  const [matters, setMatters] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  useEffect(() => {
    const fetchMatters = async () => {
      try {
        const { data } = await portalApiClient.get('/portal/matters');
        setMatters(data.data);
      } catch (err) {
        console.error('Failed to load matters', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMatters();
  }, []);

  const filteredMatters = matters.filter(matter => {
    const matchesSearch = matter.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          matter.referenceNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || matter.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (isLoading) {
    return <div>Loading matters...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>My Matters</h1>
      </div>

      <div className={styles.controls}>
        <input 
          type="text" 
          placeholder="Search matters by title or reference..." 
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select 
          className={styles.selectInput}
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="ALL">All Statuses</option>
          <option value="OPEN">Open</option>
          <option value="ON_HOLD">On Hold</option>
          <option value="CLOSED">Closed</option>
        </select>
      </div>

      <div className={styles.mattersGrid}>
        {filteredMatters.length === 0 ? (
          <div className={styles.emptyState}>
            <h3>No matters found</h3>
            <p>We couldn't find any matters matching your current filters.</p>
          </div>
        ) : (
          filteredMatters.map(matter => (
            <Link href={`/portal/matters/${matter.uuid}`} key={matter.id} className={styles.matterCard}>
              <div className={styles.cardHeader}>
                <div>
                  <h3 className={styles.matterTitle}>{matter.title}</h3>
                  <span className={styles.matterRef}>{matter.referenceNumber}</span>
                </div>
                <span className={`${styles.statusBadge} ${matter.status === 'OPEN' ? styles.statusOpen : matter.status === 'ON_HOLD' ? styles.statusHold : styles.statusClosed}`}>
                  {matter.status}
                </span>
              </div>
              
              <div className={styles.cardBody}>
                <div className={styles.detailRow}>
                  <Briefcase size={16} className={styles.icon} />
                  <span>{matter.service?.name || 'General Legal Services'}</span>
                </div>
                <div className={styles.detailRow}>
                  <User size={16} className={styles.icon} />
                  <span>{matter.lawyer ? `${matter.lawyer.user.firstName} ${matter.lawyer.user.lastName}` : 'Unassigned'}</span>
                </div>
                <div className={styles.detailRow}>
                  <Calendar size={16} className={styles.icon} />
                  <span>Opened: {new Date(matter.openedAt).toLocaleDateString()}</span>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.viewBtn}>
                  View Details <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
