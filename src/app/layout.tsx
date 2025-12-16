import type { Metadata, Viewport } from 'next';
import { Source_Code_Pro } from 'next/font/google';
import './globals.css';

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-source-code-pro',
});

export const viewport: Viewport = {
  themeColor: '#000000',
};

export const metadata: Metadata = {
  title: 'Aidan Kirvan Portfolio Site',
  description: 'Personal site for Aidan Kirvan, Front End Developer.',
  openGraph: {
    title: 'Aidan Kirvan Portfolio Site',
    description: 'Personal site for Aidan Kirvan, Front End Developer.',
    url: 'https://aidankirvan.com',
    siteName: 'Aidan Kirvan Portfolio Site',
    images: [
      {
        url: 'https://res.cloudinary.com/djdozfiqv/image/upload/v1690100285/Aidan-DP_cofjwa.jpg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/logo192.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sourceCodePro.variable}>
      <body>{children}</body>
    </html>
  );
}
