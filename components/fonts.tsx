import { Inter, Roboto_Condensed } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({ subsets: ['latin'] });

export const roboto_c = Roboto_Condensed({
   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
   style: ['normal'],
   subsets: ['latin'],
   display: 'swap',
});

export const roboto_c_local = localFont({
   src: [
      {
         path: '../public/fonts/RobotoCondensed-Black.ttf',
         weight: '900',
         style: 'normal',
      },
      {
         path: '../public/fonts/RobotoCondensed-ExtraBold.ttf',
         weight: '800',
         style: 'normal',
      },
      {
         path: '../public/fonts/RobotoCondensed-Bold.ttf',
         weight: '700',
         style: 'normal',
      },
      {
         path: '../public/fonts/RobotoCondensed-SemiBold.ttf',
         weight: '600',
         style: 'normal',
      },
      {
         path: '../public/fonts/RobotoCondensed-Medium.ttf',
         weight: '500',
         style: 'normal',
      },
      {
         path: '../public/fonts/RobotoCondensed-Regular.ttf',
         weight: '400',
         style: 'normal',
      },
      {
         path: '../public/fonts/RobotoCondensed-Light.ttf',
         weight: '300',
         style: 'normal',
      },
      {
         path: '../public/fonts/RobotoCondensed-ExtraLight.ttf',
         weight: '200',
         style: 'normal',
      },
      {
         path: '../public/fonts/RobotoCondensed-Thin.ttf',
         weight: '100',
         style: 'normal',
      },
   ],
});
