import { Schema, model, models } from 'mongoose';

import { IProjectSchema } from '@/utils/types';

const ProjectSchema = new Schema<IProjectSchema>(
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
      mainImage: {
         type: String,
         required: true,
      },
      galleryImages: [{
         type: String,
         required: false,
      }],
      award: {
         type: String,
         required: false,
      },
      description: {
         type: String,
         required: true,
      },
      year: {
         type: String,
         required: false,
      },
      area: {
         type: String,
         required: false,
      },
      status: {
         type: Boolean,
         default: false,
      },
   },
   { timestamps: true }
);

const Project = models.Project || model<IProjectSchema>('Project', ProjectSchema);

export default Project;
