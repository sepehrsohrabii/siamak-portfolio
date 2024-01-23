import Images from '@/schemas/Images';
import { NextRequest, NextResponse } from 'next/server';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

export async function GET(
   request: NextRequest,
   { params }: { params: { id: string } }
) {
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
