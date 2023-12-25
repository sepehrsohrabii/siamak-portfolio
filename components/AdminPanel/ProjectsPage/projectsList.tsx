import LoadingSpin from '@/components/General/loadingSpin';
import { Heading6, Paragraph2 } from '@/components/General/typography';

import DeleteProjectModal from './deleteProjectModal';
import EditProjectModal from './editProjectModal';
import ModifyImagesModal from './ImageUploader/modifyImagesModal';
import { ProjectsType } from '@/utils/types';

const ProjectsList = ({
   projects,
   fetchProjects,
}: {
   projects: ProjectsType[];
   fetchProjects: () => void;
}) => {
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
                        <Heading6 className=''>HomePage?</Heading6>
                     </th>
                     <th className='text-start'>
                        <Heading6 className=''>Status</Heading6>
                     </th>
                     <th className='text-start'>
                        <Heading6 className=''>Created At</Heading6>
                     </th>
                     <th className='text-start'>
                        <Heading6 className=''>Updated At</Heading6>
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
                           <Paragraph2
                              className={`${
                                 project.showOnHomePage
                                    ? 'text-blue-700'
                                    : 'text-gray-700'
                              }`}
                           >
                              {project.showOnHomePage ? 'Yes' : 'No'}
                           </Paragraph2>
                        </td>
                        <td>
                           <Paragraph2
                              className={`${
                                 project.status
                                    ? 'text-green-700'
                                    : 'text-gray-700'
                              }`}
                           >
                              {project.status ? 'Active' : 'Not Active'}
                           </Paragraph2>
                        </td>
                        <td>
                           <Paragraph2 className='text-gray-700'>
                              {`${project.createdAt.getFullYear()}/${(
                                 project.createdAt.getMonth() + 1
                              )
                                 .toString()
                                 .padStart(2, '0')}/${project.createdAt
                                 .getDate()
                                 .toString()
                                 .padStart(2, '0')}`}
                           </Paragraph2>
                        </td>
                        <td>
                           <Paragraph2 className='text-gray-700'>
                              {`${project.updatedAt.getFullYear()}/${(
                                 project.updatedAt.getMonth() + 1
                              )
                                 .toString()
                                 .padStart(2, '0')}/${project.updatedAt
                                 .getDate()
                                 .toString()
                                 .padStart(2, '0')}`}
                           </Paragraph2>
                        </td>
                        <td>
                           <div className='flex items-center'>
                              <EditProjectModal
                                 project={project}
                                 fetchProjects={fetchProjects}
                              />
                              <DeleteProjectModal
                                 projectName={project.title}
                                 id={project.id}
                                 fetchProjects={fetchProjects}
                              />
                              <ModifyImagesModal
                                 project={project}
                                 fetchProjects={fetchProjects}
                              />
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
