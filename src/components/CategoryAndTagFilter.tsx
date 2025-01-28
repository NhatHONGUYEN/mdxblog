"use client";

import { useState } from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Badge } from "./ui/badge";
import { Category } from "./Category";
import { Tag } from "./Tag";
import { FilterProps } from "@/lib/types";

export function CategoryAndTagFilter({ categories, tags, posts }: FilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      !selectedCategory ||
      (Array.isArray(post.category)
        ? post.category.includes(selectedCategory)
        : post.category === selectedCategory);

    const matchesTag = !selectedTag || post.tags.includes(selectedTag);

    return matchesCategory && matchesTag;
  });

  return (
    <>
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

      <div className="lg:col-span-3">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.slug}>
              <Link
                href={`/posts/${post.slug}`}
                className="flex flex-col gap-3"
              >
                <h3 className="text-balance text-2xl font-semibold lg:text-3xl">
                  {post.title}
                </h3>
                <p className="text-muted-foreground">
                  {post.description || "No description available"}
                </p>
                <div className="mt-3 flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">
                    on {new Date(post.date).toLocaleDateString("fr-FR")}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
              <Separator className="my-8" />
            </div>
          ))
        ) : (
          <p className="text-center text-muted-foreground">
            No posts found for the selected category or tag.
          </p>
        )}
      </div>
    </>
  );
}
