"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Briefcase, User, Calendar, Clock, FileText, CheckCircle2 } from 'lucide-react';
import styles from './MatterDetail.module.css';
import portalApiClient from '@/utils/portalApiClient';

export default function MatterDetailPage() {
  const params = useParams();
  const matterUuid = params.id as string;
  
  const [matter, setMatter] = useState<any>(null);
  const [timeline, setTimeline] = useState<any[]>([]);
  const [documents, setDocuments] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMatterData = async () => {
      try {
        const [matterRes, timelineRes, docsRes] = await Promise.all([
          portalApiClient.get(`/portal/matters/${matterUuid}`),
          portalApiClient.get(`/portal/matters/${matterUuid}/timeline`),
          portalApiClient.get(`/portal/matters/${matterUuid}/documents`)
        ]);

        setMatter(matterRes.data.data);
        setTimeline(timelineRes.data.data);
        setDocuments(docsRes.data.data);
      } catch (err) {
        console.error('Failed to load matter details', err);
      } finally {
        setIsLoading(false);
      }
    };

    if (matterUuid) {
      fetchMatterData();
    }
  }, [matterUuid]);

  if (isLoading) {
    return <div>Loading matter details...</div>;
  }

  if (!matter) {
    return <div>Matter not found.</div>;
  }

  return (
    <div className={styles.container}>
      <Link href="/portal/matters" className={styles.backLink}>
        <ArrowLeft size={16} /> Back to Matters
      </Link>

      <div className={styles.headerCard}>
        <div className={styles.headerTop}>
          <div>
            <h1 className={styles.title}>{matter.title}</h1>
            <span className={styles.ref}>Ref: {matter.referenceNumber}</span>
          </div>
          <span className={`${styles.statusBadge} ${matter.status === 'OPEN' ? styles.statusOpen : matter.status === 'ON_HOLD' ? styles.statusHold : styles.statusClosed}`}>
            {matter.status}
          </span>
        </div>

        <div className={styles.metaGrid}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Service Area</span>
            <span className={styles.metaValue}>
              <Briefcase size={16} className={styles.metaIcon} />
              {matter.service?.name || 'General'}
            </span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Assigned Lawyer</span>
            <span className={styles.metaValue}>
              <User size={16} className={styles.metaIcon} />
              {matter.lawyer ? `${matter.lawyer.user.firstName} ${matter.lawyer.user.lastName}` : 'Unassigned'}
            </span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Date Opened</span>
            <span className={styles.metaValue}>
              <Calendar size={16} className={styles.metaIcon} />
              {new Date(matter.openedAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Matter Timeline</h2>
          
          <div className={styles.timeline}>
            {timeline.length === 0 ? (
              <div className={styles.emptyState}>No status updates yet.</div>
            ) : (
              timeline.map((update, index) => (
                <div key={update.id} className={styles.timelineItem}>
                  <div className={styles.timelineDot}>
                    {index === 0 ? <CheckCircle2 size={20} /> : <Clock size={20} />}
                  </div>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineHeader}>
                      <span className={styles.timelineTitle}>{update.statusUpdate}</span>
                      <span className={styles.timelineDate}>{new Date(update.createdAt).toLocaleString()}</span>
                    </div>
                    {update.updater && (
                      <p className={styles.timelineDesc}>
                        Updated by {update.updater.firstName} {update.updater.lastName}
                      </p>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Recent Documents</h2>
          
          <div className={styles.documentsList}>
            {documents.length === 0 ? (
              <div className={styles.emptyState}>No documents available.</div>
            ) : (
              documents.slice(0, 5).map(doc => (
                <a 
                  key={doc.id}
                  href={`${process.env.NEXT_PUBLIC_API_URL}/portal/documents/${doc.uuid}/download`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.docItem}
                >
                  <FileText size={24} className={styles.docIcon} />
                  <div className={styles.docInfo}>
                    <span className={styles.docName}>{doc.title}</span>
                    <span className={styles.docMeta}>
                      {new Date(doc.createdAt).toLocaleDateString()} • {doc.versions?.[0] ? (Number(doc.versions[0].fileSize) / 1024).toFixed(1) + ' KB' : 'Unknown'}
                    </span>
                  </div>
                </a>
              ))
            )}
            
            {documents.length > 0 && (
              <Link href="/portal/documents" style={{ display: 'block', textAlign: 'center', marginTop: '1rem', color: 'var(--color-accent)', fontWeight: '500', textDecoration: 'none' }}>
                View all documents
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
