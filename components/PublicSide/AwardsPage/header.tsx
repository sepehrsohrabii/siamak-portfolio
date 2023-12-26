import { Heading1 } from '@/components/General/typography';
import { motion } from 'framer-motion';

const AwardsHeader: React.FC = () => {
   return (
      <div className='me-40 flex w-full flex-row'>
         <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className='relative basis-1/3 bg-stone-300 py-80 ps-40 md:me-0'
         >
            <Heading1 className='absolute bottom-5 right-5 hidden text-right text-white md:block md:text-center'>
               Our
            </Heading1>
         </motion.div>
         <div className='relative basis-2/3 py-40 md:ps-40'>
            <Heading1 className='absolute bottom-5 left-5 hidden text-center text-stone-300 md:block'>
               Awards
            </Heading1>
            <Heading1 className='absolute bottom-5 left-5 text-left text-stone-300 md:hidden md:text-center'>
               Our
               <br></br>
               Awards
            </Heading1>
         </div>
      </div>
   );
};
export default AwardsHeader;
