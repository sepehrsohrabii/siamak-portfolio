import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Link from 'next/link';

import { Heading2, Paragraph1 } from '@/components/General/typography';
import { getHomePageProjects } from '@/utils/actions';
import { ProjectsType } from '@/utils/types';

import ProjectItem from './projectItem';
import ProjectItemSekelton from './projectItemSekelton';

gsap.registerPlugin(ScrollTrigger);

const OurProjectsSection = () => {
   const [projects, setProjects] = useState<ProjectsType[]>([]);
   const component = useRef<HTMLDivElement>(null);
   const slider = useRef<HTMLDivElement>(null);

   const fetchProjects = async () => {
      const projectsList: ProjectsType[] = await getHomePageProjects();
      if (projectsList.length > 0) setProjects(projectsList);
   };
   useEffect(() => {
      fetchProjects();
   }, []);

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
               end: () => '+=' + (slider.current?.offsetWidth || 0),
               markers: false,
            },
         });
      }, component);
      return () => ctx.revert();
   });

   return (
      <div className='overflow-hidden' id='projects'>
         <div className='my-36 overflow-y-visible' ref={component}>
            <div ref={slider} className='flex w-fit flex-row overflow-visible'>
               <div className='panel ms-40'>
                  <Heading2 className='text-gray-700'>Our</Heading2>
                  <Heading2 className='text-gray-700'>Projects</Heading2>
                  <div className='text-end'>
                     <Paragraph1 className=''>
                        <Link
                           className='bg-cyan-700 px-3 py-1 text-white duration-500 hover:bg-cyan-900'
                           href='/projects'
                        >
                           View All.
                        </Link>
                     </Paragraph1>
                  </div>
               </div>
               {projects.length > 0 ? (
                  projects.map((project, index) => (
                     <ProjectItem project={project} key={index} />
                  ))
               ) : (
                  <ProjectItemSekelton />
               )}
            </div>
         </div>
      </div>
   );
};

export default OurProjectsSection;
