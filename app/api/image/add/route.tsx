import mime from 'mime';
import { NextRequest, NextResponse } from 'next/server';
const {
   S3Client,
   PutObjectCommand,
   GetObjectCommand,
} = require('@aws-sdk/client-s3');
const { S3RequestPresigner } = require('@aws-sdk/s3-request-presigner');
const { createRequest } = require('@aws-sdk/util-create-request');
const { formatUrl } = require('@aws-sdk/util-format-url');
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
      endpoint: process.env.ARVAN_STORAGE_DOMAIN,
      credentials: {
         accessKeyId: process.env.ARVAN_STORAGE_ACCESS_KEY,
         secretAccessKey: process.env.ARVAN_STORAGE_SECRET_KEY,
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
               const uploadParams = {
                  Bucket: process.env.ARVAN_STORAGE_NAME,
                  Key: uploadPath,
                  Body: buffer,
                  ContentType: file.type,
               };
               const data = await s3.send(new PutObjectCommand(uploadParams));
               console.log('Success', data);

               const downloadParams = {
                  Bucket: process.env.ARVAN_STORAGE_NAME,
                  Key: uploadPath,
               };
               const request = await createRequest(
                  s3,
                  // new GetObjectCommand(clientParams)
                  new GetObjectCommand(downloadParams)
               );
               // Create and format presigned URL
               const signedUrl = formatUrl(
                  await signedRequest.presign(request)
               );
               console.log(`download url: ${signedUrl}`);
               const image: IImagesSchema = new Images({
                  id: uniqueSuffix,
                  projectId: projectId,
                  fileKey: uploadPath,
                  fileURL: signedUrl,
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
                  data: `${relativeUploadDir}/${filename}`,
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
