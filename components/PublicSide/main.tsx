'use client';
import Header from '@/components/PublicSide/header';
import Footer from '@/components/PublicSide/footer';

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
