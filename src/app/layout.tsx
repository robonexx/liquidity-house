import type { Metadata } from 'next';
import { Josefin_Sans } from 'next/font/google';
import './globals.css';

const josefin = Josefin_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Liquidity House',
  description: '...',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={josefin.className}>{children}</body>
    </html>
  );
}
