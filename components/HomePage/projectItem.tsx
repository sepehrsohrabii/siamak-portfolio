export default function ProjectItem({
   project,
   key,
}: {
   project: any;
   key: number;
}) {
   return (
      <div
         key={key}
         className='thumbnail group relative h-72 w-full shrink-0 snap-start scroll-mx-6 saturate-0 duration-500 hover:saturate-100'
      >
         <img
            className='h-full w-full object-cover'
            src='https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8
                fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2952&amp;q=80'
         />
         <div className='absolute bottom-7 left-7 bg-white px-5 duration-500 group-hover:w-2/4 group-hover:py-3'>
            <h6 className='text-lg font-semibold text-gray-700'>
               Tehran Building
            </h6>
            <p className='hidden text-sm font-normal text-gray-600 group-hover:block'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Molestiae, quas fugit.
            </p>
            <a
               className='underline-offset-5 mt-5 hidden w-fit text-sm font-thin underline decoration-blue-700 decoration-4 hover:underline-offset-0 group-hover:block'
               href='#'
            >
               More about ...
            </a>
         </div>
      </div>
   );
}
