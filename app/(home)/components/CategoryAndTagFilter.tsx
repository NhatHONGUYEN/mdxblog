"use client";

import { useState } from "react";
import { Category } from "./(category)/Category";

import { FilteredPosts } from "./FilteredPosts";
import { FilterProps } from "@/lib/types";
import { filterPosts } from "@/lib/utils";
import { Tag } from "./(tags)/Tag";

export function CategoryAndTagFilter({ categories, tags, posts }: FilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = filterPosts(posts, selectedCategory, selectedTag);

  return (
    <div className=" mx-auto mt-32 grid grid-cols-1 gap-20 lg:grid-cols-4">
      <div className="hidden flex-col gap-6 lg:flex">
        <Category
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Tag
          tags={tags}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />
      </div>

      <FilteredPosts posts={filteredPosts} />
    </div>
  );
}
