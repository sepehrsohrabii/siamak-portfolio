'use client';
import AddUserModal from '@/components/AdminPanel/UsersPage/addUserModal';
import UsersList from '@/components/AdminPanel/UsersPage/usersList';
import { Heading5 } from '@/components/General/typography';
import { getUsers } from '@/utils/actions';
import { UsersType } from '@/utils/types';
import { useEffect, useState } from 'react';

const UsersPage = () => {
   const [users, setUsers] = useState<UsersType[]>([]);
   const [error, setError] = useState(null);
   const fetchUsers = async () => {
      const usersList: UsersType[] = await getUsers();
      setUsers(usersList);
   };
   useEffect(() => {
      fetchUsers();
   }, []);
   return (
      <div className='flex h-full flex-col'>
         <div className='flex w-full items-center justify-between rounded-lg bg-slate-200 px-5 py-3 shadow-lg'>
            <Heading5 className=''>Users</Heading5>
            <AddUserModal fetchUsers={fetchUsers} />
         </div>
         <div className='mt-2 h-full w-full rounded-lg bg-slate-200 px-5 py-3 shadow-lg'>
            <UsersList users={users} fetchUsers={fetchUsers} />
         </div>
      </div>
   );
};
export default UsersPage;
