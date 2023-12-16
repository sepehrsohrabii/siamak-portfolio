'use client';
import LeadershipSection from '@/components/AboutPage/leadershipSection';
import MissionSection from '@/components/AboutPage/ourMissionSection';
import SloganSection from '@/components/AboutPage/sloganSection';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
   return (
      <>
         <motion.div className='mx-40 pt-40'>
            <motion.h3
               initial={{ x: -200 }}
               animate={{ x: 0 }}
               transition={{ duration: 1 }}
               className='text-5xl font-thin'
            >
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Recusandae id maxime optio minus ut mollitia quis. Ex commodi
               nulla perferendis quibusdam quo perspiciatis atque nesciunt
               minima debitis exercitationem. Possimus, magni.
            </motion.h3>
         </motion.div>
         <motion.div className='mt-20 bg-stone-300'>
            <SloganSection />
         </motion.div>
         <motion.div className='mx-40 mt-20'>
            <h2 className='text-6xl font-thin'>Why you should choose Graph?</h2>
            <motion.p
               initial={{ x: -200 }}
               animate={{ x: 0 }}
               transition={{ duration: 1 }}
               className='mt-10 text-2xl font-normal text-gray-700'
            >
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Recusandae id maxime optio minus ut mollitia quis. Ex commodi
               nulla perferendis quibusdam quo perspiciatis atque nesciunt
               minima debitis exercitationem. Possimus, magni. Lorem ipsum dolor
               sit amet consectetur adipisicing elit. Recusandae id maxime optio
               minus ut mollitia quis. Ex commodi nulla perferendis quibusdam
               quo perspiciatis atque nesciunt minima debitis exercitationem.
               Possimus, magni.
            </motion.p>
         </motion.div>
         <LeadershipSection />
      </>
   );
};
export default AboutPage;
