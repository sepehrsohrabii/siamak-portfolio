import Lottie from 'lottie-react';
import engineers from '../../public/animations/engineers.json';
import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

export default function TrustSection() {
   const container = useRef(null);
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start end', 'end end'],
   });
   return (
      <div className='mx-40 -mt-52'>
         <motion.div
            ref={container}
            className='flex flex-row'
            style={{ opacity: scrollYProgress }}
         >
            <div className='relative w-full'>
               <Lottie animationData={engineers} loop={true} />
            </div>
            <div className='absolute left-2/3 mr-40 mt-52'>
               <h2 className='mb-5 text-6xl font-thin text-gray-800'>
                  Trust Professionals
               </h2>
               <p className='text-gray w-full flex-wrap ps-20'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                  sunt? Laboriosam esse cumque, nesciunt exercitationem
                  asperiores, repellat minima natus a, consequatur nihil odio
                  delectus rem dolor laudantium eligendi animi modi.
               </p>
            </div>
         </motion.div>
      </div>
   );
}
