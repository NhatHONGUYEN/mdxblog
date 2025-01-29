"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";

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
    <div className="flex max-w-fit fixed top-10 inset-x-0 mx-auto bg-primary-foreground border rounded-full shadow-xl z-[5000] px-8 py-4 items-center justify-center space-x-6">
      {navItems.map((navItem, idx) => {
        const isActive = pathname === navItem.link;

        return (
          <Link
            key={idx}
            href={navItem.link}
            className={`relative flex items-center text-sm  ${
              isActive
                ? " font-bold bg-accent rounded-md scale-110 "
                : " text-secondary-foreground "
            }`}
          >
            <Button variant="ghost">{navItem.name}</Button>
          </Link>
        );
      })}
      <ModeToggle />
    </div>
  );
}
