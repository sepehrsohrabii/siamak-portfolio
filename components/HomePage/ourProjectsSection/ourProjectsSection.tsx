import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import ProjectItem from './projectItem';

gsap.registerPlugin(ScrollTrigger);

const OurProjectsSection = () => {
   const projects = [0, 1, 2, 3, 4, 5];
   const component = useRef();
   const slider = useRef();

   useLayoutEffect(() => {
      let ctx = gsap.context(() => {
         let panels = gsap.utils.toArray('.panel');
         gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: 'none',
            scrollTrigger: {
               trigger: slider.current,
               pin: true,
               anticipatePin: 1,
               scrub: 1,
               snap: 0,
               start: 'center center',
               end: () => '+=' + slider.current.offsetWidth,
               markers: false,
            },
         });
      }, component);
      return () => ctx.revert();
   });

   return (
      <div className='overflow-hidden'>
         <div className='my-36 overflow-y-visible' ref={component}>
            <div ref={slider} className='flex w-fit flex-row overflow-visible'>
               <div className='panel ms-40'>
                  <h2 className='text-6xl font-thin text-gray-700'>Our</h2>
                  <h2 className='text-6xl font-thin text-gray-700'>Projects</h2>
                  <div className='text-end'>
                     <a className='bg-cyan-700 px-3 py-1 text-white' href='#'>
                        View All.
                     </a>
                  </div>
               </div>
               {projects.map((project, index) => (
                  <ProjectItem project={project} key={index} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default OurProjectsSection;
