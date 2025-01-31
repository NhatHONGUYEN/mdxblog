import { CategoryAndTagFilter } from "./(home)/components/CategoryAndTagFilter";
import { useGetPosts } from "./hooks/useGetPosts";
import HeaderHome from "./(home)/components/HeaderHome";

export default function Home() {
  // Utiliser le hook pour récupérer les posts, catégories et tags
  const { posts, categories, tags } = useGetPosts();

  return (
    <section className="py-32">
      <div className="container mx-auto">
        {/* Header */}
        <HeaderHome />

        {/* Contenu : catégories, tags et posts */}
        <CategoryAndTagFilter
          categories={categories}
          tags={tags}
          posts={posts}
        />
      </div>
    </section>
  );
}
