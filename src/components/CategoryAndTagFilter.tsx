"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "./ui/badge";

type Post = {
  slug: string;
  title: string;
  date: string;
  description: string | null;
  tags: string[];
  category: string | string[];
};

type FilterProps = {
  categories: string[];
  tags: string[];
  posts: Post[];
};

export function CategoryAndTagFilter({ categories, tags, posts }: FilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Filtrer les posts par catégorie et tag
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
      {/* Barre latérale des catégories et tags */}
      <div className="hidden flex-col gap-6 lg:flex">
        {/* Catégories */}
        <div>
          <h3 className="mb-2 text-lg font-semibold">Catégories</h3>
          <div className="flex flex-col gap-2">
            <Button
              variant="ghost"
              onClick={() => setSelectedCategory(null)}
              className={`justify-start text-left ${
                selectedCategory === null
                  ? "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  : ""
              }`}
            >
              Toutes les catégories
            </Button>
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
        </div>

        {/* Tags */}
        <div>
          <h3 className="mb-2 text-lg font-semibold">Tags</h3>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="ghost"
              onClick={() => setSelectedTag(null)}
              className={`justify-start text-left ${
                selectedTag === null
                  ? "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  : ""
              }`}
            >
              Tous les tags
            </Button>
            {tags.map((tag) => (
              <Button
                variant="ghost"
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`justify-start text-left ${
                  selectedTag === tag
                    ? "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    : ""
                }`}
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
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
              )
          )
        ) : (
          <p className="text-center text-muted-foreground">
            No posts found for the selected category or tag.
          </p>
        )}
      </div>
    </>
  );
}
