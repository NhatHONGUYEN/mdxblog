"use client";

import { AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AboutAccordionContent from "./AboutAccordionContent";
import { AboutAccordionItemProps } from "@/lib/types";

export default function AboutAccordionItem({
  tab,
  activeTabId,
  setActiveTabId,
}: AboutAccordionItemProps) {
  return (
    <AccordionItem
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
      <AboutAccordionContent
        description={tab.description}
        imageSrc={tab.imageSrc}
      />
    </AccordionItem>
  );
}
