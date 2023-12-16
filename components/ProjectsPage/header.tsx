import { motion } from 'framer-motion';

const ProjectsHeader: React.FC = () => {
   return (
      <div className='me-40 flex w-full flex-row'>
         <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className='relative basis-2/3 bg-stone-300 py-40 ps-40'
         >
            <h1 className='absolute bottom-5 right-5 text-center text-8xl font-thin text-white'>
               Our
            </h1>
         </motion.div>
         <div className='relative basis-1/3 py-40 ps-40'>
            <h1 className='absolute bottom-5 left-5 text-center text-8xl font-thin text-stone-300'>
               Projects
            </h1>
         </div>
      </div>
   );
};
export default ProjectsHeader;
