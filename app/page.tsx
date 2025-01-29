import { Badge } from "@/components/ui/badge";
import { CategoryAndTagFilter } from "@/components/CategoryAndTagFilter";
import { useGetPosts } from "./hooks/useGetPosts";

export default function Home() {
  // Utiliser le hook pour récupérer les posts, catégories et tags
  const { posts, categories, tags } = useGetPosts();

  return (
    <section className="py-32">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col max-w-3xl mx-auto items-center gap-6 text-center">
          <Badge variant="secondary">Mon Blog</Badge>
          <h1 className="text-4xl font-bold lg:text-5xl">
            Mon Parcours, Mes Expériences
          </h1>
          <p className=" lg:text-lg ">
            Bienvenue sur mon blog personnel ! Ici, je partage mon aventure, mes
            ressentis et mes découvertes dans le monde de la reconversion
            professionnelle. Si toi aussi tu envisages de changer de cap, tu
            trouveras ici des anecdotes, des conseils et des réflexions pour
            t&apos;accompagner dans cette belle aventure.
          </p>
        </div>

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
