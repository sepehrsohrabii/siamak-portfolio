import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import {
   Heading5,
   Paragraph2,
   Paragraph3,
} from '@/components/General/typography';
import { getImageById, getTypeById } from '@/utils/actions';
import { ProjectsType } from '@/utils/types';

import ProjectImageSekelton from './projectImageSekelton';

export default function ProjectItem({ project }: { project: ProjectsType }) {
   const [imageUrl, setImageUrl] = useState<string>('');
   const [typeName, setTypeName] = useState<string>('');
   const [isLoading, setIsLoading] = useState<boolean>(true);
   useEffect(() => {
      const getImageUrl = async () => {
         const image = await getImageById(project.mainImageId);
         if (image) {
            setImageUrl(image.fileURL);
            setIsLoading(false);
         }
      };
      const getTypeName = async () => {
         const type = await getTypeById(project.typeId);
         if (type.title) {
            setTypeName(type.title);
         }
      };
      getImageUrl();
      getTypeName();
   }, [project.mainImageId, project.typeId]);
   return (
      <Link
         className='panel group ms-20 w-80 overflow-y-visible'
         href={`/projects/${project.slug}`}
      >
         <div className='relative flex justify-center'>
            <motion.div
               className='h-60 w-full duration-500'
               whileHover={{
                  scale: 1.1,
                  boxShadow: '10px 10px 0px 0px #D3D3D3',
               }}
            >
               {isLoading ? (
                  <div role='status' className='animate-pulse'>
                     <ProjectImageSekelton />
                  </div>
               ) : (
                  <Image
                     className='h-60 w-full object-cover saturate-0 duration-500 group-hover:saturate-100'
                     src={imageUrl}
                     alt={`${project.title} Image`}
                     width={400}
                     height={400}
                     onLoad={() => setIsLoading(false)}
                  />
               )}
            </motion.div>
         </div>
         <div className='border-s-2 border-slate-400 pb-5 ps-5 pt-10 duration-500 group-hover:border-cyan-700'>
            <Paragraph2 className='text-gray-400'>{typeName}</Paragraph2>
            <Heading5 className='line-clamp-1 text-gray-900'>
               {project.title}
            </Heading5>
            <Paragraph3 className='mt-6 text-gray-400'>
               {project.year}
            </Paragraph3>
            <Paragraph3 className='mt-3 text-gray-700'>
               More About ...
            </Paragraph3>
         </div>
      </Link>
   );
}
