import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { NotificationSystem } from '@/components/ui/notification';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LPA Sainte Anne - Lycée Professionnel Agricole de Nanoro',
  description: 'Formation d\'excellence en agriculture moderne au Burkina Faso',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
        <NotificationSystem />
      </body>
    </html>
  );
}