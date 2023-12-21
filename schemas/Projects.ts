import { Schema, model, models } from 'mongoose';

import { IProjectsSchema } from '@/utils/types';

const ProjectsSchema = new Schema<IProjectsSchema>(
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
      typeId: {
         type: String,
         required: true,
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
      address: {
         type: String,
         required: false,
      },
      designTeam: {
         type: String,
         required: false,
      },
      collaboration: {
         type: String,
         required: false,
      },
      viewCounter: {
         type: Number,
         required: false,
         default: 0,
      },
      status: {
         type: Boolean,
         default: false,
      },
   },
   { timestamps: true }
);

const Projects = models.Projects || model<IProjectsSchema>('Projects', ProjectsSchema);

export default Projects;
