import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import {
   Heading3,
   Paragraph1,
   Paragraph2,
   Paragraph3,
} from '../General/typography';

export default function Footer() {
   const container = useRef(null);
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start end', 'end end'],
   });
   const links = [
      { name: 'Home', path: '/' },
      { name: 'Our Projects', path: '/projects' },
      { name: 'Our Awards', path: '/awards' },
      { name: 'About Us', path: '/about' },
      { name: 'Contact Us', path: '/contact' },
   ];
   return (
      <motion.footer
         className='mx-5 mt-36 md:mx-40'
         ref={container}
         style={{ opacity: scrollYProgress }}
      >
         <div className='justify-between md:flex md:flex-row'>
            <div className='md:basis-1/4'>
               <Heading3 className='text-4xl'>Graph Studio</Heading3>
            </div>
            <div className='mt-5 justify-between md:mt-0 md:flex md:basis-2/4 md:flex-row md:text-right'>
               {links.map((link, index) => (
                  <div key={index}>
                     <Link href={link.path} target='_blank'>
                        <Paragraph2 className='text-gray-500'>
                           {link.name}
                        </Paragraph2>
                     </Link>
                  </div>
               ))}
            </div>
         </div>
         <div className='mt-5 items-end justify-between md:mt-10 md:flex md:flex-row'>
            <div className='md:basis-1/4'>
               <Paragraph2 className='w-full text-gray-700'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                  sunt? Laboriosam esse cumque, nesciunt exercitationem
                  asperiores, repellat minima natus a, consequatur nihil odio
                  delectus rem dolor laudantium eligendi animi modi.
               </Paragraph2>
            </div>
            <div className='md:basis-1/4'></div>

            <div className='align-self-center md:basis-2/4 md:text-right'>
               <div className='mt-5 md:mt-0'>
                  <Link href='mailto:' target='_blank'>
                     <Paragraph2 className='text-gray-500'>
                        +989113373811
                     </Paragraph2>
                  </Link>
               </div>
               <div className=''>
                  <Link href='mailto:' target='_blank'>
                     <Paragraph2 className='text-gray-500'>
                        siamak@gmail.com
                     </Paragraph2>
                  </Link>
               </div>
               <div className='mb-5'>
                  <Link href='#' target='_blank'>
                     <Paragraph2 className='text-gray-500'>
                        Rasht, Iran
                     </Paragraph2>
                  </Link>
               </div>
               <span className='text-lg'>Follow us on </span>
               <Link href='https://instagram.com/'>
                  <Paragraph1 className='inline text-gray-500'>
                     Instagram,
                  </Paragraph1>
               </Link>
               <Link href='https://instagram.com/'>
                  <Paragraph1 className='inline text-gray-500'>
                     Youtube
                  </Paragraph1>
               </Link>
               <span className='text-lg'>, and </span>

               <Link href='https://instagram.com/'>
                  <Paragraph1 className='inline text-gray-500'>
                     Linkedin
                  </Paragraph1>
               </Link>
            </div>
         </div>
         <div className='mt-5 items-end justify-between border-t border-black pb-10 pt-4 md:mt-10 md:flex md:flex-row md:pb-20'>
            <div className='basis-1/4'>
               <Paragraph3 className='w-full text-gray-500'>
                  @2023 Graph Studio All Rights Reserved.
               </Paragraph3>
            </div>
            <div className='basis-1/4'>
               <Paragraph3 className='w-full text-gray-500 md:text-right'>
                  Design and Developed by Sepehr.
               </Paragraph3>
            </div>
         </div>
      </motion.footer>
   );
}
