'use client';

import React, { useState, useMemo } from 'react';
import {
  FileText,
  Search,
  Download,
  Filter,
  File,
  Image,
  FileCode,
  UploadCloud,
  Calendar,
  User,
  Briefcase,
} from 'lucide-react';
import styles from './documents.module.css';

/* ─── Types ──────────────────────────────────────────────────────────────── */
type FileType = 'PDF' | 'DOCX' | 'IMG' | 'OTHER';

interface Document {
  id: string;
  title: string;
  matterRef: string;
  uploadedBy: string;
  uploadedAt: string; // ISO date
  fileType: FileType;
  fileSize: string;
  description: string;
}

/* ─── Mock Data ──────────────────────────────────────────────────────────── */
const MOCK_DOCUMENTS: Document[] = [
  {
    id: 'DOC-001',
    title: 'Property Transfer Agreement',
    matterRef: 'MTR-2026-0041',
    uploadedBy: 'Mr. Chukwudi Eze',
    uploadedAt: '2026-07-20',
    fileType: 'PDF',
    fileSize: '1.4 MB',
    description: 'Signed transfer deed for 14 Maple Avenue, dated July 2026.',
  },
  {
    id: 'DOC-002',
    title: 'Corporate Restructuring Plan',
    matterRef: 'MTR-2026-0038',
    uploadedBy: 'Mrs. Funke Adeyemi',
    uploadedAt: '2026-07-18',
    fileType: 'DOCX',
    fileSize: '890 KB',
    description: 'Draft restructuring strategy for NovaTech Ltd shareholder review.',
  },
  {
    id: 'DOC-003',
    title: 'Client ID — Passport Scan',
    matterRef: 'MTR-2026-0041',
    uploadedBy: 'Adaeze Okafor',
    uploadedAt: '2026-07-15',
    fileType: 'IMG',
    fileSize: '2.1 MB',
    description: 'International passport scan for KYC verification purposes.',
  },
  {
    id: 'DOC-004',
    title: 'Employment Contract — Adesanya',
    matterRef: 'MTR-2026-0035',
    uploadedBy: 'Mr. Chukwudi Eze',
    uploadedAt: '2026-07-12',
    fileType: 'PDF',
    fileSize: '540 KB',
    description: 'Original employment contract submitted as evidence in dispute case.',
  },
  {
    id: 'DOC-005',
    title: 'Custody Agreement Draft',
    matterRef: 'MTR-2026-0029',
    uploadedBy: 'Dr. Bisi Okonkwo',
    uploadedAt: '2026-07-10',
    fileType: 'DOCX',
    fileSize: '312 KB',
    description: 'Initial draft of custody arrangement for review by both parties.',
  },
  {
    id: 'DOC-006',
    title: 'Visa Refusal Notice',
    matterRef: 'MTR-2026-0044',
    uploadedBy: 'Seun Fashola',
    uploadedAt: '2026-07-08',
    fileType: 'IMG',
    fileSize: '1.8 MB',
    description: 'Scanned UKVI refusal letter to support Tier 2 appeal grounds.',
  },
];

/* ─── Config ─────────────────────────────────────────────────────────────── */
const FILE_TYPE_CONFIG: Record<FileType, { label: string; color: string; bg: string; Icon: React.ElementType }> = {
  PDF: { label: 'PDF', color: '#e55555', bg: 'rgba(229,85,85,0.12)', Icon: FileText },
  DOCX: { label: 'DOCX', color: '#3b82f6', bg: 'rgba(59,130,246,0.12)', Icon: FileCode },
  IMG: { label: 'IMG', color: '#8b5cf6', bg: 'rgba(139,92,246,0.12)', Icon: Image },
  OTHER: { label: 'FILE', color: '#6b7280', bg: 'rgba(107,114,128,0.12)', Icon: File },
};

const FILTER_OPTIONS: Array<{ value: FileType | 'ALL'; label: string }> = [
  { value: 'ALL', label: 'All Files' },
  { value: 'PDF', label: 'PDF' },
  { value: 'DOCX', label: 'DOCX' },
  { value: 'IMG', label: 'Images' },
];

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function DocumentsPage() {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<FileType | 'ALL'>('ALL');

  const filtered = useMemo(() => {
    return MOCK_DOCUMENTS.filter((doc) => {
      const matchesType = typeFilter === 'ALL' || doc.fileType === typeFilter;
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        doc.title.toLowerCase().includes(q) ||
        doc.matterRef.toLowerCase().includes(q) ||
        doc.uploadedBy.toLowerCase().includes(q);
      return matchesType && matchesSearch;
    });
  }, [search, typeFilter]);

  return (
    <div className={styles.page}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Documents</h1>
          <p className={styles.pageSubtitle}>Upload, organise and manage all matter-related documents.</p>
        </div>
        <button className={styles.uploadBtn}>
          <UploadCloud size={16} />
          Upload Document
        </button>
      </div>

      {/* Toolbar */}
      <div className={styles.toolbar}>
        <div className={styles.searchWrapper}>
          <Search size={16} className={styles.searchIcon} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search by title, matter or uploader…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className={styles.filterGroup}>
          <Filter size={15} className={styles.filterIcon} />
          {FILTER_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              className={`${styles.filterBtn} ${typeFilter === opt.value ? styles.filterBtnActive : ''}`}
              onClick={() => setTypeFilter(opt.value as FileType | 'ALL')}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <p className={styles.resultsCount}>
        Showing <strong>{filtered.length}</strong> of {MOCK_DOCUMENTS.length} documents
      </p>

      {/* Document Grid */}
      {filtered.length === 0 ? (
        <div className={styles.emptyState}>
          <FileText size={40} color="#d1d5db" />
          <p>No documents match your search.</p>
        </div>
      ) : (
        <div className={styles.docGrid}>
          {filtered.map((doc) => {
            const ftc = FILE_TYPE_CONFIG[doc.fileType];
            const dateDisplay = new Date(doc.uploadedAt).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            });
            return (
              <div key={doc.id} className={styles.docCard}>
                {/* Card Top */}
                <div className={styles.docCardTop}>
                  <div className={styles.docIconWrap} style={{ background: ftc.bg, color: ftc.color }}>
                    <ftc.Icon size={26} />
                  </div>
                  <span
                    className={styles.fileTypeBadge}
                    style={{ color: ftc.color, background: ftc.bg }}
                  >
                    {ftc.label}
                  </span>
                </div>

                {/* Card Body */}
                <div className={styles.docCardBody}>
                  <h3 className={styles.docTitle}>{doc.title}</h3>
                  <p className={styles.docDescription}>{doc.description}</p>
                </div>

                {/* Meta */}
                <div className={styles.docMeta}>
                  <div className={styles.metaRow}>
                    <Briefcase size={12} className={styles.metaIcon} />
                    <span className={styles.metaLabel}>Matter:</span>
                    <span className={styles.metaValue}>{doc.matterRef}</span>
                  </div>
                  <div className={styles.metaRow}>
                    <User size={12} className={styles.metaIcon} />
                    <span className={styles.metaLabel}>Uploaded by:</span>
                    <span className={styles.metaValue}>{doc.uploadedBy}</span>
                  </div>
                  <div className={styles.metaRow}>
                    <Calendar size={12} className={styles.metaIcon} />
                    <span className={styles.metaLabel}>Date:</span>
                    <span className={styles.metaValue}>{dateDisplay}</span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className={styles.docCardFooter}>
                  <span className={styles.fileSize}>{doc.fileSize}</span>
                  <button className={styles.downloadBtn} title={`Download ${doc.title}`}>
                    <Download size={14} />
                    Download
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
