import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import ProjectItem from './projectItem';

gsap.registerPlugin(ScrollTrigger);

const OurProjectsSection = () => {
   const projects = [0, 1, 2];
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
               snap: 1 / (panels.length - 1),
               end: () => '+=' + slider.current.offsetWidth * 10,
               markers: true,
            },
         });
      }, component);
      return () => ctx.revert();
   });

   return (
      <>
         <div className='flex items-end'>
            <h6 className='text-lg font-thin text-gray-700'>Our</h6>
            <h2 className='text-6xl font-thin text-gray-700'>Projects</h2>
         </div>
         <div className='' ref={component}>
            <div ref={slider} className='flex flex-row overflow-x-hidden py-32'>
               {projects.map((project, index) => (
                  <ProjectItem project={project} key={index} />
               ))}
            </div>
         </div>
      </>
   );
};

export default OurProjectsSection;
