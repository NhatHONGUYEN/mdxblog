"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { AboutAccordionItemProps } from "@/lib/types";
import Image from "next/image";

export default function AboutAccordionItem({
  tab,
  activeTabId,
  setActiveTabId,
}: AboutAccordionItemProps) {
  return (
    <AccordionItem
      key={tab.id}
      value={`item-${tab.id}`}
      className={`border-b-0 border-t-2 px-2 transition hover:bg-accent ${
        tab.id === activeTabId ? "border-foreground" : ""
      }`}
    >
      <AccordionTrigger
        onClick={() => setActiveTabId(tab.id)}
        className="cursor-pointer py-5 !no-underline transition"
      >
        <h6
          className={`text-lg font-semibold italic ${
            tab.id === activeTabId ? "text-primary" : "text-muted-foreground"
          }`}
        >
          {tab.title}
        </h6>
      </AccordionTrigger>
      <AccordionContent className="flex gap-4">
        <p className="mt-3 max-w-xs md:max-w-xl text-muted-foreground">
          {tab.description}
        </p>
        {/* Image en version mobile */}
        <div className="mt-4 md:hidden">
          <Image
            src={tab.imageSrc[0].src}
            alt={tab.imageSrc[0].alt || "Image"}
            width={200}
            height={200}
            className="rounded-md mx-auto object-cover"
          />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
