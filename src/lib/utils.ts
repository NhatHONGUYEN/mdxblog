import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Post } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function filterPosts(
  posts: Post[],
  selectedCategory: string | null,
  selectedTag: string | null
): Post[] {
  return posts.filter((post) => {
    const matchesCategory =
      !selectedCategory ||
      (Array.isArray(post.category)
        ? post.category.includes(selectedCategory)
        : post.category === selectedCategory);

    const matchesTag = !selectedTag || post.tags.includes(selectedTag);

    return matchesCategory && matchesTag;
  });
}
