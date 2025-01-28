"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type Post = {
  slug: string;
  title: string;
  date: string;
  description: string | null;
  tags: string[];
  category: string | string[];
};

type CategoryFilterProps = {
  categories: string[];
  posts: Post[];
};

export function CategoryFilter({ categories, posts }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filtrer les posts par catégorie
  const filteredPosts = selectedCategory
    ? posts.filter((post) =>
        Array.isArray(post.category)
          ? post.category.includes(selectedCategory)
          : post.category === selectedCategory
      )
    : posts;

  return (
    <>
      {/* Barre latérale des catégories */}
      <div className="hidden flex-col gap-2 lg:flex">
        {categories.map((category) => (
          <Button
            variant="ghost"
            key={category}
            onClick={() =>
              setSelectedCategory(
                selectedCategory === category ? null : category
              )
            }
            className={`justify-start text-left ${
              selectedCategory === category
                ? "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                : ""
            }`}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Liste des posts */}
      <div className="lg:col-span-3">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(
            (post) =>
              post && (
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
                    </div>
                  </Link>
                  <Separator className="my-8" />
                </div>
              )
          )
        ) : (
          <p className="text-center text-muted-foreground">
            No posts found for the selected category.
          </p>
        )}
      </div>
    </>
  );
}
