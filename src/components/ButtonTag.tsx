import { Button } from "@/components/ui/button";
import { ButtonProps } from "@/lib/types";

export function ButtonTag({ label, isSelected, onClick }: ButtonProps) {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className={`justify-start text-left ${
        isSelected
          ? "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          : ""
      }`}
    >
      {label}
    </Button>
  );
}
