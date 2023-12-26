'use client';
import { ScrollerMotion } from 'scroller-motion';
import ProjectsHeader from '@/components/PublicSide/ProjectsPage/header';
import TypesSection from '@/components/PublicSide/ProjectsPage/typesSection';
import SingleProjectItem from '@/components/PublicSide/ProjectsPage/singleProject';
import { useEffect, useState } from 'react';
import { ProjectsType } from '@/utils/types';
import { getActiveProjects } from '@/utils/actions';

const Projects = () => {
   const [projects, setProjects] = useState<ProjectsType[]>([]);
   const [filteredProjects, setFilteredProjects] = useState<ProjectsType[]>([]);
   const [typeId, setTypeId] = useState<string>('');
   const [error, setError] = useState(null);
   const fetchProjects = async () => {
      const projectsList: ProjectsType[] = await getActiveProjects();
      setProjects(projectsList);
      setFilteredProjects(projectsList);
   };
   useEffect(() => {
      fetchProjects();
   }, []);
   useEffect(() => {
      if (projects.length > 0) {
         if (typeId !== '') {
            const filteredProjects = projects.filter(
               (project) => project.typeId === typeId
            );
            setFilteredProjects(filteredProjects);
         } else {
            setFilteredProjects(projects);
         }
      }
   }, [typeId]);
   return (
      <>
         <ProjectsHeader />
         <TypesSection setTypeId={setTypeId} typeId={typeId} />
         <div className='mx-5 my-10 grid grid-cols-1 gap-10 md:mx-40 md:my-20 md:grid-cols-2'>
            {filteredProjects.map((project, index) => (
               <SingleProjectItem project={project} key={index} />
            ))}
         </div>
      </>
   );
};
export default Projects;
