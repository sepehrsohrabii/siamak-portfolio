import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const TypesSection: React.FC = () => {
   const types = [
      'Commercial',
      'Complex',
      'Hospitality',
      'Renovation',
      'Residential',
      'Public',
      'Urban Design',
      'Industrial',
      'Villa',
      'Office',
      'Interior Design',
   ];
   return (
      <div className='mx-40'>
         <div className='flex w-full flex-row'>
            <h5 className='-me-36 text-9xl font-thin text-stone-300'>TYPES</h5>
            <button className='prev text-4xl text-black'>
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-6 w-6'
               >
                  <path
                     strokeLinecap='round'
                     strokeLinejoin='round'
                     d='M15.75 19.5L8.25 12l7.5-7.5'
                  />
               </svg>
            </button>
            <Swiper
               slidesPerView={6}
               spaceBetween={0}
               modules={[Navigation]}
               className='mySwiper flex'
               navigation={{ prevEl: '.prev', nextEl: '.next' }}
            >
               <SwiperSlide className='items-center'>
                  <button className='ms-10 w-fit text-3xl font-bold text-cyan-700'>
                     All
                  </button>
               </SwiperSlide>
               {types.map((type) => (
                  <SwiperSlide className='items-center'>
                     <button className='w-fit text-3xl font-thin'>
                        {type}
                     </button>
                  </SwiperSlide>
               ))}
            </Swiper>
            <button className='next text-4xl text-black'>
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-6 w-6'
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
};
export default TypesSection;
