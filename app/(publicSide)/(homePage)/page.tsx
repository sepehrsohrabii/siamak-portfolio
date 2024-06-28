'use client';
import AboutUsSection from '@/components/PublicSide/HomePage/aboutUsSection';
import AwardsSection from '@/components/PublicSide/HomePage/awardsSection/awardsSection';
import CallUsSection from '@/components/PublicSide/HomePage/callUsSection';
import HeroSection from '@/components/PublicSide/HomePage/heroSection';
import OurProjectsSection from '@/components/PublicSide/HomePage/ourProjectsSection/ourProjectsSection';
import SloganSection from '@/components/PublicSide/HomePage/sloganSection';
import StatisticsSection from '@/components/PublicSide/HomePage/statisticsSection';
import TrustSection from '@/components/PublicSide/HomePage/trustSection';

const HomePage: React.FC = () => {
   return (
      <>
         <HeroSection />
         <OurProjectsSection />
         <AboutUsSection />
         <SloganSection />
         <AwardsSection />
         <TrustSection />
         <StatisticsSection />
         <CallUsSection />
      </>
   );
};
export default HomePage;
