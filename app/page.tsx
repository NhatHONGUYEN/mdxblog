import { Badge } from "@/components/ui/badge";
import { CategoryAndTagFilter } from "@/components/CategoryAndTagFilter";
import { useGetPosts } from "./hooks/useGetPosts";

export default function Home() {
  // Utiliser le hook pour récupérer les posts, catégories et tags
  const { posts, categories, tags } = useGetPosts();

  return (
    <section className="py-32">
      <div className="container">
        {/* Header */}
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

        {/* Contenu : catégories, tags et posts */}
        <div className="mx-auto mt-20 grid max-w-screen-xl grid-cols-1 gap-20 lg:grid-cols-4">
          <CategoryAndTagFilter
            categories={categories}
            tags={tags}
            posts={posts}
          />
        </div>
      </div>
    </section>
  );
}
