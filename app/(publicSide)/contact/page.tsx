'use client';
import LocationMap from '@/components/PublicSide/ContactPage/LocationMap';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
   return (
      <>
         <motion.div className='ms-40 flex items-center pt-32'>
            <motion.div
               initial={{ x: -200 }}
               animate={{ x: 0 }}
               transition={{ duration: 1 }}
               className='basis-1/2'
            >
               <h2 className='text-8xl font-thin text-gray-700'>
                  Get in touch
               </h2>
               <motion.h5
                  initial={{ x: -200 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                  className='text-3xl font-thin'
               >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </motion.h5>
               <div className='mt-16'>
                  <div className='flex justify-between pe-36'>
                     <a href='#' className='flex flex-col items-center'>
                        <img
                           src='/icons/phone-call.png'
                           alt='Phone Icon'
                           className='h-16 w-16'
                        />
                        <h6 className='mt-5 text-xl font-normal text-gray-700'>
                           +989113332222
                        </h6>
                     </a>
                     <a href='#' className='flex flex-col items-center'>
                        <img
                           src='/icons/gmail.png'
                           alt='Phone Icon'
                           className='h-16 w-16'
                        />
                        <h6 className='mt-5 text-xl font-normal text-gray-700'>
                           graph@gmail.com
                        </h6>
                     </a>
                     <a href='#' className='flex flex-col items-center'>
                        <img
                           src='/icons/address.png'
                           alt='Phone Icon'
                           className='h-16 w-16'
                        />
                        <h6 className='mt-5 text-xl font-normal text-gray-700'>
                           graph@gmail.com
                        </h6>
                     </a>
                  </div>
               </div>
            </motion.div>
            <motion.div
               initial={{ x: +200 }}
               animate={{ x: 0 }}
               transition={{ duration: 1 }}
               className='basis-1/2'
            >
               <LocationMap />
            </motion.div>
         </motion.div>
         <motion.div className='my-20 items-center bg-stone-300 px-40 py-20'>
            <div className='flex justify-between'>
               <h6 className='self-center text-5xl font-thin text-gray-700'>
                  Social Media
               </h6>
               <a href='#' className='flex flex-col items-center'>
                  <img
                     src='/icons/instagram.png'
                     alt='Phone Icon'
                     className='h-10 w-10'
                  />
                  <h6 className='mt-5 text-xl font-normal text-gray-700'>
                     graph@gmail.com
                  </h6>
               </a>
               <a href='#' className='flex flex-col items-center'>
                  <img
                     src='/icons/telegram.png'
                     alt='Phone Icon'
                     className='h-10 w-10'
                  />
                  <h6 className='mt-5 text-xl font-normal text-gray-700'>
                     graph@gmail.com
                  </h6>
               </a>
               <a href='#' className='flex flex-col items-center'>
                  <img
                     src='/icons/whatsapp.png'
                     alt='Phone Icon'
                     className='h-10 w-10'
                  />
                  <h6 className='mt-5 text-xl font-normal text-gray-700'>
                     graph@gmail.com
                  </h6>
               </a>
            </div>
         </motion.div>
      </>
   );
};
export default ContactPage;
