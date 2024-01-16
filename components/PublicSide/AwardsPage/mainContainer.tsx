'use client';
import { ScrollerMotion } from 'scroller-motion';
import AwardsHeader from '@/components/PublicSide/AwardsPage/header';
import SingleAwardItem from '@/components/PublicSide/AwardsPage/singleAward';
import { useEffect, useState } from 'react';
import { ProjectsType } from '@/utils/types';
import { getActiveAwardedProjects } from '@/utils/actions';

const AwardsPageMainContainer = () => {
   const [projects, setProjects] = useState<ProjectsType[]>([]);
   const [error, setError] = useState(null);
   const fetchProjects = async () => {
      const projectsList: ProjectsType[] = await getActiveAwardedProjects();
      setProjects(projectsList);
   };
   useEffect(() => {
      fetchProjects();
   }, []);
   return (
      <>
         <AwardsHeader />
         <div className='mx-5 my-20 md:mx-40'>
            {projects.map((project, index) => (
               <SingleAwardItem project={project} key={index} />
            ))}
         </div>
      </>
   );
};
export default AwardsPageMainContainer;
