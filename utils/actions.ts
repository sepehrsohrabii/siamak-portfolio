'use server';
import { signIn, signOut } from '@/auth';
import Users from '@/schemas/Users';
import { AuthError } from 'next-auth';
import connectMongo from './connectMongo';
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
export async function getUsers() {
   try {
      await connectMongo();
      const users = await Users.find();
      return users;
   } catch (e) {
      console.log(e);
   }
   return [];
}