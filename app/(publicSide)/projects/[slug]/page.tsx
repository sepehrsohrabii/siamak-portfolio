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
   // read route params
   const slug = params.slug;

   // fetch data
   const project = await getProjectBySlug(slug);
   const image = await getImageById(project.mainImageId);

   // optionally access and extend (rather than replace) parent metadata
   const previousImages = (await parent).openGraph?.images || [];

   return {
      title: project.title,
      openGraph: {
         images: [image.fileURL, ...previousImages],
      },
   };
}
const SingleProjectPage = ({ params }: Props) => {
   return <SingleProjectMainContainer params={params} />;
};
export default SingleProjectPage;
