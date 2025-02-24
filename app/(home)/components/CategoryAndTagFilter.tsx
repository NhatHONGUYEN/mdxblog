"use client";

import { useState } from "react";
import { Category } from "./(category)/Category";
import { FilteredPosts } from "./FilteredPosts";
import { FilterProps } from "@/lib/types";
import { Tag } from "./(tags)/Tag";
import { useFilteredPosts } from "../../../src/lib/hooks/useFilteredPosts";

export function CategoryAndTagFilter({ categories, tags, posts }: FilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredPosts = useFilteredPosts(posts, selectedCategory, selectedTags);

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
