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
         <div className='mt-10 flex flex-row justify-between'>
            <div className='basis-1/4'>
               <p className='w-full text-gray-700'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                  sunt? Laboriosam esse cumque, nesciunt exercitationem
                  asperiores, repellat minima natus a, consequatur nihil odio
                  delectus rem dolor laudantium eligendi animi modi.
               </p>
               <a className='text-gray-500' href='https://instagram.com/'>
                  Follow us on Instagram
               </a>
            </div>
            <div className='basis-1/4'></div>
            <div className='basis-1/4'></div>
            <div className='basis-1/4 text-right'>
               <h6>USEFUL LINKS</h6>
               <div>
                  <a className='text-gray-500' href='https://instagram.com/'>
                     Our Projects
                  </a>
               </div>
               <div>
                  <a className='text-gray-500' href='https://instagram.com/'>
                     About Us
                  </a>
               </div>
               <div>
                  <a className='text-gray-500' href='https://instagram.com/'>
                     Contact Us
                  </a>
               </div>
               <div>
                  <a className='text-gray-500' href='https://instagram.com/'>
                     Terms & Conditions
                  </a>
               </div>
               <div>
                  <a className='text-gray-500' href='https://instagram.com/'>
                     Privacy Policy
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
}
