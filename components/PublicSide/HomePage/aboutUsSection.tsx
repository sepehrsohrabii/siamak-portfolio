import { Heading2, Paragraph1 } from '@/components/General/typography';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
                     <Image
                        className='h-56 w-full object-cover saturate-0 duration-500 hover:saturate-100'
                        src='/images/8.jpg'
                        alt='Awards'
                        height={224}
                        width={324}
                     />
                  </div>
                  <div className=' overflow-hidden'>
                     <Image
                        className='h-56 w-full object-cover saturate-0 duration-500 hover:saturate-100'
                        src='/images/8.jpg'
                        alt='Awards'
                        height={224}
                        width={324}
                     />
                  </div>
                  <div className=' overflow-hidden'>
                     <Image
                        className='h-56 w-full object-cover saturate-0 duration-500 hover:saturate-100'
                        src='/images/8.jpg'
                        alt='Awards'
                        height={224}
                        width={324}
                     />
                  </div>
                  <div className=' col-span-2  overflow-hidden'>
                     <Image
                        className='h-56 w-full object-cover saturate-0 duration-500 hover:saturate-100'
                        src='/images/8.jpg'
                        alt='Awards'
                        height={224}
                        width={324}
                     />
                  </div>
                  <div className=' overflow-hidden'>
                     <Image
                        className='h-56 w-full object-cover saturate-0 duration-500 hover:saturate-100'
                        src='/images/8.jpg'
                        alt='Awards'
                        height={224}
                        width={324}
                     />
                  </div>
               </div>
            </motion.div>
            <motion.div className='basis-1/2 self-center ps-20'>
               <Heading2 className='text-gray-700'>About Graph</Heading2>

               <Paragraph1 className='mb-5 mt-5 text-gray-600'>
                  buildings in the world Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Vitae, labore quod veritatis explicabo
                  maiores consectetur. Suscipit dolor, ex nemo aperiam
                  reprehenderit ea non doloribus velit quidem omnis labore, enim
                  soluta?
               </Paragraph1>

               <div className='mt-10'>
                  <Link
                     className='bg-gray-700 px-4 py-1 text-lg text-white'
                     href='/about'
                  >
                     Read More
                  </Link>
               </div>
            </motion.div>
         </motion.div>
      </div>
   );
}
