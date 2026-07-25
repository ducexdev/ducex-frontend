'use client';

import React, { useState, useEffect } from 'react';
import { Search, Filter, MoreHorizontal } from 'lucide-react';
import styles from './leads.module.css';
import apiClient from '../../../utils/apiClient';

const STAGES = ['NEW', 'CONTACTED', 'QUALIFIED', 'PROPOSAL', 'WON', 'LOST'];

export default function LeadsPage() {
  const [view, setView] = useState<'board' | 'list'>('board');
  const [leads, setLeads] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await apiClient.get('/leads');
        // Map the consultation data to a flat structure for the UI
        const formattedLeads = response.data.data.map((lead: any) => ({
          id: lead.id,
          name: lead.consultation?.fullName || 'Unknown',
          service: lead.consultation?.service?.name || 'No Service',
          stage: lead.stage,
          date: new Date(lead.createdAt).toLocaleDateString(),
        }));
        setLeads(formattedLeads);
      } catch (err) {
        console.error('Failed to fetch leads:', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchLeads();
  }, []);

  if (isLoading) {
    return <div className={styles.page}>Loading leads...</div>;
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Leads Pipeline</h1>
        <div className={styles.actions}>
          <div className={styles.searchBox}>
            <Search size={16} />
            <input type="text" placeholder="Search leads..." />
          </div>
          <button className={styles.viewToggle} onClick={() => setView(v => v === 'board' ? 'list' : 'board')}>
            {view === 'board' ? 'List View' : 'Board View'}
          </button>
        </div>
      </div>

      {view === 'board' ? (
        <div className={styles.board}>
          {STAGES.map(stage => (
            <div key={stage} className={styles.column}>
              <div className={styles.columnHeader}>{stage} <span className={styles.count}>{leads.filter(l => l.stage === stage).length}</span></div>
              <div className={styles.columnContent}>
                {leads.filter(l => l.stage === stage).map(lead => (
                  <div key={lead.id} className={styles.card}>
                    <div className={styles.cardHeader}>
                      <span className={styles.leadName}>{lead.name}</span>
                      <button className={styles.moreBtn}><MoreHorizontal size={14} /></button>
                    </div>
                    <div className={styles.cardService}>{lead.service}</div>
                    <div className={styles.cardDate}>{lead.date}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.list}>
           <table className={styles.table}>
             <thead>
               <tr>
                 <th>Name</th>
                 <th>Service</th>
                 <th>Stage</th>
                 <th>Date</th>
                 <th></th>
               </tr>
             </thead>
             <tbody>
               {leads.map(lead => (
                 <tr key={lead.id}>
                   <td className={styles.leadName}>{lead.name}</td>
                   <td>{lead.service}</td>
                   <td><span className={`${styles.badge} ${styles['badge' + lead.stage]}`}>{lead.stage}</span></td>
                   <td>{lead.date}</td>
                   <td><button className={styles.moreBtn}><MoreHorizontal size={16}/></button></td>
                 </tr>
               ))}
               {leads.length === 0 && (
                 <tr>
                   <td colSpan={5} style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>No leads found.</td>
                 </tr>
               )}
             </tbody>
           </table>
        </div>
      )}
    </div>
  );
}
