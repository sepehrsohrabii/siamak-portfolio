import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

export default function AboutUsSection() {
   const container = useRef(null);
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start end', 'end end'],
   });
   return (
      <div className='mx-40 mb-32'>
         <motion.div
            ref={container}
            className='flex w-full flex-row'
            style={{ opacity: scrollYProgress }}
         >
            <motion.div className='basis-1/2'>
               <div className='grid grid-cols-3 gap-4'>
                  <div className=' overflow-hidden'>
                     <img
                        className='h-56 w-full object-cover saturate-0 duration-500 hover:saturate-100'
                        src='/images/8.jpg'
                        alt='Awards'
                     />
                  </div>
                  <div className=' overflow-hidden'>
                     <img
                        className='h-56 w-full object-cover saturate-0 duration-500 hover:saturate-100'
                        src='/images/8.jpg'
                        alt='Awards'
                     />
                  </div>
                  <div className=' overflow-hidden'>
                     <img
                        className='h-56 w-full object-cover saturate-0 duration-500 hover:saturate-100'
                        src='/images/8.jpg'
                        alt='Awards'
                     />
                  </div>
                  <div className=' col-span-2  overflow-hidden'>
                     <img
                        className='h-56 w-full object-cover saturate-0 duration-500 hover:saturate-100'
                        src='/images/8.jpg'
                        alt='Awards'
                     />
                  </div>
                  <div className=' overflow-hidden'>
                     <img
                        className='h-56 w-full object-cover saturate-0 duration-500 hover:saturate-100'
                        src='/images/8.jpg'
                        alt='Awards'
                     />
                  </div>
               </div>
            </motion.div>
            <motion.div className='basis-1/2 self-center ps-20'>
               <h2 className='text-6xl font-thin text-gray-700'>About Graph</h2>

               <p className='mb-5 mt-5 text-gray-600'>
                  buildings in the world Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Vitae, labore quod veritatis explicabo
                  maiores consectetur. Suscipit dolor, ex nemo aperiam
                  reprehenderit ea non doloribus velit quidem omnis labore, enim
                  soluta?
               </p>

               <div className='mt-10'>
                  <a
                     className='bg-gray-700 px-4 py-1 text-lg text-white'
                     href='#'
                  >
                     More --{'>'}
                  </a>
               </div>
            </motion.div>
         </motion.div>
      </div>
   );
}
