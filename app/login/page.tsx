import {
   Heading2,
   Heading3,
   Heading4,
   Heading5,
   Heading6,
} from '@/components/General/typography';
import LoginForm from '@/components/Login/loginForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Login',
};
export default function LoginPage() {
   return (
      <main className='flex items-center justify-center md:h-screen'>
         <div className='relative mx-auto flex w-full max-w-[450px] flex-col space-y-2.5 p-4'>
            <div className='flex h-20 w-full items-end rounded-lg bg-blue-500 p-6 shadow-md md:h-40'>
               <div className='w-full text-white'>
                  <Heading3 className='text-center'>Graph Studio</Heading3>
                  <Heading5 className='text-center uppercase text-white'>
                     Dashboard
                  </Heading5>
               </div>
            </div>
            <LoginForm />
         </div>
      </main>
   );
}
