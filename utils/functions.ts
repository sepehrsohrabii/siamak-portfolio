import ServerLogs from '@/schemas/ServerLogs';
import { IServerLogsSchema } from './types';
export function slugify(text: string) {
   return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w-]+/g, '') // Remove non-word characters
      .replace(/--+/g, '-'); // Replace multiple - with single -
}

export async function getImageById(id: string) {
   try {
      const response = await fetch(`/api/image/read/${id}`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         },
      });

      const data = await response.json();

      if (response.ok) {
         return data.data;
      } else {
         console.log(data.error);
      }
   } catch (error) {
      console.log(error);
   }
}
