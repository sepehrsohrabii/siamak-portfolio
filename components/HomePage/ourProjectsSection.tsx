import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import ProjectItem from './projectItem';

gsap.registerPlugin(ScrollTrigger);

const OurProjectsSection = () => {
   const projects = [0, 1, 2, 3, 4, 5, 6];
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
               scrub: 1,
               snap: 1 / (panels.length - 1),
               end: () => '+=' + slider.current.offsetWidth,
               markers: true,
            },
         });
      }, component);
      return () => ctx.revert();
   });

   return (
      <div className='App' ref={component}>
         <div ref={slider} className='flex flex-row overflow-x-hidden'>
            <div className='description panel blue'>
               <div>
                  SCROLL DOWN
                  <div className='scroll-down'>
                     <div className='arrow'></div>
                  </div>
               </div>
            </div>
            {projects.map((project, index) => (
               <ProjectItem project={project} key={index} />
            ))}
         </div>
      </div>
   );
};

export default OurProjectsSection;
