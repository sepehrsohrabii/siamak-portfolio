import { Label, Paragraph3 } from '@/components/General/typography';
import { ProjectsType } from '@/utils/types';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getProjectById, getImageById } from '@/utils/actions';
import { MinusIcon } from '@heroicons/react/24/solid';
import LoadingSpinSM from '@/components/General/loadingSpinSM';

const MainImageUploadForm = ({ project }: { project: ProjectsType }) => {
   const [mainImage, setMainImage] = useState<File | null>(null);
   const [mainImageUrl, setMainImageUrl] = useState<string>('');
   const [uploading, setUploading] = useState<boolean>(false);
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [updatedProject, setUpdatedProject] = useState<ProjectsType>();
   const handleRemoveImage = async (imageId: string) => {
      setIsLoading(true);
      try {
         const response = await fetch(`/api/image/delete/${imageId}`, {
            method: 'DELETE',
         });

         if (!response.ok) {
            // Handle error
            console.error('Failed to remove image');
         }

         // Handle success, e.g., show a success message
         console.log('Images removed successfully');
      } catch (error) {
         console.error('Error removing images', error);
      } finally {
         setIsLoading(false);
         setMainImageUrl('');
      }
      setIsLoading(false);
   };
   const handleFileSelected = async (
      e: React.ChangeEvent<HTMLInputElement>
   ) => {
      if (e.target.files) {
         setMainImage(e.target.files[0]);
      }
   };
   useEffect(() => {
      const handleSubmit = async () => {
         const formData = new FormData();
         if (mainImage) {
            formData.append('file', mainImage);
            formData.append('projectId', project.id);
            formData.append('projectSlug', project.slug);
            formData.append('imageType', 'mainImage');

            setUploading(true);

            try {
               const response = await fetch('/api/image/add', {
                  method: 'POST',
                  body: formData,
               });

               if (!response.ok) {
                  // Handle error
                  console.error('Failed to upload images');
               }

               // Handle success, e.g., show a success message
               console.log('Images uploaded successfully');
            } catch (error) {
               console.error('Error uploading images', error);
            } finally {
               setUploading(false);
            }
         }
         setUploading(false);
      };
      if (mainImage) {
         handleSubmit();
      }
   }, [mainImage]);

   useEffect(() => {
      const getUpdatedProject = async () => {
         const projectsList: ProjectsType = await getProjectById(project.id);
         if (projectsList) setUpdatedProject(projectsList);
      };
      if (uploading === false && isLoading === false) {
         getUpdatedProject();
      }
   }, [uploading === false, isLoading === false]);

   useEffect(() => {
      const getImageUrl = async () => {
         const image = await getImageById(updatedProject.mainImageId);
         if (image) setMainImageUrl(image.fileURL);
      };
      if (updatedProject) {
         getImageUrl();
      }
   }, [updatedProject]);
   return (
      <div className='rounded bg-blue-100 p-4'>
         <form>
            <Label htmlFor='mainImage' className='text-gray-900'>
               Main Image
            </Label>
            <input
               accept='image/png, image/jpeg'
               type='file'
               name='mainImage'
               id='mainImage'
               className='mb-2 block w-full rounded-md border-0 px-2 py-1.5 font-normal text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
               onChange={handleFileSelected}
            />
            {/* {mainImage && <ImagePreview images={[mainImage]} />} */}
         </form>
         {updatedProject && mainImageUrl && (
            <div className='my-2 flex items-center justify-between rounded bg-gray-300 px-3 py-2'>
               <Paragraph3 className='text-gray-900'>
                  Image URL:{' '}
                  <Link href={mainImageUrl} className='text-blue-700'>
                     {mainImageUrl}
                  </Link>
               </Paragraph3>
               {!isLoading ? (
                  <button
                     className='rounded bg-red-500 px-1 text-white'
                     onClick={() =>
                        handleRemoveImage(updatedProject.mainImageId)
                     }
                  >
                     <MinusIcon className='w-5 text-white' />
                  </button>
               ) : (
                  <button
                     className='rounded bg-red-500 px-1 text-white'
                     onClick={() => {}}
                  >
                     <LoadingSpinSM />
                  </button>
               )}
            </div>
         )}
      </div>
   );
};
export default MainImageUploadForm;
