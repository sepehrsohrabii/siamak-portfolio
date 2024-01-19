import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import engineers from '@/public/animations/scroll-down.json';
import {
   Heading1,
   Heading5,
   Heading6,
   Paragraph1,
   Paragraph2,
} from '@/components/General/typography';
import Image from 'next/image';
import Background from '@/components/General/bg';

export default function HeroSection() {
   const container = {
      hidden: { opacity: 1, scale: 0 },
      visible: {
         opacity: 1,
         scale: 1,
         transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
         },
      },
   };

   const item = {
      hidden: { y: 20, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
      },
   };
   return (
      <div className='flex w-full flex-col-reverse items-center justify-between overflow-hidden md:h-screen md:flex-row'>
         <Background />
         <div className='flex flex-initial items-center p-6 md:basis-2/5 md:ps-40'>
            <motion.div
               className='md:w-30 relative'
               variants={container}
               initial='hidden'
               animate='visible'
            >
               <motion.div className='w-fit' variants={item}>
                  <Heading1 className='mt-2 w-fit tracking-wide text-gray-800'>
                     We Design Your Dreams,
                  </Heading1>
               </motion.div>
               <motion.div
                  className='absolute right-0 w-fit bg-cyan-700 px-3 py-1'
                  variants={item}
               >
                  <Heading6 className='w-fit uppercase text-white'>
                     {/* Graph Architecture */}
                     By Building Your Reality
                  </Heading6>
               </motion.div>
               <motion.div
                  className='mt-10 w-full md:ms-0 md:mt-10 md:pe-0'
                  variants={item}
               >
                  <Paragraph2 className='text-justify text-gray-600'>
                     Correct design is the art of finding balance and harmony
                     between form and function. It is a meticulous process that
                     goes beyond aesthetics, delving into the intricate dance of
                     purpose and aesthetics. In the realm of correct design,
                     every line, curve, and element serves a purpose,
                     contributing to the overall functionality and visual appeal
                     of a space.
                  </Paragraph2>
               </motion.div>
               <motion.a
                  className='absolute -bottom-32 z-10 w-16 md:left-0 md:w-20'
                  href='#projects'
               >
                  <Lottie animationData={engineers} loop={true} />
               </motion.a>
            </motion.div>
         </div>
         <motion.div
            // initial={{ width: '100%' }}
            // animate={{ width: '60%' }}
            transition={{ duration: 0.5 }}
            className='z-0 h-[600px] w-full pe-10 saturate-0 duration-500 hover:saturate-100 md:static md:h-screen md:w-3/5 md:basis-3/5 md:pe-0'
         >
            <Image
               src='/images/01.jpg'
               alt='Picture of the author'
               className='h-full w-full object-cover object-center'
               width={800}
               height={800}
               priority
            />
         </motion.div>
      </div>
   );
}
