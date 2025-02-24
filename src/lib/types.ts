import { Dispatch, SetStateAction } from "react";

// 🔹 Type générique pour les images
export type ImageSrc = {
  src: string;
  alt: string;
};

// 🔹 Type générique pour les onglets (réutilisé dans l'Accordion)
export type Tab = {
  id: number;
  title: string;
  description: string;
  imageSrc: ImageSrc[];
};

// 🔹 Type pour les articles (posts)
export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string | null;
  tags: string[];
  category: string | string[];
};

// 🔹 Type pour les éléments de navigation
export type NavItem = {
  name: string;
  link: string;
};

// 🔹 Type pour les boutons réutilisables
export type ButtonProps = {
  label: string;
  isSelected: boolean;
  onClick: () => void;
};
// 🔹 Types pour le filtrage des posts
export type FilterProps = {
  categories: string[];
  tags: string[];
  posts: Post[];
};

export type FilteredPostsProps = {
  posts: Post[];
};

// 🔹 Types pour la gestion des catégories et tags
export type CategoryProps = {
  categories: string[];
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
};

export type TagProps = {
  tags: string[];
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
};

// 🔹 Types pour le contenu des articles
export type ContentProps = {
  content: string;
};

export type PostHeaderProps = {
  title: string;
  date: string;
};

// 🔹 Types pour le composant "About"
export type AboutMainImageProps = {
  activeImage: ImageSrc[];
};

export type AboutAccordionContentProps = {
  description: string;
  imageSrc: ImageSrc[];
};

// 🔹 Types pour les composants de l'Accordion
export type AboutAccordionProps = {
  activeTabId: number | null;
  setActiveTabId: Dispatch<SetStateAction<number | null>>;
};

export type AboutAccordionItemProps = AboutAccordionProps & {
  tab: Tab;
};
