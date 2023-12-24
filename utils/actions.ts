'use server';
import { signIn, signOut } from '@/auth';
import Users from '@/schemas/Users';
import { AuthError } from 'next-auth';
import connectMongo from './connectMongo';
import { IProjectsSchema, IServerLogsSchema, ITypesSchema, IUsersSchema } from './types';
import Types from '@/schemas/Types';
import Projects from '@/schemas/Projects';
import fs from 'fs';
import { NextResponse } from 'next/server';
import Images from '@/schemas/Images';
import ServerLogs from '@/schemas/ServerLogs';

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
// Users CRUD functions ------------------------------------------------------------------------------------------------------
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

// Types CRUD functions ------------------------------------------------------------------------------------------------------
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
export async function removeType(id: string) {
   try {
      await connectMongo();

      if (id === null || id === undefined)
         throw new Error('Id is not provided.');

      const typeDataFromDB = await Types.findOne({
         id: id,
      });

      if (!typeDataFromDB) throw new Error('Type does not exist.');

      await Types.deleteOne({
         id: id,
      });
      return true;
   } catch (e) {
      console.log(e);
      throw new Error('An error occurred on removing the type.');
   }
}
// Projects CRUD functions ------------------------------------------------------------------------------------------------------
export async function getProjects() {
   try {
      await connectMongo();
      const projects: IProjectsSchema[] = await Projects.find();

      // Convert MongoDB documents to plain JavaScript objects
      const projectsAsObjects = projects.map((project) => ({
         id: project.id,
         title: project.title,
         slug: project.slug,
         typeId: project.typeId,
         mainImage: project.mainImage,
         galleryImages: project.galleryImages,
         award: project.award,
         description: project.description,
         year: project.year,
         area: project.area,
         address: project.address,
         designTeam: project.designTeam,
         collaboration: project.collaboration,
         viewCounter: project.viewCounter,
         status: project.status,
         createdAt: project.createdAt,
         updatedAt: project.updatedAt,
      }));

      return projectsAsObjects;
   } catch (e) {
      console.log(e);
   }
   return [];
}
export async function createProject(
   title: string,
   slug: string,
   typeId: string,
   award: string,
   description: string,
   year: string,
   area: string,
   address: string,
   designTeam: string,
   collaboration: string,
   viewCounter: number
) {
   try {
      await connectMongo();

      // We have to check if the request is for a new Types or not.
      const projectDataFromDB = await Projects.findOne({
         slug: slug,
      });

      if (projectDataFromDB) throw new Error('Project already exists.');

      const id = Math.floor(Math.random() * 1000000)
         .toString()
         .padStart(6, '0');

      const project: IProjectsSchema = new Projects({
         id,
         title,
         slug,
         typeId,
         award,
         description,
         year,
         area,
         address,
         designTeam,
         collaboration,
         viewCounter,
      });

      await project.save();
      return project;
   } catch (e) {
      console.log(e);
      throw new Error('An error occurred on saving the project.');
   }
}
export async function getProjectById(id: string) {
   try {
      await connectMongo();

      // We have to check if the request is for a new Types or not.
      const project = await Projects.findOne({
         id: id,
      });
      return project;
   } catch (e) {
      console.log(e);
   }
}
export async function getImageById(id: string) {
   try {
      await connectMongo();

      // We have to check if the request is for a new Types or not.
      const image = await Images.findOne({
         id: id,
      });
      return image;
   } catch (e) {
      console.log(e);
   }
}
export async function editProject(
   id: string,
   title: string,
   slug: string,
   typeId: string,
   award: string,
   description: string,
   year: string,
   area: string,
   address: string,
   designTeam: string,
   collaboration: string,
   viewCounter: number,
   status: boolean
) {
   try {
      await connectMongo();

      if (
         id === null ||
         id === '' ||
         id === null
      )
         throw new Error('Id is not provided.');

      // We have to check if the request is for a new Users or not.
      const updatedProject = await Projects.findOneAndUpdate(
         {
            id: id,
         },
         {
            $set: {
               title: title,
               slug: slug,
               typeId: typeId,
               award: award,
               description: description,
               year: year,
               area: area,
               address: address,
               designTeam: designTeam,
               collaboration: collaboration,
               viewCounter: viewCounter,
               status: status,
            },
         },
         {
            new: true,
         }
      );
      if (!updatedProject) throw new Error('Project does not exist.');

      return updatedProject;
   } catch (e) {
      console.log(e);
      throw new Error('An error occurred on saving the project.');
   }
}
export async function removeProject(id: string) {
   try {
      await connectMongo();

      if (id === null || id === undefined)
         throw new Error('Id is not provided.');

      const deletedProject = await Projects.findOneAndDelete({
         id: id,
      });

      if (!deletedProject) throw new Error('Project does not exist.');

      const imagesDatafromDB = await Images.find({
         projectId: id,
      });
      imagesDatafromDB.map((image) => {
         // To delete the file from the server, we have to use fs.unlink()
         fs.unlink(`./public${image.fileURL}`, async (err) => {
            if (err) {
               const serverLog: IServerLogsSchema = new ServerLogs({
                  logUrl: `api/image/delete/${image.id}/route.ts`,
                  logText: err,
               });
               await serverLog.save();
            }
         });
      })
      const deletingImages = await Images.deleteMany({
         projectId: id,
      })
      return true;
   } catch (e) {
      console.log(e);
      throw new Error('An error occurred on removing the Project.');
   }
}