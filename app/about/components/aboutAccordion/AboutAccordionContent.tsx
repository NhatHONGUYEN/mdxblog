"use client";

import { AboutAccordionContentProps } from "@/lib/types";
import Image from "next/image";

export default function AboutAccordionContent({
  description,
  imageSrc,
}: AboutAccordionContentProps) {
  return (
    <div className="flex gap-4">
      <p className="mt-3 max-w-xs md:max-w-xl text-muted-foreground">
        {description}
      </p>
      {/* Image en version mobile */}
      <div className="mt-4 md:hidden">
        <Image
          src={imageSrc[0].src}
          alt={imageSrc[0].alt || "Image"}
          width={200}
          height={200}
          className="rounded-md mx-auto object-cover"
        />
      </div>
    </div>
  );
}
