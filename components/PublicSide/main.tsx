'use client';
import Header from '@/components/PublicSide/header';
import Footer from '@/components/PublicSide/footer';
import { Suspense, useEffect, useState } from 'react';
import Loading from '@/app/loading';

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
