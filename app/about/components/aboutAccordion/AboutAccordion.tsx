"use client";

import { Accordion } from "@/components/ui/accordion";
import { tabsData } from "@/lib/data";
import AboutAccordionItem from "./AboutAccordionItem";
import { AboutAccordionProps } from "@/lib/types";

export default function AboutAccordion({
  activeTabId,
  setActiveTabId,
}: AboutAccordionProps) {
  return (
    <div className="w-full md:w-1/2">
      <Accordion
        type="single"
        className="w-full"
        defaultValue={`item-${tabsData[0].id}`}
      >
        {tabsData.map((tab) => (
          <AboutAccordionItem
            key={tab.id}
            tab={tab}
            activeTabId={activeTabId}
            setActiveTabId={setActiveTabId}
          />
        ))}
      </Accordion>
    </div>
  );
}
