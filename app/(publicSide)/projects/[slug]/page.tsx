import SingleProjectMainContainer from '@/components/PublicSide/SingleProjectPage/mainContainer';
import { getImageById, getProjectBySlug } from '@/utils/actions';

import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
   params: { slug: string };
};

export async function generateMetadata(
   { params }: Props,
   parent: ResolvingMetadata
): Promise<Metadata> {
   const slug = params.slug;

   try {
      // Fetch data concurrently
      const [project, parentMetadata] = await Promise.all([
         getProjectBySlug(slug),
         parent,
      ]);

      if (!project) {
         return {
            title: 'Project not found',
         };
      }

      const image: any | undefined = await getImageById(project.mainImageId);
      const previousImages = parentMetadata.openGraph?.images || [];

      return {
         title: project.title,
         openGraph: {
            images: image ? [image, ...previousImages] : previousImages,
         },
      };
   } catch (error) {
      console.error('Error generating metadata:', error);
      return {
         title: 'Error loading project',
      };
   }
}

const SingleProjectPage = ({ params }: Props) => {
   return <SingleProjectMainContainer params={params} />;
};

export default SingleProjectPage;
