import { motion, useInView, useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const SingleProjectItem = ({ project, key }: { project: any; key: number }) => {
   const ref = useRef(null);
   const isInView = useInView(ref);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start end', 'end end'],
   });
   console.log(scrollYProgress);

   const imageRef = useRef(null);

   useEffect(() => {
      // Define the animation
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
         className='relative flex h-96 justify-start'
         ref={ref}
      >
         <motion.div
            // initial={{ x: -200 }}
            // animate={{ x: 0 }}
            // transition={{ duration: 1 }}
            ref={imageRef}
            className='group z-10 flex justify-center'
         >
            <motion.img
               className='w-full object-cover saturate-0 duration-500 group-hover:saturate-100'
               src='/images/2.jpg'
               whileHover={{
                  scale: 1.05,
                  boxShadow: '10px 10px 0px 0px #D3D3D3',
               }}
            />
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
         <div className='absolute left-2/3 top-1/3 -z-10 -ms-10 border-s-2 border-slate-400 py-10 ps-5'>
            <p className='text-md font-normal text-gray-400'>Interior</p>
            <h6 className='text-2xl font-light text-gray-900'>
               Tehran Building
            </h6>
            <p className='mt-10 text-sm font-normal text-gray-400'>Oct. 2019</p>
         </div>
      </motion.div>
   );
};
export default SingleProjectItem;
