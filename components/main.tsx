'use client';
import Header from '@/components/header';
import Footer from '@/components/footer';

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
