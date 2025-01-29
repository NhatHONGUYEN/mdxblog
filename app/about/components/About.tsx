"use client";

import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

type ImageSrc = {
  src: string;
  alt: string;
};

type TabData = {
  id: number;
  title: string;
  imageSrc: ImageSrc[];
  description: string;
};
const tabsData: TabData[] = [
  {
    id: 1,
    title: "Moi de tous les jours",
    imageSrc: [
      {
        src: "https://res.cloudinary.com/nhatflux/image/upload/f_webp/idii5lwwpxknebuusbqe",
        alt: "Moi de tous les jours souriant.",
      },
    ],
    description:
      "Cette image me représente dans ma vie quotidienne, toujours avec le sourire. C'est un reflet de ma personnalité joyeuse et optimiste, prêt à affronter chaque jour avec enthousiasme.",
  },
  {
    id: 2,
    title: "Quand j'étais artiste danseur.",
    imageSrc: [
      {
        src: "https://res.cloudinary.com/nhatflux/image/upload/f_webp/wglxef4rlituz4et6op2",
        alt: "Moi quand j'étais artiste danseur.",
      },
    ],
    description:
      "Ici, vous pouvez me voir dans ma période d'artiste danseur. La danse a toujours été une passion pour moi, et cette image capture un moment où j'exprimais ma créativité et mon amour pour cet art.",
  },
  {
    id: 3,
    title: "Comme je suis actuellement",
    imageSrc: [
      {
        src: "https://res.cloudinary.com/nhatflux/image/upload/f_webp/uxbkryyv9zq9ywanxllw",
        alt: "Moi actuellement en tant que développeur full stack.",
      },
    ],
    description:
      "Aujourd'hui, je suis un développeur full stack. J'ai trouvé ma passion pour la programmation et la technologie, et je m'efforce de devenir un meilleur développeur chaque jour. ",
  },
];

export default function About() {
  const [activeTabId, setActiveTabId] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState<
    { src: string; alt: string }[]
  >(tabsData[0].imageSrc);

  return (
    <section className="py-32">
      <div className="container">
        <div className="m-auto mb-24 max-w-xl">
          <h2 className="mb-6 text-center text-3xl font-semibold lg:text-5xl">
            <span className="text-muted-foreground">Découvrez</span> un peu plus
            sur moi.
          </h2>
          <p className="m-auto max-w-3xl text-center text-lg lg:text-xl">
            Bonjour, je m&apos;appelle{" "}
            <span className="text-muted-foreground italic font-semibold">
              HO NGUYEN Nhat-Quan
            </span>
            . Si vous souhaitez en apprendre davantage sur mon parcours, mes
            compétences et mes projets, vous êtes au bon endroit.
          </p>
        </div>
        <div className="mb-12 flex w-full items-start justify-between gap-28">
          <div className="w-full md:w-1/2">
            <Accordion type="single" className="w-full" defaultValue="item-1">
              {tabsData.map((tab) => (
                <AccordionItem
                  key={tab.id}
                  value={`item-${tab.id}`}
                  className={`border-b-0 border-t-2 px-2 transition hover:bg-accent ${
                    tab.id === activeTabId && "border-foreground"
                  }`}
                >
                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage(tab.imageSrc);
                      setActiveTabId(tab.id);
                    }}
                    className="cursor-pointer py-5 !no-underline transition"
                  >
                    <h6
                      className={`text-xl italic font-semibold ${
                        tab.id === activeTabId
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      {tab.title}
                    </h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-3 text-muted-foreground">
                      {tab.description}
                    </p>
                    <div className="mt-4 md:hidden">
                      <Image
                        src={tab.imageSrc[0].src}
                        alt="placeholder"
                        className="h-full max-h-80 w-full rounded-md object-cover"
                        fill
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
                className="aspect-[1.2] w-1/2 rounded-md object-cover  "
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
