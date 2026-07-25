import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false,
}) => {
  return (
    <div 
      className={className} 
      style={{ 
        textAlign: align,
        marginBottom: 'var(--space-12)',
        maxWidth: align === 'center' ? '800px' : '100%',
        marginLeft: align === 'center' ? 'auto' : '0',
        marginRight: align === 'center' ? 'auto' : '0',
      }}
    >
      <h2 style={{ 
        color: light ? 'var(--color-white)' : 'var(--color-ink)',
        fontSize: 'clamp(var(--text-3xl), 4vw, var(--text-4xl))',
        marginBottom: 'var(--space-4)'
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ 
          color: light ? 'var(--color-stone)' : 'var(--text-secondary)',
          fontSize: 'var(--text-lg)'
        }}>
          {subtitle}
        </p>
      )}
      <div style={{
        height: '3px',
        width: '60px',
        backgroundColor: 'var(--color-brass)',
        marginTop: 'var(--space-6)',
        marginLeft: align === 'center' ? 'auto' : '0',
        marginRight: align === 'center' ? 'auto' : '0',
      }} />
    </div>
  );
};
