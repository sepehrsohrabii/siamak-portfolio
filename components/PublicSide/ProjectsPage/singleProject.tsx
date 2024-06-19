import { useEffect, useRef, useState } from 'react';

import { motion, useInView, useScroll } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

import {
   Heading5,
   Paragraph2,
   Paragraph3,
} from '@/components/General/typography';
import { getImageById, getTypeById } from '@/utils/actions';

gsap.registerPlugin(ScrollTrigger);

const SingleProjectItem = ({ project, key }: { project: any; key: number }) => {
   const ref = useRef(null);
   const imageRef = useRef(null);
   useEffect(() => {
      const animation = gsap.fromTo(
         imageRef.current,
         { width: '100%' }, // Initial width
         {
            width: '60%', // Target width
            duration: 1, // Animation duration
            ease: 'power2.out', // Easing function
            scrollTrigger: {
               trigger: imageRef.current, // Trigger element
               start: 'top 50%', // Start the animation when the top of the element is 80% in view
               end: 'bottom 70%', // End the animation when the bottom of the element is 20% in view
               scrub: 1, // Smoothly animate on scroll
               markers: false,
            },
         }
      );

      // Pause the animation by default
      animation.pause();
      return () => {
         animation.kill();
      };
   }, []);
   const [imageUrl, setImageUrl] = useState<string>('');
   const [typeName, setTypeName] = useState<string>('');
   useEffect(() => {
      const getImageUrl = async () => {
         const image = await getImageById(project.mainImageId);
         if (image.fileURL) {
            setImageUrl(image.fileURL);
         }
      };
      const getTypeName = async () => {
         const type = await getTypeById(project.typeId);
         if (type.title) {
            setTypeName(type.title);
         }
      };
      getImageUrl();
      getTypeName();
   }, []);
   return (
      <Link key={key} className='' href={`/projects/${project.slug}`}>
         <motion.div
            key={key}
            className='relative flex h-60 justify-end'
            ref={ref}
         >
            <motion.div
               ref={imageRef}
               className='group absolute left-0 z-10 flex h-full w-full justify-center'
            >
               <motion.div
                  whileHover={{
                     scale: 1.05,
                     boxShadow: '10px 10px 0px 0px #D3D3D3',
                  }}
                  className='w-full duration-500'
               >
                  {imageUrl && (
                     <Image
                        className='h-60 w-full object-cover saturate-0 duration-500 group-hover:saturate-100'
                        src={imageUrl}
                        alt={`${project.title} image`}
                        width={450}
                        height={450}
                     />
                  )}
               </motion.div>
            </motion.div>
            <div className='-z-10 flex w-2/5 items-center ps-2 md:ps-5'>
               <div className='w-full border-s-2 border-slate-400 py-10 ps-2 md:ps-5'>
                  <Paragraph2 className='text-gray-400'>{typeName}</Paragraph2>
                  <Heading5 className='text-gray-900'>{project.title}</Heading5>
                  <Paragraph3 className='mt-10 text-gray-400'>
                     {project.year}
                  </Paragraph3>
               </div>
            </div>
         </motion.div>
      </Link>
   );
};
export default SingleProjectItem;
