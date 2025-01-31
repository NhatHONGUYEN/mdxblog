export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string | null;
  tags: string[];
  category: string | string[];
};

export type FilterProps = {
  categories: string[];
  tags: string[];
  posts: Post[];
};

export type ButtonProps = {
  label: string;
  isSelected: boolean;
  onClick: () => void;
};

export type CategoryProps = {
  categories: string[];
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
};

export type TagProps = {
  tags: string[];
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
};

export type ImageSrc = {
  src: string;
  alt: string;
};

export type TabData = {
  id: number;
  title: string;
  imageSrc: ImageSrc[];
  description: string;
};

export type NavItem = {
  name: string;
  link: string;
};

export type FilteredPostsProps = {
  posts: Post[];
};
