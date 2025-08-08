import NavTabs from '@/components/NavTabs/NavTabs';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'annbalias34@gmail.com',
  description: 'Test task by AnnBalias',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
  <html lang="en">
    <body>
      <header>
        <NavTabs />
      </header>
      {children}
      </body>
    </html>
  );
}