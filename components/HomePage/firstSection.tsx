export default function FirstSection() {
   return (
      <div className='flex h-screen w-full items-center justify-between overflow-hidden'>
         <div className='flex h-screen flex-initial items-center ps-40'>
            <div className='w-30 absolute z-50'>
               <h3 className='w-fit bg-blue-700 px-3 py-1'>
                  <span className='text-2xl text-white'>
                     Explore the most beautiful
                  </span>
               </h3>
               <h1 className='w-fit text-8xl font-thin text-gray-800'>
                  Explore Old
                  <br className='hidden md:inline' />
                  Classic Buildings
               </h1>
               <p className='ms-20 mt-10 w-1/4 text-gray-600'>
                  buildings in the world Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Vitae, labore quod veritatis explicabo
                  maiores consectetur. Suscipit dolor, ex nemo aperiam
                  reprehenderit ea non doloribus velit quidem omnis labore, enim
                  soluta?
               </p>
            </div>
         </div>
         <div className='z-0 h-screen w-3/5 flex-initial saturate-0 duration-500 hover:saturate-100'>
            <div className="h-full w-full bg-[url('/images/2.jpg')] bg-cover bg-center bg-no-repeat">
               <div className='z-2 absolute bottom-20 left-20 w-80 border-b-2 border-l-2 pb-5 pl-5'>
                  <h3 className='font-bold'>felan</h3>
                  <p>
                     Lorem ipsum dolor sit amet consectetur
                     <br className='hidden md:inline' />
                     adipisicing elit Quisquamvoluptatibus.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}
