import { FilteredPostsProps } from "@/lib/types";
import NoPostFound from "./NoPostFound";
import PostArticle from "./PostArticle";

export function FilteredPosts({ posts }: FilteredPostsProps) {
  return (
    <div className="mx-4 sm:mx-0 lg:col-span-3">
      {posts.length > 0 ? (
        posts.map((post) => <PostArticle key={post.slug} post={post} />)
      ) : (
        <NoPostFound />
      )}
    </div>
  );
}
