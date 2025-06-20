'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Analytics } from '@vercel/analytics/next';
import { SessionProvider } from 'next-auth/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <div id="navbar">
        <Navbar />
      </div>
      <div id="main">{children}</div>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </SessionProvider>
  );
}
