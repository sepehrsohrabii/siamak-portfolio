'use client';
import AddTypeModal from '@/components/AdminPanel/TypesPage/addTypeModal';
import TypesList from '@/components/AdminPanel/TypesPage/typesList';
import { Heading5, Heading6 } from '@/components/General/typography';

const TypesPage = () => {
   return (
      <div className='flex h-full flex-col'>
         <div className='flex w-full items-center justify-between rounded-lg bg-slate-200 px-5 py-3 shadow-lg'>
            <Heading5 className=''>Types</Heading5>
            <AddTypeModal />
         </div>
         <div className='mt-2 h-full w-full rounded-lg bg-slate-200 px-5 py-3 shadow-lg'>
            <TypesList />
         </div>
      </div>
   );
};
export default TypesPage;
