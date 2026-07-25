"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building2, MessageSquare, FileText } from 'lucide-react';

interface AttorneyCardProps {
  member: {
    id: string;
    name: string;
    role: string;
    image: string;
  };
}

export const AttorneyCard = ({ member }: AttorneyCardProps) => {
  return (
    <motion.div 
      whileHover="hover"
      initial="initial"
      style={{ 
        backgroundColor: 'var(--color-smoke)', 
        overflow: 'hidden', 
        textAlign: 'center', 
        borderRadius: 'var(--radius-lg)', 
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)', 
        cursor: 'pointer',
        position: 'relative' 
      }}
    >
      <div style={{ width: '100%', aspectRatio: '1/1', position: 'relative', overflow: 'hidden' }}>
        <motion.div
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.1 }
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        >
          <Image src={member.image} alt={member.name} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
        </motion.div>
        
        {/* Dark gradient overlay that slides up */}
        <motion.div
          variants={{
            initial: { opacity: 0, y: 20 },
            hover: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.4 }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '50%',
            background: 'linear-gradient(to top, rgba(21,25,31,0.9), transparent)',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingBottom: 'var(--space-4)'
          }}
        >
          <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
            <motion.a 
              whileHover={{ scale: 1.2, color: 'var(--color-white)' }}
              href="#" style={{ color: 'var(--color-brass)' }}
            >
              <Building2 size={20} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.2, color: 'var(--color-white)' }}
              href="#" style={{ color: 'var(--color-brass)' }}
            >
              <MessageSquare size={20} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.2, color: 'var(--color-white)' }}
              href="#" style={{ color: 'var(--color-brass)' }}
            >
              <FileText size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        variants={{
          initial: { y: 0 },
          hover: { y: -5 }
        }}
        style={{ padding: 'var(--space-6) var(--space-4)', position: 'relative', zIndex: 10, backgroundColor: 'var(--color-smoke)' }}
      >
        <h3 style={{ fontSize: 'var(--text-lg)', color: 'var(--color-ink)', marginBottom: 'var(--space-1)' }}>{member.name}</h3>
        <p style={{ color: 'var(--color-slate)', fontSize: 'var(--text-xs)', margin: 0 }}>{member.role}</p>
      </motion.div>
    </motion.div>
  );
};
