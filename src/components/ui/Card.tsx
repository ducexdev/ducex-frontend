import React from 'react';
import styles from './Card.module.css';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'base' | 'service' | 'attorney' | 'blog' | 'testimonial';
  elevated?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'base',
  elevated = false,
  onClick,
  style,
}) => {
  const classNames = [
    styles.card,
    styles[`card-${variant}`],
    elevated ? styles.elevated : '',
    onClick ? styles.clickable : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames} onClick={onClick} role={onClick ? 'button' : undefined} tabIndex={onClick ? 0 : undefined} style={style}>
      {children}
    </div>
  );
};
