'use client';
import Image from 'next/image';
import Link from 'next/link';

import { Heading2, Paragraph1 } from '@/components/General/typography';

export default function AboutUsSection() {
   return (
      <div className='mx-5 mb-36 md:mx-40'>
         <div className='w-full md:flex md:flex-row'>
            <div className='md:basis-3/5'>
               <div className='grid grid-cols-3 gap-1 md:gap-4'>
                  <div className=' overflow-hidden'>
                     <Image
                        className='h-56 w-full object-cover saturate-0 duration-500 hover:saturate-100'
                        src='/images/Project 28-min.jpg'
                        alt='Awards'
                        height={400}
                        width={400}
                     />
                  </div>
                  <div className=' overflow-hidden'>
                     <Image
                        className='h-56 w-full object-cover saturate-0 duration-500 hover:saturate-100'
                        src='/images/01B-min.jpg'
                        alt='Awards'
                        height={400}
                        width={400}
                     />
                  </div>
                  <div className=' overflow-hidden'>
                     <Image
                        className='h-56 w-full object-cover saturate-0 duration-500 hover:saturate-100'
                        src='/images/04-min.jpg'
                        alt='Awards'
                        height={400}
                        width={400}
                     />
                  </div>
                  <div className=' col-span-2  overflow-hidden'>
                     <Image
                        className='h-56 w-full object-cover saturate-0 duration-500 hover:saturate-100'
                        src='/images/Project 12-min.jpg'
                        alt='Awards'
                        height={400}
                        width={400}
                     />
                  </div>
                  <div className=' overflow-hidden'>
                     <Image
                        className='h-56 w-full object-cover saturate-0 duration-500 hover:saturate-100'
                        src='/images/jeld-min.jpg'
                        alt='Awards'
                        height={400}
                        width={400}
                     />
                  </div>
               </div>
            </div>
            <div className='mt-10 self-center md:mt-0 md:basis-2/5 md:ps-20'>
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
            </div>
         </div>
      </div>
   );
}
