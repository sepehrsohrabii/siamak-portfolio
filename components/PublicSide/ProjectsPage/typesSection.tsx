import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Heading1, Heading4 } from '@/components/General/typography';
import { useEffect, useState } from 'react';
import { TypesType } from '@/utils/types';
import { getActiveTypes } from '@/utils/actions';

const TypesSection = ({
   typeId,
   setTypeId,
}: {
   typeId: string;
   setTypeId: (typeId: string) => void;
}) => {
   const [types, setTypes] = useState<TypesType[]>([]);
   const [error, setError] = useState(null);
   const fetchTypes = async () => {
      const typesList: TypesType[] = await getActiveTypes();
      setTypes(typesList);
   };
   useEffect(() => {
      fetchTypes();
   }, []);
   return (
      <div className='mx-5 md:mx-40'>
         <div className='flex w-full flex-row'>
            <Heading1 className='-me-24 font-thin text-stone-300 md:-me-36'>
               TYPES
            </Heading1>
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
               slidesPerView={2}
               spaceBetween={10}
               breakpoints={{
                  768: {
                     slidesPerView: 6,
                     spaceBetween: 40,
                  },
               }}
               modules={[Navigation]}
               className='mySwiper w-full'
               navigation={{ prevEl: '.prev', nextEl: '.next' }}
            >
               <SwiperSlide className='items-center'>
                  <button
                     className={`ms-10 w-fit ${
                        typeId === '' &&
                        'border-b-2 border-cyan-700 font-bold text-cyan-700'
                     }`}
                     onClick={() => setTypeId('')}
                  >
                     <Heading4 className=''>All</Heading4>
                  </button>
               </SwiperSlide>
               {types.map((type) => (
                  <SwiperSlide className='items-center'>
                     <button
                        className={`w-fit ${
                           type.id === typeId &&
                           'border-b-2 border-cyan-700 font-bold text-cyan-700'
                        }`}
                        onClick={() => setTypeId(type.id)}
                     >
                        <Heading4 className=''>{type.title}</Heading4>
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
