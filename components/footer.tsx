export default function Footer() {
   return (
      <footer className='mx-40 mt-20'>
         <div className='flex flex-row justify-between'>
            <div className='basis-1/4'>
               <h2 className='text-4xl'>Siamak M.Hejri</h2>
            </div>
            <div className='basis-1/4 text-right'>
               <a
                  className='border border-blue-700 bg-blue-700 px-5 py-3 text-white duration-200 hover:bg-white hover:text-blue-700'
                  href='tel:+989113373811'
               >
                  Call Us Now
               </a>
            </div>
         </div>
         <div className='mt-10 flex flex-row items-end justify-between'>
            <div className='basis-1/4'>
               <p className='w-full text-gray-700'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                  sunt? Laboriosam esse cumque, nesciunt exercitationem
                  asperiores, repellat minima natus a, consequatur nihil odio
                  delectus rem dolor laudantium eligendi animi modi.
               </p>
            </div>
            <div className='basis-1/4'></div>

            <div className='align-self-center basis-2/4 text-right'>
               <div className=''>
                  <a
                     className='text-lg text-gray-500'
                     href='mailto:'
                     target='_blank'
                  >
                     +989113373811
                  </a>
               </div>
               <div className=''>
                  <a
                     className='text-lg text-gray-500'
                     href='mailto:'
                     target='_blank'
                  >
                     siamak@gmail.com
                  </a>
               </div>
               <div className='mb-5'>
                  <a
                     className='text-lg text-gray-500'
                     href='mailto:'
                     target='_blank'
                  >
                     Rasht, Iran
                  </a>
               </div>
               <span className='text-xl'>Follow us on </span>
               <a
                  className='text-xl text-gray-500'
                  href='https://instagram.com/'
               >
                  Instagram,
               </a>
               <a
                  className='text-xl text-gray-500'
                  href='https://instagram.com/'
               >
                  Youtube, and
               </a>
               <a
                  className='text-xl text-gray-500'
                  href='https://instagram.com/'
               >
                  Linkedin
               </a>
            </div>
         </div>
         <div className='mt-10 flex flex-row items-end justify-between border-t border-black pb-20 pt-4'>
            <div className='basis-1/4'>
               <p className='w-full text-gray-700'>
                  @2023 Graph Studio All Rights Reserved.
               </p>
            </div>
            <div className='basis-1/4'>
               <p className='w-full text-right text-gray-700'>
                  Design and Developed by Sepehr.
               </p>
            </div>
         </div>
      </footer>
   );
}
