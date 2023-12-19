import { motion } from 'framer-motion';

const LeadershipSection: React.FC = () => {
   return (
      <div className='my-20 flex w-full flex-row bg-stone-300 px-40 py-20'>
         <div className='basis-1/5 self-center'>
            <motion.h3
               initial={{ x: -200 }}
               animate={{ x: 0 }}
               transition={{ duration: 1 }}
               className='text-5xl font-thin uppercase text-gray-700'
            >
               Meet Our
               <br />
               Leadership
            </motion.h3>
         </div>
         <motion.div className='group relative flex basis-2/5 self-center duration-500'>
            <div className='relative h-96 w-80 overflow-hidden'>
               {/* Default Image */}
               <img
                  className='h-full w-full transform object-cover saturate-0 transition-transform duration-500 hover:scale-110'
                  src='/images/sample-man-1.jpg'
                  alt='Default'
               />

               {/* Hover Image */}
               <img
                  className='absolute left-0 top-0 h-full w-full transform object-cover opacity-0 transition-opacity duration-500 hover:opacity-100 hover:saturate-100'
                  src='/images/sample-man-2.jpg'
                  alt='Hover'
               />
            </div>
            <div className='self-center ps-5'>
               <h2 className='text-6xl font-thin'>Siamak</h2>
               <h4 className='ms-20 text-3xl font-thin'>Mortaz Hejri</h4>
               <p className='text-md mt-10 font-normal text-gray-500'>
                  Co-Founder / Architecture
               </p>
               <div className='mt-10 flex'>
                  <a href='#' className='me-5'>
                     <img
                        src='/icons/phone-solid.svg'
                        className='w-5 opacity-80 saturate-0'
                     />
                  </a>
                  <a href='#' className='me-5'>
                     <img
                        src='/icons/envelope-solid.svg'
                        className='w-5 opacity-80 saturate-0'
                     />
                  </a>
                  <a href='#' className='me-5'>
                     <img
                        src='/icons/instagram.svg'
                        className='w-5 opacity-80 saturate-0'
                     />
                  </a>
                  <a href='#' className='me-5'>
                     <img
                        src='/icons/telegram.svg'
                        className='w-5 opacity-80 saturate-0'
                     />
                  </a>
                  <a href='#' className='me-5'>
                     <img
                        src='/icons/whatsapp.svg'
                        className='w-5 opacity-80 saturate-0'
                     />
                  </a>
               </div>
            </div>
         </motion.div>
         <motion.div className='group relative flex basis-2/5 self-center duration-500'>
            <div className='relative h-96 w-80 overflow-hidden'>
               {/* Default Image */}
               <img
                  className='h-full w-full transform object-cover saturate-0 transition-transform duration-500 hover:scale-110'
                  src='/images/sample-girl-1.jpg'
                  alt='Default'
               />

               {/* Hover Image */}
               <img
                  className='absolute left-0 top-0 h-full w-full transform object-cover opacity-0 transition-opacity duration-500 hover:opacity-100 hover:saturate-100'
                  src='/images/sample-girl-2.jpg'
                  alt='Hover'
               />
            </div>
            <div className='self-center ps-5'>
               <h2 className='text-6xl font-thin'>Maryam</h2>
               <h4 className='ms-20 text-3xl font-thin'>KhoshAndam</h4>
               <p className='text-md mt-10 font-normal text-gray-500'>
                  Co-Founder / Architecture
               </p>
               <div className='mt-10 flex'>
                  <a href='#' className='me-5'>
                     <img
                        src='/icons/phone-solid.svg'
                        className='w-5 opacity-80 saturate-0'
                     />
                  </a>
                  <a href='#' className='me-5'>
                     <img
                        src='/icons/envelope-solid.svg'
                        className='w-5 opacity-80 saturate-0'
                     />
                  </a>
                  <a href='#' className='me-5'>
                     <img
                        src='/icons/instagram.svg'
                        className='w-5 opacity-80 saturate-0'
                     />
                  </a>
                  <a href='#' className='me-5'>
                     <img
                        src='/icons/telegram.svg'
                        className='w-5 opacity-80 saturate-0'
                     />
                  </a>
                  <a href='#' className='me-5'>
                     <img
                        src='/icons/whatsapp.svg'
                        className='w-5 opacity-80 saturate-0'
                     />
                  </a>
               </div>
            </div>
         </motion.div>
      </div>
   );
};
export default LeadershipSection;
