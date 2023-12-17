'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

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
      <header className='absolute z-20 w-full py-10'>
         <div className='mx-40 flex justify-between'>
            <h1 className='border-b border-black text-4xl font-thin'>
               Graph Studio
            </h1>
            <div className='menu-container flex flex-row '>
               <div className={`menu ${isMenuVisible ? 'visible' : ''}`}>
                  <ul className='header-ul'>
                     {links.map((link) => (
                        <li className='header-li'>
                           <Link
                              className={`flex flex-row items-center justify-between border-2 border-white bg-white px-4 text-lg font-light duration-200 hover:border-b-2 hover:border-b-cyan-700 ${
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
                  className={`flex h-fit flex-row items-center justify-between border-2 border-white bg-white px-4 py-0 text-lg font-light duration-200 hover:border-b-2 hover:border-b-cyan-700 ${
                     isMenuVisible ? 'border-b-cyan-700' : ''
                  }`}
               >
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     fill='none'
                     viewBox='0 0 24 24'
                     strokeWidth={1}
                     stroke='currentColor'
                     className='me-2 h-6 w-6'
                  >
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                     />
                  </svg>
                  Menu
               </button>
            </div>
         </div>
      </header>
   );
}
