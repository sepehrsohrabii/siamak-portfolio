import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Heading2 } from '@/components/General/typography';
import { getImageById } from '@/utils/actions';

const GallerySection = ({
   galleryImagesIds,
}: {
   galleryImagesIds: string[];
}) => {
   const [thumbsSwiper, setThumbsSwiper] = useState(null);
   const [imagesUrlsList, setImagesUrlsList] = useState<string[]>([]);
   const fetchImageUrls = async () => {
      const urls = await Promise.all(
         galleryImagesIds.map(async (id) => {
            try {
               const image = await getImageById(id);
               return image.fileURL || ''; // Handle the case where fileURL is undefined
            } catch (e) {
               console.error(`Error fetching image with id ${id}`, e);
               return ''; // Return an empty string for the failed case
            }
         })
      );
      setImagesUrlsList(urls);
   };

   useEffect(() => {
      if (galleryImagesIds && galleryImagesIds?.length > 0) fetchImageUrls();
   }, [galleryImagesIds]);
   return (
      <div className='my-32 bg-stone-300 px-5 py-20 md:px-40'>
         <Heading2 className='mb-10 text-center'>GALLERY</Heading2>
         {imagesUrlsList.length > 0 && (
            <>
               <Swiper
                  style={
                     {
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                     } as { [key: string]: string }
                  }
                  loop={true}
                  // lazy={true}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className='mySwiper2'
               >
                  {imagesUrlsList.map((url, index) => (
                     <SwiperSlide key={index}>
                        <Image
                           src={url}
                           loading='lazy'
                           className='h-96 w-full object-cover md:h-screen'
                           alt={`gallery image ${index + 1}`}
                           width={1500}
                           height={1500}
                        />
                        <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
                     </SwiperSlide>
                  ))}
               </Swiper>
               <Swiper
                  onSwiper={() => setThumbsSwiper}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={5}
                  freeMode={true}
                  // lazy={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className='mySwiper mt-3'
               >
                  {imagesUrlsList.map((url, index) => (
                     <SwiperSlide key={index}>
                        <Image
                           src={url}
                           loading='lazy'
                           className='h-16 w-full object-cover md:h-32'
                           alt={`gallery thumbnail ${index + 1}`}
                           height={200}
                           width={200}
                        />
                        <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </>
         )}
      </div>
   );
};
export default GallerySection;
