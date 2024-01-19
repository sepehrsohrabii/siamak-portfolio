import { Heading2, Paragraph1 } from '@/components/General/typography';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import image1 from '/images/Project 28-min.jpg';
import image2 from '/images/Project 27-min.jpg';
import image3 from '/images/Project 26-min.jpg';
import image4 from '/images/Project 12-min.jpg';
import image5 from '/images/Project 16-min.jpg';

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
                        src='/images/Project 28-min.jpg'
                        alt='Awards'
                        height={800}
                        width={800}
                     />
                  </div>
                  <div className=' overflow-hidden'>
                     <Image
                        className='h-56 w-full object-cover saturate-0 duration-500 hover:saturate-100'
                        src='/images/Project 27-min.jpg'
                        alt='Awards'
                        height={800}
                        width={800}
                     />
                  </div>
                  <div className=' overflow-hidden'>
                     <Image
                        className='h-56 w-full object-cover saturate-0 duration-500 hover:saturate-100'
                        src='/images/Project 26-min.jpg'
                        alt='Awards'
                        height={800}
                        width={800}
                     />
                  </div>
                  <div className=' col-span-2  overflow-hidden'>
                     <Image
                        className='h-56 w-full object-cover saturate-0 duration-500 hover:saturate-100'
                        src='/images/Project 12-min.jpg'
                        alt='Awards'
                        height={800}
                        width={800}
                     />
                  </div>
                  <div className=' overflow-hidden'>
                     <Image
                        className='h-56 w-full object-cover saturate-0 duration-500 hover:saturate-100'
                        src='/images/Project 16-min.jpg'
                        alt='Awards'
                        height={800}
                        width={800}
                     />
                  </div>
               </div>
            </motion.div>
            <motion.div className='mt-10 self-center md:mt-0 md:basis-2/5 md:ps-20'>
               <Heading2 className='text-gray-700'>About Graph</Heading2>

               <Paragraph1 className='mb-5 mt-5 text-justify text-gray-600	'>
                  Welcome to Graph, where architectural dreams find their visual
                  manifestation. At Graph, we are more than architects; we are
                  storytellers who weave narratives through every line, curve,
                  and space. Our commitment extends beyond concept creation to
                  the precise execution of every detail. Graph is a testament to
                  the fusion of creativity and functionality, where we transform
                  ideas into tangible, livable art. With a passion for
                  precision, we delve into the intricate dance between form and
                  function, ensuring that each project is a masterpiece in its
                  own right. Join us on a journey where architecture meets
                  innovation, and let Graph be the curator of your spatial
                  experiences.
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
