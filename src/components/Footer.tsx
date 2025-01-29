"use client";

import { useEffect, useState } from "react";
import { InfiniteSlider } from "./ui/infinite-slider";
import Link from "next/link";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateParisTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Europe/Paris",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      setTime(new Intl.DateTimeFormat("fr-FR", options).format(new Date()));
    };

    updateParisTime();
    const intervalId = setInterval(updateParisTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="contact" className="py-32">
      <div className="container">
        <footer>
          {/* Infinite Scrolling Text */}
          <InfiniteSlider gap={40} reverse>
            {Array(5)
              .fill("nhat.dev")
              .map((text, idx) => (
                <p key={idx} className="text-7xl  font-extrabold">
                  {text}
                </p>
              ))}
          </InfiniteSlider>

          {/* Footer Content */}
          <div className="flex flex-col items-center justify-between py-12 text-lg md:flex-row">
            <div>© Copyright Nhat.dev 2024</div>
            <div>Time → {time}</div>
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hnnhat67@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              hnnhat67@gmail.com
            </Link>
          </div>
        </footer>
      </div>
    </section>
  );
}
