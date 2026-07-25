'use client';
import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, MessageSquare } from 'lucide-react';
import { getPublishedArticles, CATEGORIES, Article } from '../../data/insights';
import styles from './Insights.module.css';

const allArticles = getPublishedArticles();

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return allArticles;
    return allArticles.filter(a => a.categorySlug === activeCategory);
  }, [activeCategory]);

  const featured = filtered.filter(a => a.featured);
  const rest = filtered.filter(a => !a.featured);

  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Insights &amp; Perspectives</span>
          <h1 className={styles.heroTitle}>
            Navigating the Complexities<br />of <span>Modern Nigerian Law.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Expert analysis, regulatory updates, and strategic thought leadership
            from our seasoned legal practitioners at Ducex Solicitors.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>{allArticles.length}+</span>
              <span className={styles.heroStatLabel}>Articles Published</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>{CATEGORIES.length - 1}</span>
              <span className={styles.heroStatLabel}>Practice Areas</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>100%</span>
              <span className={styles.heroStatLabel}>Free to Read</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Filter ── */}
      <div className={styles.filterSection}>
        <div className={styles.filterInner}>
          {CATEGORIES.map(cat => (
            <button
              key={cat.slug}
              className={`${styles.filterPill} ${activeCategory === cat.slug ? styles.filterPillActive : ''}`}
              onClick={() => setActiveCategory(cat.slug)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Main Content ── */}
      <section className={styles.mainSection}>
        <div className={styles.mainInner}>

          {filtered.length === 0 ? (
            <div className={styles.emptyState}>
              <BookOpen size={64} className={styles.emptyIcon} />
              <h2 className={styles.emptyTitle}>No articles in this category yet</h2>
              <p className={styles.emptyText}>
                Our attorneys are preparing expert insights for this area.<br />
                Check back soon or explore another category.
              </p>
            </div>
          ) : (
            <>
              {/* Featured Articles */}
              {featured.length > 0 && (
                <>
                  <h2 className={styles.sectionTitle}>Featured Articles</h2>
                  <div className={styles.featuredGrid}>
                    {featured.map(article => (
                      <ArticleCard key={article.id} article={article} featured />
                    ))}
                  </div>
                </>
              )}

              {/* All / Recent Articles */}
              {rest.length > 0 && (
                <>
                  <h2 className={styles.sectionTitle}>
                    {featured.length > 0 ? 'Recent Articles' : 'All Articles'}
                  </h2>
                  <div className={styles.articlesGrid}>
                    {rest.map(article => (
                      <ArticleCard key={article.id} article={article} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}

          {/* CTA Banner */}
          <div className={styles.ctaBanner}>
            <div className={styles.ctaText}>
              <h3>Have a Legal Question?</h3>
              <p>Our experienced attorneys are ready to provide confidential advice tailored to your situation.</p>
            </div>
            <div className={styles.ctaButtons}>
              <Link href="/consultation" className={styles.ctaBtnPrimary}>
                Book Consultation <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className={styles.ctaBtnOutline}>
                Contact Us <MessageSquare size={16} />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

/* ── Article Card Sub-component ── */
function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  const cardClass = featured ? styles.featuredCard : styles.articleCard;
  return (
    <Link href={`/insights/${article.slug}`} className={cardClass}>
      <div className={styles.cardImageWrapper}>
        <Image
          src={article.featuredImage}
          alt={article.title}
          fill
          style={{ objectFit: 'cover' }}
        />
        <span className={styles.cardBadge}>{article.category}</span>
        {featured && <span className={styles.featuredBadge}>Featured</span>}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardMeta}>
          <span>{new Date(article.publishedAt).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
          <span className={styles.metaDot} />
          <span>{article.readingTime}</span>
        </div>
        <h3 className={styles.cardTitle}>{article.title}</h3>
        <p className={styles.cardExcerpt}>{article.excerpt}</p>
        <div className={styles.cardFooter}>
          <div className={styles.authorChip}>
            <Image
              src={article.author.image}
              alt={article.author.name}
              width={30}
              height={30}
              className={styles.authorAvatar}
            />
            <span className={styles.authorName}>{article.author.name}</span>
          </div>
          <span className={styles.readLink}>
            Read Article <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
