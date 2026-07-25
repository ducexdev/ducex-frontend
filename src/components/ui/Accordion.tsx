"use client";
import React, { useState } from 'react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  onClick?: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div style={{ 
      borderBottom: '1px solid var(--color-stone)',
      marginBottom: 'var(--space-2)'
    }}>
      <button 
        onClick={onClick}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 'var(--space-4) 0',
          background: 'none',
          border: 'none',
          textAlign: 'left',
          cursor: 'pointer',
          color: 'var(--color-ink)',
          fontSize: 'var(--text-lg)',
          fontWeight: 'var(--font-medium)',
        }}
      >
        <span>{question}</span>
        <span style={{ 
          color: 'var(--color-brass)', 
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
          transition: 'transform 0.2s ease',
          fontSize: 'var(--text-2xl)'
        }}>
          +
        </span>
      </button>
      
      <div style={{
        maxHeight: isOpen ? '1000px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease',
      }}>
        <p style={{ 
          paddingBottom: 'var(--space-6)',
          color: 'var(--text-main)',
          lineHeight: 'var(--lh-relaxed)'
        }}>
          {answer}
        </p>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: { question: string; answer: string }[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem 
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};
