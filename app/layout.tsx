import type { Metadata } from 'next';
import './globals.css';
import { roboto_c } from '@/components/fonts';
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata: Metadata = {
   title: {
      template: '%s | Graph Studio',
      default: 'Graph Studio',
   },
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
         <GoogleTagManager gtmId='G-5EH55E00Q9' />
      </html>
   );
}
