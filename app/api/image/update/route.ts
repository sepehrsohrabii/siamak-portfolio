import Images from '@/schemas/Images';
import connectMongo from '@/utils/connectMongo';
import { NextRequest, NextResponse } from 'next/server';

export const fetchCache = 'force-no-store';
export const revalidate = 0;

export async function PATCH(request: NextRequest) {
   try {
      await connectMongo();
      const body = await request.json();
      const { id, status } = body;
      const imageDatafromDB = await Images.findOneAndUpdate(
         {
            id: id,
         },
         {
            $set: {
               status,
            },
         },
         { new: true }
      );
      return NextResponse.json({
        success: true,
        error: null,
        data: imageDatafromDB,
     });
   } catch (e) {
      return NextResponse.json({
         success: false,
         error: e,
         data: null,
      });
   }
}
