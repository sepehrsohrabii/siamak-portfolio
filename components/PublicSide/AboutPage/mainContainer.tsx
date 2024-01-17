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
                  Graph Architecture Studio, founded by Siamak Mortaz Hejri and
                  Maryam Khoshandam, operates at the intersection of diverse
                  architectural and urban planning domains. Our studio
                  specializes in the design, supervision, and implementation of
                  projects spanning residential, commercial, office, cultural,
                  industrial, and interior decoration. Additionally, we actively
                  engage in urban projects, showcasing our versatility and
                  commitment to delivering excellence across a broad spectrum of
                  architectural endeavors.
               </Heading3>
            </motion.div>
         </motion.div>
         <motion.div className='mt-10 bg-stone-300 md:mt-20'>
            <SloganSection />
         </motion.div>
         <motion.div className='mx-5 mt-10 md:mx-40 md:mt-20'>
            <Heading2 className='text-gray-700'>About Us</Heading2>
            <motion.div
               initial={{ x: -200 }}
               animate={{ x: 0 }}
               transition={{ duration: 1 }}
               className='mt-5 flex flex-col md:flex-row'
            >
               <Paragraph1 className='text-justify text-gray-700 md:pe-10'>
                  <b>Siamak (Mohamad) Mortaz Hejri</b>, born in 1992 in Rasht,
                  holds a bachelor’s degree in architecture from Guilan
                  University and a master’s degree in architecture with a focus
                  on residential design from Iran University of Science &
                  Technology. His career journey began as a student at Dorfak
                  Nasb Company in Rasht, and later in Tehran, he continued to
                  contribute to architectural projects at Faza Rokhdad
                  Architects and Pars Gostareh Consulting Engineers. During his
                  military service, he actively engaged in teaching and research
                  on native housing at Iran University of Science and
                  Technology. Subsequently, he joined Pargar Architecture
                  Studio.
               </Paragraph1>
               <Paragraph1 className='text-justify text-gray-700'>
                  <b>Maryam Khoshandam</b>, born in 1992 in Rasht, is a
                  dedicated architect with a bachelor’s degree from Guilan
                  University and a master’s degree in architecture from the
                  Islamic Azad University Rasht Branch. She initiated her
                  professional journey in the technical office of Pars Hospital
                  and later contributed her skills to projects at Architherm
                  company.
               </Paragraph1>
            </motion.div>
         </motion.div>
         <LeadershipSection />
      </>
   );
};
export default AboutPageMainContainer;
