'use client';

import AboutUsSection from '@/components/HomePage/aboutUsSection';
import AwardsSection from '@/components/HomePage/awardsSection';
import CallUsSection from '@/components/HomePage/callUsSection';
import HeroSection from '@/components/HomePage/heroSection';
import OurProjectsSection from '@/components/HomePage/ourProjectsSection';
import ServicesSection from '@/components/HomePage/servicesSection';
import SloganSection from '@/components/HomePage/sloganSection';
import StatisticsSection from '@/components/HomePage/statisticsSection';
import TrustSection from '@/components/HomePage/trustSection';

export default function Home() {
   const slides = [
      {
         src: 'string',
         title: 'string',
         description: 'string',
      },
      {
         src: 'string',
         title: 'string',
         description: 'string',
      },
   ];
   return (
      <div>
         <HeroSection />
         <OurProjectsSection />
         <ServicesSection />
         <AwardsSection />
         <AboutUsSection />
         <SloganSection />
         <TrustSection />
         <StatisticsSection />
         <CallUsSection />
      </div>
   );
}
