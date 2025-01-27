"use client";

import { navBurgerLinks } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BurgerHeader from "./BurgerHeader";

export default function Header() {
  const pathname = usePathname(); // Récupère le chemin d'URL actuel

  return (
    <section className="py-4 fixed top-0 left-0 right-0 z-50">
      <div className="container ">
        {/* Desktop Navigation */}
        <nav className="hidden  justify-between max-w-md items-center lg:flex">
          {/* Logo */}
          <Link href={"/"} className="flex  gap-2">
            <h1 className="text-4xl">MDXBlog</h1>
          </Link>

          {/* Navigation Links */}
          <div className="flex  gap-10">
            {navBurgerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={` duration-300 ease-in-out ${
                  pathname === link.href ? " scale-150 " : "hover:scale-110"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
        <BurgerHeader />
      </div>
    </section>
  );
}
