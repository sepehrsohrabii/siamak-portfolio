import { Schema, model, models } from 'mongoose';

import { IUsersSchema } from '@/utils/types';

const UsersSchema = new Schema<IUsersSchema>(
   {
      uniqueCode: {
         type: String,
         unique: true,
         required: true,
      },
      username: {
         type: String,
         required: true,
         unique: true,
      },
      email: {
         type: String,
         required: false,
         default: null,
      },
      password: {
         type: String,
         required: false,
         default: null,
      },
      nickname: {
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
