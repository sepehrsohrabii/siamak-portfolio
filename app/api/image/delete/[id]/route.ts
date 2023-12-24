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
         id: params.id
      })
      if (!imageDatafromDB) {
         return NextResponse.json({
            success: false,
            error: 'Nothing Found.',
            data: null,
         });
      }

      // To delete the file from the server, we have to use fs.unlink()
      fs.unlink(`./public${imageDatafromDB.fileURL}`, async (err) => {
         if (err) {
            const serverLog: IServerLogsSchema = new ServerLogs({
               logUrl: `api/image/delete/${params.id}/route.ts`,
               logText: err,
            });
            await serverLog.save();
         };
      });
      // Find the document to delete by driverDocumentUnique
      await Images.findOneAndDelete({
         id: params.id,
      });
      await Projects.findOneAndUpdate(
         {
           $or: [
             { mainImageId: params.id },
             { galleryImagesIds: { $in: [params.id] } }
           ]
         },
         {
           $pull: {
             galleryImagesIds: params.id
           },
           $set: {
             mainImageId: { $cond: { if: { $eq: ['$mainImageId', params.id] }, then: '', else: '$mainImageId' } }
           }
         },
         { new: true }
       );
      return NextResponse.json({
         success: true,
         error: null,
         data: null,
      });
   } catch (e) {
      const serverLog: IServerLogsSchema = new ServerLogs({
         logUrl: `api/image/delete/${params.id}/route.ts`,
         logText: e,
      });
      await serverLog.save();
      return NextResponse.json({
         success: false,
         error: 'خطایی در سرور رخ داده است. لطفا لحظاتی دیگر مجددا تلاش نمایید.',
         data: null,
      });
   }
}
