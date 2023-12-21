'use server';
import { signIn, signOut } from '@/auth';
import Users from '@/schemas/Users';
import { AuthError } from 'next-auth';
import connectMongo from './connectMongo';
import { ITypesSchema, IUsersSchema } from './types';
import Types from '@/schemas/Types';
export async function authenticate(
   prevState: string | undefined,
   formData: FormData
) {
   try {
      await signIn('credentials', formData);
   } catch (error) {
      if (error instanceof AuthError) {
         switch (error.type) {
            case 'CredentialsSignin':
               return 'Invalid credentials.';
            default:
               return 'Something went wrong.';
         }
      }
      throw error;
   }
}
export async function signOutFunc() {
   await signOut();
}
// Users CRUD functions
export async function getUsers() {
   try {
      await connectMongo();
      const users: IUsersSchema[] = await Users.find();

      // Convert MongoDB documents to plain JavaScript objects
      const usersAsObjects = users.map((user) => ({
         id: user.id,
         email: user.email,
         password: user.password,
         name: user.name,
         status: user.status,
      }));

      return usersAsObjects;
   } catch (e) {
      console.log(e);
   }
   return [];
}
export async function createUser(
   name: string,
   email: string,
   password: string,
   status: boolean
) {
   try {
      await connectMongo();

      if (
         email === null ||
         email === undefined ||
         password === null ||
         password === undefined
      )
         throw new Error('Email or password is not provided.');

      // We have to check if the request is for a new Users or not.
      const userDataFromDB = await Users.findOne({
         email: email,
      });

      if (userDataFromDB) throw new Error('User already exists.');

      const id = Math.floor(Math.random() * 1000000)
         .toString()
         .padStart(6, '0');

      const user: IUsersSchema = new Users({
         id,
         name,
         email,
         password,
         status,
      });

      await user.save();
      return user;
   } catch (e) {
      console.log(e);
      throw new Error('An error occurred on saving the user.');
   }
}
export async function editUser(
   id: string,
   name: string,
   email: string,
   password: string,
   status: boolean
) {
   try {
      await connectMongo();

      if (
         email === null ||
         email === undefined ||
         password === null ||
         password === undefined
      )
         throw new Error('Email or password is not provided.');

      // We have to check if the request is for a new Users or not.
      const updatedUser = await Users.findOneAndUpdate(
         {
            id: id,
         },
         {
            $set: {
               name: name,
               email: email,
               password: password,
               status: status,
            },
         },
         {
            new: true,
         }
      );
      if (!updatedUser) throw new Error('User does not exist.');

      return updatedUser;
   } catch (e) {
      console.log(e);
      throw new Error('An error occurred on saving the user.');
   }
}
export async function removeUser(id: string) {
   try {
      await connectMongo();

      if (id === null || id === undefined)
         throw new Error('Id is not provided.');

      const userDataFromDB = await Users.findOne({
         id: id,
      });

      if (!userDataFromDB) throw new Error('User does not exist.');

      await Users.deleteOne({
         id: id,
      });
      return true;
   } catch (e) {
      console.log(e);
      throw new Error('An error occurred on removing the user.');
   }
}
// Types CRUD functions
export async function getTypes() {
   try {
      await connectMongo();
      const types: ITypesSchema[] = await Types.find();

      // Convert MongoDB documents to plain JavaScript objects
      const typesAsObjects = types.map((type) => ({
         id: type.id,
         title: type.title,
         slug: type.slug,
         orderingNumber: type.orderingNumber,
         status: type.status,
      }));

      return typesAsObjects;
   } catch (e) {
      console.log(e);
   }
   return [];
}
export async function createType(
   title: string,
   slug: string,
   orderingNumber: number,
   status: boolean
) {
   try {
      await connectMongo();

      if (
         title === null ||
         title === '' ||
         title === undefined ||
         slug === null ||
         slug === '' ||
         slug === undefined
      )
         throw new Error('Title or Slug is not provided.');

      // We have to check if the request is for a new Types or not.
      const typeDataFromDB = await Types.findOne({
         slug: slug,
      });

      if (typeDataFromDB) throw new Error('Type already exists.');

      const id = Math.floor(Math.random() * 1000000)
         .toString()
         .padStart(6, '0');

      const type: ITypesSchema = new Types({
         id,
         title,
         slug,
         orderingNumber,
         status,
      });

      await type.save();
      return type;
   } catch (e) {
      throw new Error('An error occurred on saving the type.');
   }
}
export async function editType(
   id: string,
   title: string,
   slug: string,
   orderingNumber: number,
   status: boolean
) {
   try {
      await connectMongo();

      if (
         title === null ||
         title === '' ||
         title === null ||
         slug === null ||
         slug === '' ||
         slug === undefined
      )
         throw new Error('Title or Slug is not provided.');

      // We have to check if the request is for a new Users or not.
      const updatedType = await Types.findOneAndUpdate(
         {
            id: id,
         },
         {
            $set: {
               title: title,
               slug: slug,
               orderingNumber: orderingNumber,
               status: status,
            },
         },
         {
            new: true,
         }
      );
      if (!updatedType) throw new Error('Type does not exist.');

      return updatedType;
   } catch (e) {
      console.log(e);
      throw new Error('An error occurred on saving the type.');
   }
}
