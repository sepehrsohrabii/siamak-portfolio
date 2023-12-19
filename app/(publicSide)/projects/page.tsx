'use client';
import { ScrollerMotion } from 'scroller-motion';
import ProjectsHeader from '@/components/PublicSide/ProjectsPage/header';
import TypesSection from '@/components/PublicSide/ProjectsPage/typesSection';
import SingleProjectItem from '@/components/PublicSide/ProjectsPage/singleProject';

const Projects: React.FC = () => {
   const projects = [0, 1, 2, 3, 4, 5];
   return (
      <>
         <ProjectsHeader />
         <TypesSection />
         <div className='mx-40 my-20 grid grid-cols-2 gap-10'>
            {projects.map((project, index) => (
               <SingleProjectItem project={project} key={index} />
            ))}
         </div>
      </>
   );
};
export default Projects;
