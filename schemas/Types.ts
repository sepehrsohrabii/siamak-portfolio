import { Schema, model, models } from 'mongoose';

import { ITypesSchema } from '@/utils/types';

const TypesSchema = new Schema<ITypesSchema>(
   {
      id: {
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

const Types = models.Types || model<ITypesSchema>('Types', TypesSchema);

export default Types;
