import { motion, useInView, useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const SingleAwardItem = ({ award, key }: { award: any; key: number }) => {
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
   return (
      <motion.div
         key={key}
         className='relative my-10 flex h-96 justify-start'
         ref={ref}
      >
         <motion.div
            // initial={{ x: -200 }}
            // animate={{ x: 0 }}
            // transition={{ duration: 1 }}
            ref={imageRef}
            className='group z-10 flex justify-center'
         >
            <motion.div
               className='w-full'
               whileHover={{
                  scale: 1.05,
                  boxShadow: '10px 10px 0px 0px #D3D3D3',
               }}
            >
               <Image
                  className='w-full object-cover saturate-0 duration-500 group-hover:saturate-100'
                  src='/images/2.jpg'
                  alt='Graph Award image'
                  width={250}
                  height={150}
               />
            </motion.div>
            <motion.a
               className='absolute hidden self-center border-2 border-white p-4 text-black duration-500 group-hover:block'
               href='#'
            >
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.2}
                  stroke='currentColor'
                  className='h-10 w-10 text-white'
               >
                  <path
                     strokeLinecap='round'
                     strokeLinejoin='round'
                     d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                  />
                  <path
                     strokeLinecap='round'
                     strokeLinejoin='round'
                     d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                  />
               </svg>
            </motion.a>
         </motion.div>
         <div className='absolute w-full'>
            <div className='flex flex-row items-center justify-between'>
               <div className='basis-1/5 self-center'>
                  <h4 className='text-4xl font-light text-gray-900'>
                     Tehran Building
                  </h4>
               </div>
               <div className='basis-2/5'>image</div>
               <div className='basis-1/3 self-center'>
                  <p className='text-md font-normal text-gray-400'>Interior</p>
                  <h6 className='text-2xl font-light text-gray-900'>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Deleniti beatae hic cum voluptatum iure? Doloremque, at.
                     Error voluptatibus, vitae quis veritatis maiores aperiam!
                     Neque sunt, officia minima in nemo sit!
                  </h6>
                  <div className='mt-10 flex items-center justify-between'>
                     <button>Read More</button>
                     <p className='text-sm font-normal text-gray-400'>
                        Oct. 2019
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </motion.div>
   );
};
export default SingleAwardItem;
