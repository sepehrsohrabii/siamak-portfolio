import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { UserMinusIcon } from '@heroicons/react/24/outline';
import {
   Heading4,
   Heading5,
   Heading6,
   Paragraph1,
   Paragraph2,
   Paragraph3,
} from '@/components/General/typography';
import LoadingSpin from '@/components/General/loadingSpin';
import { removeUser } from '@/utils/actions';

export default function DeleteUserModal({
   userName,
   id,
   fetchUsers,
}: {
   userName: string;
   id: string;
   fetchUsers: () => void;
}) {
   const [open, setOpen] = useState(false);
   const [error, setError] = useState<string>('');
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const cancelButtonRef = useRef(null);

   const onClickFunction = async () => {
      setIsLoading(true);
      try {
         const deleted = await removeUser(id);

         if (deleted) {
            setIsLoading(false);
            setOpen(false);
            fetchUsers();
         }
      } catch (e) {
         //  console.log(e.message);
         setError(e.message);
         setIsLoading(false);
      }
   };
   return (
      <>
         <button
            className='mx-2 rounded-lg bg-red-500 px-5 py-1 duration-500 hover:bg-slate-500'
            onClick={() => setOpen(true)}
         >
            <Paragraph3 className='text-white'>Delete</Paragraph3>
         </button>
         <Transition.Root show={open} as={Fragment}>
            <Dialog
               as='div'
               className='relative z-10'
               initialFocus={cancelButtonRef}
               onClose={setOpen}
            >
               <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
               >
                  <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
               </Transition.Child>

               <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
                  <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
                     <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                        enterTo='opacity-100 translate-y-0 sm:scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                        leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                     >
                        <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                           <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                              <div className='mb-5 flex items-center text-center'>
                                 <div className='me-5 flex items-center justify-center rounded-full bg-red-100 p-2'>
                                    <UserMinusIcon
                                       className='h-5 w-5 text-red-600'
                                       aria-hidden='true'
                                    />
                                 </div>
                                 <Dialog.Title
                                    as='h3'
                                    className='leading-6 text-gray-900'
                                 >
                                    <Heading4 className=''>
                                       Delete an admin
                                    </Heading4>
                                 </Dialog.Title>
                              </div>
                              <Paragraph2 className=''>
                                 By confirming this {userName} user's data will
                                 delete completely. Are you sure?
                              </Paragraph2>
                              {error && (
                                 <div className='my-2 rounded bg-red-100 px-3 py-2'>
                                    <Paragraph2 className='text-red-700'>
                                       {error}
                                    </Paragraph2>
                                 </div>
                              )}
                              <div className='bg-gray-50 py-3 sm:flex sm:flex-row-reverse'>
                                 {!isLoading ? (
                                    <button
                                       type='button'
                                       className='inline-flex w-full justify-center rounded-md bg-red-600 px-4 py-1 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto'
                                       onClick={onClickFunction}
                                    >
                                       <Paragraph1 className=''>
                                          Delete
                                       </Paragraph1>
                                    </button>
                                 ) : (
                                    <button
                                       type='button'
                                       className='inline-flex w-full justify-center rounded-md bg-red-600 px-4 py-1 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto'
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
                        </Dialog.Panel>
                     </Transition.Child>
                  </div>
               </div>
            </Dialog>
         </Transition.Root>
      </>
   );
}
