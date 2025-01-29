"use client";

import ScrambleIn, { ScrambleInHandle } from "@/components/fancy/scramble-in";
import { tracks } from "@/lib/data";
import Link from "next/link";
import { useEffect, useRef } from "react";

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
    <div className="w-full flex flex-col text-sm md:text-lg lg:text-lg justify-start items-start bg-white text-foreground dark:text-muted font-normal overflow-hidden py-16 px-8 sm:px-16 md:px-20 lg:px-24 text-center">
      {tracks.map((track, index) => (
        <Link
          href={track.link}
          key={index}
          className="flex items-center gap-2 transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          <span className="text-xl">•</span>
          <ScrambleIn
            ref={(el) => {
              scrambleRefs.current[index] = el;
            }}
            text={track.title}
            scrambleSpeed={25}
            scrambledLetterCount={5}
            autoStart={false}
          />
        </Link>
      ))}
    </div>
  );
}
