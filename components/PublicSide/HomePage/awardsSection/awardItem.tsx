import {
   Heading3,
   Heading5,
   Paragraph1,
   Paragraph2,
   Paragraph3,
} from '@/components/General/typography';
import { getImageById } from '@/utils/actions';
import { ProjectsType } from '@/utils/types';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AwardItem({ project }: { project: ProjectsType }) {
   const [imageUrl, setImageUrl] = useState<string>('');
   useEffect(() => {
      const getImageUrl = async () => {
         const image = await getImageById(project.mainImageId);
         if (image.fileURL) {
            setImageUrl(image.fileURL);
         }
      };
      getImageUrl();
   }, []);
   return (
      <div className='w-full justify-between md:flex md:flex-row'>
         <div className='mb-5 basis-2/5 md:mb-0 md:pe-5'>
            <div className='h-full bg-white p-10'>
               <div className='w-fit bg-cyan-700 px-2'>
                  <Paragraph3 className='text-white'>{project.year}</Paragraph3>
               </div>
               <Heading3 className=' line-clamp-1 text-gray-800'>
                  {project.title}
               </Heading3>
               <Heading5 className=' mb-4 mt-2 line-clamp-2 text-cyan-700'>
                  {project.award}
               </Heading5>
               <Paragraph2 className='line-clamp-3 text-justify text-gray-500'>
                  {project.description}
               </Paragraph2>
               <Paragraph3 className='mt-5'>
                  <Link
                     className='bg-cyan-700 px-4 py-1 text-white duration-500 hover:bg-cyan-900'
                     href={`/projects/${project.slug}`}
                  >
                     Read More
                  </Link>
               </Paragraph3>
            </div>
         </div>
         <div className='h-80 basis-3/5'>
            <Image
               className='h-80 w-full object-cover saturate-0 duration-500 hover:saturate-100'
               src={imageUrl}
               alt='project image'
               height={500}
               width={700}
               placeholder='blur'
            />
         </div>
      </div>
   );
}
