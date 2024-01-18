'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Heading6 } from '../General/typography';
import Image from 'next/image';
import logo from '@/public/Logo.svg';
export default function Header() {
   const [isMenuVisible, setMenuVisibility] = useState(false);
   const path = usePathname();
   const toggleMenu = () => {
      setMenuVisibility(!isMenuVisible);
   };
   const links = [
      { name: 'Home', path: '/' },
      { name: 'Projects', path: '/projects' },
      { name: 'Awards', path: '/awards' },
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' },
   ];
   return (
      <header className='absolute top-0 z-20 w-full py-10'>
         <div className='mx-5 flex justify-between md:mx-40'>
            <div className='h-16'>
               <Link href='/'>
                  <Image
                     className={`${
                        path === '/' ? 'hidden' : 'h-20'
                     } w-full md:block md:h-24`}
                     height={100}
                     src={logo}
                     alt='The Logo of Graph Studio'
                     priority
                  />
               </Link>
            </div>
            <div className='menu-container flex flex-col-reverse md:flex-row'>
               <div className={`menu ${isMenuVisible ? 'visible' : ''}`}>
                  <ul className='header-ul'>
                     {links.map((link, index) => (
                        <li className='header-li mt-5 md:mt-0' key={index}>
                           <Link
                              className={`flex flex-row items-center justify-between border-2 border-white bg-white px-4 text-base font-light duration-200 hover:border-b-2 hover:border-b-cyan-700 ${
                                 path === link.path ? 'border-b-cyan-700' : ''
                              }`}
                              href={link.path}
                           >
                              {link.name}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>
               <button
                  onClick={toggleMenu}
                  className={`flex h-fit flex-row items-center justify-between border-2 border-white bg-white px-4 py-0 duration-200 hover:border-b-2 hover:border-b-cyan-700 ${
                     isMenuVisible ? 'border-b-cyan-700' : ''
                  }`}
               >
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     fill='none'
                     viewBox='0 0 24 24'
                     strokeWidth={1.2}
                     stroke='currentColor'
                     className='me-2 h-6 w-6'
                  >
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                     />
                  </svg>
                  <Heading6 className='uppercase'>Menu</Heading6>
               </button>
            </div>
         </div>
      </header>
   );
}
