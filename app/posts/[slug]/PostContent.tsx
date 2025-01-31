import { contentProps } from "@/lib/data";
import { MDXRemote } from "next-mdx-remote/rsc";

export default function PostContent({ content }: contentProps) {
  return (
    <article className=" max-w-2xl md:mx-auto prose prose-base  mt-16  dark:prose-invert   ">
      <MDXRemote source={content} />
    </article>
  );
}
