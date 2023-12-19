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
         console.log(users);
      };
      fetchUsers();
   }, []);
   return (
      <div>
         <table className='table-auto'>
            <thead>
               <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Status</th>
               </tr>
            </thead>
            <tbody>
               {users.length > 0 ? (
                  users.map((user) => (
                     <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>{user.status}</td>
                     </tr>
                  ))
               ) : (
                  <tr>
                     <td>loading...</td>
                  </tr>
               )}
            </tbody>
         </table>
      </div>
   );
};
export default UsersList;
