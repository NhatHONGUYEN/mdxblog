import { TagProps } from "@/lib/types";
import { ButtonTag } from "./ButtonTag";
import { UI_TEXTS } from "../../../../src/lib/constants";

export function Tag({ tags, selectedTags, setSelectedTags }: TagProps) {
  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <>
      <h3 className="mb-2 text-lg font-semibold">{UI_TEXTS.TAGS_TITLE}</h3>
      <div className="flex flex-wrap gap-2">
        <ButtonTag
          key="all-tags"
          label="Tous les tags"
          isSelected={selectedTags.length === 0}
          onClick={() => setSelectedTags([])}
        />
        {tags.map((tag) => (
          <ButtonTag
            key={tag}
            label={tag}
            isSelected={selectedTags.includes(tag)}
            onClick={() => handleTagClick(tag)}
          />
        ))}
      </div>
    </>
  );
}
