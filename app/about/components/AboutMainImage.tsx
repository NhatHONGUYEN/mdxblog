"use client";

import { AboutMainImageProps } from "@/lib/types";
import Image from "next/image";

export default function AboutMainImage({ activeImage }: AboutMainImageProps) {
  return (
    <div className="relative hidden md:flex w-1/2 items-center justify-center overflow-hidden rounded-xl  before:absolute before:inset-0 before:z-[-1] before:bg-primary/50 before:[mask-image:url(/images/block/dot-pattern.svg)] before:[mask-repeat:repeat] before:[mask-size:_15px]">
      <div className="relative min-h-[500px] w-full">
        {activeImage.length > 0 && (
          <Image
            src={activeImage[0].src}
            alt={activeImage[0].alt || "Image"}
            fill
            className="rounded-md object-cover"
          />
        )}
      </div>
    </div>
  );
}
