import Lottie from 'lottie-react';
import line from '../../public/animations/line.json';

export default function ServicesSection() {
   return (
      <div className='mx-40 my-32'>
         <div className='flex w-full flex-row justify-center'>
            <div className='w-1/4 text-center'>
               <h2 className='text-center text-6xl font-thin text-gray-700'>
                  Our Services
               </h2>
               <p className='mb-5'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam voluptatibus, voluptate.
               </p>
               <Lottie animationData={line} loop={true} />
            </div>
         </div>
         <div className='mt-10 flex w-full flex-row justify-between'>
            <div className='basis-1/4 text-center'>
               <img
                  className='mx-auto mb-5 w-20'
                  src='/icons/services1.png'
                  alt='services'
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
               <img
                  className='mx-auto mb-5 w-20'
                  src='/icons/services2.png'
                  alt='services'
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
               <img
                  className='mx-auto mb-5 w-20'
                  src='/icons/services5.png'
                  alt='services'
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
         <div className='mt-10 flex w-full flex-row justify-around'>
            <div className='basis-1/4 text-center'>
               <img
                  className='mx-auto mb-5 w-20'
                  src='/icons/services6.png'
                  alt='services'
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
               <img
                  className='mx-auto mb-5 w-20'
                  src='/icons/services4.png'
                  alt='services'
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
