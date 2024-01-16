import AboutPageMainContainer from '@/components/PublicSide/AboutPage/mainContainer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'About',
   description: 'This page is about Graph Foundation.',
};
const AboutPage = () => {
   return <AboutPageMainContainer />;
};
export default AboutPage;
