// FooterContent.js
import Link from "next/link";
import { COPYRIGHT_TEXT, EMAIL_ADDRESS, EMAIL_LINK } from "@/lib/constants";
import ParisTime from "./ParisTime";

export default function FooterContent() {
  return (
    <div className="flex flex-col md:justify-between md:items-center md:mx-0 mx-10 py-12 text-lg md:flex-row">
      <div>{COPYRIGHT_TEXT}</div>
      <ParisTime />
      <Link
        href={EMAIL_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        {EMAIL_ADDRESS}
      </Link>
    </div>
  );
}
