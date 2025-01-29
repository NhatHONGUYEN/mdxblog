"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";

export default function Header() {
  const navItems = [
    { name: "nhat.dev", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact Us", link: "/contact" },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
