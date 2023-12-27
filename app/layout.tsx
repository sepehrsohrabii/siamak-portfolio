import type { Metadata } from 'next';
import './globals.css';
import { roboto_c } from '@/components/fonts';

export const metadata: Metadata = {
   title: 'Graph Studio',
   description: 'Graph Architecture Studio Website',
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang='en' className='scroll-smooth'>
         <body className={roboto_c.className}>{children}</body>
      </html>
   );
}
