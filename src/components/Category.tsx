import { CategoryProps } from "@/lib/types";
import { ButtonCategory } from "./ButtonCategory";

export function Category({
  categories,
  selectedCategory,
  setSelectedCategory,
}: CategoryProps) {
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div>
      <h3 className="mb-2 text-lg font-semibold">Catégories</h3>
      <div className="flex flex-col gap-2">
        <ButtonCategory
          key="all-categories"
          label="Toutes les catégories"
          isSelected={selectedCategory === null}
          onClick={() => setSelectedCategory(null)}
        />
        {categories.map((category) => (
          <ButtonCategory
            key={category}
            label={category}
            isSelected={selectedCategory === category}
            onClick={() => handleCategoryClick(category)}
          />
        ))}
      </div>
    </div>
  );
}
