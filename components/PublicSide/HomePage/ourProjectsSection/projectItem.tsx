import {
   Heading5,
   Paragraph2,
   Paragraph3,
} from '@/components/General/typography';
import { motion } from 'framer-motion';

export default function ProjectItem({
   project,
   key,
}: {
   project: any;
   key: number;
}) {
   return (
      <div key={key} className='panel ms-32 w-96 overflow-y-visible'>
         <motion.div className='group relative flex justify-center'>
            <motion.img
               className='h-96 w-full object-cover saturate-0 duration-500 group-hover:saturate-100'
               src='/images/2.jpg'
               whileHover={{
                  scale: 1.1,
                  boxShadow: '10px 10px 0px 0px #D3D3D3',
               }}
            />
            <motion.a
               className='absolute hidden self-center border-2 border-white p-4 text-black duration-500 group-hover:block'
               href='#'
            >
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.2}
                  stroke='currentColor'
                  className='h-10 w-10 text-white'
               >
                  <path
                     strokeLinecap='round'
                     strokeLinejoin='round'
                     d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                  />
                  <path
                     strokeLinecap='round'
                     strokeLinejoin='round'
                     d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                  />
               </svg>
            </motion.a>
         </motion.div>
         <div className='border-s-2 border-slate-400 py-10 ps-5'>
            <Paragraph2 className='text-gray-400'>Interior</Paragraph2>
            <Heading5 className='text-gray-900'>Tehran Building</Heading5>
            <Paragraph3 className='mt-10 text-gray-400'>Oct. 2019</Paragraph3>
         </div>
      </div>
   );
}
