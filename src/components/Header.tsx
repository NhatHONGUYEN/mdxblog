"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

type NavItem = {
  name: string;
  link: string;
};

export default function Header() {
  const pathname = usePathname(); // Récupérer le chemin actuel

  const navItems: NavItem[] = [
    { name: "nhat.dev", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
  ];

  return (
    <div className="flex max-w-fit fixed top-10 inset-x-0 mx-auto border rounded-full bg-white dark:bg-black shadow-xl z-[5000] px-8 py-4 items-center justify-center space-x-10">
      {navItems.map((navItem, idx) => {
        const isActive = pathname === navItem.link;

        return (
          <Link
            key={idx}
            href={navItem.link}
            className={`relative flex items-center text-sm ${
              isActive
                ? "text-blue-500 font-semibold"
                : "text-neutral-600 dark:text-neutral-50 hover:text-neutral-500 dark:hover:text-neutral-300"
            }`}
          >
            {navItem.name}
          </Link>
        );
      })}
    </div>
  );
}
