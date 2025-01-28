import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import matter from "gray-matter";
import { ChevronLeft } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

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

  const { description, date } = data;

  return (
    <section className="py-32">
      <div className="container">
        <div className="relative flex flex-col justify-between gap-10 lg:flex-row">
          <aside className="top-10 mx-auto h-fit w-full max-w-[65ch] lg:sticky lg:max-w-96">
            <Link
              href={"/"}
              className="mb-5 flex items-center gap-1 text-muted-foreground hover:text-primary"
            >
              <ChevronLeft className="h-full w-4" />
              Return to home
            </Link>
            <h1 className="mb-5 text-balance text-3xl font-bold lg:text-4xl">
              {description}
            </h1>
            <div className="flex gap-3">
              <Avatar className="size-7 rounded-full">
                <AvatarImage
                  src="https://shadcnblocks.com/images/block/avatar-1.webp"
                  alt="placeholder"
                />
              </Avatar>
              <div>
                <h2 className="font-semibold">John Doe</h2>
                <p className="text-xs text-muted-foreground">{date}</p>
              </div>
            </div>
          </aside>
          <article className="prose lg:prose-xl">
            <MDXRemote source={content} />
          </article>
        </div>
      </div>
    </section>
  );
}
