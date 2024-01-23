import Images from '@/schemas/Images';
import { NextRequest, NextResponse } from 'next/server';
const { S3Client, ListBucketsCommand } = require('@aws-sdk/client-s3');
export const fetchCache = 'force-no-store';
export const revalidate = 0;

export async function GET(
   request: NextRequest,
   { params }: { params: { id: string } }
) {
   const s3 = new S3Client({
      region: 'default',
      endpoint: process.env.ARVAN_STORAGE_DOMAIN,
      credentials: {
         accessKeyId: process.env.ARVAN_STORAGE_ACCESS_KEY,
         secretAccessKey: process.env.ARVAN_STORAGE_SECRET_KEY,
      },
   });
   const run = async () => {
      try {
         const data = await s3.send(new ListBucketsCommand({}));
         console.log('Success', data.Buckets);
      } catch (err) {
         console.log('Error', err);
      }
   };

   run();
   try {
      console.log('params:', params);
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
      return NextResponse.json({
         success: true,
         error: null,
         data: imageDatafromDB,
      });
   } catch (e) {
      console.log(e);
      return NextResponse.json({
         success: false,
         error: e,
         data: null,
      });
   }
}
