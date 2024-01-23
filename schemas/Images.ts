import { Schema, model, models } from 'mongoose';

import { IImagesSchema } from '@/utils/types';

const ImagesSchema = new Schema<IImagesSchema>(
   {
      id: {
         type: String,
         unique: true,
         required: true,
      },
      projectId: {
         type: String,
         required: true,
      },
      fileKey: {
         type: String,
         required: true,
      },
      fileURL: {
         type: String,
         required: true,
      },
      status: {
         type: Boolean,
         default: false,
      },
   },
   { timestamps: true }
);

const Images = models.Images || model<IImagesSchema>('Images', ImagesSchema);

export default Images;
