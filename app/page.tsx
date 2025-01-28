import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const directories = fs.readdirSync(postsDirectory); // Liste les dossiers

  const posts = directories
    .map((directory) => {
      const postDir = path.join(postsDirectory, directory);
      if (!fs.statSync(postDir).isDirectory()) return null; // Ignore si ce n'est pas un dossier

      const files = fs.readdirSync(postDir); // Liste les fichiers dans le dossier
      const mdxFile = files.find((file) => file.endsWith(".mdx")); // Trouve le .mdx

      if (!mdxFile) return null; // Ignore si pas de fichier .mdx

      const filePath = path.join(postDir, mdxFile);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug: directory, // Utilise le nom du dossier comme slug
        title: data.title,
        date: data.date,
        description: data.description || null,
        author: data.author || null,
      };
    })
    .filter(Boolean); // Supprime les valeurs nulles

  // Trier les posts par date, du plus récent au plus ancien
  posts.sort((a, b) => {
    if (!b || !a) return 0;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

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

        <div className="lg:col-span-3">
          {posts &&
            posts.map(
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
            )}
        </div>
      </div>
    </section>
  );
}
