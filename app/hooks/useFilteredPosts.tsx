import { useMemo } from "react";
import { Post } from "@/lib/types";

export function useFilteredPosts(
  posts: Post[],
  selectedCategory: string | null,
  selectedTags: string[]
): Post[] {
  return useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        !selectedCategory ||
        (Array.isArray(post.category)
          ? post.category.includes(selectedCategory)
          : post.category === selectedCategory);

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => post.tags.includes(tag));

      return matchesCategory && matchesTags;
    });
  }, [posts, selectedCategory, selectedTags]);
}
