import LoadingPulse from '@/components/General/loadingPulse';
import LoadingSpin from '@/components/General/loadingSpin';
import {
   Heading6,
   Paragraph1,
   Paragraph2,
} from '@/components/General/typography';
import { getUsers } from '@/utils/actions';
import { IUsersSchema, UsersType } from '@/utils/types';
import { useEffect, useState } from 'react';
import DeleteUserModal from './deleteUserModal';
import EditUserModal from './editUserModal';

const UsersList = () => {
   const [users, setUsers] = useState<UsersType[]>([]);
   const [error, setError] = useState(null);
   useEffect(() => {
      const fetchUsers = async () => {
         const usersList: UsersType[] = await getUsers();
         setUsers(usersList);
      };
      fetchUsers();
   }, []);
   return (
      <>
         {users.length > 0 ? (
            <table className='w-full table-auto border-spacing-x-4 overflow-y-scroll'>
               <thead className='mb-5 border border-b-white'>
                  <tr>
                     <th className='text-start'>
                        <Heading6 className=''>Id</Heading6>
                     </th>
                     <th className='text-start'>
                        <Heading6 className=''>Name</Heading6>
                     </th>
                     <th className='text-start'>
                        <Heading6 className=''>Email</Heading6>
                     </th>
                     <th className='text-start'>
                        <Heading6 className=''>Password</Heading6>
                     </th>
                     <th className='text-start'>
                        <Heading6 className=''>Status</Heading6>
                     </th>
                     <th className='text-start'>
                        <Heading6 className=''>Operation</Heading6>
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {users.map((user) => (
                     <tr className='h-10' key={user.id}>
                        <td>
                           <Paragraph2 className='text-gray-700'>
                              {user.id}
                           </Paragraph2>
                        </td>
                        <td>
                           <Paragraph2 className='text-gray-700'>
                              {user.name}
                           </Paragraph2>
                        </td>
                        <td>
                           <Paragraph2 className='text-gray-700'>
                              {user.email}
                           </Paragraph2>
                        </td>
                        <td>
                           <Paragraph2 className='text-gray-700'>
                              {user.password}
                           </Paragraph2>
                        </td>
                        <td>
                           <Paragraph2 className='text-gray-700'>
                              {user.status ? 'Active' : 'Not Active'}
                           </Paragraph2>
                        </td>
                        <td>
                           <div className='flex items-center'>
                              <EditUserModal user={user} />
                              <DeleteUserModal
                                 userName={user.name}
                                 id={user.id}
                              />
                           </div>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         ) : (
            <LoadingSpin loadingText='Users are loading ...' />
         )}
      </>
   );
};
export default UsersList;
