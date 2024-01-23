import { getImageById } from './actions';

export default function slugify(text: string) {
   return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w-]+/g, '') // Remove non-word characters
      .replace(/--+/g, '-'); // Replace multiple - with single -
}

export async function getImageURL(imageId: string) {
   const image = await getImageById(imageId);
   const imageUrl = image?.fileURL;
   return imageUrl;
}
