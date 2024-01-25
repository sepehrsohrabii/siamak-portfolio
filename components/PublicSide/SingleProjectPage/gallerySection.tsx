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
import ParallaxGallery from './parallaxGallery';
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
            <ParallaxGallery imagesUrlsList={imagesUrlsList} />
         )}
      </div>
   );
};
export default GallerySection;
