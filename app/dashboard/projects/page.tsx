'use client';
import AddProjectModal from '@/components/AdminPanel/ProjectsPage/addProjectModal';
import ProjectsList from '@/components/AdminPanel/ProjectsPage/projectsList';
import { Heading5, Heading6 } from '@/components/General/typography';

const ProjectsPage = () => {
   return (
      <div className='flex h-full flex-col'>
         <div className='flex w-full items-center justify-between rounded-lg bg-slate-200 px-5 py-3 shadow-lg'>
            <Heading5 className=''>Projects</Heading5>
            <AddProjectModal />
         </div>
         <div className='mt-2 h-full w-full rounded-lg bg-slate-200 px-5 py-3 shadow-lg'>
            <ProjectsList />
         </div>
      </div>
   );
};
export default ProjectsPage;
