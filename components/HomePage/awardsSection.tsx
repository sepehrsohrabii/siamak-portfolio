export default function AwardsSection() {
   return (
      <div className='me-40 flex w-full flex-row bg-gray-200'>
         <div className='basis-1/2 py-40 ps-40'>
            <h4 className='text-center text-6xl font-thin'>We are here</h4>
         </div>
         <div className='basis-1/2 self-center text-center'>
            <h4 className='mb-3 text-6xl text-blue-700'>Call Us Now</h4>
            <a
               className='border border-blue-700 bg-blue-700 px-5 py-3 text-white duration-200 hover:bg-white hover:text-blue-700'
               href='tel:+989113373811'
            >
               +989113373811
            </a>
         </div>
      </div>
   );
}
