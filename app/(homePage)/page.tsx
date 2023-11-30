'use client';

import AwardsSection from '@/components/HomePage/awardsSection';
import CallUsSection from '@/components/HomePage/callUsSection';
import FirstSection from '@/components/HomePage/firstSection';
import OurProjectsSection from '@/components/HomePage/ourProjectsSection';
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
         <FirstSection />
         <OurProjectsSection />
         <TrustSection />
         <AwardsSection />
         <StatisticsSection />
         {/* <SloganSection /> */}
         <CallUsSection />
         {/* second section */}
         <div className='mt-20 flex w-full items-center justify-between overflow-hidden px-40'>
            {/* <div>
                    <div className='relative max-h-[800px] overflow-auto rounded-xl p-8'>
                        <div className='relative'>
                            <div className='columns-3xs gap-8 space-y-8'>
                                <div className='aspect-w-16 aspect-h-9 relative'>
                                    <img
                                        className='w-full rounded-lg object-cover'
                                        src='https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2952&amp;q=80'
                                    />
                                    <div className='absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10'></div>
                                </div>
                                <div className='aspect-w-1 aspect-h-1 relative'>
                                    <img
                                        className='w-full rounded-lg object-cover'
                                        src='https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2902&amp;q=80'
                                    />
                                    <div className='absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10'></div>
                                </div>
                                <div className='aspect-w-1 aspect-h-1 relative hidden sm:block'>
                                    <img
                                        className='w-full rounded-lg object-cover'
                                        src='https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3131&amp;q=80'
                                    />
                                    <div className='absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10'></div>
                                </div>
                                <div className='aspect-w-16 aspect-h-9 relative hidden sm:block'>
                                    <img
                                        className='w-full rounded-lg object-cover'
                                        src='https://images.unsplash.com/photo-1463288889890-a56b2853c40f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3132&amp;q=80'
                                    />
                                    <div className='absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
         </div>
      </div>
   );
}
