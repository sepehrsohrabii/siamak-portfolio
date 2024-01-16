import SideBar from '@/components/AdminPanel/SideBar';
import { Metadata } from 'next';
import React from 'react';

export const fetchCache = 'force-no-store';
export const revalidate = 0;

export const metadata: Metadata = {
   title: 'Dashboard',
};
const Template = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className='flex h-screen w-full'>
         <SideBar />
         <div className='h-full w-full p-5'>{children}</div>
      </div>
   );
};

export default Template;
