import { motion, useAnimation } from 'framer-motion';
import ProjectItem from './projectItem';
import { useEffect, useState } from 'react';

const TestSection = () => {
   const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   const controls = useAnimation();

   const [inView, setInView] = useState(false);

   const projectsVariants = {
      visible: {
         x: 0,
      },
      hidden: {
         x: '-100vw',
      },
   };

   useEffect(() => {
      const handleScroll = () => {
         // check if in view
         const inView = {};

         if (inView) {
            controls.start('visible');
         } else {
            controls.stop();
         }

         setInView(inView);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, [controls]);

   return (
      <motion.div animate={controls} variants={projectsVariants}>
         {projects.map((project, index) => (
            <ProjectItem project={project} key={index} />
         ))}
      </motion.div>
   );
};
export default TestSection;
