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
    <div className="max-w-6xl flex flex-col gap-2   justify-start items-start dark:text-muted  overflow-hidden py-16 px-8 sm:px-16 md:px-20 lg:px-24 ">
      {tracks.map((track, index) => (
        <Link
          href={track.link}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className="flex italic text-muted-foreground md:items-center gap-2 transition-transform duration-300 ease-in-out transform hover:scale-105"
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
