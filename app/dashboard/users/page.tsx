'use client';
import UsersList from '@/components/AdminPanel/UsersPage/usersList';
import { Heading5, Heading6 } from '@/components/General/typography';

const UsersPage = () => {
   return (
      <>
         <div className='flex w-full items-center justify-between rounded-lg bg-slate-200 px-5 py-3 shadow-lg'>
            <Heading5 className=''>Users</Heading5>
            <button className='rounded-lg bg-blue-500 px-5 py-1 duration-500 hover:bg-slate-500'>
               <Heading6 className='text-white'>Add</Heading6>
            </button>
         </div>
         <div className='mt-2 flex w-full items-center justify-between rounded-lg bg-slate-200 px-5 py-3 shadow-lg'>
            <UsersList />
         </div>
      </>
   );
};
export default UsersPage;
