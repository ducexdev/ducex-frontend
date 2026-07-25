'use client';

import React, { useEffect, useState } from 'react';
import { Users, ClipboardList, Briefcase, Calendar, TrendingUp, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import styles from './dashboard.module.css';
import apiClient from '../../../utils/apiClient';

const STAGE_COLORS: Record<string, string> = {
  NEW: '#6b7280',
  CONTACTED: '#3b82f6',
  QUALIFIED: '#d4a843',
  PROPOSAL: '#8b5cf6',
  WON: '#2d8a4e',
  LOST: '#e55555',
};

export default function DashboardPage() {
  const [pipeline, setPipeline] = useState<any[]>([]);
  const [recentLeads, setRecentLeads] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [pipelineRes, leadsRes] = await Promise.all([
          apiClient.get('/leads/pipeline'),
          apiClient.get('/leads?limit=4')
        ]);
        
        // Format pipeline data
        const pipelineData = Object.entries(pipelineRes.data.data).map(([stage, count]) => ({
          stage,
          count: count as number,
          color: STAGE_COLORS[stage] || '#6b7280'
        }));
        setPipeline(pipelineData);
        setRecentLeads(leadsRes.data.data || []);
      } catch (err) {
        console.error('Failed to fetch dashboard data:', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDashboardData();
  }, []);

  const totalLeads = pipeline.reduce((sum, item) => sum + item.count, 0);

  const STAT_CARDS = [
    { label: 'Total Leads', value: totalLeads.toString(), change: 'Across pipeline', icon: ClipboardList, color: '#d4a843', bg: 'rgba(212,168,67,0.1)' },
    { label: 'Active Clients', value: '-', change: 'Coming soon', icon: Users, color: '#2d8a4e', bg: 'rgba(45,138,78,0.1)' },
    { label: 'Open Matters', value: '-', change: 'Coming soon', icon: Briefcase, color: '#3b82f6', bg: 'rgba(59,130,246,0.1)' },
    { label: 'Appointments', value: '-', change: 'Coming soon', icon: Calendar, color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)' },
  ];

  if (isLoading) {
    return <div className={styles.page}>Loading dashboard...</div>;
  }

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Dashboard</h1>
          <p className={styles.pageSubtitle}>Good morning — here's what's happening today.</p>
        </div>
        <div className={styles.headerMeta}>
          <span>{new Date().toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className={styles.statsGrid}>
        {STAT_CARDS.map((card) => (
          <div key={card.label} className={styles.statCard}>
            <div className={styles.statIcon} style={{ background: card.bg, color: card.color }}>
              <card.icon size={22} />
            </div>
            <div className={styles.statInfo}>
              <div className={styles.statValue}>{card.value}</div>
              <div className={styles.statLabel}>{card.label}</div>
              <div className={styles.statChange}>{card.change}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className={styles.mainGrid}>
        {/* Lead Pipeline */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Lead Pipeline</h2>
            <a href="/admin/leads" className={styles.cardLink}>View all →</a>
          </div>
          <div className={styles.pipeline}>
            {pipeline.map((stage) => (
              <div key={stage.stage} className={styles.pipelineItem}>
                <div className={styles.pipelineDot} style={{ background: stage.color }} />
                <div className={styles.pipelineStage}>{stage.stage}</div>
                <div className={styles.pipelineBar}>
                  <div
                    className={styles.pipelineBarFill}
                    style={{
                      width: `${Math.min((stage.count / Math.max(totalLeads, 1)) * 100, 100)}%`,
                      background: stage.color,
                    }}
                  />
                </div>
                <div className={styles.pipelineCount} style={{ color: stage.color }}>{stage.count}</div>
              </div>
            ))}
            {pipeline.length === 0 && <div style={{ color: '#666', fontSize: '14px' }}>No leads in pipeline.</div>}
          </div>
        </div>

        {/* Recent Leads */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Recent Leads</h2>
            <a href="/admin/leads" className={styles.cardLink}>View all →</a>
          </div>
          <div className={styles.leadsList}>
            {recentLeads.map((lead: any) => {
              const name = lead.consultation?.fullName || 'Unknown';
              return (
              <div key={lead.id} className={styles.leadItem}>
                <div className={styles.leadAvatar}>
                  {name.charAt(0)}
                </div>
                <div className={styles.leadInfo}>
                  <div className={styles.leadName}>{name}</div>
                  <div className={styles.leadService}>{lead.consultation?.service?.name || 'No Service'}</div>
                </div>
                <div className={styles.leadRight}>
                  <span className={styles.stageBadge} style={{ background: `${STAGE_COLORS[lead.stage] || '#666'}20`, color: STAGE_COLORS[lead.stage] || '#666' }}>
                    {lead.stage}
                  </span>
                  <div className={styles.leadDate}>{new Date(lead.createdAt).toLocaleDateString()}</div>
                </div>
              </div>
            )})}
            {recentLeads.length === 0 && <div style={{ color: '#666', fontSize: '14px' }}>No recent leads found.</div>}
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className={styles.card} style={{ marginTop: 0 }}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>System Status</h2>
        </div>
        <div className={styles.statusGrid}>
          <div className={styles.statusItem}>
            <CheckCircle size={18} color="#2d8a4e" />
            <span>API Server</span>
            <span className={styles.statusOnline}>Online</span>
          </div>
          <div className={styles.statusItem}>
            <CheckCircle size={18} color="#2d8a4e" />
            <span>Database</span>
            <span className={styles.statusOnline}>Connected</span>
          </div>
          <div className={styles.statusItem}>
            <Clock size={18} color="#d4a843" />
            <span>Emails</span>
            <span className={styles.statusPending}>Not Configured</span>
          </div>
          <div className={styles.statusItem}>
            <AlertCircle size={18} color="#e55555" />
            <span>File Storage</span>
            <span className={styles.statusOffline}>Not Configured</span>
          </div>
        </div>
      </div>
    </div>
  );
}
