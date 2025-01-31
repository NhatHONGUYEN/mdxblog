// ParisTime.js
"use client";

import { PARIS_TIME_LABEL } from "@/lib/constants";
import { useEffect, useState } from "react";

export default function ParisTime() {
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
    <div>
      {PARIS_TIME_LABEL}
      {time}
    </div>
  );
}
