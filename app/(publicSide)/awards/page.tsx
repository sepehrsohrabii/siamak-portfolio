import AwardsPageMainContainer from '@/components/PublicSide/AwardsPage/mainContainer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Awards',
   description: "This page contains the graph studio's awards.",
};
const AwardsPage = () => {
   return <AwardsPageMainContainer />;
};
export default AwardsPage;
