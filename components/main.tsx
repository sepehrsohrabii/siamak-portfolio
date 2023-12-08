'use client';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ScrollerMotion } from 'scroller-motion';

const MainContainer = ({ children }: { children: React.ReactNode }) => {
   return (
      <>
         <Header />
         <main className='min-h-screen'>{children}</main>
         <Footer />
      </>
   );
};
export default MainContainer;
