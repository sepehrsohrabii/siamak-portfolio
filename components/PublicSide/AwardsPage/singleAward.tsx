import { motion, useInView, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectsType } from '@/utils/types';
import { getImageById, getTypeById } from '@/utils/actions';
import {
   Heading2,
   Heading3,
   Heading4,
   Heading6,
   Paragraph1,
   Paragraph2,
   Paragraph3,
} from '@/components/General/typography';
// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const SingleAwardItem = ({
   project,
   key,
}: {
   project: ProjectsType;
   key: number;
}) => {
   const ref = useRef(null);
   const imageRef = useRef(null);

   useEffect(() => {
      // Define the animation
      const animation = gsap.fromTo(
         imageRef.current,
         { width: '100%' }, // Initial width
         {
            width: '40%', // Target width
            x: '50%',
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

      // // Toggle play/pause on scroll
      // ScrollTrigger.create({
      //    trigger: imageRef.current,
      //    start: 'center',
      //    end: 'top 100%',
      //    onEnter: () => animation.play(),
      //    onLeaveBack: () => animation.reverse(),
      //    markers: true,
      // });

      // Cleanup on component unmount
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
      <Link href={`/projects/${project.slug}`}>
         <motion.div
            key={key}
            className='my-20 justify-start md:relative md:flex md:h-96'
            ref={ref}
         >
            <motion.div
               // initial={{ x: -200 }}
               // animate={{ x: 0 }}
               // transition={{ duration: 1 }}
               ref={imageRef}
               className='group z-10 justify-center md:flex'
            >
               <motion.div
                  className='w-full'
                  whileHover={{
                     scale: 1.05,
                     boxShadow: '10px 10px 0px 0px #D3D3D3',
                  }}
               >
                  <Image
                     className='h-96 w-full object-cover saturate-0 duration-500 group-hover:saturate-100'
                     src={imageUrl}
                     alt={`${project.title} image`}
                     width={800}
                     height={800}
                  />
               </motion.div>
            </motion.div>
            <div className='w-full md:absolute'>
               <div className='items-center justify-between md:flex md:flex-row'>
                  <div className='mt-5 basis-1/5 self-center md:mt-0'>
                     <Heading2 className='text-gray-800'>
                        {project.award}
                     </Heading2>
                  </div>
                  <div className='basis-2/5'></div>
                  <div className='basis-1/3 self-center'>
                     <Paragraph2 className='text-gray-400'>
                        {typeName}
                     </Paragraph2>
                     <Paragraph1 className='text-gray-700'>
                        {project.description}
                     </Paragraph1>
                     <div className='mt-5 flex items-center justify-between md:mt-10'>
                        <button>Read More</button>
                        <Paragraph3 className='text-gray-400'>
                           {project.designTeam}
                        </Paragraph3>
                     </div>
                  </div>
               </div>
            </div>
         </motion.div>
      </Link>
   );
};
export default SingleAwardItem;
