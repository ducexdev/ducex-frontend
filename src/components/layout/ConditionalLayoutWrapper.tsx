'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Header } from './Header';
import { Footer } from './Footer';

export const ConditionalLayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname() || '';
  
  const hideHeaderFooter = pathname.startsWith('/portal') || pathname.startsWith('/admin');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {!hideHeaderFooter && <Header />}
      <main style={{ flex: 1 }}>
        {children}
      </main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};
