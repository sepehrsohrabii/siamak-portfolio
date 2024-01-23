import {
   Heading5,
   Paragraph2,
   Paragraph3,
} from '@/components/General/typography';
import { getTypeById } from '@/utils/actions';
import { getImageById } from '@/utils/functions';
import { ProjectsType } from '@/utils/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ProjectItem({
   project,
   key,
}: {
   project: ProjectsType;
   key: number;
}) {
   const [imageUrl, setImageUrl] = useState<string>('');
   const [typeName, setTypeName] = useState<string>('');
   useEffect(() => {
      const getImageUrl = async () => {
         const image = await getImageById(project.mainImageId);
         if (image) {
            setImageUrl(image.fileURL);
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
   }, []);
   return (
      <Link
         key={key}
         className='panel group ms-32 w-80 overflow-y-visible'
         href={`/projects/${project.slug}`}
      >
         <motion.div className='relative flex justify-center'>
            <motion.div
               className='h-80 w-full duration-500 '
               whileHover={{
                  scale: 1.1,
                  boxShadow: '10px 10px 0px 0px #D3D3D3',
               }}
            >
               <Image
                  className='h-80 w-full object-cover saturate-0 duration-500 group-hover:saturate-100'
                  src={imageUrl}
                  alt={`${project.title} Image`}
                  width={400}
                  height={400}
               />
            </motion.div>
         </motion.div>
         <div className='border-s-2 border-slate-400 py-10 ps-5 duration-500 group-hover:border-cyan-700'>
            <Paragraph2 className='text-gray-400'>{typeName}</Paragraph2>
            <Heading5 className='line-clamp-1 text-gray-900'>
               {project.title}
            </Heading5>
            <Paragraph3 className='mt-10 text-gray-400'>
               {project.year}
            </Paragraph3>
            <Paragraph3 className='mt-5 text-gray-700'>
               More About ...
            </Paragraph3>
         </div>
      </Link>
   );
}

// import {
//    Heading5,
//    Paragraph2,
//    Paragraph3,
// } from '@/components/General/typography';
// import { getImageById, getTypeById } from '@/utils/actions';
// import { ProjectsType } from '@/utils/types';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useEffect, useState } from 'react';

// export default function ProjectItem({
//    project,
//    key,
// }: {
//    project: ProjectsType;
//    key: number;
// }) {
//    const [imageUrl, setImageUrl] = useState<string>('');
//    const [typeName, setTypeName] = useState<string>('');
//    useEffect(() => {
//       const getImageUrl = async () => {
//          const image = await getImageById(project.mainImageId);
//          if (image.fileURL) {
//             setImageUrl(image.fileURL);
//          }
//       };
//       const getTypeName = async () => {
//          const type = await getTypeById(project.typeId);
//          if (type.title) {
//             setTypeName(type.title);
//          }
//       };
//       getImageUrl();
//       getTypeName();
//    }, []);
//    return (
//       <Link
//          key={key}
//          className='panel group ms-32 w-80 overflow-y-visible'
//          href={`/projects/${project.slug}`}
//       >
//          <motion.div className='relative flex justify-center'>
//             <motion.div
//                className='h-80 w-full duration-500 '
//                whileHover={{
//                   scale: 1.1,
//                   boxShadow: '10px 10px 0px 0px #D3D3D3',
//                }}
//             >
//                <Image
//                   className='h-80 w-full object-cover saturate-0 duration-500 group-hover:saturate-100'
//                   src={imageUrl}
//                   alt={`${project.title} Image`}
//                   width={400}
//                   height={400}
//                />
//             </motion.div>
//          </motion.div>
//          <div className='border-s-2 border-slate-400 py-10 ps-5 duration-500 group-hover:border-cyan-700'>
//             <Paragraph2 className='text-gray-400'>{typeName}</Paragraph2>
//             <Heading5 className='line-clamp-1 text-gray-900'>
//                {project.title}
//             </Heading5>
//             <Paragraph3 className='mt-10 text-gray-400'>
//                {project.year}
//             </Paragraph3>
//             <Paragraph3 className='mt-5 text-gray-700'>
//                More About ...
//             </Paragraph3>
//          </div>
//       </Link>
//    );
// }
