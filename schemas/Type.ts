import { Schema, model, models } from 'mongoose';

import { ITypeSchema } from '@/utils/types';

const TypeSchema = new Schema<ITypeSchema>(
   {
      uniqueCode: {
         type: String,
         unique: true,
         required: true,
      },
      title: {
         type: String,
         required: true,
      },
      slug: {
         type: String,
         required: true,
         unique: true,
      },
      projectsNumber: {
         type: Number,
         require: false,
         default: 0
      },
      orderingNumber: {
         type: Number,
         require: false,
         default: 0
      },
      status: {
         type: Boolean,
         default: false,
      },
   },
   { timestamps: true }
);

const Type = models.Type || model<ITypeSchema>('Type', TypeSchema);

export default Type;
