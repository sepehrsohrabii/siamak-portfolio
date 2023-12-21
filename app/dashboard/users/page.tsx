'use client';
import AddUserModal from '@/components/AdminPanel/UsersPage/addUserModal';
import UsersList from '@/components/AdminPanel/UsersPage/usersList';
import { Heading5, Heading6 } from '@/components/General/typography';

const UsersPage = () => {
   return (
      <div className='flex h-full flex-col'>
         <div className='flex w-full items-center justify-between rounded-lg bg-slate-200 px-5 py-3 shadow-lg'>
            <Heading5 className=''>Users</Heading5>
            <AddUserModal />
         </div>
         <div className='mt-2 h-full w-full rounded-lg bg-slate-200 px-5 py-3 shadow-lg'>
            <UsersList />
         </div>
      </div>
   );
};
export default UsersPage;
