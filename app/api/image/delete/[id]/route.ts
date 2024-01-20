import fs from 'fs';
import { NextResponse, type NextRequest } from 'next/server';

import ServerLogs from '@/schemas/ServerLogs';
import { IImagesSchema, IServerLogsSchema } from '@/utils/types';
import Images from '@/schemas/Images';
import Projects from '@/schemas/Projects';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

export async function DELETE(
   request: NextRequest,
   { params }: { params: { id: string } }
) {
   try {
      const imageDatafromDB = await Images.findOne({
         id: params.id,
      });
      if (!imageDatafromDB) {
         return NextResponse.json({
            success: false,
            error: 'Image not found',
            data: null,
         });
      }

      // Delete the file from the filesystem using a Promise chain
      const handleFileDeletion = async () => {
         try {
            fs.unlinkSync(`./public${imageDatafromDB.fileURL}`);
         } catch (err) {
            const serverLog: IServerLogsSchema = new ServerLogs({
               logUrl: `api/image/delete/${params.id}/route.ts`,
               logText: err,
            });
            await serverLog.save();
            throw new Error(String(err));
         }
      };

      // Handle image deletion errors and return appropriate responses
      await Promise.resolve(handleFileDeletion())
         .then(async () => {
            // Delete the image document from the database
            await Images.findOneAndDelete({ id: params.id });

            // Update the project's image IDs and status if needed
            const project = await Projects.findOne({
               $or: [
                  { mainImageId: params.id },
                  { galleryImagesIds: { $in: [params.id] } },
               ],
            });
            if (project.mainImageId === params.id) {
               await Projects.findOneAndUpdate(
                  {
                     mainImageId: params.id,
                  },
                  {
                     $set: {
                        mainImageId: '',
                     },
                  },
                  { new: true }
               );
            } else if (project.galleryImagesIds.includes(params.id)) {
               await Projects.findOneAndUpdate(
                  {
                     galleryImagesIds: { $in: [params.id] },
                  },
                  {
                     $pull: {
                        galleryImagesIds: params.id,
                     },
                  },
                  { new: true }
               );
            }
            // Return success response
            return NextResponse.json({
               success: true,
               error: null,
               data: null,
            });
         })
         .catch(async (e) => {
            const serverLog: IServerLogsSchema = new ServerLogs({
               logUrl: `api/image/delete/${params.id}/route.ts`,
               logText: e,
            });
            console.log(e);
            await serverLog.save();
            return NextResponse.json({
               success: false,
               error: 'An error occurred while deleting the image. Please try again later.',
               data: null,
            });
         });
   } catch (e) {
      const serverLog: IServerLogsSchema = new ServerLogs({
         logUrl: `api/image/delete/${params.id}/route.ts`,
         logText: e,
      });
      console.log(e);
      await serverLog.save();
      return NextResponse.json({
         success: false,
         error: 'An unexpected error occurred. Please contact the administrator.',
         data: null,
      });
   }
   return NextResponse.json({
      success: null,
      error: null,
      data: null,
   });
}
