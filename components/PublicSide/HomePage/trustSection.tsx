'use client';
import Lottie from 'lottie-react';

import { Heading2, Paragraph2 } from '@/components/General/typography';
import engineers from '@/public/animations/engineers.json';

export default function TrustSection() {
   return (
      <div className='-mt-52 md:mx-40'>
         <div className='md:flex md:flex-row'>
            <div className='relative w-full'>
               <Lottie animationData={engineers} loop={true} />
            </div>
            <div className='mt-10 px-5 md:absolute md:right-0 md:mr-40 md:mt-52 md:w-2/5 md:px-0 md:ps-20'>
               <Heading2 className='mb-5 text-gray-800'>
                  Trust Professionals
               </Heading2>
               <Paragraph2 className='text-gray w-full flex-wrap text-justify'>
                  Correct design is not only about meeting the needs of the
                  present but also anticipating the future, creating timeless
                  and enduring solutions. It is a language spoken through shapes
                  and spaces, resonating with both the intellect and the senses.
                  In essence, correct design is a journey of thoughtful
                  decisions, where each choice contributes to the creation of
                  environments that stand as testaments to the elegance of
                  purposeful, well-balanced design.
               </Paragraph2>
            </div>
         </div>
      </div>
   );
}
