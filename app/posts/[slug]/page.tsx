import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PostContent from "./PostContent";
import PostHeader from "./PostHeader";

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
  const { content, data } = matter(fileContent);

  const { title, date } = data;

  return (
    <section className="py-32">
      <div className="container px-4 md:px-0 ">
        <div className="relative flex flex-col justify-between gap-10 lg:flex-row">
          <PostHeader title={title} date={date} />
          <PostContent content={content} />
        </div>
      </div>
    </section>
  );
}
