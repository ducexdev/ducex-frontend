"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { Award, ShieldCheck, Lock } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import styles from './HeroSlider.module.css';

interface Slide {
  id: string;
  imagePath: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    id: 'slide-1',
    imagePath: '/images/hero/hero1.png',
    title: 'Expert Legal Counsel,\nUncompromising Integrity.',
    subtitle: 'Providing world-class legal solutions for businesses, families, and individuals across Nigeria.'
  },
  {
    id: 'slide-2',
    imagePath: '/images/hero/hero2.png',
    title: 'Protecting What\nMatters Most.',
    subtitle: 'From complex corporate litigation to sensitive family matters, our team stands with you.'
  },
  {
    id: 'slide-3',
    imagePath: '/images/hero/hero3.png',
    title: 'Your Strategic\nLegal Partner.',
    subtitle: 'Navigating the complexities of Nigerian law so you can focus on growth.'
  },
  {
    id: 'slide-4',
    imagePath: '/images/hero/hero4.png',
    title: 'Excellence in\nCorporate Governance.',
    subtitle: 'Securing your business structure for long-term scalability and compliance.'
  },
  {
    id: 'slide-5',
    imagePath: '/images/hero/jero5.png',
    title: 'Justice and\nResolution.',
    subtitle: 'Fierce advocacy to protect your rights in and out of the courtroom.'
  }
];

const wipeVariants: Variants = {
  initial: { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' },
  animate: { 
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: { duration: 1.2, ease: "easeInOut" }
  },
  exit: { 
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
    transition: { duration: 0.8, ease: "easeInOut" }
  }
};

const textVariants: Variants = {
  initial: { y: 100, opacity: 0 },
  animate: (i: number) => ({
    y: 0, 
    opacity: 1, 
    transition: { delay: 0.8 + (i * 0.15), duration: 0.8, ease: "easeOut" }
  })
};

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // Extended time for Ken Burns effect
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.heroContainer}>
      <AnimatePresence initial={false}>
        <motion.div 
          key={currentSlide}
          variants={wipeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={styles.slide}
        >
          <div className={styles.imageOverlay}></div>
          <div className={styles.kenBurns}>
            <Image
              src={slides[currentSlide].imagePath}
              alt="Hero Background"
              fill
              className={styles.image}
              priority
            />
          </div>
          <div className="container" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', alignItems: 'center' }}>
            <div className={styles.content}>
              <div style={{ overflow: 'hidden' }}>
                <motion.h1 
                  custom={0}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  className={styles.title}
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {slides[currentSlide].title}
                </motion.h1>
              </div>
              
              <div style={{ overflow: 'hidden' }}>
                <motion.p 
                  custom={1}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  className={styles.subtitle}
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
              </div>

              <motion.div 
                custom={2}
                variants={textVariants}
                initial="initial"
                animate="animate"
                className={styles.actions}
              >
                <Link href="/contact">
                  <Button variant="primary" size="large">Book a Consultation</Button>
                </Link>
                <Link href="/services">
                  <Button variant="ghost" size="large" className={styles.secondaryBtn}>Our Practice Areas</Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Trust Signal Banner */}
      <div className={styles.trustBannerWrapper}>
        <div className={`container ${styles.trustBanner}`}>
          <div className={styles.trustItem}>
            <Award size={24} className={styles.trustIcon} />
            <span>Client Focused</span>
          </div>
          <div className={styles.trustItem}>
            <ShieldCheck size={24} className={styles.trustIcon} />
            <span>Proven Results</span>
          </div>
          <div className={styles.trustItem}>
            <Lock size={24} className={styles.trustIcon} />
            <span>Confidential & Trusted</span>
          </div>
        </div>
      </div>
      
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentSlide ? styles.indicatorActive : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
