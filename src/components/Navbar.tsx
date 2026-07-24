"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "about", href: "/about" },
  { name: "projects", href: "/projects" },
  { name: "resume", href: "/resume" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="layout-md flex justify-between items-start pt-10 pb-2 mb-2">
      <h1 className=" text-neutral-900 text-3xl" style={{ fontFamily: "var(--font-lora), serif" }}>
        <Link href="/" className="hover:text-black transition-colors duration-150">
          Timothy Medewase
        </Link>
      </h1>
      <nav className="flex gap-5 text-neutral-500 text-sm mt-1">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:text-black transition-colors duration-150 ${pathname === link.href ? "text-neutral-900 font-medium" : ""
              }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
