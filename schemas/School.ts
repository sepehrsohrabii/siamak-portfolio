import { Schema, model, models } from 'mongoose';

import { ISchoolSchema } from '@/utils/types';

const SchoolSchema = new Schema<ISchoolSchema>(
   {
      name: {
         type: String,
         required: true,
      },
      schoolUniqueId: {
         type: String,
         required: true,
         unique: true,
      },
      cityUnique: {
         type: String,
         required: true,
      },
      latitude: {
         type: String,
         required: true,
      },
      longitude: {
         type: String,
         required: true,
      },
      maxSpeed: {
         type: Number,
         default: 90,
      },
   },
   { timestamps: true }
);

const School = models.School || model<ISchoolSchema>('School', SchoolSchema);

export default School;
