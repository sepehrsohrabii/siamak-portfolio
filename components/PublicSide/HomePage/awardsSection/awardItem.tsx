import { Heading3, Paragraph1 } from '@/components/General/typography';
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
         <div className='mb-5 basis-1/5 md:mb-0 md:pe-5'>
            <Heading3 className=' text-gray-800'>{project.award}</Heading3>
         </div>
         <div className='h-96 basis-2/5'>
            <Image
               className='h-96 w-full object-cover saturate-0 duration-500 hover:saturate-100'
               src={imageUrl}
               alt='project image'
               height={500}
               width={700}
            />
         </div>
         <div className='mt-5 basis-2/5 self-center text-gray-600 md:mt-0 md:ps-20'>
            <Paragraph1 className='line-clamp-3 text-justify'>
               {project.description}
            </Paragraph1>
            <Link href={`/projects/${project.slug}`}>
               <button className='mt-5 bg-white px-5 py-2 text-cyan-700 duration-200 hover:bg-gray-400'>
                  Read More
               </button>
            </Link>
         </div>
      </div>
   );
}
