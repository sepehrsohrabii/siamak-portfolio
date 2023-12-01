const links = [
   { name: 'Open roles', href: '#' },
   { name: 'Internship program', href: '#' },
   { name: 'Our values', href: '#' },
   { name: 'Meet our leadership', href: '#' },
];
const stats = [
   { name: 'Offices worldwide', value: '12' },
   { name: 'Full-time colleagues', value: '300+' },
   { name: 'Hours per week', value: '40' },
   { name: 'Paid time off', value: 'Unlimited' },
];

export default function StatisticsSection() {
   return (
      <div className='mx-40 my-32'>
         <div className='flex flex-row'>
            <div className='basis-1/2'>
               <div className='mx-auto max-w-2xl lg:mx-0'>
                  <h2 className='text-6xl font-thin tracking-tight text-black sm:text-6xl'>
                     Work with us
                  </h2>
                  <p className='mt-6 text-lg leading-8 text-gray-800'>
                     Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                     irure qui lorem cupidatat commodo. Elit sunt amet fugiat
                     veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad
                     ad non deserunt sunt. Qui irure qui lorem cupidatat
                     commodo. Elit sunt amet fugiat veniam occaecat fugiat
                     aliqua.
                  </p>
               </div>
               <div className='mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none'>
                  <div className='grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-black sm:grid-cols-2 md:flex lg:gap-x-10'>
                     {links.map((link) => (
                        <a key={link.name} href={link.href}>
                           {link.name} <span aria-hidden='true'>&rarr;</span>
                        </a>
                     ))}
                  </div>
               </div>
            </div>
            <div className='basis-1/2 ps-40'>
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
         </div>
      </div>
   );
}
