'use client';
import { ScrollerMotion } from 'scroller-motion';
import AwardsHeader from '@/components/PublicSide/AwardsPage/header';
import SingleAwardItem from '@/components/PublicSide/AwardsPage/singleAward';

const Awards: React.FC = () => {
   const awards = [0, 1, 2, 3, 4, 5];
   return (
      <>
         <AwardsHeader />
         <div className='mx-40 my-20'>
            {awards.map((award, index) => (
               <SingleAwardItem award={award} key={index} />
            ))}
         </div>
      </>
   );
};
export default Awards;
