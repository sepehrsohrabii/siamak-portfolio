import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import engineers from '../../public/animations/scroll-down.json';

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
               <motion.h3
                  className='w-fit bg-cyan-700 px-3 py-1'
                  variants={item}
               >
                  <span className='text-2xl uppercase text-white'>
                     Explore the most beautiful
                  </span>
               </motion.h3>
               <motion.h1
                  className='w-fit text-8xl font-thin text-gray-800'
                  variants={item}
               >
                  Explore Old
                  <br className='hidden md:inline' />
                  Classic Building
               </motion.h1>
               <motion.p className='mt-10 w-1/4 text-gray-600' variants={item}>
                  buildings in the world Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Vitae, labore quod veritatis explicabo
                  maiores consectetur. Suscipit dolor, ex nemo aperiam
                  reprehenderit ea non doloribus velit quidem omnis labore, enim
                  soluta?
               </motion.p>
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
               <div className='z-2 absolute bottom-20 left-20 w-80 border-b-2 border-l-2 pb-5 pl-5'>
                  <h3 className='font-bold'>felan</h3>
                  <p>
                     Lorem ipsum dolor sit amet consectetur
                     <br className='hidden md:inline' />
                     adipisicing elit Quisquamvoluptatibus.
                  </p>
               </div>
            </div>
         </motion.div>
      </div>
   );
}
