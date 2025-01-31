import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { FilteredPostsProps } from "@/lib/types";
import { Button } from "./ui/button";

export function FilteredPosts({ posts }: FilteredPostsProps) {
  return (
    <div className="mx-4 sm:mx-0 lg:col-span-3">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.slug}>
            <Link href={`/posts/${post.slug}`} className="flex flex-col gap-3">
              <span className="text-muted-foreground  ">
                {new Date(post.date).toLocaleDateString("fr-FR")}
              </span>
              <h3 className="text-balance text-2xl font-semibold lg:text-3xl">
                {post.title}
              </h3>
              <p className="text-muted-foreground">
                {post.description || "No description available"}
              </p>
              <div className="mt-3 flex items-center gap-2 ">
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag) => (
                    <Button
                      className="rounded-full"
                      variant="secondary"
                      key={tag}
                    >
                      {tag}
                    </Button>
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
