'use client';
import {
   Heading2,
   Heading3,
   Paragraph1,
} from '@/components/General/typography';
import LeadershipSection from '@/components/PublicSide/AboutPage/leadershipSection';
import SloganSection from '@/components/PublicSide/AboutPage/sloganSection';
import { motion } from 'framer-motion';
const AboutPageMainContainer = () => {
   return (
      <>
         <motion.div className='mx-5 pt-40 md:mx-40'>
            <motion.div
               initial={{ x: -200 }}
               animate={{ x: 0 }}
               transition={{ duration: 1 }}
               className=''
            >
               <Heading3 className='text-gray-800'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae id maxime optio minus ut mollitia quis. Ex commodi
                  nulla perferendis quibusdam quo perspiciatis atque nesciunt
                  minima debitis exercitationem. Possimus, magni.
               </Heading3>
            </motion.div>
         </motion.div>
         <motion.div className='mt-10 bg-stone-300 md:mt-20'>
            <SloganSection />
         </motion.div>
         <motion.div className='mx-5 mt-10 md:mx-40 md:mt-20'>
            <Heading2 className='text-gray-700'>
               Why you should choose Graph?
            </Heading2>
            <motion.div
               initial={{ x: -200 }}
               animate={{ x: 0 }}
               transition={{ duration: 1 }}
               className='mt-5'
            >
               <Paragraph1 className='text-gray-700'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae id maxime optio minus ut mollitia quis. Ex commodi
                  nulla perferendis quibusdam quo perspiciatis atque nesciunt
                  minima debitis exercitationem. Possimus, magni. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Recusandae id
                  maxime optio minus ut mollitia quis. Ex commodi nulla
                  perferendis quibusdam quo perspiciatis atque nesciunt minima
                  debitis exercitationem. Possimus, magni.
               </Paragraph1>
            </motion.div>
         </motion.div>
         <LeadershipSection />
      </>
   );
};
export default AboutPageMainContainer;
