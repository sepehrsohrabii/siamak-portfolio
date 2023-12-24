import LoadingSpin from '@/components/General/loadingSpin';
import { Heading6, Paragraph2 } from '@/components/General/typography';
import { getProjects } from '@/utils/actions';
import { IProjectsSchema, ProjectsType } from '@/utils/types';
import { useEffect, useState } from 'react';
import DeleteProjectModal from './deleteProjectModal';
import EditProjectModal from './editProjectModal';
import ModifyImagesModal from './ImageUploader/modifyImagesModal';

const ProjectsList = () => {
   const [projects, setProjects] = useState<ProjectsType[]>([]);
   const [error, setError] = useState(null);
   useEffect(() => {
      const fetchProjects = async () => {
         const projectsList: ProjectsType[] = await getProjects();
         setProjects(projectsList);
      };
      fetchProjects();
   }, []);
   return (
      <>
         {projects.length >= 0 ? (
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
                        <Heading6 className=''>Type</Heading6>
                     </th>
                     <th className='text-start'>
                        <Heading6 className=''>View Counter</Heading6>
                     </th>
                     <th className='text-start'>
                        <Heading6 className=''>Status</Heading6>
                     </th>
                     <th className='text-start'>
                        <Heading6 className=''>createdAt</Heading6>
                     </th>
                     <th className='text-start'>
                        <Heading6 className=''>updatedAt</Heading6>
                     </th>
                     <th className='text-start'>
                        <Heading6 className=''>Operation</Heading6>
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {projects.map((project) => (
                     <tr className='h-10' key={project.id}>
                        <td>
                           <Paragraph2 className='text-gray-700'>
                              {project.id}
                           </Paragraph2>
                        </td>
                        <td>
                           <Paragraph2 className='text-gray-700'>
                              {project.title}
                           </Paragraph2>
                        </td>
                        <td>
                           <Paragraph2 className='text-gray-700'>
                              {project.slug}
                           </Paragraph2>
                        </td>
                        <td>
                           <Paragraph2 className='text-gray-700'>
                              {project.typeId}
                           </Paragraph2>
                        </td>
                        <td>
                           <Paragraph2 className='text-gray-700'>
                              {project.viewCounter}
                           </Paragraph2>
                        </td>
                        <td>
                           <Paragraph2 className='text-gray-700'>
                              {project.status ? 'Active' : 'Not Active'}
                           </Paragraph2>
                        </td>
                        <td>
                           <Paragraph2 className='text-gray-700'>
                              {String(project.createdAt)}
                           </Paragraph2>
                        </td>
                        <td>
                           <Paragraph2 className='text-gray-700'>
                              {String(project.updatedAt)}
                           </Paragraph2>
                        </td>
                        <td>
                           <div className='flex items-center'>
                              <EditProjectModal project={project} />
                              <DeleteProjectModal
                                 projectName={project.title}
                                 id={project.id}
                              />
                              <ModifyImagesModal project={project} />
                           </div>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         ) : (
            <LoadingSpin loadingText='Projects are loading ...' />
         )}
      </>
   );
};
export default ProjectsList;
