import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";

export default function Home() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return {
      slug: filename.replace(".mdx", ""),
      title: data.title,
      date: data.date,
    };
  });

  // Trier les posts par date, du plus récent au plus ancien
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="container mx-auto px-4 py-32">
      <h1 className="text-4xl font-bold mb-8">Mon Blog de Développement Web</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="bg-white shadow rounded-lg p-6">
            <Link
              href={`/posts/${post.slug}`}
              className="text-2xl font-semibold hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-gray-500 mt-2">
              {new Date(post.date).toLocaleDateString("fr-FR")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
