import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowRight, Calendar, Clock, ChevronRight, Phone } from 'lucide-react';
import { getArticleBySlug, getPublishedArticles, getRelatedArticles } from '../../../data/insights';
import styles from './BlogPost.module.css';

interface PageProps {
  params: { slug: string };
}

/* ── SEO: Dynamic metadata ─────────────────────────────────────────────── */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: 'Article Not Found | Ducex Solicitors' };

  const canonical = `https://ducexsolicitors.com/insights/${article.slug}`;

  return {
    title: article.seo.title,
    description: article.seo.description,
    alternates: { canonical },
    openGraph: {
      title: article.seo.title,
      description: article.seo.description,
      url: canonical,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
      images: [{ url: article.seo.ogImage, width: 1200, height: 630, alt: article.title }],
      siteName: 'Ducex Solicitors',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.seo.title,
      description: article.seo.description,
      images: [article.seo.ogImage],
    },
  };
}

/* ── Static params for pre-rendering ──────────────────────────────────── */
export async function generateStaticParams() {
  return getPublishedArticles().map(a => ({ slug: a.slug }));
}

/* ── JSON-LD Structured Data ──────────────────────────────────────────── */
function ArticleJsonLd({ article }: { article: ReturnType<typeof getArticleBySlug> }) {
  if (!article) return null;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.seo.ogImage,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      '@type': 'Person',
      name: article.author.name,
      jobTitle: article.author.role,
      url: `https://ducexsolicitors.com/team/${article.author.slug}`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ducex Solicitors',
      logo: { '@type': 'ImageObject', url: 'https://ducexsolicitors.com/images/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://ducexsolicitors.com/insights/${article.slug}` },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/* ── Page Component ────────────────────────────────────────────────────── */
export default function BlogPostPage({ params }: PageProps) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = getRelatedArticles(article.relatedArticleIds);
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-NG', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  return (
    <div className={styles.pageWrapper}>
      <ArticleJsonLd article={article} />

      {/* ── Hero ── */}
      <div className={styles.hero}>
        <Image
          src={article.featuredImage}
          alt={article.title}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.categoryBadge}>{article.category}</span>
          <h1 className={styles.heroTitle}>{article.title}</h1>
          <div className={styles.heroMeta}>
            <div className={styles.heroAuthor}>
              <Image
                src={article.author.image}
                alt={article.author.name}
                width={38}
                height={38}
                className={styles.heroAuthorImg}
              />
              <div className={styles.heroAuthorText}>
                <span className={styles.heroAuthorName}>{article.author.name}</span>
                <span className={styles.heroAuthorRole}>{article.author.role}</span>
              </div>
            </div>
            <div className={styles.heroDivider} />
            <div className={styles.heroMetaItem}>
              <Calendar size={13} />
              <span>{formattedDate}</span>
            </div>
            <div className={styles.heroDivider} />
            <div className={styles.heroMetaItem}>
              <Clock size={13} />
              <span>{article.readingTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Breadcrumb ── */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className={styles.breadcrumbInner}>
          <Link href="/" className={styles.breadcrumbLink}>Home</Link>
          <ChevronRight size={13} className={styles.breadcrumbSep} />
          <Link href="/insights" className={styles.breadcrumbLink}>Insights</Link>
          <ChevronRight size={13} className={styles.breadcrumbSep} />
          <Link href={`/insights?category=${article.categorySlug}`} className={styles.breadcrumbLink}>{article.category}</Link>
          <ChevronRight size={13} className={styles.breadcrumbSep} />
          <span className={styles.breadcrumbCurrent}>{article.title}</span>
        </div>
      </nav>

      {/* ── Body: Article + Sidebar ── */}
      <div className={styles.bodyLayout}>

        {/* Main Article */}
        <main>
          <article className={styles.article}>
            {/* Render HTML content */}
            <div
              className={styles.prose}
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Author Card */}
            <div className={styles.authorCard}>
              <Image
                src={article.author.image}
                alt={article.author.name}
                width={64}
                height={64}
                className={styles.authorCardImg}
              />
              <div className={styles.authorCardInfo}>
                <h4>{article.author.name}</h4>
                <p>{article.author.role}, Ducex Solicitors</p>
                <Link href={`/team/${article.author.slug}`} className={styles.authorCardLink}>
                  View Full Profile <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </article>
        </main>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          {/* Consultation CTA */}
          <div className={styles.ctaSidebar}>
            <h3 className={styles.ctaSidebarTitle}>Need Legal Advice?</h3>
            <p className={styles.ctaSidebarText}>
              This article provides general information only. For advice specific to your situation, speak with one of our qualified attorneys.
            </p>
            <Link href="/consultation" className={styles.ctaSidebarBtn}>
              <Phone size={15} /> Book Free Consultation
            </Link>
            <Link href="/contact" className={styles.ctaSidebarSecondary}>
              Contact Us <ArrowRight size={14} />
            </Link>
          </div>

          {/* Disclaimer */}
          <div className={styles.disclaimer}>
            <strong>⚠️ Legal Disclaimer</strong>
            The content of this article is for general informational purposes only. It does not constitute legal advice and should not be relied upon as a substitute for professional legal counsel tailored to your specific circumstances.
          </div>

          {/* Related Services */}
          {article.relatedServiceIds.length > 0 && (
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarCardTitle}>Related Services</h3>
              {article.relatedServiceIds.map(id => (
                <Link key={id} href={`/services/${id}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.6rem 0', borderBottom: '1px solid #F1F5F9', textDecoration: 'none', color: '#374151', fontSize: '0.875rem', fontWeight: 500 }}>
                  <span style={{ textTransform: 'capitalize' }}>{id.replace(/-/g, ' ')}</span>
                  <ArrowRight size={14} color="var(--color-brass)" />
                </Link>
              ))}
            </div>
          )}
        </aside>
      </div>

      {/* ── Related Articles ── */}
      {related.length > 0 && (
        <section className={styles.relatedSection}>
          <h2 className={styles.relatedTitle}>Related Articles</h2>
          <div className={styles.relatedGrid}>
            {related.map(rel => (
              <Link key={rel.id} href={`/insights/${rel.slug}`} className={styles.relatedCard}>
                <div className={styles.relatedCardImg}>
                  <Image src={rel.featuredImage} alt={rel.title} fill style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.relatedCardBody}>
                  <div className={styles.relatedCardCategory}>{rel.category}</div>
                  <h3 className={styles.relatedCardTitle}>{rel.title}</h3>
                  <div className={styles.relatedCardMeta}>{rel.readingTime}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── Bottom CTA ── */}
      <section className={styles.bottomCta}>
        <div className={styles.bottomCtaInner}>
          <h2 className={styles.bottomCtaTitle}>Schedule a Confidential Consultation</h2>
          <p className={styles.bottomCtaText}>
            Our experienced legal team is ready to provide expert, discreet advice
            tailored specifically to your situation. No obligation.
          </p>
          <div className={styles.bottomCtaButtons}>
            <Link href="/consultation" className={styles.bottomCtaPrimary}>
              Book Consultation <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className={styles.bottomCtaOutline}>
              Call Us Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
