import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Post } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

export default function PostArticle({ post }: { post: Post }) {
  return (
    <article className="mb-8">
      <header className="mb-2">
        <span className="text-muted-foreground italic text-sm">
          {new Date(post.date).toLocaleDateString("fr-FR")}
        </span>
      </header>

      <Link href={`/posts/${post.slug}`}>
        <h3 className="text-balance text-2xl font-semibold lg:text-3xl">
          {post.title}
        </h3>

        <p className="text-muted-foreground mt-2">
          {post.description || "No description available"}
        </p>

        {post.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                className="rounded-full cursor-pointer"
                variant="secondary"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </Link>

      <Separator className="my-8" />
    </article>
  );
}
