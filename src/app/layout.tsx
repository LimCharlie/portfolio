import type { Metadata } from 'next';
import { OpenSans } from './fonts/font';
import './globals.css';

export const metadata: Metadata = {
  title: 'Charlie LIM',
  description: 'Portfolio de Charlie LIM',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fr' className='scroll-smooth'>
      <body className={OpenSans.variable}>{children}</body>
    </html>
  );
}
