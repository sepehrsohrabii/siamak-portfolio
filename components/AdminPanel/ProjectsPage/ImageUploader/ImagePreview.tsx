import React from 'react';
import Image from 'next/image';

type Props = {
   images: File | FileList;
};

const ImagePreview = ({ images }: Props) => {
   return (
      <div>
         <div className='my-2 grid grid-cols-12 gap-2'>
            {images instanceof FileList ? (
               Array.from(images).map((image) => {
                  const src = URL.createObjectURL(image);
                  return (
                     <div
                        className='relative col-span-4 aspect-video'
                        key={image.name}
                     >
                        <Image
                           src={src}
                           alt={image.name}
                           className='object-cover'
                           fill
                        />
                     </div>
                  );
               })
            ) : (
               <div
                  className='relative col-span-4 aspect-video'
                  key={images[0].name}
               >
                  <Image
                     src={URL.createObjectURL(images[0])}
                     alt={images[0].name}
                     className='object-cover'
                     fill
                  />
               </div>
            )}
         </div>
      </div>
   );
};

export default ImagePreview;
