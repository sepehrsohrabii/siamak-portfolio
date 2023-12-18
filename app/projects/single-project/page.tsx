'use client';
import GallerySection from '@/components/SingleProjectPage/gallerySection';
import { motion } from 'framer-motion';

const SingleProject: React.FC = () => {
   return (
      <div>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='my-32 flex items-center bg-stone-300 p-5 px-40'
         >
            <img
               src='/icons/award.png'
               alt='award icon'
               className='me-5 h-8 w-8'
            />
            <h5 className='text-3xl font-thin text-black'>
               The Best Design In 2023 Lorem ipsum dolor sit amet consectetur
               adipisicing elit
            </h5>
         </motion.div>
         <div className='mx-40 my-32'>
            <h1 className='text-8xl font-thin'>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
         </div>
         <div className='my-32 h-96 bg-[url("/images/1.jpg")] bg-cover bg-fixed bg-center'></div>
         <div className='mx-40 my-32'>
            <p className='text-3xl font-normal'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Praesentium aut minima quam numquam iste dicta! Accusamus hic
               delectus molestiae nam iusto sint quis. Nam blanditiis sequi
               consectetur repudiandae quis nulla.
            </p>
         </div>
         <div className='mx-40 my-32 grid grid-cols-2 gap-10'>
            <h6 className='text-xl font-thin'>
               Type: <span className='text-xl font-normal'>Web Design</span>
            </h6>
            <h6 className='text-xl font-thin'>
               Type: <span className='text-xl font-normal'>Web Design</span>
            </h6>
            <h6 className='text-xl font-thin'>
               Type: <span className='text-xl font-normal'>Web Design</span>
            </h6>
            <h6 className='text-xl font-thin'>
               Type: <span className='text-xl font-normal'>Web Design</span>
            </h6>
         </div>
         <GallerySection />
      </div>
   );
};
export default SingleProject;
