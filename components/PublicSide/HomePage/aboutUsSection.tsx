import { Heading2, Paragraph1 } from '@/components/General/typography';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import image1 from '@/public/images/8.jpg';
import image2 from '@/public/images/8.jpg';
import image3 from '@/public/images/8.jpg';
import image4 from '@/public/images/8.jpg';
import image5 from '@/public/images/8.jpg';

export default function AboutUsSection() {
   const container = useRef(null);
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start end', 'end end'],
   });
   return (
      <div className='mx-5 mb-36 md:mx-40'>
         <motion.div
            ref={container}
            className='w-full md:flex md:flex-row'
            style={{ opacity: scrollYProgress }}
         >
            <motion.div className='md:basis-3/5'>
               <div className='grid grid-cols-3 gap-1 md:gap-4'>
                  <div className=' overflow-hidden'>
                     <Image
                        className='h-56 w-full object-cover saturate-0 duration-500 hover:saturate-100'
                        src={image1}
                        alt='Awards'
                        height={224}
                        width={324}
                     />
                  </div>
                  <div className=' overflow-hidden'>
                     <Image
                        className='h-56 w-full object-cover saturate-0 duration-500 hover:saturate-100'
                        src={image2}
                        alt='Awards'
                        height={224}
                        width={324}
                     />
                  </div>
                  <div className=' overflow-hidden'>
                     <Image
                        className='h-56 w-full object-cover saturate-0 duration-500 hover:saturate-100'
                        src={image3}
                        alt='Awards'
                        height={224}
                        width={324}
                     />
                  </div>
                  <div className=' col-span-2  overflow-hidden'>
                     <Image
                        className='h-56 w-full object-cover saturate-0 duration-500 hover:saturate-100'
                        src={image4}
                        alt='Awards'
                        height={224}
                        width={324}
                     />
                  </div>
                  <div className=' overflow-hidden'>
                     <Image
                        className='h-56 w-full object-cover saturate-0 duration-500 hover:saturate-100'
                        src={image5}
                        alt='Awards'
                        height={224}
                        width={324}
                     />
                  </div>
               </div>
            </motion.div>
            <motion.div className='mt-10 self-center md:mt-0 md:basis-2/5 md:ps-20'>
               <Heading2 className='text-gray-700'>About Graph</Heading2>

               <Paragraph1 className='mb-5 mt-5 text-justify text-gray-600	'>
                  buildings in the world Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Vitae, labore quod veritatis explicabo
                  maiores consectetur. Suscipit dolor, ex nemo aperiam
                  reprehenderit ea non doloribus velit quidem omnis labore, enim
                  soluta?
               </Paragraph1>

               <div className='mt-10'>
                  <Paragraph1 className=''>
                     <Link
                        className='bg-cyan-700 px-4 py-1 text-white duration-500 hover:bg-cyan-900'
                        href='/about'
                     >
                        Read More
                     </Link>
                  </Paragraph1>
               </div>
            </motion.div>
         </motion.div>
      </div>
   );
}
