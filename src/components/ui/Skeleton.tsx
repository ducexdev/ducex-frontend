import React from 'react';
import styles from './Skeleton.module.css';

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  variant?: 'rectangular' | 'circular' | 'text';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  width,
  height,
  variant = 'text',
}) => {
  const style: React.CSSProperties = {
    width: width,
    height: height,
  };

  return (
    <div
      className={`${styles.skeleton} ${styles[`skeleton-${variant}`]} ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
};
