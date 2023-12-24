import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { PhotoIcon } from '@heroicons/react/24/outline';
import { Heading4, Paragraph3 } from '@/components/General/typography';
// import ModifyImagesForm from './editProjectForm';
import { ProjectsType } from '@/utils/types';
import MainImageUploadForm from './mainImageUploadForm';
import GalleryImagesUploadForm from './galleryImagesUploadForm';

export default function ModifyImagesModal({
   project,
}: {
   project: ProjectsType;
}) {
   const [open, setOpen] = useState(false);

   const cancelButtonRef = useRef(null);

   return (
      <>
         <button
            className='mx-2 rounded-lg bg-blue-500 px-5 py-1 duration-500 hover:bg-slate-500'
            onClick={() => setOpen(true)}
         >
            <Paragraph3 className='text-white'>Modify Images</Paragraph3>
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
                                 <div className='me-5 flex items-center justify-center rounded-full bg-green-100 p-2'>
                                    <PhotoIcon
                                       className='h-5 w-5 text-green-600'
                                       aria-hidden='true'
                                    />
                                 </div>
                                 <Dialog.Title
                                    as='h3'
                                    className='leading-6 text-gray-900'
                                 >
                                    <Heading4 className=''>
                                       Modify Images
                                    </Heading4>
                                 </Dialog.Title>
                              </div>
                              {/* <EditTypeForm
                                 setOpen={setOpen}
                                 cancelButtonRef={cancelButtonRef}
                                 type={type}
                              /> */}
                              <MainImageUploadForm project={project} />
                              <GalleryImagesUploadForm project={project} />
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
