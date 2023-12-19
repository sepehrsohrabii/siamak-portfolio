import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
   const container = useRef(null);
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start end', 'end end'],
   });
   return (
      <motion.footer
         className='mx-40'
         ref={container}
         style={{ opacity: scrollYProgress }}
      >
         <div className='flex flex-row justify-between'>
            <div className='basis-1/4'>
               <h2 className='text-4xl'>Graph Studio</h2>
            </div>
            <div className='flex basis-2/4 flex-row justify-between text-right'>
               <a className='text-lg text-gray-500' href='#' target='_blank'>
                  About Us
               </a>
               <a className='text-lg text-gray-500' href='#' target='_blank'>
                  Contact Us
               </a>
               <a className='text-lg text-gray-500' href='#' target='_blank'>
                  Our Projects
               </a>
               <a className='text-lg text-gray-500' href='#' target='_blank'>
                  Awards
               </a>
               <a className='text-lg text-gray-500' href='#' target='_blank'>
                  Privacy and Policy
               </a>
            </div>
         </div>
         <div className='mt-10 flex flex-row items-end justify-between'>
            <div className='basis-1/4'>
               <p className='w-full text-gray-700'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                  sunt? Laboriosam esse cumque, nesciunt exercitationem
                  asperiores, repellat minima natus a, consequatur nihil odio
                  delectus rem dolor laudantium eligendi animi modi.
               </p>
            </div>
            <div className='basis-1/4'></div>

            <div className='align-self-center basis-2/4 text-right'>
               <div className=''>
                  <a
                     className='text-lg text-gray-500'
                     href='mailto:'
                     target='_blank'
                  >
                     +989113373811
                  </a>
               </div>
               <div className=''>
                  <a
                     className='text-lg text-gray-500'
                     href='mailto:'
                     target='_blank'
                  >
                     siamak@gmail.com
                  </a>
               </div>
               <div className='mb-5'>
                  <a
                     className='text-lg text-gray-500'
                     href='mailto:'
                     target='_blank'
                  >
                     Rasht, Iran
                  </a>
               </div>
               <span className='text-xl'>Follow us on </span>
               <a
                  className='text-xl text-gray-500'
                  href='https://instagram.com/'
               >
                  Instagram,
               </a>
               <a
                  className='text-xl text-gray-500'
                  href='https://instagram.com/'
               >
                  Youtube, and{' '}
               </a>
               <a
                  className='text-xl text-gray-500'
                  href='https://instagram.com/'
               >
                  Linkedin
               </a>
            </div>
         </div>
         <div className='mt-10 flex flex-row items-end justify-between border-t border-black pb-20 pt-4'>
            <div className='basis-1/4'>
               <p className='w-full text-gray-700'>
                  @2023 Graph Studio All Rights Reserved.
               </p>
            </div>
            <div className='basis-1/4'>
               <p className='w-full text-right text-gray-700'>
                  Design and Developed by Sepehr.
               </p>
            </div>
         </div>
      </motion.footer>
   );
}
