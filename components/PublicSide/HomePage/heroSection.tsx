import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import engineers from '@/public/animations/scroll-down.json';
import {
   Heading1,
   Heading5,
   Paragraph2,
} from '@/components/General/typography';
import Image from 'next/image';
import pic from '@/public/images/01.jpg';

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
      <div className='w-full items-center justify-between overflow-hidden md:flex md:h-screen'>
         <motion.div
            // initial={{ width: '100%' }}
            // animate={{ width: '60%' }}
            transition={{ duration: 0.5 }}
            className='z-0 h-[600px] w-full pe-10 saturate-0 duration-500 hover:saturate-100 md:static md:h-screen md:w-3/5 md:basis-3/5 md:pe-0'
         >
            <Image
               src={pic}
               alt='Picture of the author'
               className='h-full w-full object-cover object-center'
            />
         </motion.div>
         <div className='flex flex-initial items-center p-6 md:basis-2/5 md:p-0'>
            <motion.div
               className='md:w-30 block md:absolute'
               variants={container}
               initial='hidden'
               animate='visible'
            >
               <motion.div
                  className='w-fit bg-cyan-700 px-3 py-1 md:-ms-20'
                  variants={item}
               >
                  <Heading5 className='w-fit uppercase text-white'>
                     Explore the most beautiful
                  </Heading5>
               </motion.div>
               <motion.div className='w-fit' variants={item}>
                  <Heading1 className='mt-2 w-fit text-gray-800 md:-ms-20'>
                     Explore Old
                     <br className='inline' />
                     <span className='md:ps-20'>Classic Building</span>
                  </Heading1>
               </motion.div>
               <motion.div
                  className='mt-5 w-full md:mt-10 md:pe-40 md:ps-20'
                  variants={item}
               >
                  <Paragraph2 className='text-gray-600'>
                     buildings in the world Lorem ipsum dolor, sit amet
                     consectetur adipisicing elit. Vitae, labore quod veritatis
                     explicabo maiores consectetur. Suscipit dolor, ex nemo
                     aperiam reprehenderit ea non doloribus velit quidem omnis
                     labore, enim soluta?
                  </Paragraph2>
               </motion.div>
               <motion.div className='absolute -bottom-36 w-16 md:-ms-10 md:w-20'>
                  <Lottie animationData={engineers} loop={true} />
               </motion.div>
            </motion.div>
         </div>
      </div>
   );
}
