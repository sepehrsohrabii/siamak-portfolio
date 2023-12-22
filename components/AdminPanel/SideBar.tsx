'use client';
import Link from 'next/link';
import { Heading5 } from '../General/typography';
import { usePathname } from 'next/navigation';
import { signOutFunc } from '@/utils/actions';
import homeIcon from '@/public/icons/home.png';
import statisticsIcon from '@/public/icons/bar-chart.png';
import usersIcon from '@/public/icons/group.png';
import typesIcon from '@/public/icons/menu.png';
import projectsIcon from '@/public/icons/modeling.png';
import Image from 'next/image';

const SideBar = () => {
   const path = usePathname();
   const links = [
      { name: 'Home', path: '/dashboard', imgPath: homeIcon },
      {
         name: 'Statistics',
         path: '/dashboard/statistics',
         imgPath: statisticsIcon,
      },
      { name: 'Users', path: '/dashboard/users', imgPath: usersIcon },
      { name: 'Types', path: '/dashboard/types', imgPath: typesIcon },
      {
         name: 'Projects',
         path: '/dashboard/projects',
         imgPath: projectsIcon,
      },
   ];
   return (
      <div className='flex h-full w-96 flex-col p-5'>
         <div className='flex h-60 items-end rounded-lg bg-blue-500 p-5 shadow-lg'>
            <Heading5 className='w-full text-right text-white'>
               Graph Studio
            </Heading5>
         </div>
         {links.map((link) => (
            <Link
               key={link.path}
               className={`mt-2 flex items-center rounded-lg px-5 py-2 shadow-lg duration-500 hover:bg-slate-300 ${
                  path === link.path ? 'bg-blue-300' : 'bg-slate-200'
               }`}
               href={link.path}
            >
               <Image
                  src={link.imgPath}
                  className='me-2'
                  alt={`${link.name} icon`}
                  width={20}
                  height={20}
               />

               <Heading5 className=''>{link.name}</Heading5>
            </Link>
         ))}
         <div className='mt-2 h-auto w-full grow rounded-lg bg-slate-200 shadow-lg'></div>
         <form
            action={async () => {
               await signOutFunc();
            }}
         >
            <button className='mt-2 flex h-[48px] w-full grow items-center justify-center gap-2 rounded-lg bg-slate-200 p-3 px-5 py-2 text-sm font-medium shadow-lg duration-500 hover:bg-sky-100 md:flex-none md:justify-start'>
               <Image
                  src='/icons/turn-off.png'
                  className='me-2'
                  width={20}
                  height={20}
                  alt='sign out icon'
               />
               <Heading5 className=''>Sign Out</Heading5>
            </button>
         </form>
      </div>
   );
};
export default SideBar;
