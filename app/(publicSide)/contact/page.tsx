import ContactPageMainContainer from '@/components/PublicSide/ContactPage/mainContainer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Contact',
   description:
      'This page contains the contact information of the graph studio.',
};
const ContactPage = () => {
   return <ContactPageMainContainer />;
};
export default ContactPage;
