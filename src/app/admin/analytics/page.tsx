'use client';

import React, { useState, useEffect } from 'react';
import {
  BarChart2, TrendingUp, Users, Calendar, Phone, Mail,
  MessageCircle, FileText, Eye, ArrowUpRight, ArrowDownRight,
  Activity, Globe, MousePointerClick, RefreshCw,
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface MetricCard {
  label: string;
  value: string | number;
  subtext?: string;
  trend?: number; // +/- percentage
  icon: React.ReactNode;
  color: string;
}

interface EventRow {
  event: string;
  label: string;
  count: number;
  icon: React.ReactNode;
}

// ─── GA4 Data Layer reader (client-side aggregate only) ───────────────────────
// NOTE: This dashboard reads ONLY aggregate event counts — no personal data,
// no matter descriptions, no client names, no sensitive legal information.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// Simulated aggregate metrics — replace with real API calls to GA4 Reporting API
// or your backend analytics endpoint once connected.
const PLACEHOLDER_METRICS = {
  totalEnquiries: 147,
  newEnquiries: 23,
  consultationsBooked: 38,
  consultationRate: '25.9%',
  phoneClicks: 89,
  emailClicks: 64,
  whatsappClicks: 112,
  contactFormSubmissions: 53,
  pageViews: 4821,
  uniqueVisitors: 1934,
  avgSessionDuration: '2m 47s',
  bounceRate: '42.1%',
  topServices: [
    { name: 'Family Law', views: 843 },
    { name: 'Property Law', views: 721 },
    { name: 'Divorce Law', views: 698 },
    { name: 'Criminal Law', views: 534 },
    { name: 'Corporate Law', views: 411 },
  ],
  topArticles: [
    { title: 'Understanding Property Rights in Nigeria', reads: 312 },
    { title: 'Child Custody Laws in Lagos', reads: 287 },
    { title: 'How to Register a Business in Nigeria', reads: 244 },
    { title: 'Divorce Process in Nigeria — A Complete Guide', reads: 219 },
    { title: 'Tenant Rights Under Nigerian Law', reads: 198 },
  ],
  trafficSources: [
    { source: 'Organic Search', pct: 54 },
    { source: 'Direct', pct: 22 },
    { source: 'Social Media', pct: 12 },
    { source: 'Referral', pct: 8 },
    { source: 'Other', pct: 4 },
  ],
  recentEvents: [
    { event: 'consultation_submitted', label: 'Consultation Submitted', count: 38, icon: <Calendar size={16} /> },
    { event: 'contact_form_submitted', label: 'Contact Forms', count: 53, icon: <FileText size={16} /> },
    { event: 'whatsapp_clicked', label: 'WhatsApp Clicks', count: 112, icon: <MessageCircle size={16} /> },
    { event: 'phone_clicked', label: 'Phone Clicks', count: 89, icon: <Phone size={16} /> },
    { event: 'email_clicked', label: 'Email Clicks', count: 64, icon: <Mail size={16} /> },
    { event: 'legal_navigator_started', label: 'Navigator Started', count: 76, icon: <MousePointerClick size={16} /> },
    { event: 'legal_navigator_completed', label: 'Navigator Completed', count: 41, icon: <Activity size={16} /> },
    { event: 'article_read', label: 'Articles Read', count: 1260, icon: <Eye size={16} /> },
    { event: 'service_view', label: 'Service Views', count: 3207, icon: <Globe size={16} /> },
    { event: 'lawyer_profile_viewed', label: 'Lawyer Profiles', count: 892, icon: <Users size={16} /> },
  ] as EventRow[],
};

// ─── Styles ───────────────────────────────────────────────────────────────────

const st: Record<string, React.CSSProperties> = {
  page: { padding: '2rem', fontFamily: 'var(--font-body)' },
  header: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' },
  headerLeft: {},
  title: { fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-slate, #1a2a3a)', margin: 0 },
  subtitle: { fontSize: '0.85rem', color: '#6b7280', marginTop: '0.25rem' },
  notice: { background: '#fffbeb', border: '1px solid #fbbf24', borderRadius: '6px', padding: '0.6rem 1rem', fontSize: '0.8rem', color: '#92400e', marginBottom: '1.5rem' },
  refreshBtn: { display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'var(--color-slate, #1a2a3a)', color: '#fff', border: 'none', borderRadius: '6px', padding: '0.5rem 1rem', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer' },
  grid4: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' },
  grid2: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' },
  card: { background: '#fff', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1.25rem', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' },
  metricCard: { background: '#fff', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1.25rem', boxShadow: '0 1px 4px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '0.5rem' },
  metricTop: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  metricValue: { fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-slate, #1a2a3a)', lineHeight: 1 },
  metricLabel: { fontSize: '0.8rem', color: '#6b7280', fontWeight: '500' },
  metricSub: { fontSize: '0.78rem', color: '#9ca3af' },
  metricIcon: { width: '36px', height: '36px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  trendUp: { display: 'flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.75rem', color: '#059669', fontWeight: '600' },
  trendDown: { display: 'flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.75rem', color: '#dc2626', fontWeight: '600' },
  sectionTitle: { fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-slate, #1a2a3a)', marginBottom: '1rem', borderBottom: '2px solid var(--color-brass, #c9a96e)', paddingBottom: '0.5rem' },
  barRow: { display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.65rem' },
  barLabel: { fontSize: '0.82rem', color: '#374151', minWidth: '130px', whiteSpace: 'nowrap' as const, overflow: 'hidden', textOverflow: 'ellipsis' },
  barTrack: { flex: 1, background: '#f3f4f6', borderRadius: '4px', height: '8px' },
  barFill: { height: '8px', borderRadius: '4px', background: 'var(--color-brass, #c9a96e)', transition: 'width 0.6s ease' },
  barValue: { fontSize: '0.8rem', color: '#6b7280', minWidth: '40px', textAlign: 'right' as const },
  eventRow: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.55rem 0', borderBottom: '1px solid #f3f4f6' },
  eventLabel: { display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#374151' },
  eventCount: { fontSize: '0.9rem', fontWeight: '700', color: 'var(--color-slate, #1a2a3a)' },
  badge: { display: 'inline-block', background: '#f0fdf4', color: '#166534', fontSize: '0.7rem', fontWeight: '700', padding: '0.2rem 0.55rem', borderRadius: '20px', border: '1px solid #bbf7d0' },
  sourceRow: { display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.7rem' },
  dot: { width: '10px', height: '10px', borderRadius: '50%', flexShrink: 0 },
};

const SOURCE_COLORS: string[] = ['#c9a96e', '#1a2a3a', '#3b82f6', '#8b5cf6', '#6b7280'];

// ─── Component ────────────────────────────────────────────────────────────────

export default function AnalyticsDashboardPage() {
  const m = PLACEHOLDER_METRICS;
  const [lastRefresh, setLastRefresh] = useState(new Date());

  const conversionRate = ((m.consultationsBooked / m.totalEnquiries) * 100).toFixed(1);
  const navigatorCompletion = ((41 / 76) * 100).toFixed(0);

  const topServiceMax = m.topServices[0].views;
  const topArticleMax = m.topArticles[0].reads;

  const kpis: MetricCard[] = [
    { label: 'Total Enquiries', value: m.totalEnquiries, subtext: `+${m.newEnquiries} new this month`, trend: 12, icon: <FileText size={18} />, color: '#dbeafe' },
    { label: 'Consultations Booked', value: m.consultationsBooked, subtext: `${conversionRate}% conversion rate`, trend: 8, icon: <Calendar size={18} />, color: '#dcfce7' },
    { label: 'Page Views', value: m.pageViews.toLocaleString(), subtext: `${m.uniqueVisitors.toLocaleString()} unique visitors`, trend: 18, icon: <Eye size={18} />, color: '#fef9c3' },
    { label: 'WhatsApp Clicks', value: m.whatsappClicks, subtext: 'Top contact channel', trend: 24, icon: <MessageCircle size={18} />, color: '#dcfce7' },
    { label: 'Phone Clicks', value: m.phoneClicks, subtext: 'Click-to-call events', trend: 5, icon: <Phone size={18} />, color: '#fce7f3' },
    { label: 'Email Clicks', value: m.emailClicks, subtext: 'mailto: interactions', trend: -3, icon: <Mail size={18} />, color: '#ede9fe' },
    { label: 'Contact Forms', value: m.contactFormSubmissions, subtext: 'Form submissions', trend: 15, icon: <Globe size={18} />, color: '#dbeafe' },
    { label: 'Avg. Session', value: m.avgSessionDuration, subtext: `Bounce rate: ${m.bounceRate}`, icon: <Activity size={18} />, color: '#fef3c7' },
  ];

  return (
    <div style={st.page}>
      {/* Header */}
      <div style={st.header}>
        <div style={st.headerLeft}>
          <h1 style={st.title}>
            <BarChart2 size={22} style={{ marginRight: '0.5rem', verticalAlign: 'middle', color: 'var(--color-brass, #c9a96e)' }} />
            Analytics &amp; Conversion Dashboard
          </h1>
          <p style={st.subtitle}>
            Last refreshed: {lastRefresh.toLocaleTimeString()} &nbsp;·&nbsp;
            Data reflects aggregate, non-personal event counts only
          </p>
        </div>
        <button style={st.refreshBtn} onClick={() => setLastRefresh(new Date())}>
          <RefreshCw size={14} /> Refresh
        </button>
      </div>

      {/* Privacy Notice */}
      <div style={st.notice}>
        ⚠️ <strong>Privacy Note:</strong> This dashboard displays only aggregate event counts and anonymised traffic data.
        No personal data, client names, matter descriptions, or confidential legal information is tracked or displayed here.
        All data originates from Google Analytics 4 with IP anonymisation enabled.
      </div>

      {/* KPI Metric Cards */}
      <div style={st.grid4}>
        {kpis.map((k) => (
          <div key={k.label} style={st.metricCard}>
            <div style={st.metricTop}>
              <span style={st.metricLabel}>{k.label}</span>
              <span style={{ ...st.metricIcon, background: k.color }}>{k.icon}</span>
            </div>
            <div style={st.metricValue}>{k.value}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={st.metricSub}>{k.subtext}</span>
              {k.trend !== undefined && (
                k.trend >= 0
                  ? <span style={st.trendUp}><ArrowUpRight size={12} /> {k.trend}%</span>
                  : <span style={st.trendDown}><ArrowDownRight size={12} /> {Math.abs(k.trend)}%</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div style={st.grid2}>

        {/* Conversion Funnel */}
        <div style={st.card}>
          <div style={st.sectionTitle}>📊 Conversion Funnel</div>
          {[
            { label: 'Page Views', value: m.pageViews, max: m.pageViews },
            { label: 'Service Views', value: 3207, max: m.pageViews },
            { label: 'Navigator Started', value: 76, max: m.pageViews },
            { label: 'Enquiries / Contacts', value: m.totalEnquiries, max: m.pageViews },
            { label: 'Consultations Booked', value: m.consultationsBooked, max: m.pageViews },
          ].map(({ label, value, max }) => (
            <div key={label} style={st.barRow}>
              <span style={st.barLabel}>{label}</span>
              <div style={st.barTrack}>
                <div style={{ ...st.barFill, width: `${Math.round((value / max) * 100)}%` }} />
              </div>
              <span style={st.barValue}>{value.toLocaleString()}</span>
            </div>
          ))}
          <div style={{ marginTop: '1rem', padding: '0.75rem', background: '#f9f9f7', borderRadius: '6px', fontSize: '0.82rem' }}>
            <strong>Enquiry → Consultation Rate:</strong>{' '}
            <span style={{ color: '#059669', fontWeight: '700' }}>{conversionRate}%</span>
            &nbsp;·&nbsp;
            <strong>Navigator Completion:</strong>{' '}
            <span style={{ color: '#c9a96e', fontWeight: '700' }}>{navigatorCompletion}%</span>
          </div>
        </div>

        {/* Event Tracker */}
        <div style={st.card}>
          <div style={st.sectionTitle}>⚡ Event Tracker (This Month)</div>
          {m.recentEvents.map((e) => (
            <div key={e.event} style={st.eventRow}>
              <span style={st.eventLabel}>{e.icon} {e.label}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={st.eventCount}>{e.count.toLocaleString()}</span>
                <span style={{ ...st.badge, fontSize: '0.65rem' }}>{e.event}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Top Services */}
        <div style={st.card}>
          <div style={st.sectionTitle}>🏛️ Top Services by Views</div>
          {m.topServices.map((s) => (
            <div key={s.name} style={st.barRow}>
              <span style={st.barLabel}>{s.name}</span>
              <div style={st.barTrack}>
                <div style={{ ...st.barFill, width: `${Math.round((s.views / topServiceMax) * 100)}%` }} />
              </div>
              <span style={st.barValue}>{s.views}</span>
            </div>
          ))}
        </div>

        {/* Top Articles */}
        <div style={st.card}>
          <div style={st.sectionTitle}>📰 Top Articles by Reads</div>
          {m.topArticles.map((a) => (
            <div key={a.title} style={st.barRow}>
              <span style={{ ...st.barLabel, maxWidth: '180px' }} title={a.title}>{a.title}</span>
              <div style={st.barTrack}>
                <div style={{ ...st.barFill, width: `${Math.round((a.reads / topArticleMax) * 100)}%`, background: '#1a2a3a' }} />
              </div>
              <span style={st.barValue}>{a.reads}</span>
            </div>
          ))}
        </div>

        {/* Traffic Sources */}
        <div style={st.card}>
          <div style={st.sectionTitle}>🌐 Traffic Sources</div>
          {m.trafficSources.map((src, i) => (
            <div key={src.source} style={st.sourceRow}>
              <div style={{ ...st.dot, background: SOURCE_COLORS[i] }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                  <span style={{ fontSize: '0.85rem', color: '#374151' }}>{src.source}</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-slate, #1a2a3a)' }}>{src.pct}%</span>
                </div>
                <div style={st.barTrack}>
                  <div style={{ ...st.barFill, width: `${src.pct}%`, background: SOURCE_COLORS[i] }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links to GA4 */}
        <div style={st.card}>
          <div style={st.sectionTitle}>🔗 External Analytics Tools</div>
          <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '1rem', lineHeight: '1.6' }}>
            For detailed reports, audience segmentation, and real-time data, use your connected analytics platforms:
          </p>
          {[
            { name: 'Google Analytics 4', url: 'https://analytics.google.com', desc: 'Traffic, conversions, audience insights' },
            { name: 'Google Search Console', url: 'https://search.google.com/search-console', desc: 'Search impressions, clicks, keyword rankings' },
            { name: 'Netlify Analytics', url: 'https://app.netlify.com', desc: 'Serverless, cookie-free page view data' },
          ].map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem', borderRadius: '6px', border: '1px solid #e5e7eb', marginBottom: '0.5rem', textDecoration: 'none', background: '#f9f9f7', transition: 'border-color 0.2s' }}
            >
              <TrendingUp size={18} style={{ color: 'var(--color-brass, #c9a96e)', marginTop: '2px', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--color-slate, #1a2a3a)' }}>{tool.name} ↗</div>
                <div style={{ fontSize: '0.78rem', color: '#6b7280' }}>{tool.desc}</div>
              </div>
            </a>
          ))}
        </div>

      </div>

      {/* Footer note */}
      <p style={{ fontSize: '0.75rem', color: '#9ca3af', textAlign: 'center', marginTop: '1rem' }}>
        Placeholder data shown above. Connect the GA4 Reporting API or your backend <code>/api/v1/admin/analytics</code> endpoint to replace with live metrics.
        All data displayed must remain aggregate and non-personal in accordance with the Ducex Privacy Policy.
      </p>
    </div>
  );
}
