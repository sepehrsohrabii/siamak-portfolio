import {
   Heading6,
   Paragraph1,
   Paragraph2,
} from '@/components/General/typography';
import { getUsers } from '@/utils/actions';
import { IUsersSchema } from '@/utils/types';
import { useEffect, useState } from 'react';

const UsersList = () => {
   const [users, setUsers] = useState<IUsersSchema[]>([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   useEffect(() => {
      setLoading(true);
      const fetchUsers = async () => {
         const usersList = await getUsers();
         setUsers(usersList);
      };
      fetchUsers();
   }, []);
   return (
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
            {users.length > 0 ? (
               users.map((user) => (
                  <tr className='h-14'>
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
                           {user.status ? 'True' : 'False'}
                        </Paragraph2>
                     </td>
                     <td>
                        <Paragraph2 className='text-gray-700'>
                           View. Edit. Delete.
                        </Paragraph2>
                     </td>
                  </tr>
               ))
            ) : (
               <tr>
                  <td>loading...</td>
               </tr>
            )}
         </tbody>
      </table>
   );
};
export default UsersList;
