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
          <h1 className="text-4xl max-w-xs font-bold md:max-w-md lg:text-6xl">
            <span className="text-muted-foreground italic">
              {" "}
              Bienvenue {""}
            </span>
            sur mon blog !
          </h1>
          <p className="lg:text-lg">
            Si tu envisages de changer de carrière ou de te lancer dans un
            nouveau projet, tu es au bon endroit. Ici, je partage mes conseils,
            mes expériences et tout ce qui peut t&apos;aider à avancer
            sereinement dans ta transition.
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
