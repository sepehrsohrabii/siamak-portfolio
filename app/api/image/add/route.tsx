import { stat, mkdir, writeFile } from 'fs/promises';
import mime from 'mime';
import { NextRequest, NextResponse } from 'next/server';
import { join } from 'path';

import { IImagesSchema, IServerLogsSchema } from '@/utils/types';
import ServerLogs from '@/schemas/ServerLogs';
import Projects from '@/schemas/Projects';
import Images from '@/schemas/Images';

export const fetchCache = 'force-no-store';
export const revalidate = 0;

export async function POST(request: NextRequest) {
   const formData = await request.formData();
   const projectId = formData.get('projectId');
   const projectSlug = formData.get('projectSlug');
   const imageType = formData.get('imageType');

   if (!projectId || !projectSlug || !imageType) {
      return NextResponse.json(
         {
            error: 'ProjectId, ProjectSlug, or ImageType is not provided',
         },
         { status: 400 }
      );
   }

   const formDataEntryValues = Array.from(formData.values());

   // Use Promise.all to wait for all asynchronous operations to complete
   await Promise.all(
      formDataEntryValues.map(async (formDataEntryValue) => {
         if (
            typeof formDataEntryValue === 'object' &&
            'arrayBuffer' in formDataEntryValue
         ) {
            console.log('server: ', formDataEntryValue);
            const file = formDataEntryValue as unknown as Blob;
            const buffer = Buffer.from(await file.arrayBuffer());
            const relativeUploadDir: string = `/uploads/${projectId}/${imageType}`;
            const uploadDir = join(process.cwd(), 'public', relativeUploadDir);

            try {
               await stat(uploadDir);
            } catch (e: any) {
               const serverLog: IServerLogsSchema = new ServerLogs({
                  logUrl: 'api/image/add/route.ts',
                  logText: e,
               });
               await serverLog.save();
               if (e.code === 'ENOENT') {
                  await mkdir(uploadDir, { recursive: true });
               } else {
                  console.error('Error on creating the uploads directory\n', e);
                  throw new Error('Something went wrong.');
               }
            }

            const fs = require('fs').promises;
            try {
               const uniqueSuffix = Math.floor(Math.random() * 1000000)
                  .toString()
                  .padStart(6, '0');

               const filename = `${uniqueSuffix}.${mime.getExtension(
                  file.type
               )}`;
               const filePath = `${uploadDir}/${filename}`;

               // Write the file
               await writeFile(filePath, buffer);

               // Check if the file exists
               const fileExists = await fs
                  .access(filePath)
                  .then(() => true)
                  .catch(() => false);

               if (fileExists) {
                  const image: IImagesSchema = new Images({
                     id: uniqueSuffix,
                     projectId: projectId,
                     fileURL: `${relativeUploadDir}/${filename}`,
                     status: true,
                  });
                  await image.save();
                  // We have to check if the request is for new Users or not.
                  if (imageType === 'mainImage') {
                     const updatedProject = await Projects.findOneAndUpdate(
                        {
                           id: projectId,
                        },
                        {
                           $set: {
                              mainImageId: uniqueSuffix,
                           },
                        },
                        {
                           new: true,
                        }
                     );
                     if (!updatedProject)
                        throw new Error('Project does not exist.');
                  } else if (imageType === 'galleryImages') {
                     const updatedProject = await Projects.findOneAndUpdate(
                        {
                           id: projectId,
                        },
                        {
                           $push: {
                              galleryImagesIds: uniqueSuffix,
                           },
                        },
                        {
                           new: true,
                        }
                     );
                     if (!updatedProject)
                        throw new Error('Project does not exist.');
                  }
                  return NextResponse.json({
                     success: true,
                     error: null,
                     data: `${relativeUploadDir}/${filename}`,
                  });
               } else {
                  // File does not exist, handle the error
                  throw new Error('File upload failed.');
               }
            } catch (e) {
               const serverLog: IServerLogsSchema = new ServerLogs({
                  logUrl: '2api/image/add/route.ts',
                  logText: e,
               });
               await serverLog.save();
               return NextResponse.json({
                  success: false,
                  error: 'Something went wrong.',
                  data: null,
               });
            }
         }
      })
   );

   // Return a default response if no files were processed
   return NextResponse.json({
      success: false,
      error: null,
      data: null,
   });
}
