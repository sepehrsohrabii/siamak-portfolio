import LoadingSpin from '@/components/General/loadingSpin';
import {
   Heading6,
   Label,
   Paragraph1,
   Paragraph2,
   Paragraph3,
} from '@/components/General/typography';
import { editProject, getTypes } from '@/utils/actions';
import slugify from '@/utils/functions';
import { ProjectsType, TypesType } from '@/utils/types';
import {
   Dispatch,
   MutableRefObject,
   SetStateAction,
   useEffect,
   useState,
} from 'react';

const EditProjectForm = ({
   setOpen,
   cancelButtonRef,
   project,
   fetchProjects,
}: {
   setOpen: Dispatch<SetStateAction<boolean>>;
   cancelButtonRef: MutableRefObject<null>;
   project: ProjectsType;
   fetchProjects: () => void;
}) => {
   const [error, setError] = useState<string>('');
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [title, setTitle] = useState<string>(project.title);
   const [slug, setSlug] = useState<string>(project.slug);
   const [types, setTypes] = useState<TypesType[]>([]);
   const [typeId, setTypeId] = useState<string>(project.typeId);
   const [award, setAward] = useState<string>(project.award);
   const [description, setDescription] = useState<string>(project.description);
   const [year, setYear] = useState<string>(project.year);
   const [area, setArea] = useState<string>(project.area);
   const [address, setAddress] = useState<string>(project.address);
   const [designTeam, setDesignTeam] = useState<string>(project.designTeam);
   const [collaboration, setCollaboration] = useState<string>(
      project.collaboration
   );
   const [viewCounter, setViewCounter] = useState<number>(project.viewCounter);
   const [showOnHomePage, setShowOnHomePage] = useState<boolean>(
      project.showOnHomePage
   );
   const [status, setStatus] = useState<boolean>(project.status);

   const handleTitleChange = (value: string) => {
      const newTitle = value;
      setTitle(newTitle);
      const newSlug = slugify(newTitle);
      setSlug(newSlug);
   };
   const onClickFunction = async () => {
      setIsLoading(true);
      try {
         const updatedProject = await editProject(
            project.id,
            title,
            slug,
            typeId,
            award,
            description,
            year,
            area,
            address,
            designTeam,
            collaboration,
            viewCounter,
            showOnHomePage,
            status
         );
         if (updatedProject) {
            setIsLoading(false);
            setOpen(false);
            fetchProjects();
         }
      } catch (e) {
         //  console.log((e as Error).message);
         setError((e as Error).message);
         setIsLoading(false);
      }
   };
   useEffect(() => {
      const fetchTypes = async () => {
         const res = await getTypes();
         setTypes(res);
      };
      try {
         fetchTypes();
      } catch (e) {
         setError((e as Error).message);
      }
   }, []);
   return (
      <div className='w-full'>
         <Label htmlFor='title' className='text-gray-900'>
            Title
         </Label>
         <input
            type='title'
            name='title'
            id='title'
            className='mb-2 block w-full rounded-md border-0 px-2 py-1.5 font-normal text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            placeholder='My New Project'
            onChange={(e) => handleTitleChange(e.target.value)}
            required
            value={title}
         />
         <Label htmlFor='slug' className='text-gray-900'>
            Slug
         </Label>
         <input
            type='slug'
            name='slug'
            id='slug'
            className='mb-2 block w-full rounded-md border-0 px-2 py-1.5 font-normal text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            placeholder='my-new-project'
            onChange={(e) => setSlug(e.target.value)}
            required
            value={slug}
         />
         <Label htmlFor='type' className='text-gray-900'>
            Type
         </Label>
         <select
            id='type'
            name='type'
            className='mb-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
            onChange={(e) => {
               setTypeId(e.target.value);
            }}
            required
            value={typeId}
         >
            <option value='' disabled selected>
               Select Type
            </option>
            {types.map((type) => (
               <option key={type.id} value={type.id}>
                  {type.title}
               </option>
            ))}
         </select>
         <Label htmlFor='award' className='text-gray-900'>
            Award
         </Label>
         <textarea
            id='award'
            name='award'
            rows={3}
            className='mb-2 block w-full rounded-md border-0 px-2 py-1.5 font-normal text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            defaultValue={award}
            onChange={(e) => setAward(e.target.value)}
            value={award}
         />
         <Label htmlFor='description' className='text-gray-900'>
            Description
         </Label>
         <textarea
            id='description'
            name='description'
            rows={3}
            className='mb-2 block w-full rounded-md border-0 px-2 py-1.5 font-normal text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
         />
         <Label htmlFor='year' className='text-gray-900'>
            Year
         </Label>
         <input
            type='text'
            name='year'
            id='year'
            className='mb-2 block w-full rounded-md border-0 px-2 py-1.5 font-normal text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            placeholder='2023'
            onChange={(e) => setYear(e.target.value)}
            value={year}
         />
         <Label htmlFor='area' className='text-gray-900'>
            Area
         </Label>
         <input
            type='text'
            name='area'
            id='area'
            className='mb-2 block w-full rounded-md border-0 px-2 py-1.5 font-normal text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            placeholder='100 m2'
            onChange={(e) => setArea(e.target.value)}
            value={area}
         />
         <Label htmlFor='address' className='text-gray-900'>
            Address
         </Label>
         <input
            type='address'
            name='address'
            id='address'
            className='mb-2 block w-full rounded-md border-0 px-2 py-1.5 font-normal text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            placeholder='Interior'
            onChange={(e) => setAddress(e.target.value)}
            value={address}
         />
         <Label htmlFor='designTeam' className='text-gray-900'>
            Design Team
         </Label>
         <input
            type='text'
            name='designTeam'
            id='designTeam'
            className='mb-2 block w-full rounded-md border-0 px-2 py-1.5 font-normal text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            placeholder='Interior'
            onChange={(e) => setDesignTeam(e.target.value)}
            value={designTeam}
         />
         <Label htmlFor='collaboration' className='text-gray-900'>
            collaboration
         </Label>
         <input
            type='text'
            name='collaboration'
            id='collaboration'
            className='mb-2 block w-full rounded-md border-0 px-2 py-1.5 font-normal text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            placeholder='Interior'
            onChange={(e) => setCollaboration(e.target.value)}
            value={collaboration}
         />
         <Label htmlFor='viewCounter' className='text-gray-900'>
            View Counter
         </Label>
         <input
            type='number'
            name='viewCounter'
            id='viewCounter'
            className='mb-2 block w-full rounded-md border-0 px-2 py-1.5 font-normal text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            placeholder='0'
            onChange={(e) => setViewCounter(Number(e.target.value))}
            required
            value={viewCounter}
         />
         <div className='mb-2 flex items-center'>
            <Label htmlFor='showOnHomePage' className='me-2 text-gray-900'>
               Show on home page?
            </Label>
            <input
               id='showOnHomePage'
               name='showOnHomePage'
               type='checkbox'
               className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
               checked={showOnHomePage}
               onChange={(e) => {
                  setShowOnHomePage(e.target.checked);
               }}
            />
         </div>
         <div className='mb-2 flex items-center'>
            <Label htmlFor='status' className='me-2 text-gray-900'>
               Active
            </Label>
            <input
               id='status'
               name='status'
               type='checkbox'
               className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
               checked={status}
               onChange={(e) => {
                  setStatus(e.target.checked);
               }}
            />
         </div>
         {error && (
            <div className='my-2 rounded bg-red-100 px-3 py-2'>
               <Paragraph2 className='text-red-700'>{error}</Paragraph2>
            </div>
         )}
         <div className='bg-gray-50 py-3 sm:flex sm:flex-row-reverse'>
            {!isLoading ? (
               <button
                  type='button'
                  className='inline-flex w-full justify-center rounded-md bg-green-600 px-4 py-1 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto'
                  onClick={onClickFunction}
               >
                  <Paragraph1 className=''>Save</Paragraph1>
               </button>
            ) : (
               <button
                  type='button'
                  className='inline-flex w-full justify-center rounded-md bg-green-600 px-4 py-1 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto'
                  onClick={() => {}}
               >
                  <LoadingSpin loadingText='Creating ...' />
               </button>
            )}
            <button
               type='button'
               className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-4 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
               onClick={() => setOpen(false)}
               ref={cancelButtonRef}
            >
               <Paragraph1 className=''>Cancel</Paragraph1>
            </button>
         </div>
      </div>
   );
};
export default EditProjectForm;
