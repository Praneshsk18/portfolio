"use client";
import React, { useState, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollfunc = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-auto bg-[#181414]/90 text-white px-5 py-4 z-30 shadow-md shadow-amber-600">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold">
          <button onClick={() => scrollfunc("home")} className="text-amber-600 hover:text-amber-500">
            Portfolio
          </button>
        </div>

        <div className="hidden lg:flex gap-8">
          {[
            "Home","About","Skills","Certification","Projects","Experience","Achievements","Blog","Contact"
          ].map((item) => (
            <button
              key={item}
              className="text-gray-100 hover:text-amber-500 transition duration-300"
              onClick={() => scrollfunc(item.toLowerCase())}
            >
            {item}
            </button>
          ))}
        </div>
        <div className="flex items-center">
          <a>
            <button className="relative overflow-hidden px-6 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-orange-700 via-amber-500 to-yellow-300 shadow-lg shadow-orange-500/50 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-orange-600"
            onClick={() => scrollfunc("contact")}
            >
              Hire Me
            </button>
          </a>
          <button
            className="lg:hidden text-gray-100 ml-4"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      <div
        className={`absolute top-20 rounded-xl rounded-full right-0 w-[40%] h-[89vh] bg-gradient-to-b from-black/90 via-[#181414]/90 to-amber-900/90 lg:hidden flex flex-col items-center gap-6 py-6 transition-all duration-500 overflow-y-auto pb-20 ${
          menuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-20 pointer-events-none"
        }`}
      >
        {[
            "Home","About","Skills","Certification","Projects","Experience","Achievements","Blog","Contact"
          ].map((item) => (
          <button
              key={item}
              className="text-gray-100 hover:text-amber-500 transition duration-300"
              onClick={() => scrollfunc(item.toLowerCase())}
            >
            {item}
            </button>
        ))}
      </div>
    </nav>
  );
}
