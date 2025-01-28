import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import matter from "gray-matter";

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // On récupère le slug dynamique
  const filePath = path.join(process.cwd(), "posts", slug, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return <div>Post non trouvé.</div>;
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContent);

  return (
    <div className="container px-4 py-32">
      <article className="prose mx-auto lg:prose-xl">
        <MDXRemote source={content} />
      </article>
    </div>
  );
}
