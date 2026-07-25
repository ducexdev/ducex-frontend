import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '../context/AuthContext';
import { ConditionalLayoutWrapper } from '../components/layout/ConditionalLayoutWrapper';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ducex Solicitors',
  description: 'Premium legal advisory and client portal for Ducex Solicitors.',
};

import { CookieConsent } from '../components/widgets/CookieConsent';
import { WhatsAppButton } from '../components/widgets/WhatsAppButton';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <AuthProvider>
          <ConditionalLayoutWrapper>
            {children}
          </ConditionalLayoutWrapper>
        </AuthProvider>
        <CookieConsent />
        <WhatsAppButton />
      </body>
    </html>
  );
}
