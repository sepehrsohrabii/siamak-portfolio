'use client';
import { Heading1, Paragraph1 } from '@/components/General/typography';
import Lottie from 'lottie-react';
import engineers from '@/public/animations/wedding-anim.json';

const DashboardPage = () => {
   const date = new Date().toISOString().split('T')[0];
   return (
      <div className='flex h-full w-full flex-col justify-between rounded-lg bg-slate-200 px-5 pt-5 shadow-lg'>
         <div className='flex w-full items-center justify-between'>
            <Heading1 className=''>Dashboard</Heading1>
            <Paragraph1 className=''>{date}</Paragraph1>
         </div>

         <div className='w-4/5 self-center'>
            <Lottie animationData={engineers} loop={true} />
         </div>
      </div>
   );
};
export default DashboardPage;
