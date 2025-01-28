import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { Badge } from "@/components/ui/badge";
import { CategoryFilter } from "@/components/CategoryFilter";

export default function Home() {
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

  // Trier les posts par date
  posts.sort((a, b) => {
    if (!a || !b) return 0;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Extraire les catégories uniques
  const categories = [
    ...new Set(
      posts.flatMap((post) =>
        Array.isArray(post.category) ? post.category : [post.category]
      )
    ),
  ].sort();

  // Ensure the categories are correctly passed to the CategoryFilter component
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center">
          <Badge variant="secondary">Blog</Badge>
          <h1 className="text-4xl font-bold lg:text-7xl">
            Latest Insights & Updates
          </h1>
          <p className="text-balance lg:text-xl">
            Stay up to date with the latest trends, tutorials, and best
            practices in software development. Our experts share their knowledge
            to help you build better applications.
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-screen-xl grid-cols-1 gap-20 lg:grid-cols-4">
          {/* Le composant CategoryFilter est utilisé ici */}
          <CategoryFilter categories={categories} posts={posts} />
        </div>
      </div>
    </section>
  );
}
