"use client";

import { useState } from "react";
import { Category } from "./(category)/Category";
import { FilteredPosts } from "./FilteredPosts";
import { FilterProps, Post } from "@/lib/types";
import { Tag } from "./(tags)/Tag";

function filterPosts(
  posts: Post[],
  selectedCategory: string | null,
  selectedTags: string[]
): Post[] {
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
}

export function CategoryAndTagFilter({ categories, tags, posts }: FilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredPosts = filterPosts(posts, selectedCategory, selectedTags);

  return (
    <div className="mx-auto mt-32 grid grid-cols-1 gap-20 lg:grid-cols-4">
      <div className="hidden flex-col gap-6 lg:flex">
        <Category
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Tag
          tags={tags}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
      </div>

      <FilteredPosts posts={filteredPosts} />
    </div>
  );
}
