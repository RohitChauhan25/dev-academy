import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/providers/ThemeProvider';
import Navbar from '@/components/ui/layout/Navbar';
import { cn } from '@/lib/utils';
import Footer from '@/components/ui/layout/Footer';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://devacademy.vercel.app'), // Change after deployment

  title: {
    default: 'DevAcademy',
    template: '%s | DevAcademy',
  },

  description:
    'Learn Frontend, Backend, DevOps, and Full Stack Development with practical tutorials.',

  keywords: [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'DevOps',
    'Docker',
    'Programming',
    'Web Development',
  ],

  authors: [
    {
      name: 'Your Name',
    },
  ],

  creator: 'Your Name',

  openGraph: {
    title: 'DevAcademy',
    description: 'Learn Frontend, Backend, DevOps, and Full Stack Development.',
    siteName: 'DevAcademy',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'DevAcademy',
    description: 'Learn Frontend, Backend, DevOps, and Full Stack Development.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn('h-full', 'antialiased', geistMono.variable, 'font-sans', geist.variable)}
    >
      <body className="min-h-screen bg-background text-foreground font-sans">
        <ThemeProvider>
          <Navbar />

          <main className="px-4 lg:px-0 p-12">{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
