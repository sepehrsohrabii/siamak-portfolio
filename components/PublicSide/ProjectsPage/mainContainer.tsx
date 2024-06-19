'use client';
import { useEffect, useState } from 'react';

import ProjectsHeader from '@/components/PublicSide/ProjectsPage/header';
import SingleProjectItem from '@/components/PublicSide/ProjectsPage/singleProject';
import TypesSection from '@/components/PublicSide/ProjectsPage/typesSection';
import { getActiveProjects } from '@/utils/actions';
import { ProjectsType } from '@/utils/types';

import ProjectImageSekelton from '../HomePage/ourProjectsSection/projectImageSekelton';

const ProjectsPageMainContainer = () => {
   const [projects, setProjects] = useState<ProjectsType[]>([]);
   const [filteredProjects, setFilteredProjects] = useState<ProjectsType[]>([]);
   const [typeId, setTypeId] = useState<string>('');
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
         <div className='mx-5 my-10 grid grid-cols-1 gap-6 md:mx-40 md:my-20 md:grid-cols-3'>
            {filteredProjects.length === 0 ? (
               <div role='status' className='animate-pulse'>
                  <ProjectImageSekelton />
               </div>
            ) : (
               filteredProjects.map((project) => (
                  <SingleProjectItem
                     project={project}
                     key={Number(project.id)}
                  />
               ))
            )}
         </div>
      </>
   );
};
export default ProjectsPageMainContainer;
