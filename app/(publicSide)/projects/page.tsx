import ProjectsPageMainContainer from '@/components/PublicSide/ProjectsPage/mainContainer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Projects',
   description:
      'This page contains the various types of projects of the graph studio.',
};
const ProjectsPage = () => {
   return <ProjectsPageMainContainer />;
};
export default ProjectsPage;
