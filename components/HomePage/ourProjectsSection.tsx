import React, {
   useRef,
   useState,
   useLayoutEffect,
   useCallback,
   useEffect,
} from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import {
   motion,
   useViewportScroll,
   useTransform,
   useSpring,
   useMotionValue,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Import from react-intersection-observer
import ProjectItem from './projectItem';

export default function OurProjectsSection() {
   const projects = [0, 1, 2, 3, 4, 5, 6];
   const scrollRef = useRef(null);
   const ghostRef = useRef(null);
   const [scrollRange, setScrollRange] = useState(0);
   const [viewportW, setViewportW] = useState(0);

   const scrollPerc = useMotionValue(0);
   const [disableVerticalScroll, setDisableVerticalScroll] = useState(false);

   useLayoutEffect(() => {
      scrollRef && setScrollRange(scrollRef.current.scrollWidth);
   }, [scrollRef]);

   const onResize = useCallback((entries) => {
      for (let entry of entries) {
         setViewportW(entry.contentRect.width);
      }
   }, []);

   useLayoutEffect(() => {
      const resizeObserver = new ResizeObserver((entries) => onResize(entries));
      resizeObserver.observe(ghostRef.current);
      return () => resizeObserver.disconnect();
   }, [onResize]);

   const { scrollYProgress } = useViewportScroll();

   const [containerRef, inViewRef] = useInView({ threshold: 0.1 }); // Use useInView from react-intersection-observer

   useEffect(() => {
      if (inViewRef) {
         setDisableVerticalScroll(true);
      } else {
         setDisableVerticalScroll(false);
      }
      scrollPerc.set(inViewRef ? 1 : 0);
   }, [inViewRef, scrollPerc]);

   const transform = useTransform(
      scrollPerc,
      [0, 1],
      [0, -scrollRange + viewportW]
   );
   const physics = { damping: 15, mass: 0.27, stiffness: 55 };
   const spring = useSpring(transform, physics);

   return (
      <div
         ref={containerRef}
         style={{
            overflow: disableVerticalScroll ? 'hidden' : 'auto',
            position: 'relative',
         }}
      >
         <div className='scroll-container'>
            {/* You can use scrollPerc value wherever you need it */}
            <motion.section
               ref={scrollRef}
               style={{ x: spring }}
               className='thumbnails-container'
            >
               <div className='thumbnails'>
                  <div className='thumbnail flex columns-2 flex-col'>
                     <h4 className='w-fit text-4xl font-thin'>Our Projects</h4>
                     <div className='mb-5 mt-2 w-20 border-b-4 border-blue-700'></div>
                     <button className='flex items-center justify-center border border-black px-3 py-2 duration-200 hover:bg-gray-400'>
                        View All
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           fill='none'
                           viewBox='0 0 24 24'
                           stroke='currentColor'
                           className='ms-3 h-4 w-4'
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M8.25 4.5l7.5 7.5-7.5 7.5'
                           />
                        </svg>
                     </button>
                  </div>
                  {projects.map((project, index) => (
                     <ProjectItem project={project} key={index} />
                  ))}
               </div>
            </motion.section>
         </div>
         <div
            ref={ghostRef}
            style={{ height: scrollRange }}
            className='ghost'
         />
      </div>
   );
}
