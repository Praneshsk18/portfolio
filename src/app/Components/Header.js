"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#181414] text-white px-5 py-4 z-50 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="text-amber-600 hover:text-amber-500">
            Portfolio
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {[
            { name: "Home", href: "#home" },
            { name: "About", href: "#about" },
            { name: "Skills", href: "#skills" },
            { name: "Certification", href: "#certification" },
            { name: "Projects", href: "#projects" },
            { name: "Experience", href: "#experience" },
            { name: "Achievements", href: "#achievements" },
            { name: "Blog", href: "#" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-100 hover:text-amber-500 transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Hire Me Button & Mobile Menu Toggle */}
        <div className="flex items-center">
          <a href="#contact">
            <button className="relative overflow-hidden px-6 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg shadow-orange-500/50 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-amber-500/50">
              Hire Me
            </button>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-gray-100 ml-4"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu with Transition */}
      <div
        className={`absolute top-16 left-0 w-full bg-[#181414] md:hidden flex flex-col items-center gap-6 py-6 transition-all duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        {[
          { name: "Home", href: "#home" },
          { name: "About", href: "#about" },
          { name: "Skills", href: "#skills" },
          { name: "Certification", href: "#certification" },
          { name: "Projects", href: "#projects" },
          { name: "Experience", href: "#experience" },
          { name: "Achievements", href: "#achievements" },
          { name: "Blog", href: "#" },
          { name: "Contact", href: "#contact" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-gray-100 hover:text-amber-500 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}