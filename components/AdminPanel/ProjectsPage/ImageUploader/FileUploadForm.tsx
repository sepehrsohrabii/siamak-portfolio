'use client'; // Make this component a client component
import React, { FormEvent, useState } from 'react';
import CustomFileSelector from './CustomFileSelector';
import ImagePreview from './ImagePreview';
import axios from 'axios';
import classNames from 'classnames';

const FileUploadForm = () => {
   const [images, setImages] = useState<File[]>([]);
   const [uploading, setUploading] = useState(false);
   const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
         //convert `FileList` to `File[]`
         const _files = Array.from(e.target.files);
         setImages(_files);
      }
   };

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData();
      images.forEach((image, i) => {
         formData.append(image.name, image);
      });
      setUploading(true);
      await axios.post('/api/image/add', formData);
      setUploading(false);
   };
   return (
      <form className='w-full' onSubmit={handleSubmit}>
         <div className='flex justify-between'>
            <CustomFileSelector
               accept='image/png, image/jpeg'
               onChange={handleFileSelected}
            />
            <button
               type='submit'
               className={classNames({
                  'rounded-md bg-violet-50 px-4 py-2 text-violet-500 hover:bg-violet-100':
                     true,
                  'disabled pointer-events-none opacity-40': uploading,
               })}
               disabled={uploading}
            >
               Upload
            </button>
         </div>
         <ImagePreview images={images} />
      </form>
   );
};

export default FileUploadForm;
