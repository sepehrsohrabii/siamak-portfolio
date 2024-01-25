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

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
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
         <ParallaxGallery imagesUrlsList={imagesUrlsList} />
         {/* {imagesUrlsList.length > 0 && (
            <>
               <LightGallery
                  onInit={() => {}}
                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
               >
                  {imagesUrlsList.map((url, index) => (
                     <a href={url}>
                        <Image
                           src={url}
                           loading='lazy'
                           className='h-96 w-full object-cover md:h-screen'
                           alt={`Image ${index + 1}`}
                           width={1500}
                           height={1500}
                        />
                     </a>
                  ))}
               </LightGallery>
            </>
         )} */}
      </div>
   );
};
export default GallerySection;
