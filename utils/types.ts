import { Document } from 'mongoose';
// DB schema structure that are used in MongoDB schemas.
export interface IUsersSchema extends Document {
   id: string;
   email: string;
   password: string;
   name: string;
   status: boolean;
   createdAt: Date;
   updatedAt: Date;
}
export interface UsersType {
   id: string;
   email: string;
   password: string;
   name: string;
   status: boolean;
}
export interface IProjectsSchema extends Document {
   id: string;
   title: string;
   slug: string;
   typeId: string;
   mainImageId: string;
   galleryImagesIds: [string];
   award: string;
   description: string;
   year: string;
   area: string;
   address: string;
   designTeam: string;
   collaboration: string;
   viewCounter: number;
   showOnHomePage: boolean;
   status: boolean;
   createdAt: Date;
   updatedAt: Date;
}
export interface ProjectsType {
   id: string;
   title: string;
   slug: string;
   typeId: string;
   mainImageId: string;
   galleryImagesIds: [string];
   award: string;
   description: string;
   year: string;
   area: string;
   address: string;
   designTeam: string;
   collaboration: string;
   viewCounter: number;
   showOnHomePage: boolean;
   status: boolean;
   createdAt: Date;
   updatedAt: Date;
}
export interface ITypesSchema extends Document {
   id: string;
   title: string;
   slug: string;
   orderingNumber: number;
   status: boolean;
   createdAt: Date;
   updatedAt: Date;
}
export interface TypesType {
   id: string;
   title: string;
   slug: string;
   orderingNumber: number;
   status: boolean;
}
export interface IImagesSchema extends Document {
   id: string;
   projectId: string;
   fileKey: string;
   fileURL: string;
   status: boolean;
   createdAt: Date;
   updatedAt: Date;
}
export interface ImagesType {
   id: string;
   projectId: string;
   fileURL: string;
   status: boolean;
}
export interface IServerLogsSchema extends Document {
   logUrl: string;
   logText: string;
   createdAt: Date;
   updatedAt: Date;
}
// Other types
export interface CarouselSlide {
   src: string;
   title: string;
   description: string;
}

export interface CarouselProps {
   slides: CarouselSlide[];
   autoSlide?: boolean;
   slideInterval?: number;
}

export interface SidebarProps {
   open: boolean;
   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
