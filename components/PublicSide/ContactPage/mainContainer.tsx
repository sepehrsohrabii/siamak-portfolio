'use client';
import {
   Heading1,
   Heading3,
   Heading4,
   Paragraph1,
} from '@/components/General/typography';
import LocationMap from '@/components/PublicSide/ContactPage/LocationMap';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import phoneCallIcon from '@/public/icons/phone-call.png';
import gmailIcon from '@/public/icons/gmail.png';
import addressIcon from '@/public/icons/address.png';
import instaIcon from '@/public/icons/instagram.png';
import telegramIcon from '@/public/icons/telegram.png';
import whatsAppIcon from '@/public/icons/whatsapp.png';

const ContactPageMainContainer = () => {
   return (
      <>
         {typeof window !== 'undefined' && (
            <>
               <motion.div className='ms-5 items-center pt-32 md:ms-40 md:flex'>
                  <motion.div
                     initial={{ x: -200 }}
                     animate={{ x: 0 }}
                     transition={{ duration: 1 }}
                     className='basis-1/2'
                  >
                     <Heading1 className='text-gray-800'>Get in touch</Heading1>
                     <motion.div
                        initial={{ x: -200 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1 }}
                        className=''
                     >
                        <Heading4 className='text-gray-700'>
                           In the below you can find our contact information.
                        </Heading4>
                     </motion.div>
                     <div className='mt-7 md:mt-16'>
                        <div className='md:flex md:justify-between md:pe-36'>
                           <div className='mt-10 md:mt-0'>
                              <Link
                                 href='tel:+989113373811'
                                 className='items-center md:flex md:flex-col'
                              >
                                 <Image
                                    className='w-10 md:w-14'
                                    src={phoneCallIcon}
                                    alt='Phone Icon'
                                    width={64}
                                    height={64}
                                 />
                                 <Paragraph1 className='mt-2 text-gray-700 md:mt-5'>
                                    +989113373811
                                 </Paragraph1>
                              </Link>
                           </div>
                           <div className='mt-10 md:mt-0'>
                              <Link
                                 href='mailto:grapharch.design@gmail.com'
                                 className='items-center md:flex md:flex-col'
                              >
                                 <Image
                                    className='w-10 md:w-14'
                                    src={gmailIcon}
                                    alt='Gmail Icon'
                                    width={64}
                                    height={64}
                                 />
                                 <Paragraph1 className='mt-2 text-gray-700 md:mt-5'>
                                    grapharch.design@gmail.com
                                 </Paragraph1>
                              </Link>
                           </div>
                           <div className='mt-10 md:mt-0'>
                              <Link
                                 href='https://maps.app.goo.gl/u7VUwzBvp5QREhxL6'
                                 className='items-center md:flex md:flex-col'
                              >
                                 <Image
                                    className='w-10 md:w-14'
                                    src={addressIcon}
                                    alt='Address Icon'
                                    width={64}
                                    height={64}
                                 />
                                 <Paragraph1 className='mt-2 text-gray-700 md:mt-5 md:text-center'>
                                    Korosh Building,
                                    <br />
                                    Taleghani Street,
                                    <br />
                                    Moalem Phase 2,
                                    <br />
                                    Rasht, Iran
                                 </Paragraph1>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </motion.div>
                  <motion.div
                     initial={{ x: +200 }}
                     animate={{ x: 0 }}
                     transition={{ duration: 1 }}
                     className='mt-10 basis-1/2 md:mt-0'
                  >
                     <LocationMap />
                  </motion.div>
               </motion.div>
               <motion.div className='my-20 items-center bg-stone-300 px-5 py-20 md:px-40'>
                  <div className='justify-between md:flex'>
                     <Heading3 className='self-center text-center text-gray-700 md:text-left'>
                        Social Media
                     </Heading3>
                     <div className='mt-5 md:mt-0'>
                        <Link
                           href='https://www.instagram.com/graph.architecture.studio/'
                           className='flex flex-col items-center'
                        >
                           <Image
                              src={instaIcon}
                              alt='Instagram Icon'
                              width={40}
                              height={40}
                           />
                           <Paragraph1 className='mt-2 text-gray-700 md:mt-5'>
                              @graph.architecture.studio
                           </Paragraph1>
                        </Link>
                     </div>
                     <div className='mt-5 md:mt-0'>
                        <Link
                           href='https://t.me/Siamakmhe'
                           className='flex flex-col items-center'
                        >
                           <Image
                              src={telegramIcon}
                              alt='Telegram Icon'
                              width={40}
                              height={40}
                           />
                           <Paragraph1 className='mt-2 text-gray-700 md:mt-5'>
                              +989113373811
                           </Paragraph1>
                        </Link>
                     </div>
                     <div className='mt-5 md:mt-0'>
                        <Link
                           href='https://wa.me/+989113373811'
                           className='flex flex-col items-center'
                        >
                           <Image
                              src={whatsAppIcon}
                              alt='Whatsapp Icon'
                              width={40}
                              height={40}
                           />
                           <Paragraph1 className='mt-2 text-gray-700 md:mt-5'>
                              +989113373811
                           </Paragraph1>
                        </Link>
                     </div>
                  </div>
               </motion.div>
            </>
         )}
      </>
   );
};
export default ContactPageMainContainer;
