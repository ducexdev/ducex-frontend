'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ChevronDown, ChevronUp, Check, X } from 'lucide-react';
import { TipTapEditor } from '../../../components/editor/TipTapEditor';
import { Article } from '../../../data/insights';
import styles from './Blog.module.css';

const CATEGORIES = [
  { label: 'Family Law',     value: 'family-law' },
  { label: 'Property Law',   value: 'property-law' },
  { label: 'Corporate Law',  value: 'corporate-law' },
  { label: 'Business Law',   value: 'business-law' },
  { label: 'Criminal Law',   value: 'criminal-law' },
  { label: 'Litigation',     value: 'litigation' },
  { label: 'Estate Planning', value: 'estate-planning' },
  { label: 'Taxation',       value: 'taxation' },
];

function toSlug(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
}

interface ArticleFormProps {
  initialData?: Partial<Article>;
  isEdit?: boolean;
}

export function ArticleForm({ initialData, isEdit = false }: ArticleFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [seoOpen, setSeoOpen] = useState(false);
  const [slugStatus, setSlugStatus] = useState<'idle' | 'available' | 'taken'>('idle');

  // Form state
  const [title, setTitle] = useState(initialData?.title ?? '');
  const [slug, setSlug] = useState(initialData?.slug ?? '');
  const [excerpt, setExcerpt] = useState(initialData?.excerpt ?? '');
  const [content, setContent] = useState(initialData?.content ?? '');
  const [category, setCategory] = useState(initialData?.categorySlug ?? '');
  const [status, setStatus] = useState<'draft' | 'published' | 'archived'>(initialData?.status ?? 'draft');
  const [readingTime, setReadingTime] = useState(initialData?.readingTime ?? '');
  const [featuredImage, setFeaturedImage] = useState(initialData?.featuredImage ?? '');
  const [isFeatured, setIsFeatured] = useState(initialData?.featured ?? false);
  // SEO
  const [metaTitle, setMetaTitle] = useState(initialData?.seo?.title ?? '');
  const [metaDesc, setMetaDesc] = useState(initialData?.seo?.description ?? '');
  const [ogImage, setOgImage] = useState(initialData?.seo?.ogImage ?? '');

  // Auto-generate slug from title (only when not editing)
  useEffect(() => {
    if (!isEdit && title) {
      setSlug(toSlug(title));
      setSlugStatus('idle');
    }
  }, [title, isEdit]);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const checkSlug = useCallback(async () => {
    if (!slug) return;
    // In production this would call: POST /api/blog/admin/posts/check-slug
    // For now we simulate with a timeout
    const simulatedTaken = ['navigating-nigerian-corporate-governance-code'];
    const isTaken = simulatedTaken.includes(slug) && slug !== initialData?.slug;
    setSlugStatus(isTaken ? 'taken' : 'available');
  }, [slug, initialData?.slug]);

  const handleSave = async (publishNow: boolean) => {
    if (!title.trim()) { showToast('Please enter a title.', 'error'); return; }
    if (!slug.trim())  { showToast('Please enter a slug.', 'error'); return; }
    if (!content.trim() || content === '<p></p>') { showToast('Content cannot be empty.', 'error'); return; }

    setSaving(true);
    try {
      // In production: call POST /api/blog/admin/posts or PUT /api/blog/admin/posts/:id
      await new Promise(r => setTimeout(r, 800)); // simulate API call
      const finalStatus = publishNow ? 'published' : status;
      showToast(publishNow ? '✓ Article published successfully!' : '✓ Draft saved successfully!');
      setTimeout(() => router.push('/admin/blog'), 1200);
    } catch {
      showToast('Failed to save. Please try again.', 'error');
    } finally {
      setSaving(false);
    }
  };

  const metaDescLen = metaDesc.length;

  return (
    <div>
      {/* Back link */}
      <Link href="/admin/blog" className={styles.backLink}>
        <ArrowLeft size={15} /> Back to Blog Posts
      </Link>

      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>{isEdit ? 'Edit Article' : 'New Article'}</h1>
          <p className={styles.pageSubtitle}>
            {isEdit ? `Editing: ${initialData?.title}` : 'Create a new Legal Knowledge Centre article'}
          </p>
        </div>
      </div>

      <div className={styles.formLayout}>
        {/* ── LEFT: Main Content ── */}
        <div>
          {/* Title */}
          <div className={styles.formPanel} style={{ marginBottom: '1.25rem' }}>
            <div className={styles.formGroup} style={{ marginBottom: 0 }}>
              <input
                id="title"
                type="text"
                className={`${styles.input} ${styles.inputTitle}`}
                placeholder="Article title..."
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
          </div>

          {/* Slug */}
          <div className={styles.formPanel} style={{ marginBottom: '1.25rem' }}>
            <label className={styles.label}>
              URL Slug
            </label>
            <div className={styles.slugRow}>
              <span className={styles.slugPrefix}>/insights/</span>
              <input
                type="text"
                className={styles.input}
                value={slug}
                onChange={e => { setSlug(e.target.value); setSlugStatus('idle'); }}
                placeholder="article-url-slug"
                style={{ flex: 1 }}
              />
              <button type="button" className={styles.slugCheck} onClick={checkSlug}>
                Check
              </button>
            </div>
            {slugStatus === 'available' && (
              <div className={styles.slugAvailable}><Check size={12} style={{ verticalAlign: 'middle' }} /> Slug is available</div>
            )}
            {slugStatus === 'taken' && (
              <div className={styles.slugUnavailable}><X size={12} style={{ verticalAlign: 'middle' }} /> This slug is already taken</div>
            )}
          </div>

          {/* Excerpt */}
          <div className={styles.formPanel} style={{ marginBottom: '1.25rem' }}>
            <label className={styles.label}>Excerpt <span className={styles.labelOptional}>(shown on listing page)</span></label>
            <textarea
              className={styles.textarea}
              placeholder="A brief, compelling summary of this article (max 300 characters)..."
              value={excerpt}
              onChange={e => setExcerpt(e.target.value)}
              maxLength={300}
              rows={3}
            />
            <div className={styles.charCount}>{excerpt.length}/300</div>
          </div>

          {/* TipTap Content Editor */}
          <div className={styles.formPanel}>
            <label className={styles.label} style={{ marginBottom: '0.875rem' }}>Article Content</label>
            <TipTapEditor
              content={content}
              onChange={setContent}
              placeholder="Begin writing your article here. Use the toolbar above to format your content with headings, lists, quotes, and links..."
            />
          </div>
        </div>

        {/* ── RIGHT: Settings Sidebar ── */}
        <div>
          {/* Publish */}
          <div className={styles.formPanel} style={{ marginBottom: '1.25rem' }}>
            <div className={styles.formPanelTitle}>Publish</div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Status</label>
              <select className={styles.select} value={status} onChange={e => setStatus(e.target.value as typeof status)}>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            <div className={styles.formActions}>
              <button type="button" className={styles.btnDraft} onClick={() => handleSave(false)} disabled={saving}>
                {saving ? 'Saving…' : 'Save Draft'}
              </button>
              <button type="button" className={styles.btnPublish} onClick={() => handleSave(true)} disabled={saving}>
                {saving ? 'Publishing…' : 'Publish Now'}
              </button>
            </div>
          </div>

          {/* Settings */}
          <div className={styles.formPanel} style={{ marginBottom: '1.25rem' }}>
            <div className={styles.formPanelTitle}>Settings</div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Category</label>
              <select className={styles.select} value={category} onChange={e => setCategory(e.target.value)}>
                <option value="">Select a category...</option>
                {CATEGORIES.map(c => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Reading Time <span className={styles.labelOptional}>(e.g. "5 min read")</span></label>
              <input type="text" className={styles.input} value={readingTime} onChange={e => setReadingTime(e.target.value)} placeholder="5 min read" />
            </div>

            <div className={styles.toggleRow}>
              <span className={styles.toggleLabel}>Featured Article</span>
              <label className={styles.toggle}>
                <input type="checkbox" checked={isFeatured} onChange={e => setIsFeatured(e.target.checked)} />
                <span className={styles.toggleSlider} />
              </label>
            </div>
          </div>

          {/* Featured Image */}
          <div className={styles.formPanel} style={{ marginBottom: '1.25rem' }}>
            <div className={styles.formPanelTitle}>Featured Image</div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Image URL</label>
              <input type="text" className={styles.input} value={featuredImage} onChange={e => setFeaturedImage(e.target.value)} placeholder="/images/hero/hero1.png" />
            </div>
            {featuredImage && (
              <div className={styles.imagePreview}>
                <Image src={featuredImage} alt="Featured image preview" fill style={{ objectFit: 'cover' }} onError={() => {}} />
              </div>
            )}
          </div>

          {/* SEO (Collapsible) */}
          <div className={styles.formPanel}>
            <button type="button" className={styles.seoToggle} onClick={() => setSeoOpen(!seoOpen)}>
              <span>SEO &amp; Open Graph</span>
              {seoOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {seoOpen && (
              <div style={{ marginTop: '1rem' }}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Meta Title <span className={styles.labelOptional}>(max 70)</span></label>
                  <input type="text" className={styles.input} value={metaTitle} onChange={e => setMetaTitle(e.target.value)} maxLength={70} placeholder="SEO title..." />
                  <div className={styles.charCount}>{metaTitle.length}/70</div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Meta Description <span className={styles.labelOptional}>(max 160)</span></label>
                  <textarea
                    className={styles.textarea}
                    value={metaDesc}
                    onChange={e => setMetaDesc(e.target.value)}
                    maxLength={165}
                    rows={3}
                    placeholder="Compelling description for search engines..."
                  />
                  <div className={`${styles.charCount} ${metaDescLen > 160 ? styles.charCountWarn : ''}`}>
                    {metaDescLen}/160 {metaDescLen > 160 && '— Too long!'}
                  </div>
                </div>

                <div className={styles.formGroup} style={{ marginBottom: 0 }}>
                  <label className={styles.label}>OG Image URL <span className={styles.labelOptional}>(1200×630)</span></label>
                  <input type="text" className={styles.input} value={ogImage} onChange={e => setOgImage(e.target.value)} placeholder="https://..." />
                </div>
              </div>
            )}
          </div>
        </div>
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
