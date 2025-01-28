import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Badge } from "./ui/badge";
import { Post } from "@/lib/types";

type FilteredPostsProps = {
  posts: Post[];
};

export function FilteredPosts({ posts }: FilteredPostsProps) {
  return (
    <div className="lg:col-span-3">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.slug}>
            <Link href={`/posts/${post.slug}`} className="flex flex-col gap-3">
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
        ))
      ) : (
        <p className="text-center text-muted-foreground">
          No posts found for the selected category or tag.
        </p>
      )}
    </div>
  );
}
