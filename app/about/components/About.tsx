"use client";

import { useState } from "react";
import { tabsData } from "@/lib/data";
import AboutHeader from "./AboutHeader";
import AboutAccordion from "./aboutAccordion/AboutAccordion";
import AboutMainImage from "./AboutMainImage";

export default function About() {
  const [activeTabId, setActiveTabId] = useState<number | null>(tabsData[0].id);
  const activeImage =
    tabsData.find((tab) => tab.id === activeTabId)?.imageSrc || [];

  return (
    <section className="py-32">
      <div className="container px-4 mx-auto">
        <AboutHeader />
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-28">
          <AboutAccordion
            activeTabId={activeTabId}
            setActiveTabId={setActiveTabId}
          />
          <AboutMainImage activeImage={activeImage} />
        </div>
      </div>
    </section>
  );
}
