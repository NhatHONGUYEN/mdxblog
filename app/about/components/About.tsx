"use client";

import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { tabsData } from "@/lib/data";

export default function About() {
  const [activeTabId, setActiveTabId] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState<
    { src: string; alt: string }[]
  >(tabsData[0].imageSrc);

  return (
    <section className="py-32">
      <div className="container px-4 mx-auto">
        <div className="mx-auto mb-24 max-w-xl">
          <h2 className="mb-6 text-center text-3xl font-semibold lg:text-5xl">
            <span className="text-muted-foreground italic">Découvrez</span> un
            peu plus sur moi.
          </h2>
          <p className="m-auto max-w-3xl text-center lg:text-lg">
            Bonjour, je m&apos;appelle{" "}
            <span className="text-muted-foreground italic font-semibold">
              HO NGUYEN Nhat-Quan
            </span>
            . Si vous souhaitez en apprendre davantage sur mon parcours, mes
            compétences et mes projets, vous êtes au bon endroit.
          </p>
        </div>
        <div className="mb-12  flex w-full items-start justify-between gap-28">
          <div className="w-full  md:w-1/2">
            <Accordion type="single" className="w-full" defaultValue="item-1">
              {tabsData.map((tab) => (
                <AccordionItem
                  key={tab.id}
                  value={`item-${tab.id}`}
                  className={`border-b-0 border-t-2 px-2  transition hover:bg-accent ${
                    tab.id === activeTabId && "border-foreground"
                  }`}
                >
                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage(tab.imageSrc);
                      setActiveTabId(tab.id);
                    }}
                    className="cursor-pointer  py-5 !no-underline transition"
                  >
                    <h6
                      className={`text-lg font-semibold  italic ${
                        tab.id === activeTabId
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      {tab.title}
                    </h6>
                  </AccordionTrigger>
                  <AccordionContent className="flex gap-4">
                    <p className="mt-3  max-w-xs md:max-w-xl  text-muted-foreground">
                      {tab.description}
                    </p>
                    <div className="mt-4 md:hidden">
                      <Image
                        src={tab.imageSrc[0].src}
                        alt="placeholder"
                        width={200}
                        height={200}
                        className="rounded-md mx-auto object-cover"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="relative m-auto hidden w-1/2 overflow-hidden rounded-xl bg-muted-foreground/5 px-10 py-12 before:absolute before:inset-0 before:z-[-1] before:bg-primary/50 before:[mask-image:url(/images/block/dot-pattern.svg)] before:[mask-repeat:repeat] before:[mask-size:_15px] md:block">
            <div className="flex min-h-96 w-full items-center justify-center px-3">
              <Image
                src={activeImage[0].src}
                alt="placeholder"
                className="aspect-[1.2] hidden md:block w-1/2 rounded-md object-cover  "
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
