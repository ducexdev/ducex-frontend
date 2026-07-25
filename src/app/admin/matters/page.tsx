'use client';

import React, { useState, useEffect } from 'react';
import { Search, Filter, FolderOpen, MoreHorizontal } from 'lucide-react';
import styles from './matters.module.css';
import apiClient from '../../../utils/apiClient';

export default function MattersPage() {
  const [matters, setMatters] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMatters = async () => {
      try {
        const response = await apiClient.get('/matters');
        
        const formattedMatters = response.data.data.map((matter: any) => ({
          id: matter.referenceNumber,
          title: matter.title,
          client: matter.client?.companyName || matter.client?.user?.firstName + ' ' + matter.client?.user?.lastName || 'Unknown Client',
          practice: matter.service?.name || 'General Practice',
          status: matter.status,
          nextDate: matter.statuses && matter.statuses.length > 0 
            ? new Date(matter.statuses[0].createdAt).toLocaleDateString() 
            : 'N/A'
        }));
        
        setMatters(formattedMatters);
      } catch (err) {
        console.error('Failed to fetch matters:', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMatters();
  }, []);

  if (isLoading) {
    return <div className={styles.page}>Loading matters...</div>;
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Matters & Cases</h1>
        <div className={styles.actions}>
          <div className={styles.searchBox}>
            <Search size={16} />
            <input type="text" placeholder="Search matters..." />
          </div>
          <button className={styles.filterBtn}><Filter size={16}/> Filter</button>
        </div>
      </div>
      
      <div className={styles.grid}>
        {matters.map(matter => (
          <div key={matter.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.matterId}><FolderOpen size={14}/> {matter.id}</div>
              <button className={styles.moreBtn}><MoreHorizontal size={16}/></button>
            </div>
            <h3 className={styles.matterTitle}>{matter.title}</h3>
            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <span className={styles.label}>Client:</span>
                <span className={styles.value}>{matter.client}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.label}>Practice:</span>
                <span className={styles.value}>{matter.practice}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.label}>Last Updated:</span>
                <span className={styles.value}>{matter.nextDate}</span>
              </div>
            </div>
            <div className={styles.footer}>
              <span className={`${styles.badge} ${styles['badge' + matter.status] || ''}`}>{matter.status}</span>
              <button className={styles.viewBtn}>View Details</button>
            </div>
          </div>
        ))}
        {matters.length === 0 && (
          <div style={{ padding: '2rem', color: '#666' }}>No matters found.</div>
        )}
      </div>
    </div>
  );
}
