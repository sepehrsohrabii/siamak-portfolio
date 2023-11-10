import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';
import { roboto_c } from '@/components/fonts';
import Footer from '@/components/footer';

export const metadata: Metadata = {
   title: 'Create Next App',
   description: 'Generated by create next app',
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang='en' className='scroll-smooth'>
         <body className={roboto_c.className}>
            <Header />
            <main className='min-h-screen'>{children}</main>
            <Footer />
         </body>
      </html>
   );
}
