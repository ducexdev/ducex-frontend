"use client";
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import styles from './Button.module.css';

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "onDrag" | "children"> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  const classNames = [
    styles.btn,
    styles[`btn-${variant}`],
    styles[`btn-${size}`],
    fullWidth ? styles['btn-full'] : '',
    isLoading ? styles['btn-loading'] : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={classNames}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className={styles.spinner} aria-hidden="true" />
      ) : null}
      <span className={isLoading ? styles.hiddenText : ''}>{children}</span>
    </motion.button>
  );
};
