"use client";
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
}

export const ScrollReveal = ({ 
  children, 
  width = '100%', 
  delay = 0, 
  direction = 'up',
  duration = 0.8,
  className = ''
}: ScrollRevealProps) => {
  const getHiddenState = () => {
    switch(direction) {
      case 'up': return { opacity: 0, y: 75 };
      case 'down': return { opacity: 0, y: -75 };
      case 'left': return { opacity: 0, x: 75 };
      case 'right': return { opacity: 0, x: -75 };
      case 'none': return { opacity: 0 };
    }
  };

  const getVisibleState = () => {
    switch(direction) {
      case 'up': 
      case 'down': return { opacity: 1, y: 0 };
      case 'left': 
      case 'right': return { opacity: 1, x: 0 };
      case 'none': return { opacity: 1 };
    }
  };

  return (
    <div style={{ width, position: 'relative' }} className={className}>
      <motion.div
        variants={{
          hidden: getHiddenState(),
          visible: getVisibleState()
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration, delay, ease: [0.17, 0.55, 0.55, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};
