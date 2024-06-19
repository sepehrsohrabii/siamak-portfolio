'use client';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@/public/Logo.svg';

import { Paragraph1, Paragraph2, Paragraph3 } from '../General/typography';

export default function Footer() {
   const links = [
      { name: 'Home', path: '/' },
      { name: 'Our Projects', path: '/projects' },
      { name: 'Our Awards', path: '/awards' },
      { name: 'About Us', path: '/about' },
      { name: 'Contact Us', path: '/contact' },
   ];
   return (
      <footer className='mx-5 mt-36 md:mx-40'>
         <div className='items-center justify-between md:flex md:flex-row'>
            <div className='md:basis-1/4'>
               <Image
                  className='-ms-2'
                  width={150}
                  height={150}
                  src={logo}
                  alt='The Logo of Graph Studio'
                  priority
               />
            </div>
            <div className='mt-5 justify-between md:mt-0 md:flex md:basis-2/4 md:flex-row md:text-right'>
               {links.map((link, index) => (
                  <div key={index}>
                     <Link href={link.path} target='_blank'>
                        <Paragraph1 className='text-gray-500'>
                           {link.name}
                        </Paragraph1>
                     </Link>
                  </div>
               ))}
            </div>
         </div>
         <div className='mt-5 items-end justify-between md:mt-10 md:flex md:flex-row'>
            <div className='md:basis-1/4'>
               <Paragraph2 className='w-full text-justify text-gray-700'>
                  From the basic concept to the final execution, our commitment
                  is to turn your ideas into spaces that inspire. Join us in the
                  pursuit of architectural excellence and let Graph be the
                  conduit for transforming your aspirations into tangible,
                  beautifully crafted realities. Together, we build not just
                  structures, but legacies.
               </Paragraph2>
            </div>
            <div className='md:basis-1/4'></div>

            <div className='align-self-center md:basis-2/4 md:text-right'>
               <div className='mt-5 md:mt-0'>
                  <Link href='tel:+989113373811' target='_blank'>
                     <Paragraph2 className='text-gray-500'>
                        +989113373811
                     </Paragraph2>
                  </Link>
               </div>
               <div className='md:my-3'>
                  <Link
                     href='mailto:grapharch.design@gmail.com'
                     target='_blank'
                  >
                     <Paragraph2 className='text-gray-500'>
                        grapharch.design@gmail.com
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
               <Link href='https://www.instagram.com/graph.architecture.studio/'>
                  <Paragraph1 className='inline text-gray-500'>
                     Instagram,
                  </Paragraph1>
               </Link>
               <Link href='https://www.instagram.com/graph.architecture.studio/'>
                  <Paragraph1 className='inline text-gray-500'>
                     Youtube
                  </Paragraph1>
               </Link>
               <span className='text-lg'>, and </span>

               <Link href='https://www.instagram.com/graph.architecture.studio/'>
                  <Paragraph1 className='inline text-gray-500'>
                     Linkedin
                  </Paragraph1>
               </Link>
            </div>
         </div>
         <div className='mt-5 items-end justify-between border-t border-black pb-10 pt-4 md:mt-10 md:flex md:flex-row md:pb-20'>
            <div className='basis-1/4'>
               <Paragraph3 className='w-full text-gray-500'>
                  @2024 Graph Studio All Rights Reserved.
               </Paragraph3>
            </div>
            <div className='basis-1/4'>
               <Paragraph3 className='w-full text-gray-500 md:text-right'>
                  Design and Developed by
                  <Link href='https://www.linkedin.com/in/sepehrsohrabi/'>
                     {' '}
                     Sepehr
                  </Link>
                  .
               </Paragraph3>
            </div>
         </div>
      </footer>
   );
}
