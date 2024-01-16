'use client';
import Lottie from 'lottie-react';
import loading from '@/public/animations/loading.json';
import { Heading3 } from '@/components/General/typography';
export default function Loading() {
   // You can add any UI inside Loading, including a Skeleton.
   return (
      <div className='flex h-screen w-full flex-col items-center justify-center self-center text-center'>
         <div className='w-1/6 self-center'>
            <Lottie animationData={loading} loop={true} />
         </div>
         <Heading3 className=''>-- Graph Studio --</Heading3>
      </div>
   );
}
