import { Heading1 } from '@/components/General/typography';
import { motion } from 'framer-motion';

const ProjectsHeader: React.FC = () => {
   return (
      <div className='w-full md:me-40 md:flex md:flex-row'>
         <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className='relative me-24 basis-2/3 bg-stone-300 py-40 ps-40 md:me-0'
         >
            <Heading1 className='absolute bottom-5 right-5 hidden text-right text-white md:block md:text-center'>
               Our
            </Heading1>
            <Heading1 className='absolute bottom-5 right-5 text-right text-white md:hidden md:text-center'>
               Our
               <br></br>
               Projects
            </Heading1>
         </motion.div>
         <div className='relative hidden basis-1/3 py-40 md:block md:ps-40'>
            <Heading1 className='absolute bottom-5 left-5 text-center text-stone-300'>
               Projects
            </Heading1>
         </div>
      </div>
   );
};
export default ProjectsHeader;
