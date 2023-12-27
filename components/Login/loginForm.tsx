'use client';
import {
   AtSymbolIcon,
   KeyIcon,
   ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/utils/actions';
import { Heading5 } from '../General/typography';

export default function LoginForm() {
   const [errorMessage, dispatch] = useFormState(authenticate, undefined);

   return (
      <form action={dispatch} className='space-y-3'>
         <div className='flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8 shadow-md'>
            <Heading5 className='mb-3'>Please log in to continue.</Heading5>
            <div className='w-full'>
               <div>
                  <label
                     className='mb-3 mt-5 block text-lg font-medium text-gray-900'
                     htmlFor='email'
                  >
                     Email
                  </label>
                  <div className='relative'>
                     <input
                        className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
                        id='email'
                        type='email'
                        name='email'
                        placeholder='Enter your email address'
                        required
                     />
                     <AtSymbolIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
                  </div>
               </div>
               <div className='mt-4'>
                  <label
                     className='mb-3 mt-5 block text-lg font-medium text-gray-900'
                     htmlFor='password'
                  >
                     Password
                  </label>
                  <div className='relative'>
                     <input
                        className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
                        id='password'
                        type='password'
                        name='password'
                        placeholder='Enter password'
                        required
                        minLength={6}
                     />
                     <KeyIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
                  </div>
               </div>
            </div>
            <LoginButton />
            <div
               className='flex h-8 items-end space-x-1'
               aria-live='polite'
               aria-atomic='true'
            >
               {errorMessage && (
                  <>
                     <ExclamationCircleIcon className='h-5 w-5 text-red-500' />
                     <p className='text-sm text-red-500'>{errorMessage}</p>
                  </>
               )}
            </div>
         </div>
      </form>
   );
}

function LoginButton() {
   const { pending } = useFormStatus();

   return (
      <button
         className='mt-4 flex h-10 w-full items-center justify-center rounded-lg bg-blue-500 px-4 text-lg font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'
         aria-disabled={pending}
      >
         Log in <ArrowRightIcon className='ml-2 h-5 w-5 text-gray-50' />
      </button>
   );
}
