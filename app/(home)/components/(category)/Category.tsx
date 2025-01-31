import { CategoryProps } from "@/lib/types";
import { ButtonCategory } from "./ButtonCategory";
import { UI_TEXTS } from "../../../../src/lib/constants";

export function Category({
  categories,
  selectedCategory,
  setSelectedCategory,
}: CategoryProps) {
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <>
      <h3 className="mb-2 text-lg font-semibold">
        {UI_TEXTS.CATEGORIES_TITLE}
      </h3>
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
    </>
  );
}
