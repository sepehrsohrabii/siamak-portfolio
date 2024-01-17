import { Heading2, Paragraph1 } from '@/components/General/typography';
import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

const links = [
   // { name: 'Open roles', href: '#' },
   // { name: 'Internship program', href: '#' },
   // { name: 'Our values', href: '#' },
   { name: 'Meet our leadership', href: '/about' },
];
const stats = [
   { name: 'Projects', value: '87+' },
   { name: 'Awards', value: '15+' },
   { name: 'Clients', value: '10+' },
   { name: 'Paid time off', value: 'Unlimited' },
];

export default function StatisticsSection() {
   const container = useRef(null);
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start end', 'end end'],
   });
   return (
      <div className='mx-5 my-32 md:mx-40'>
         <motion.div
            ref={container}
            className='flex flex-row'
            style={{ opacity: scrollYProgress }}
         >
            <div className='basis-3/4 pe-5 md:basis-1/2 md:pe-0'>
               <div className='mx-auto max-w-2xl lg:mx-0'>
                  <Heading2 className='tracking-tight text-black'>
                     Work with us
                  </Heading2>
                  <Paragraph1 className='mt-6 text-gray-800'>
                     By choosing to work with us, you're not just engaging
                     architects; you're joining hands with creators dedicated to
                     bringing your dreams to life. At Graph, we value the unique
                     essence of each project, fostering a partnership that is as
                     dynamic as it is visionary.
                  </Paragraph1>
               </div>
               <div className='mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none'>
                  <div className='grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-black sm:grid-cols-2 md:flex lg:gap-x-10'>
                     {links.map((link) => (
                        <Link key={link.name} href={link.href}>
                           {link.name} <span aria-hidden='true'>&rarr;</span>
                        </Link>
                     ))}
                  </div>
               </div>
            </div>
            <div className='basis-1/4 md:basis-1/2 md:ps-40'>
               <dl className='grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-2'>
                  {stats.map((stat) => (
                     <div key={stat.name} className='flex flex-col-reverse'>
                        <dt className='text-base leading-7 text-gray-800'>
                           {stat.name}
                        </dt>
                        <dd className='text-2xl font-bold leading-9 tracking-tight text-black'>
                           {stat.value}
                        </dd>
                     </div>
                  ))}
               </dl>
            </div>
         </motion.div>
      </div>
   );
}
