'use client';
import AddTypeModal from '@/components/AdminPanel/TypesPage/addTypeModal';
import TypesList from '@/components/AdminPanel/TypesPage/typesList';
import { Heading5 } from '@/components/General/typography';
import { getTypes } from '@/utils/actions';
import { TypesType } from '@/utils/types';
import { useEffect, useState } from 'react';

const TypesPage = () => {
   const [types, setTypes] = useState<TypesType[]>([]);
   const [error, setError] = useState(null);
   const fetchTypes = async () => {
      const typesList: TypesType[] = await getTypes();
      setTypes(typesList);
   };
   useEffect(() => {
      fetchTypes();
   }, []);
   return (
      <div className='flex h-full flex-col'>
         <div className='flex w-full items-center justify-between rounded-lg bg-slate-200 px-5 py-3 shadow-lg'>
            <Heading5 className=''>Types</Heading5>
            <AddTypeModal fetchTypes={fetchTypes} />
         </div>
         <div className='mt-2 h-full w-full rounded-lg bg-slate-200 px-5 py-3 shadow-lg'>
            <TypesList types={types} fetchTypes={fetchTypes} />
         </div>
      </div>
   );
};
export default TypesPage;
