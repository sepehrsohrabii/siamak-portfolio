'use client';
import { Suspense } from 'react';

import Loading from '@/app/loading';
import Footer from '@/components/PublicSide/footer';
import Header from '@/components/PublicSide/header';

const MainContainer = ({ children }: { children: React.ReactNode }) => {
   return (
      <Suspense fallback={<Loading />}>
         <Header />
         <main className='min-h-screen'>{children}</main>
         <Footer />
      </Suspense>
   );
};
export default MainContainer;
