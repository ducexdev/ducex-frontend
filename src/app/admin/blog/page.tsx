'use client';
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Plus, Pencil, Trash2, Eye, EyeOff, BookOpen } from 'lucide-react';
import { getAllArticles, Article } from '../../../data/insights';
import styles from './Blog.module.css';

type Status = Article['status'];

const STATUS_MAP: Record<Status, { label: string; cls: string }> = {
  published: { label: 'Published', cls: styles.badgePublished },
  draft:     { label: 'Draft',     cls: styles.badgeDraft },
  archived:  { label: 'Archived',  cls: styles.badgeArchived },
};

export default function AdminBlogPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const allArticles = getAllArticles();

  const filtered = useMemo(() => {
    return allArticles.filter((a: Article) => {
      const matchSearch = !search || a.title.toLowerCase().includes(search.toLowerCase());
      const matchStatus = statusFilter === 'all' || a.status === statusFilter;
      const matchCat = categoryFilter === 'all' || a.categorySlug === categoryFilter;
      return matchSearch && matchStatus && matchCat;
    });
  }, [search, statusFilter, categoryFilter, allArticles]);

  const stats = useMemo(() => ({
    total: allArticles.length,
    published: allArticles.filter((a: Article) => a.status === 'published').length,
    draft: allArticles.filter((a: Article) => a.status === 'draft').length,
    archived: allArticles.filter((a: Article) => a.status === 'archived').length,
  }), [allArticles]);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`Delete "${title}"? This cannot be undone.`)) {
      showToast(`"${title}" has been deleted.`);
    }
  };

  const handleToggleStatus = (article: Article) => {
    const next = article.status === 'published' ? 'Draft' : 'Published';
    showToast(`"${article.title}" set to ${next}.`);
  };

  const categories = [...new Set(allArticles.map((a: Article) => a.categorySlug))];

  return (
    <div>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Blog Posts</h1>
          <p className={styles.pageSubtitle}>Manage your Legal Knowledge Centre articles</p>
        </div>
        <Link href="/admin/blog/new" className={styles.newBtn}>
          <Plus size={16} /> New Article
        </Link>
      </div>

      {/* Stats */}
      <div className={styles.statsRow}>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>{stats.total}</div>
          <div className={styles.statLabel}>Total</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber} style={{ color: '#15803D' }}>{stats.published}</div>
          <div className={styles.statLabel}>Published</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber} style={{ color: '#B45309' }}>{stats.draft}</div>
          <div className={styles.statLabel}>Drafts</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber} style={{ color: '#64748B' }}>{stats.archived}</div>
          <div className={styles.statLabel}>Archived</div>
        </div>
      </div>

      {/* Filters */}
      <div className={styles.filtersBar}>
        <input
          type="text"
          placeholder="Search articles..."
          className={styles.searchInput}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select className={styles.filterSelect} value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
          <option value="all">All Statuses</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
          <option value="archived">Archived</option>
        </select>
        <select className={styles.filterSelect} value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)}>
          <option value="all">All Categories</option>
          {categories.map((c: string) => (
            <option key={c} value={c}>{c.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}</option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className={styles.tableWrapper}>
        {filtered.length === 0 ? (
          <div className={styles.emptyState}>
            <BookOpen size={48} color="#CBD5E1" />
            <div className={styles.emptyTitle}>No articles found</div>
            <p style={{ fontSize: '0.875rem' }}>Try adjusting your filters or <Link href="/admin/blog/new" style={{ color: '#D4AF37', fontWeight: 600 }}>create your first article</Link>.</p>
          </div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Author</th>
                <th>Published</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(article => {
                const statusInfo = STATUS_MAP[article.status] ?? STATUS_MAP.draft;
                return (
                  <tr key={article.id}>
                    <td>
                      <div className={styles.postTitle}>{article.title}</div>
                      <div className={styles.postSlug}>/insights/{article.slug}</div>
                    </td>
                    <td>{article.category}</td>
                    <td>
                      <span className={`${styles.badge} ${statusInfo.cls}`}>
                        {statusInfo.label}
                      </span>
                    </td>
                    <td>{article.author.name}</td>
                    <td>
                      {article.publishedAt
                        ? new Date(article.publishedAt).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' })
                        : '—'}
                    </td>
                    <td>
                      <div className={styles.actions}>
                        <Link href={`/admin/blog/${article.id}/edit`} className={styles.actionBtn} title="Edit">
                          <Pencil size={14} />
                        </Link>
                        <button
                          className={`${styles.actionBtn} ${styles.actionBtnSuccess}`}
                          title={article.status === 'published' ? 'Unpublish' : 'Publish'}
                          onClick={() => handleToggleStatus(article)}
                        >
                          {article.status === 'published' ? <EyeOff size={14} /> : <Eye size={14} />}
                        </button>
                        <button
                          className={`${styles.actionBtn} ${styles.actionBtnDanger}`}
                          title="Delete"
                          onClick={() => handleDelete(article.id, article.title)}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {/* Toast */}
      {toast && (
        <div className={`${styles.toast} ${toast.type === 'success' ? styles.toastSuccess : styles.toastError}`}>
          {toast.message}
        </div>
      )}
    </div>
  );
}
