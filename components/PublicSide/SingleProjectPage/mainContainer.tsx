'use client';
import {
   Heading1,
   Heading4,
   Heading6,
   Paragraph1,
   Paragraph4,
} from '@/components/General/typography';
import GallerySection from '@/components/PublicSide/SingleProjectPage/gallerySection';
import { getImageById, getProjectBySlug, getTypeById } from '@/utils/actions';
import { ProjectsType } from '@/utils/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const SingleProjectMainContainer = ({
   params,
}: {
   params: { slug: string };
}) => {
   const [project, setProject] = useState<ProjectsType | null>(null);
   const [mainImageUrl, setMainImageUrl] = useState<string>('');
   const [typeName, setTypeName] = useState<string>('');
   const getImageUrl = async () => {
      if (!project) return;
      try {
         const image = await getImageById(project.mainImageId);
         if (image.fileURL) {
            setMainImageUrl(image.fileURL);
         }
      } catch (e) {
         console.log(e);
      }
   };
   const getTypeName = async () => {
      if (!project) return;
      const type = await getTypeById(project.typeId);
      if (type.title) {
         setTypeName(type.title);
      }
   };
   const fetchProject = async () => {
      try {
         const res = await getProjectBySlug(params.slug);
         setProject(res);
      } catch (error) {
         console.log(error);
      }
   };
   useEffect(() => {
      fetchProject();
   }, []);
   useEffect(() => {
      if (project) {
         getImageUrl();
         getTypeName();
      }
   }, [project]);
   return (
      <div>
         {project?.award !== '' && (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1 }}
               className='mb-36 mt-40 flex items-center bg-stone-300 p-5 px-5 md:px-40'
            >
               <Image
                  src='/icons/award.png'
                  alt='award icon'
                  className='me-2 md:me-5'
                  width={32}
                  height={32}
               />
               <Heading4 className='text-gray-700'>{project?.award}</Heading4>
            </motion.div>
         )}
         <div className='mx-5 my-32 md:mx-40'>
            <Heading1 className='text-gray-800'>{project?.title}</Heading1>
         </div>
         {mainImageUrl && (
            // <div
            //    className={`my-32 h-96 bg-cover bg-fixed bg-center`}
            //    style={{ backgroundImage: `url(${mainImageUrl})` }}
            // ></div>
            <div
               style={{
                  position: 'relative',
                  height: '60vh',
                  width: '100%',
                  clipPath: 'inset(0 0 0 0)',
               }}
            >
               <div
                  style={{
                     position: 'fixed',
                     height: '100%',
                     width: '100%',
                     left: '0',
                     top: '0',
                  }}
               >
                  <Image
                     src={mainImageUrl}
                     alt='main image'
                     fill
                     objectFit='cover'
                     quality={75}
                     sizes='100vw'
                  />
               </div>
            </div>
         )}
         <div className='mx-5 my-32 md:mx-40'>
            <Paragraph4 className='text-gray-700'>
               {project?.description}
            </Paragraph4>
         </div>
         <div className='mx-5 my-32 grid grid-cols-1 gap-10 md:mx-40 md:grid-cols-2'>
            <Heading6 className='text-gray-500'>
               Type:{' '}
               <Paragraph1 className='inline text-gray-700'>
                  {typeName}
               </Paragraph1>
            </Heading6>
            <Heading6 className='text-gray-500'>
               Year:{' '}
               <Paragraph1 className='inline text-gray-700'>
                  {project?.year}
               </Paragraph1>
            </Heading6>
            <Heading6 className='text-gray-500'>
               Area:{' '}
               <Paragraph1 className='inline text-gray-700'>
                  {project?.area}
               </Paragraph1>
            </Heading6>
            <Heading6 className='text-gray-500'>
               Address:{' '}
               <Paragraph1 className='inline text-gray-700'>
                  {project?.address}
               </Paragraph1>
            </Heading6>
            <Heading6 className='text-gray-500'>
               Design Team:{' '}
               <Paragraph1 className='inline text-gray-700'>
                  {project?.designTeam}
               </Paragraph1>
            </Heading6>
            <Heading6 className='text-gray-500'>
               Collaboration:{' '}
               <Paragraph1 className='inline text-gray-700'>
                  {project?.collaboration}
               </Paragraph1>
            </Heading6>
         </div>
         {project && (
            <GallerySection galleryImagesIds={project.galleryImagesIds} />
         )}
      </div>
   );
};
export default SingleProjectMainContainer;
