import { Label, Paragraph3 } from '@/components/General/typography';
import { IImagesSchema, ProjectsType } from '@/utils/types';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getProjectById, getImageById } from '@/utils/actions';
import { MinusIcon } from '@heroicons/react/24/solid';
import LoadingSpinSM from '@/components/General/loadingSpinSM';
import axios from 'axios';

const GalleryImagesUploadForm = ({ project }: { project: ProjectsType }) => {
   const [images, setImages] = useState<File[]>([]);
   const [uploading, setUploading] = useState(false);
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [galleryImagesIds, setGalleryImagesIds] = useState<string[]>([]);
   const [galleryImages, setGalleryImages] = useState<IImagesSchema[]>([]);
   const [totalUploaded, setTotalUploaded] = useState(0);

   const handleRemoveImage = async (imageId: string, index: number) => {
      setIsLoading(true);
      try {
         await fetch(`/api/image/delete/${imageId}`, {
            method: 'DELETE',
         });
         setGalleryImages((prevImages) =>
            prevImages.filter((_, i) => i !== index)
         );
         setGalleryImagesIds((prevImages) =>
            prevImages.filter((id) => id !== imageId)
         );
      } catch (error) {
         console.error('Error removing images', error);
      } finally {
         setIsLoading(false);
         await getImages();
      }
      setIsLoading(false);
   };
   const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
         //convert `FileList` to `File[]`
         const _files = Array.from(e.target.files);
         setImages(_files);
         // Reset the value of the file input
         e.target.value = '';
      }
   };
   useEffect(() => {
      const handleSubmit = async () => {
         const formData = new FormData();

         if (images) {
            images.forEach((image, i) => {
               const img = images[i];
               formData.append(image.name, image);
            });
            formData.append('projectId', project.id);
            formData.append('projectSlug', project.slug);
            formData.append('imageType', 'galleryImages');
            setUploading(true);
            setTotalUploaded(0); // Initialize total uploaded

            try {
               const response = await axios.post('/api/image/add', formData, {
                  onUploadProgress: (progressEvent) => {
                     const percentCompleted = Math.round(
                        (progressEvent.loaded * 100) / progressEvent.total
                     );
                     console.log('percentCompleted: ', percentCompleted);
                     setTotalUploaded(percentCompleted);
                  },
               });
               console.log('Images uploaded successfully');
            } catch (error) {
               console.error('Error uploading images', error);
            } finally {
               setUploading(false);
               setImages([]);
            }
         }
         await getImages();
         setUploading(false);
      };
      if (images.length > 0) {
         handleSubmit();
      }
   }, [images.length > 0]);
   useEffect(() => {
      const getUpdatedProject = async () => {
         const projectsList: ProjectsType = await getProjectById(project.id);
         if (projectsList) {
            setGalleryImagesIds(projectsList.galleryImagesIds);
         }
      };
      if (uploading === false && isLoading === false) {
         getUpdatedProject();
      }
   }, [uploading, isLoading]);

   const getImages = async () => {
      try {
         const images = await Promise.all(
            galleryImagesIds.map((imageId) => getImageById(imageId))
         );
         setGalleryImages(images.filter(Boolean)); // Filter out any undefined images
      } catch (error) {
         console.error('Error fetching images:', error);
      }
   };
   useEffect(() => {
      getImages();
   }, [galleryImagesIds]); // Include galleryImages in dependency array

   return (
      <div className='mt-4 rounded bg-red-100 p-4'>
         <form>
            <Label htmlFor='galleryImages' className='text-gray-900'>
               Gallery Images
            </Label>
            <input
               accept='image/png, image/jpeg'
               type='file'
               name='galleryImages'
               id='galleryImages'
               className='mb-2 block w-full rounded-md border-0 px-2 py-1.5 font-normal text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
               onChange={handleFileSelected}
               multiple
            />
         </form>
         {uploading && (
            <div className='flex items-center'>
               <LoadingSpinSM />
               <Paragraph3 className='ml-2'>
                  Uploading {totalUploaded}%...
               </Paragraph3>
            </div>
         )}
         {galleryImages.length > 0 &&
            galleryImages.map((image, index) => (
               <div
                  key={image.id}
                  className='my-2 flex items-center justify-between rounded bg-gray-300 px-3 py-2'
               >
                  <Paragraph3 className='text-gray-900'>
                     Image URL:{' '}
                     <Link href={image.fileURL} className='text-blue-700'>
                        {image.fileURL}
                     </Link>
                  </Paragraph3>
                  {!isLoading ? (
                     <button
                        className='rounded bg-red-500 px-1 text-white'
                        onClick={() => handleRemoveImage(image.id, index)}
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
            ))}
      </div>
   );
};
export default GalleryImagesUploadForm;
