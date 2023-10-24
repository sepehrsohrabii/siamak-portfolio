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
