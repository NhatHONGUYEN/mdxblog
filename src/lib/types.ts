import { Dispatch, SetStateAction } from "react";

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
export type contentProps = {
  content: string;
};

export type PostHeaderProps = {
  title: string;
  date: string;
};

export type AboutMainImageProps = {
  activeImage: { src: string; alt: string }[];
};

export type AboutAccordionContentProps = {
  description: string;
  imageSrc: { src: string; alt: string }[];
};

export type Tab = {
  id: number;
  title: string;
  description: string;
  imageSrc: { src: string; alt: string }[];
};

export type AboutAccordionItemProps = {
  tab: Tab;
  activeTabId: number | null;
  setActiveTabId: Dispatch<SetStateAction<number | null>>;
};

export type AboutAccordionProps = {
  activeTabId: number | null;
  setActiveTabId: Dispatch<SetStateAction<number | null>>;
};
