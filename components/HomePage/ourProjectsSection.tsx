import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectItem from './projectItem';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, HashNavigation } from 'swiper/modules';

export default function OurProjectsSection() {
   const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

   return (
      <div className='mt-20 flex w-full items-center justify-between overflow-hidden px-40'>
         <div className='relative grid columns-9'>
            <Swiper
               slidesPerView={3}
               spaceBetween={30}
               navigation={true}
               hashNavigation={{
                  watchState: true,
               }}
               autoplay={{
                  delay: 5500,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
               }}
               modules={[Autoplay, Navigation, HashNavigation]}
               className='relative w-full'
            >
               {projects.map((project, index) => (
                  <SwiperSlide key={index}>
                     <ProjectItem project={project} key={index} />
                  </SwiperSlide>
               ))}
            </Swiper>
            <div className='absolute right-0 top-0 z-10 h-full w-1/6 bg-gradient-to-l from-white'></div>
         </div>
         <div className='columns-1 px-5'></div>
         <div className='flex columns-2 flex-col'>
            <h4 className='w-fit text-4xl font-thin'>Our Projects</h4>
            <div className='mb-5 mt-2 w-20 border-b-4 border-blue-700'></div>
            <button className='flex items-center justify-center border border-black px-3 py-2 duration-200 hover:bg-gray-400'>
               View All
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='ms-3 h-4 w-4'
               >
                  <path
                     strokeLinecap='round'
                     strokeLinejoin='round'
                     d='M8.25 4.5l7.5 7.5-7.5 7.5'
                  />
               </svg>
            </button>
         </div>
      </div>
   );
}
