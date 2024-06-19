import AwardImageSekelton from './awardImageSekelton';

const AwardItemSekelton = () => {
   return (
      <div className='w-full justify-between md:flex md:flex-row'>
         <div className='mb-5 basis-2/5 md:mb-0 md:pe-5'>
            <div className='flex h-full flex-col justify-center p-10'>
               <div className='mb-4 h-2.5 w-48 bg-gray-200'></div>
               <div className='mb-2.5 h-2 bg-gray-200'></div>
               <div className='mb-2.5 h-2 bg-gray-200'></div>
               <div className='h-2 bg-gray-200'></div>
            </div>
         </div>
         <div className='h-80 basis-3/5'>
            <AwardImageSekelton />
         </div>
         <span className='sr-only'>Loading...</span>
      </div>
   );
};
export default AwardItemSekelton;
