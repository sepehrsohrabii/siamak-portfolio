import mime from 'mime';
import { NextRequest, NextResponse } from 'next/server';
import {
   S3Client,
   PutObjectCommand,
   GetObjectCommand,
   ObjectCannedACL,
   PutObjectCommandInput,
} from '@aws-sdk/client-s3';
import { S3RequestPresigner } from '@aws-sdk/s3-request-presigner';
import { createRequest } from '@aws-sdk/util-create-request';
import { formatUrl } from '@aws-sdk/util-format-url';
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
   const s3 = new S3Client({
      region: 'default',
      endpoint: process.env.ARVAN_STORAGE_ENDPOINT_URL,
      credentials: {
         accessKeyId: process.env.ARVAN_STORAGE_ACCESS_KEY || '',
         secretAccessKey: process.env.ARVAN_STORAGE_SECRET_KEY || '',
      },
   });
   const formDataEntryValues = Array.from(formData.values());

   // Use Promise.all to wait for all asynchronous operations to complete
   await Promise.all(
      formDataEntryValues.map(async (formDataEntryValue) => {
         if (
            typeof formDataEntryValue === 'object' &&
            'arrayBuffer' in formDataEntryValue
         ) {
            const file = formDataEntryValue as unknown as Blob;
            const buffer = Buffer.from(await file.arrayBuffer());

            const uniqueSuffix = Math.floor(Math.random() * 1000000)
               .toString()
               .padStart(6, '0');

            const filename = `${uniqueSuffix}.${mime.getExtension(file.type)}`;
            const uploadPath: string = `${projectId}/${imageType}/${filename}`;

            try {
               const uploadParams: PutObjectCommandInput = {
                  Bucket: process.env.ARVAN_STORAGE_NAME,
                  Key: uploadPath,
                  ACL: 'public-read' as ObjectCannedACL, // Ensure ACL is of type ObjectCannedACL
                  Body: buffer,
                  ContentType: file.type,
               };
               await s3.send(new PutObjectCommand(uploadParams));
               const downloadUrl = `https://${process.env.ARVAN_STORAGE_BASE_URL}/${uploadPath}`;

               const image: IImagesSchema = new Images({
                  id: uniqueSuffix,
                  projectId: projectId,
                  fileKey: uploadPath,
                  fileURL: downloadUrl,
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
                           status: true,
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
                  data: downloadUrl,
               });
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
