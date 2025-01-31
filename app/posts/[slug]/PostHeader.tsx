import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AUTHOR_IMAGE_URL, AUTHOR_NAME, RETURN_TO_HOME } from "@/lib/constants";
import { PostHeaderProps } from "@/lib/data";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function PostHeader({ title, date }: PostHeaderProps) {
  return (
    <aside className="top-10 mx-auto h-fit w-full max-w-[65ch] lg:sticky lg:max-w-96">
      <Link
        href={"/"}
        className="mb-5 flex items-center gap-1 text-muted-foreground hover:text-primary"
      >
        <ChevronLeft className="h-full w-4" />
        {RETURN_TO_HOME}
      </Link>
      <div className="mb-5 text-balance text-3xl font-bold lg:text-4xl">
        {title}
      </div>
      <div className="flex gap-3">
        <Avatar className="size-20 rounded-full">
          <AvatarImage src={AUTHOR_IMAGE_URL} alt="placeholder" />
        </Avatar>
        <div className="flex flex-col justify-center ">
          <p className="text-xs text-muted-foreground">{date}</p>
          <h2 className="prose dark:text-secondary-foreground ">
            {AUTHOR_NAME}
          </h2>
        </div>
      </div>
    </aside>
  );
}
