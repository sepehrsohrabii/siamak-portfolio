// DB schema structure that are used in MongoDB schemas.
export interface IUsersSchema extends Document {
  uniqueCode: string;
  username: string;
  email: string;
  password: string;
  nickname: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}
export interface IProjectSchema extends Document {
  uniqueCode: string;
  title: string;
  slug: string;
  mainImage: string;
  galleryImages: [string];
  award: string;
  description: string;
  year: string;
  area: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}
export interface ITypeSchema extends Document {
  uniqueCode: string;
  title: string;
  slug: string;
  projectsNumber: number;
  orderingNumber: number;
  status: boolean;
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
