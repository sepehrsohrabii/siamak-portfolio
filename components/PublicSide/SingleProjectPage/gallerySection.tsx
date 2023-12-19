import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useState } from 'react';

const GallerySection = () => {
   const [thumbsSwiper, setThumbsSwiper] = useState(null);
   return (
      <div className='my-32 bg-stone-300 px-40 py-20'>
         <h3 className='mb-10 text-center text-7xl font-thin'>GALLERY</h3>
         <Swiper
            style={{
               '--swiper-navigation-color': '#fff',
               '--swiper-pagination-color': '#fff',
            }}
            loop={true}
            lazy={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className='mySwiper2'
         >
            <SwiperSlide>
               <img
                  src='/images/5.jpg'
                  loading='lazy'
                  className='h-screen w-full object-cover'
               />
               <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
            </SwiperSlide>
            <SwiperSlide>
               <img
                  src='/images/6.jpg'
                  loading='lazy'
                  className='h-screen w-full object-cover'
               />
               <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
            </SwiperSlide>
            <SwiperSlide>
               <img
                  src='/images/7.jpg'
                  loading='lazy'
                  className='h-screen w-full object-cover'
               />
               <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
            </SwiperSlide>
            <SwiperSlide>
               <img
                  src='/images/8.jpg'
                  loading='lazy'
                  className='h-screen w-full object-cover'
               />
               <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
            </SwiperSlide>
            <SwiperSlide>
               <img
                  src='/images/1.jpg'
                  loading='lazy'
                  className='h-screen w-full object-cover'
               />
               <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
            </SwiperSlide>
            <SwiperSlide>
               <img
                  src='/images/2.jpg'
                  loading='lazy'
                  className='h-screen w-full object-cover'
               />
               <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
            </SwiperSlide>
         </Swiper>
         <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={5}
            freeMode={true}
            lazy={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className='mySwiper mt-3'
         >
            <SwiperSlide>
               <img
                  src='/images/5.jpg'
                  loading='lazy'
                  className='h-32 w-full object-cover saturate-0 duration-500 hover:saturate-100'
               />
               <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
            </SwiperSlide>
            <SwiperSlide>
               <img
                  src='/images/6.jpg'
                  loading='lazy'
                  className='h-32 w-full object-cover saturate-0 duration-500 hover:saturate-100'
               />
               <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
            </SwiperSlide>
            <SwiperSlide>
               <img
                  src='/images/7.jpg'
                  loading='lazy'
                  className='h-32 w-full object-cover saturate-0 duration-500 hover:saturate-100'
               />
               <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
            </SwiperSlide>
            <SwiperSlide>
               <img
                  src='/images/8.jpg'
                  loading='lazy'
                  className='h-32 w-full object-cover saturate-0 duration-500 hover:saturate-100'
               />
               <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
            </SwiperSlide>
            <SwiperSlide>
               <img
                  src='/images/1.jpg'
                  loading='lazy'
                  className='h-32 w-full object-cover saturate-0 duration-500 hover:saturate-100'
               />
               <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
            </SwiperSlide>
            <SwiperSlide>
               <img
                  src='/images/2.jpg'
                  loading='lazy'
                  className='h-32 w-full object-cover saturate-0 duration-500 hover:saturate-100'
               />
               <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
            </SwiperSlide>
         </Swiper>
      </div>
   );
};
export default GallerySection;
