import { getActiveProjectsSlugs } from '@/utils/actions';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
   const projects = await getActiveProjectsSlugs();
   return [
      {
         url: process.env.NEXTAUTH_URL!,
         lastModified: new Date(),
         changeFrequency: 'yearly' as const,
         priority: 1,
      },
      {
         url: process.env.NEXTAUTH_URL! + '/about',
         lastModified: new Date(),
         changeFrequency: 'monthly' as const,
         priority: 0.8,
      },
      {
         url: process.env.NEXTAUTH_URL! + '/contact',
         lastModified: new Date(),
         changeFrequency: 'monthly' as const,
         priority: 0.8,
      },
      {
         url: process.env.NEXTAUTH_URL! + '/projects',
         lastModified: new Date(),
         changeFrequency: 'weekly' as const,
         priority: 0.5,
      },
      {
         url: process.env.NEXTAUTH_URL! + '/awards',
         lastModified: new Date(),
         changeFrequency: 'weekly' as const,
         priority: 0.5,
      },
      ...projects.map((project) => ({
         url: process.env.NEXTAUTH_URL! + `/projects/${project.slug}`,
         lastModified: project.updatedAt,
         changeFrequency: 'monthly' as const,
         priority: 0.3,
      })),
   ];
}
