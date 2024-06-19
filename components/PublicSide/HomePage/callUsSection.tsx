'use client';
import { Heading2 } from '@/components/General/typography';

export default function CallUsSection() {
   return (
      <div className='my-32 w-full md:me-40 md:flex md:flex-row'>
         <div className='bg-stone-300 py-20 md:basis-1/2 md:py-40 md:ps-40'>
            <Heading2 className='text-center'>We are here</Heading2>
         </div>
         <div className='my-20 self-center text-center md:my-0 md:basis-1/2'>
            <Heading2 className='mb-5 text-cyan-700'>Call Us Now</Heading2>
            <a
               className='border border-cyan-700 bg-cyan-700 px-5 py-3 text-white duration-200 hover:bg-white hover:text-cyan-700'
               href='tel:+989113373811'
            >
               +989113373811
            </a>
         </div>
      </div>
   );
}
