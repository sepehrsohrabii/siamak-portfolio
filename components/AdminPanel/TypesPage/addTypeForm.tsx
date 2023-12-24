import LoadingSpin from '@/components/General/loadingSpin';
import { Label, Paragraph1, Paragraph2 } from '@/components/General/typography';
import { createType } from '@/utils/actions';
import slugify from '@/utils/functions';
import { Dispatch, MutableRefObject, SetStateAction, useState } from 'react';

const AddTypeForm = ({
   setOpen,
   cancelButtonRef,
   fetchTypes,
}: {
   setOpen: Dispatch<SetStateAction<boolean>>;
   cancelButtonRef: MutableRefObject<null>;
   fetchTypes: () => void;
}) => {
   const [error, setError] = useState<string>('');
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [title, setTitle] = useState<string>('');
   const [slug, setSlug] = useState<string>('');
   const [orderingNumber, setOrderingNumber] = useState<number>(0);
   const [status, setStatus] = useState<boolean>(false);

   const handleTitleChange = (value: string) => {
      const newTitle = value;
      setTitle(newTitle);
      const newSlug = slugify(newTitle);
      setSlug(newSlug);
   };

   const onClickFunction = async () => {
      setIsLoading(true);
      try {
         const type = await createType(title, slug, orderingNumber, status);
         console.log(type);
         if (type) {
            setIsLoading(false);
            setOpen(false);
            fetchTypes();
         }
      } catch (e) {
         //  console.log(e.message);
         setError(e.message);
         setIsLoading(false);
      }
   };
   return (
      <div className='w-full'>
         <Label htmlFor='title' className='text-gray-900'>
            Title
         </Label>
         <input
            type='title'
            name='title'
            id='title'
            className='mb-2 block w-full rounded-md border-0 px-2 py-1.5 font-normal text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            placeholder='Interior'
            onChange={(e) => handleTitleChange(e.target.value)}
         />
         <Label htmlFor='slug' className='text-gray-900'>
            Slug
         </Label>
         <input
            type='slug'
            name='slug'
            id='slug'
            className='mb-2 block w-full rounded-md border-0 px-2 py-1.5 font-normal text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            placeholder='mail@mail.com'
            onChange={(e) => setSlug(e.target.value)}
            required
            value={slug}
         />
         <Label htmlFor='orderingNumber' className='text-gray-900'>
            OrderingNumber
         </Label>
         <input
            type='number'
            name='orderingNumber'
            id='orderingNumber'
            className='mb-2 block w-full rounded-md border-0 px-2 py-1.5 font-normal text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            placeholder='0'
            onChange={(e) => setOrderingNumber(Number(e.target.value))}
            required
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
                  <Paragraph1 className=''>Create</Paragraph1>
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
export default AddTypeForm;
