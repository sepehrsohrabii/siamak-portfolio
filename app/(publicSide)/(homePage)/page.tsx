'use client';
import AboutUsSection from '@/components/PublicSide/HomePage/aboutUsSection';
import AwardsSection from '@/components/PublicSide/HomePage/awardsSection/awardsSection';
import CallUsSection from '@/components/PublicSide/HomePage/callUsSection';
import HeroSection from '@/components/PublicSide/HomePage/heroSection';
import OurProjectsSection from '@/components/PublicSide/HomePage/ourProjectsSection/ourProjectsSection';
import SloganSection from '@/components/PublicSide/HomePage/sloganSection';
import StatisticsSection from '@/components/PublicSide/HomePage/statisticsSection';
import TrustSection from '@/components/PublicSide/HomePage/trustSection';
import { getHomePageProjects } from '@/utils/actions';
import { ProjectsType } from '@/utils/types';
import { useEffect, useState } from 'react';

const HomePage: React.FC = () => {
   const [projects, setProjects] = useState<ProjectsType[]>([]);
   const [error, setError] = useState(null);
   const fetchProjects = async () => {
      const projectsList: ProjectsType[] = await getHomePageProjects();
      if (projectsList) setProjects(projectsList);
   };
   useEffect(() => {
      fetchProjects();
   }, []);
   return (
      <div>
         <HeroSection />
         {projects && projects.length > 0 && (
            <OurProjectsSection projects={projects} />
         )}
         <AboutUsSection />
         <SloganSection />
         {projects && projects.length > 0 && (
            <AwardsSection projects={projects} />
         )}
         <TrustSection />
         <StatisticsSection />
         <CallUsSection />
      </div>
   );
};
export default HomePage;
