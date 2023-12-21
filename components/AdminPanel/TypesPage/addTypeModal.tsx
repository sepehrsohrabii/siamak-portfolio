import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { PlusIcon } from '@heroicons/react/24/outline';
import { Heading4, Heading6 } from '@/components/General/typography';
import AddTypeForm from './addTypeForm';

export default function AddTypeModal() {
   const [open, setOpen] = useState(false);

   const cancelButtonRef = useRef(null);

   return (
      <>
         <button
            className='rounded-lg bg-blue-500 px-5 py-1 duration-500 hover:bg-slate-500'
            onClick={() => setOpen(true)}
         >
            <Heading6 className='text-white'>Add</Heading6>
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
                                 <div className='me-5 flex items-center justify-center rounded-full bg-blue-100 p-2'>
                                    <PlusIcon
                                       className='h-5 w-5 text-blue-600'
                                       aria-hidden='true'
                                    />
                                 </div>
                                 <Dialog.Title
                                    as='h3'
                                    className='leading-6 text-gray-900'
                                 >
                                    <Heading4 className=''>
                                       Create New Type
                                    </Heading4>
                                 </Dialog.Title>
                              </div>
                              <AddTypeForm
                                 setOpen={setOpen}
                                 cancelButtonRef={cancelButtonRef}
                              />
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
