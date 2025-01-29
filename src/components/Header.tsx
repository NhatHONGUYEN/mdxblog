"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";

export default function Header() {
  const navItems = [
    { name: "nhat.dev", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
