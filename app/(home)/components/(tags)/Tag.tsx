import { TagProps } from "@/lib/types";
import { ButtonTag } from "./ButtonTag";
import { UI_TEXTS } from "../../../../src/lib/constants";

export function Tag({ tags, selectedTag, setSelectedTag }: TagProps) {
  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  return (
    <>
      <h3 className="mb-2 text-lg font-semibold">{UI_TEXTS.TAGS_TITLE}</h3>
      <div className="flex flex-wrap gap-2">
        <ButtonTag
          key="all-tags"
          label="Tous les tags"
          isSelected={selectedTag === null}
          onClick={() => setSelectedTag(null)}
        />
        {tags.map((tag) => (
          <ButtonTag
            key={tag}
            label={tag}
            isSelected={selectedTag === tag}
            onClick={() => handleTagClick(tag)}
          />
        ))}
      </div>
    </>
  );
}
