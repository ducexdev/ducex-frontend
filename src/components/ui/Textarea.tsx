import React, { TextareaHTMLAttributes, forwardRef } from 'react';
import styles from './Form.module.css';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  hint?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, className = '', id, ...props }, ref) => {
    const textareaId = id || `textarea-${label.replace(/\s+/g, '-').toLowerCase()}`;
    const errorId = `${textareaId}-error`;
    const hintId = `${textareaId}-hint`;

    return (
      <div className={`${styles.formGroup} ${className}`}>
        <label htmlFor={textareaId} className={styles.label}>
          {label}
        </label>
        <textarea
          id={textareaId}
          ref={ref}
          className={`${styles.textarea} ${error ? styles.inputError : ''}`}
          aria-invalid={!!error}
          aria-describedby={[error ? errorId : undefined, hint ? hintId : undefined].filter(Boolean).join(' ')}
          {...props}
        />
        {hint && !error && (
          <span id={hintId} className={styles.hint}>
            {hint}
          </span>
        )}
        {error && (
          <span id={errorId} className={styles.error} role="alert">
            {error}
          </span>
        )}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';
