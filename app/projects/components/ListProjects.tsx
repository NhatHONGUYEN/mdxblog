"use client";

import ScrambleIn, { ScrambleInHandle } from "@/components/fancy/scramble-in";
import { LinkPreview } from "@/components/ui/link-preview";
import { tracks } from "@/lib/data";
import { useEffect, useRef } from "react";

import React from "react";

export default function ListProjects() {
  const scrambleRefs = useRef<(ScrambleInHandle | null)[]>([]);

  useEffect(() => {
    tracks.forEach((_, index) => {
      const delay = index * 50;
      setTimeout(() => {
        scrambleRefs.current[index]?.start();
      }, delay);
    });
  }, []);

  return (
    <div className="w-full flex flex-col  text-sm md:text-lg lg:text-lg xl:text-xl justify-start items-start bg-white text-foreground dark:text-muted font-normal overflow-hidden py-16 px-8 sm:px-16 md:px-20 lg:px-24 text-center">
      {tracks.map((track, index) => (
        <LinkPreview
          key={index}
          url={track.link}
          imageSrc={track.imageSrc}
          isStatic
          className=" transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
        >
          <div>
            <ScrambleIn
              ref={(el) => {
                scrambleRefs.current[index] = el;
              }}
              text={track.title}
              scrambleSpeed={25}
              scrambledLetterCount={5}
              autoStart={false}
            />
          </div>
        </LinkPreview>
      ))}
    </div>
  );
}
