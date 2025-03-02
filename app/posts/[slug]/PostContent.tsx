import { ContentProps } from "@/lib/types";
import { MDXRemote } from "next-mdx-remote/rsc";

export default function PostContent({ content }: ContentProps) {
  return (
    <article className=" max-w-2xl md:mx-auto prose prose-base  mt-16  dark:prose-invert   ">
      <MDXRemote source={content} />
    </article>
  );
}
