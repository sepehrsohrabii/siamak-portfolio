import Lottie from 'lottie-react';
import line from '@/public/animations/line.json';
import Image from 'next/image';

export default function MissionSection() {
   return (
      <div className='mx-40 my-32'>
         <div className='mt-10 flex w-full flex-row justify-between'>
            <div className='basis-1/4 text-center'>
               <h2 className='text-center text-6xl font-thin text-gray-700'>
                  Our Mission
               </h2>
               <p className='mb-5'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam voluptatibus, voluptate.
               </p>
               <Lottie animationData={line} loop={true} />
            </div>
            <div className='basis-1/4 text-center'>
               <Image
                  className='mx-auto mb-5 w-20'
                  src='/icons/services1.png'
                  alt='services'
                  width={100}
                  height={100}
               />
               <h5 className='text-center text-2xl font-bold text-gray-700'>
                  Our Services
               </h5>
               <p className='mb-5'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam voluptatibus, voluptate.
               </p>
            </div>
            <div className='basis-1/4 text-center'>
               <Image
                  className='mx-auto mb-5 w-20'
                  src='/icons/services2.png'
                  alt='services'
                  width={100}
                  height={100}
               />
               <h5 className='text-center text-2xl font-bold text-gray-700'>
                  Our Services
               </h5>
               <p className='mb-5'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam voluptatibus, voluptate.
               </p>
            </div>
            <div className='basis-1/4 text-center'>
               <Image
                  className='mx-auto mb-5 w-20'
                  src='/icons/services5.png'
                  alt='services'
                  width={100}
                  height={100}
               />
               <h5 className='text-center text-2xl font-bold text-gray-700'>
                  Our Services
               </h5>
               <p className='mb-5'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam voluptatibus, voluptate.
               </p>
            </div>
         </div>
      </div>
   );
}
