'use client';
import AddProjectModal from '@/components/AdminPanel/ProjectsPage/addProjectModal';
import ProjectsList from '@/components/AdminPanel/ProjectsPage/projectsList';
import { Heading5 } from '@/components/General/typography';
import { getProjects } from '@/utils/actions';
import { ProjectsType } from '@/utils/types';
import { useEffect, useState } from 'react';

const ProjectsPage = () => {
   const [projects, setProjects] = useState<ProjectsType[]>([]);
   const [error, setError] = useState(null);
   const fetchProjects = async () => {
      const projectsList: ProjectsType[] = await getProjects();
      setProjects(projectsList);
   };
   useEffect(() => {
      fetchProjects();
   }, []);
   return (
      <div className='flex h-full flex-col'>
         <div className='flex w-full items-center justify-between rounded-lg bg-slate-200 px-5 py-3 shadow-lg'>
            <Heading5 className=''>Projects</Heading5>
            <AddProjectModal fetchProjects={fetchProjects} />
         </div>
         <div className='mt-2 h-full w-full rounded-lg bg-slate-200 px-5 py-3 shadow-lg'>
            <ProjectsList projects={projects} fetchProjects={fetchProjects} />
         </div>
      </div>
   );
};
export default ProjectsPage;
