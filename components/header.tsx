'use client';
import { useState } from 'react';
import Sidebar from './sidebar';

export default function Header() {
   const [open, setOpen] = useState(false);
   return (
      <header className='absolute z-20 w-full py-10'>
         <div className='mx-40 flex justify-between'>
            <h1 className='border-b border-black text-4xl font-bold'>
               Graph Studio
            </h1>
            <button className='p-3' onClick={() => setOpen(!open)}>
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='white'
                  className='h-6 w-6'
               >
                  <path
                     strokeLinecap='round'
                     strokeLinejoin='round'
                     d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                  />
               </svg>
            </button>
            <Sidebar open={open} setOpen={setOpen} />
         </div>
      </header>
   );
}
