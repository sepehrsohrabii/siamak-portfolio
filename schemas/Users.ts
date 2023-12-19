import { Schema, model, models } from 'mongoose';

import { IUsersSchema } from '@/utils/types';

const UsersSchema = new Schema<IUsersSchema>(
   {
      id: {
         type: String,
         unique: true,
         required: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
      },
      password: {
         type: String,
         required: false,
         default: null,
      },
      name: {
         type: String,
         required: false,
         default: null,
      },
      status: {
         type: Boolean,
         default: false,
      },
   },
   { timestamps: true }
);

const Users = models.Users || model<IUsersSchema>('Users', UsersSchema);

export default Users;
