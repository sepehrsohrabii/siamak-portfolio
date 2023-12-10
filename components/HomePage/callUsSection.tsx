import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

export default function CallUsSection() {
   const container = useRef(null);
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start end', 'end end'],
   });
   return (
      <motion.div
         className='my-32 me-40 flex w-full flex-row'
         ref={container}
         style={{ opacity: scrollYProgress }}
      >
         <div className='basis-1/2 bg-stone-300 py-40 ps-40'>
            <h4 className='text-center text-6xl font-thin'>We are here</h4>
         </div>
         <div className='basis-1/2 self-center text-center'>
            <h4 className='mb-3 text-6xl text-cyan-700'>Call Us Now</h4>
            <a
               className='border border-cyan-700 bg-cyan-700 px-5 py-3 text-white duration-200 hover:bg-white hover:text-cyan-700'
               href='tel:+989113373811'
            >
               +989113373811
            </a>
         </div>
      </motion.div>
   );
}
