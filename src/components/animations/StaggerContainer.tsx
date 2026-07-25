"use client";
import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
  delayChildren?: number;
  style?: React.CSSProperties;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom = { staggerDelay: 0.1, delayChildren: 0 }) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.staggerDelay,
      delayChildren: custom.delayChildren,
    }
  })
};

export const StaggerContainer = ({ 
  children, 
  staggerDelay = 0.1, 
  delayChildren = 0,
  className = '',
  style
}: StaggerContainerProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      custom={{ staggerDelay, delayChildren }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = '' }: { children: ReactNode, className?: string }) => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};
