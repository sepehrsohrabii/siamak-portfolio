import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { IUsersSchema } from './utils/types';
import Users from './schemas/Users';
import connectMongo from './utils/connectMongo';

async function getUser(email: string): Promise<IUsersSchema | undefined> {
   try {
      await connectMongo();
      const user = await Users.findOne({
         email: email,
      });
      return user;
   } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
   }
}

export const { auth, signIn, signOut } = NextAuth({
   ...authConfig,
   providers: [
      Credentials({
         async authorize(credentials) {
            const parsedCredentials = z
               .object({
                  email: z.string().email(),
                  password: z.string().min(6),
               })
               .safeParse(credentials);

            if (parsedCredentials.success) {
               const { email, password } = parsedCredentials.data;
               const user = await getUser(email);
               if (!user) return null;
               // Assuming user.password is the hashed password stored in the database
               const passwordsMatch = await bcrypt.compare(
                  password,
                  user.password
               );
               if (passwordsMatch) return user;
            }
            return null;
         },
      }),
   ],
});
