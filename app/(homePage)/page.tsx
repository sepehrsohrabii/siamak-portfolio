'use client';
import AboutUsSection from '@/components/HomePage/aboutUsSection';
import AwardsSection from '@/components/HomePage/awardsSection';
import CallUsSection from '@/components/HomePage/callUsSection';
import HeroSection from '@/components/HomePage/heroSection';
import OurProjectsSection from '@/components/HomePage/ourProjectsSection/ourProjectsSection';
import ServicesSection from '@/components/HomePage/servicesSection';
import SloganSection from '@/components/HomePage/sloganSection';
import StatisticsSection from '@/components/HomePage/statisticsSection';
import TrustSection from '@/components/HomePage/trustSection';

const HomePage: React.FC = () => {
   return (
      <div>
         <HeroSection />
         <OurProjectsSection />
         <AboutUsSection />
         <SloganSection />
         <AwardsSection />
         <TrustSection />
         <StatisticsSection />
         <CallUsSection />
      </div>
   );
};
export default HomePage;
