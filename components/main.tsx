'use client';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import SmoothScroll from './General/smoothScroll';

const MainContainer = ({ children }: { children: React.ReactNode }) => {
   const controls = useAnimation();

   useEffect(() => {
      const handleScroll = () => {
         // Adjust the value as needed
         const scrollY = window.scrollY;

         controls.start({
            opacity: 1 - scrollY / 500,
            y: scrollY / 2,
         });
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, [controls]);
   return (
      <>
         <Header />
         <main className='min-h-screen'>{children}</main>
         <Footer />
      </>
   );
};
export default MainContainer;
