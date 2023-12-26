import Lottie from 'lottie-react';
import engineers from '@/public/animations/engineers.json';
import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import {
   Heading2,
   Paragraph1,
   Paragraph2,
} from '@/components/General/typography';

export default function TrustSection() {
   const container = useRef(null);
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start end', 'end end'],
   });
   return (
      <div className='-mt-52 md:mx-40'>
         <motion.div
            ref={container}
            className='md:flex md:flex-row'
            style={{ opacity: scrollYProgress }}
         >
            <div className='relative w-full'>
               <Lottie animationData={engineers} loop={true} />
            </div>
            <div className='mt-10 px-5 md:absolute md:left-2/3 md:mr-40 md:mt-52 md:px-0'>
               <Heading2 className='mb-5 text-gray-800'>
                  Trust Professionals
               </Heading2>
               <Paragraph2 className='text-gray w-full flex-wrap md:ps-20'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                  sunt? Laboriosam esse cumque, nesciunt exercitationem
                  asperiores, repellat minima natus a, consequatur nihil odio
                  delectus rem dolor laudantium eligendi animi modi.
               </Paragraph2>
            </div>
         </motion.div>
      </div>
   );
}
