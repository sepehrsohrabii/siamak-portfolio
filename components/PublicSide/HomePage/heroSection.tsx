import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import engineers from '@/public/animations/scroll-down.json';
import {
   Heading1,
   Heading5,
   Paragraph2,
} from '@/components/General/typography';

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
      <div className='flex h-screen w-full items-center justify-between overflow-hidden'>
         <div className='flex h-screen flex-initial items-center ps-40'>
            <motion.div
               className='w-30 absolute'
               variants={container}
               initial='hidden'
               animate='visible'
            >
               <motion.div
                  className='w-fit bg-cyan-700 px-3 py-1'
                  variants={item}
               >
                  <Heading5 className='w-fit uppercase text-white'>
                     Explore the most beautiful
                  </Heading5>
               </motion.div>
               <motion.div className='w-fit' variants={item}>
                  <Heading1 className='w-fit text-gray-800'>
                     Explore Old
                     <br className='hidden md:inline' />
                     Classic Building
                  </Heading1>
               </motion.div>
               <motion.div className='mt-10 w-1/4 ' variants={item}>
                  <Paragraph2 className='text-gray-600'>
                     buildings in the world Lorem ipsum dolor, sit amet
                     consectetur adipisicing elit. Vitae, labore quod veritatis
                     explicabo maiores consectetur. Suscipit dolor, ex nemo
                     aperiam reprehenderit ea non doloribus velit quidem omnis
                     labore, enim soluta?
                  </Paragraph2>
               </motion.div>
               <motion.div className='absolute -bottom-36 w-20'>
                  <Lottie animationData={engineers} loop={true} />
               </motion.div>
            </motion.div>
         </div>
         <motion.div
            initial={{ width: '100%' }}
            animate={{ width: '60%' }}
            transition={{ duration: 0.5 }}
            className='z-0 h-screen w-3/5 flex-initial saturate-0 duration-500 hover:saturate-100'
         >
            <div className="h-full w-full bg-[url('/images/01.jpg')] bg-cover bg-center bg-no-repeat">
               {/* <div className='z-2 absolute bottom-20 left-20 w-80 border-b-2 border-l-2 pb-5 pl-5'>
                  <Heading6 className='font-bold'>felan</Heading6>
                  <p>
                     Lorem ipsum dolor sit amet consectetur
                     <br className='hidden md:inline' />
                     adipisicing elit Quisquamvoluptatibus.
                  </p>
               </div> */}
            </div>
         </motion.div>
      </div>
   );
}
