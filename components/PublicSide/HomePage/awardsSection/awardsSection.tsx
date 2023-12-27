'use client';
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, useScroll } from 'framer-motion';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Heading1, Heading2 } from '@/components/General/typography';
import { ProjectsType } from '@/utils/types';
import AwardItem from './awardItem';

const AwardsSection = ({ projects }: { projects: ProjectsType[] }) => {
   const progressCircle = useRef(null);
   const progressContent = useRef(null);
   const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
      if (progressCircle.current) {
         (progressCircle.current as HTMLElement).style.setProperty(
            '--progress',
            String(1 - progress)
         );
      }
      if (progressContent.current) {
         (progressContent.current as HTMLElement).textContent = `${Math.ceil(
            time / 1000
         )}s`;
      }
   };
   const container = useRef(null);
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start end', 'end end'],
   });
   const projectWithAwards = projects.filter(
      (project) =>
         project.award !== '' ||
         project.award !== null ||
         project.award !== undefined
   );
   return (
      <div className='mb-32 bg-stone-300 py-32'>
         <motion.div
            ref={container}
            className='mx-5 md:mx-40'
            style={{ opacity: scrollYProgress }}
         >
            <motion.div className='mb-16 flex flex-row items-center justify-center'>
               <Heading2 className='text-center text-gray-800'>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     fill='none'
                     viewBox='0 0 24 24'
                     strokeWidth={0.7}
                     stroke='currentColor'
                     className='h-20 w-20'
                  >
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0'
                     />
                  </svg>
               </Heading2>
               <Heading1 className='text-center text-gray-800'>Awards</Heading1>
            </motion.div>
            <motion.div
               className='box'
               /**
                * Setting the initial keyframe to "null" will use
                * the current value to allow for interruptable keyframes.
                */
               whileHover={{ scale: [null, 1.5, 1.4] }}
               transition={{ duration: 0.3 }}
            />
            <Swiper
               spaceBetween={30}
               centeredSlides={true}
               autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
               }}
               pagination={{
                  clickable: true,
               }}
               navigation={true}
               modules={[Autoplay, Pagination, Navigation]}
               onAutoplayTimeLeft={onAutoplayTimeLeft}
               className='mySwiper'
            >
               {projectWithAwards.map((project, index) => (
                  <SwiperSlide key={index}>
                     <AwardItem project={project} />
                  </SwiperSlide>
               ))}

               <div className='autoplay-progress' slot='container-end'>
                  <svg viewBox='0 0 48 48' ref={progressCircle}>
                     <circle cx='24' cy='24' r='20'></circle>
                  </svg>
                  <span ref={progressContent}></span>
               </div>
            </Swiper>
         </motion.div>
      </div>
   );
};

export default AwardsSection;
