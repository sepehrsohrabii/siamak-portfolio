import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import ProjectItem from './projectItem';
import { Heading2 } from '@/components/General/typography';
import { ProjectsType } from '@/utils/types';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const OurProjectsSection = ({ projects }: { projects: ProjectsType[] }) => {
   const component = useRef();
   const slider = useRef();
   const projectsWithoutAwards = projects.filter(
      (project) =>
         project.award !== '' &&
         project.award !== null &&
         project.award !== undefined
   );
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
                  <Heading2 className='text-gray-700'>Our</Heading2>
                  <Heading2 className='text-gray-700'>Projects</Heading2>
                  <div className='text-end'>
                     <Link
                        className='bg-cyan-700 px-3 py-1 text-white'
                        href='/projects'
                     >
                        View All.
                     </Link>
                  </div>
               </div>
               {projectsWithoutAwards.map((project, index) => (
                  <ProjectItem project={project} key={index} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default OurProjectsSection;
