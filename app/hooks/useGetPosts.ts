import { useMemo } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/lib/types";

// Hook personnalisé pour récupérer les posts et leurs métadonnées
export function useGetPosts() {
  // Fonction pour charger les posts
  const getPosts = (): Post[] => {
    const postsDirectory = path.join(process.cwd(), "posts");
    const directories = fs.readdirSync(postsDirectory);

    const posts = directories
      .map((directory) => {
        const postDir = path.join(postsDirectory, directory);
        if (!fs.statSync(postDir).isDirectory()) return null;

        const files = fs.readdirSync(postDir);
        const mdxFile = files.find((file) => file.endsWith(".mdx"));

        if (!mdxFile) return null;

        const filePath = path.join(postDir, mdxFile);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContents);

        return {
          slug: directory,
          title: data.title,
          date: data.date,
          description: data.description || null,
          tags: data.tags || [],
          category: data.category,
        };
      })
      .filter((post): post is NonNullable<typeof post> => post !== null);

    // Trier les posts par date (descendant)
    return posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  };

  // Fonction pour extraire les catégories uniques
  const getUniqueCategories = (posts: Post[]) => {
    return [
      ...new Set(
        posts.flatMap((post) =>
          Array.isArray(post.category) ? post.category : [post.category]
        )
      ),
    ].sort();
  };

  // Fonction pour extraire les tags uniques
  const getUniqueTags = (posts: Post[]) => {
    return [...new Set(posts.flatMap((post) => post.tags || []))].sort();
  };

  // Charger les posts, catégories et tags
  const posts = useMemo(() => getPosts(), []);
  const categories = useMemo(() => getUniqueCategories(posts), [posts]);
  const tags = useMemo(() => getUniqueTags(posts), [posts]);

  return { posts, categories, tags };
}
