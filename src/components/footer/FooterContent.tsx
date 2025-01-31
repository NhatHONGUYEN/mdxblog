// FooterContent.js
import Link from "next/link";

import ParisTime from "./ParisTime";
import { UI_TEXTS, LINKS } from "@/lib/constants";

export default function FooterContent() {
  return (
    <div className="flex flex-col md:justify-between md:items-center md:mx-0 mx-10 py-12 text-lg md:flex-row">
      <div>{UI_TEXTS.COPYRIGHT_TEXT}</div>
      <ParisTime />
      <Link
        href={LINKS.EMAIL_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        {LINKS.EMAIL_ADDRESS}
      </Link>
    </div>
  );
}
