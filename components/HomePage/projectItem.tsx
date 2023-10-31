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
         className='relative h-44 w-full shrink-0 snap-start scroll-mx-6 '
      >
         <img
            className='h-full w-full object-cover'
            src='https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8
                fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2952&amp;q=80'
         />
         <div className='absolute inset-0 '>aas</div>
      </div>
   );
}
