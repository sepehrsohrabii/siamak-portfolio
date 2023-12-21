import LoadingSpin from '@/components/General/loadingSpin';
import { Label, Paragraph1, Paragraph2 } from '@/components/General/typography';
import { editUser } from '@/utils/actions';
import { UsersType } from '@/utils/types';
import { Dispatch, MutableRefObject, SetStateAction, useState } from 'react';

const EditUserForm = ({
   setOpen,
   cancelButtonRef,
   user,
}: {
   setOpen: Dispatch<SetStateAction<boolean>>;
   cancelButtonRef: MutableRefObject<null>;
   user: UsersType;
}) => {
   const [error, setError] = useState<string>('');
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [name, setName] = useState<string>(user.name);
   const [email, setEmail] = useState<string>(user.email);
   const [password, setPassword] = useState<string>(user.password);
   const [status, setStatus] = useState<boolean>(user.status);

   const onClickFunction = async () => {
      setIsLoading(true);
      try {
         const updatedUser = await editUser(
            user.id,
            name,
            email,
            password,
            status
         );
         console.log(updatedUser);
         if (updatedUser) {
            setIsLoading(false);
            setOpen(false);
         }
      } catch (e) {
         //  console.log(e.message);
         setError(e.message);
         setIsLoading(false);
      }
   };
   return (
      <div className='w-full'>
         <Label htmlFor='name' className='text-gray-900'>
            Name
         </Label>
         <input
            type='name'
            name='name'
            id='name'
            className='mb-2 block w-full rounded-md border-0 px-2 py-1.5 font-normal text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            placeholder='Siamak'
            onChange={(e) => setName(e.target.value)}
            value={name}
         />
         <Label htmlFor='email' className='text-gray-900'>
            Email
         </Label>
         <input
            type='email'
            name='email'
            id='email'
            className='mb-2 block w-full rounded-md border-0 px-2 py-1.5 font-normal text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            placeholder='mail@mail.com'
            onChange={(e) => setEmail(e.target.value)}
            required
            value={email}
         />
         <Label htmlFor='password' className='text-gray-900'>
            Password
         </Label>
         <input
            type='password'
            name='password'
            id='password'
            className='mb-2 block w-full rounded-md border-0 px-2 py-1.5 font-normal text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            placeholder='0.00'
            onChange={(e) => setPassword(e.target.value)}
            required
            value={password}
         />
         <div className='flex items-center'>
            <Label htmlFor='status' className='me-2 text-gray-900'>
               Active
            </Label>
            <input
               id='status'
               name='status'
               type='checkbox'
               className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
               onChange={(e) => {
                  setStatus(e.target.checked);
               }}
               checked={status}
            />
         </div>
         {error && (
            <div className='my-2 rounded bg-red-100 px-3 py-2'>
               <Paragraph2 className='text-red-700'>{error}</Paragraph2>
            </div>
         )}
         <div className='bg-gray-50 py-3 sm:flex sm:flex-row-reverse'>
            {!isLoading ? (
               <button
                  type='button'
                  className='inline-flex w-full justify-center rounded-md bg-green-600 px-4 py-1 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto'
                  onClick={onClickFunction}
               >
                  <Paragraph1 className=''>Save</Paragraph1>
               </button>
            ) : (
               <button
                  type='button'
                  className='inline-flex w-full justify-center rounded-md bg-green-600 px-4 py-1 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto'
                  onClick={() => {}}
               >
                  <LoadingSpin loadingText='Creating ...' />
               </button>
            )}
            <button
               type='button'
               className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-4 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
               onClick={() => setOpen(false)}
               ref={cancelButtonRef}
            >
               <Paragraph1 className=''>Cancel</Paragraph1>
            </button>
         </div>
      </div>
   );
};
export default EditUserForm;
