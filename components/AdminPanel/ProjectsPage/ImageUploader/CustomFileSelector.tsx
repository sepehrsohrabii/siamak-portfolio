import React, { ComponentPropsWithRef } from 'react';

type Props = ComponentPropsWithRef<'input'>;

const CustomFileSelector = (props: Props) => {
   return (
      <input
         {...props}
         type='file'
         multiple
         className={[
            // Modify the Button shape, spacing, and colors using the `file`: directive
            // button colors
            'file:bg-violet-50 file:text-violet-500 hover:file:bg-violet-100':
               true,
            'file:rounded-lg file:rounded-br-none file:rounded-tr-none': true,
            'file:mr-4 file:border-none file:px-4 file:py-2': true,
            // overall input styling
            'rounded-lg border text-gray-400 hover:cursor-pointer': true,
         ]}
      />
   );
};

export default CustomFileSelector;
