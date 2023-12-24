'use client';

import { Heading5 } from '@/components/General/typography';

const StatisticsPage = () => {
   return (
      <div className='flex h-full flex-col'>
         <div className='flex w-full items-center justify-between rounded-lg bg-slate-200 px-5 py-3 shadow-lg'>
            <Heading5 className=''>Statistics</Heading5>
         </div>
         <div className='mt-2 h-full w-full rounded-lg bg-slate-200 px-5 py-3 shadow-lg'></div>
      </div>
   );
};
export default StatisticsPage;
