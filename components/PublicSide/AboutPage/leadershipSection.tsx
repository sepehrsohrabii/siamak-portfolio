import {
   Heading2,
   Heading3,
   Heading4,
   Paragraph2,
} from '@/components/General/typography';
import { motion } from 'framer-motion';
import Image from 'next/image';
import phoneIcon from '@/public/icons/phone-solid.svg';
import emailIcon from '@/public/icons/envelope-solid.svg';
import instagramIcon from '@/public/icons/instagram.svg';
import telegramIcon from '@/public/icons/telegram.svg';
import whatsAppIcon from '@/public/icons/whatsapp.svg';

const LeadershipSection: React.FC = () => {
   return (
      <div className='my-10 w-full bg-stone-300 px-5 py-20 md:my-20 md:flex md:flex-row md:px-40'>
         <div className='basis-1/5 self-center'>
            <motion.div
               initial={{ x: -200 }}
               animate={{ x: 0 }}
               transition={{ duration: 1 }}
               className='mb-10 md:mb-0'
            >
               <Heading3 className='uppercase text-gray-700'>
                  Meet Our
                  <br />
                  Leadership
               </Heading3>
            </motion.div>
         </div>
         <motion.div className='group relative basis-2/5 self-center duration-500 md:flex'>
            <div className='relative h-64 w-full overflow-hidden md:w-52'>
               {/* Default Image */}
               <Image
                  className='h-full w-full transform object-cover saturate-0 transition-transform duration-500 hover:scale-110'
                  src='/images/Siamak.jpg'
                  alt='Siamak Mortaz Hejri Image'
                  width={400}
                  height={400}
               />

               {/* Hover Image */}
               <Image
                  className='absolute left-0 top-0 h-full w-full transform object-cover opacity-0 transition-opacity duration-500 hover:opacity-100 hover:saturate-100'
                  src='/images/Siamak.jpg'
                  alt='Siamak Mortaz Hejri Hover Image'
                  width={400}
                  height={400}
               />
            </div>
            <div className='mt-5 self-center md:mt-0 md:ps-5'>
               <Heading2 className=''>Siamak</Heading2>
               <Heading4 className='ms-10 md:ms-20'>Mortaz Hejri</Heading4>
               <Paragraph2 className='mt-5 text-gray-500 md:mt-10'>
                  Co-Founder / Architecture
               </Paragraph2>
               <div className='mt-5 flex md:mt-10'>
                  <a href='tel:+989113373811' className='me-5'>
                     <Image
                        src={phoneIcon}
                        className='opacity-80 saturate-0'
                        width={20}
                        height={20}
                        alt='phone icon'
                     />
                  </a>
                  <a href='mailto:siamakm.hejri@gmail.com' className='me-5'>
                     <Image
                        src={emailIcon}
                        className='opacity-80 saturate-0'
                        width={20}
                        height={20}
                        alt='email icon'
                     />
                  </a>
                  <a href='#' className='me-5'>
                     <Image
                        src={instagramIcon}
                        className='opacity-80 saturate-0'
                        width={20}
                        height={20}
                        alt='instagram icon'
                     />
                  </a>
                  <a href='#' className='me-5'>
                     <Image
                        src={telegramIcon}
                        className='opacity-80 saturate-0'
                        width={20}
                        height={20}
                        alt='telegram icon'
                     />
                  </a>
                  <a href='#' className='me-5'>
                     <Image
                        src={whatsAppIcon}
                        className='opacity-80 saturate-0'
                        width={20}
                        height={20}
                        alt='whatsapp icon'
                     />
                  </a>
               </div>
            </div>
         </motion.div>
         <motion.div className='group relative mt-20 basis-2/5 self-center duration-500 md:mt-0 md:flex'>
            <div className='relative h-64 w-full overflow-hidden md:w-52'>
               {/* Default Image */}
               <Image
                  className='h-full w-full transform object-cover saturate-0 transition-transform duration-500 hover:scale-110'
                  src='/images/Maryam.jpg'
                  alt='Default'
                  width={400}
                  height={400}
               />

               {/* Hover Image */}
               <Image
                  className='absolute left-0 top-0 h-full w-full transform object-cover opacity-0 transition-opacity duration-500 hover:opacity-100 hover:saturate-100'
                  src='/images/Maryam.jpg'
                  alt='Hover'
                  width={400}
                  height={400}
               />
            </div>
            <div className='mt-5 self-center md:mt-0 md:ps-5'>
               <Heading2 className=''>Maryam</Heading2>
               <Heading4 className='ms-10 md:ms-20'>KhoshAndam</Heading4>
               <Paragraph2 className='mt-5 text-gray-500 md:mt-10'>
                  Co-Founder / Architecture
               </Paragraph2>
               <div className='mt-5 flex md:mt-10'>
                  <a href='tel:+989112362719' className='me-5'>
                     <Image
                        src={phoneIcon}
                        className='opacity-80 saturate-0'
                        width={20}
                        height={20}
                        alt='phone icon'
                     />
                  </a>
                  <a href='mailto:maryam.ka22@gmail.com' className='me-5'>
                     <Image
                        src={emailIcon}
                        className='opacity-80 saturate-0'
                        width={20}
                        height={20}
                        alt='email icon'
                     />
                  </a>
                  <a href='#' className='me-5'>
                     <Image
                        src={instagramIcon}
                        className='opacity-80 saturate-0'
                        width={20}
                        height={20}
                        alt='instagram icon'
                     />
                  </a>
                  <a href='#' className='me-5'>
                     <Image
                        src={telegramIcon}
                        className='opacity-80 saturate-0'
                        width={20}
                        height={20}
                        alt='telegram icon'
                     />
                  </a>
                  <a href='#' className='me-5'>
                     <Image
                        src={whatsAppIcon}
                        className='opacity-80 saturate-0'
                        width={20}
                        height={20}
                        alt='whatsapp icon'
                     />
                  </a>
               </div>
            </div>
         </motion.div>
      </div>
   );
};
export default LeadershipSection;
