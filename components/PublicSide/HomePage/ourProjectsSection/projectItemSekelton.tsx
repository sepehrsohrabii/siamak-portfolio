import ProjectImageSekelton from './projectImageSekelton';

const ProjectItemSekelton = () => {
   return (
      <div
         role='status'
         className='panel group ms-20 w-80 animate-pulse overflow-y-visible'
      >
         <ProjectImageSekelton />
         <div className='mb-4 h-2.5 w-48 bg-gray-200'></div>
         <div className='mb-2.5 h-2 bg-gray-200'></div>
         <div className='mb-2.5 h-2 bg-gray-200'></div>
         <div className='h-2 bg-gray-200'></div>

         <span className='sr-only'>Loading...</span>
      </div>
   );
};
export default ProjectItemSekelton;
