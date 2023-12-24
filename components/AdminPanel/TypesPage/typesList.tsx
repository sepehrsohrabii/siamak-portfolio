import LoadingSpin from '@/components/General/loadingSpin';
import { Heading6, Paragraph2 } from '@/components/General/typography';

import DeleteTypeModal from './deleteTypeModal';
import EditTypeModal from './editTypeModal';
import { TypesType } from '@/utils/types';

const TypesList = ({
   types,
   fetchTypes,
}: {
   types: TypesType[];
   fetchTypes: () => void;
}) => {
   return (
      <>
         {types.length >= 0 ? (
            <table className='w-full table-auto border-spacing-x-4 overflow-y-scroll'>
               <thead className='mb-5 border border-b-white'>
                  <tr>
                     <th className='text-start'>
                        <Heading6 className=''>Id</Heading6>
                     </th>
                     <th className='text-start'>
                        <Heading6 className=''>Title</Heading6>
                     </th>
                     <th className='text-start'>
                        <Heading6 className=''>Slug</Heading6>
                     </th>
                     <th className='text-start'>
                        <Heading6 className=''>Projects Number</Heading6>
                     </th>
                     <th className='text-start'>
                        <Heading6 className=''>Ordering Number</Heading6>
                     </th>
                     <th className='text-start'>
                        <Heading6 className=''>Status</Heading6>
                     </th>
                     <th className='text-start'>
                        <Heading6 className=''>Operation</Heading6>
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {types.map((type) => (
                     <tr className='h-10' key={type.id}>
                        <td>
                           <Paragraph2 className='text-gray-700'>
                              {type.id}
                           </Paragraph2>
                        </td>
                        <td>
                           <Paragraph2 className='text-gray-700'>
                              {type.title}
                           </Paragraph2>
                        </td>
                        <td>
                           <Paragraph2 className='text-gray-700'>
                              {type.slug}
                           </Paragraph2>
                        </td>
                        <td>
                           <Paragraph2 className='text-gray-700'>0</Paragraph2>
                        </td>
                        <td>
                           <Paragraph2 className='text-gray-700'>
                              {type.orderingNumber}
                           </Paragraph2>
                        </td>
                        <td>
                           <Paragraph2 className='text-gray-700'>
                              {type.status ? 'Active' : 'Not Active'}
                           </Paragraph2>
                        </td>
                        <td>
                           <div className='flex items-center'>
                              <EditTypeModal
                                 type={type}
                                 fetchTypes={fetchTypes}
                              />
                              <DeleteTypeModal
                                 typeName={type.title}
                                 id={type.id}
                                 fetchTypes={fetchTypes}
                              />
                           </div>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         ) : (
            <LoadingSpin loadingText='Types are loading ...' />
         )}
      </>
   );
};
export default TypesList;
