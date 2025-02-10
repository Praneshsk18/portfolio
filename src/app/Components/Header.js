<<<<<<< HEAD
import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#181414] text-white px-5 py-6 z-50">
  <div className="flex justify-center items-center">
    <div className="text-xl font-bold">
      <Link className="text-amber-600" href="/">
        Portfolio
      </Link>
    </div>
    <ul className="flex gap-10 justify-center items-center flex-grow">
      <li className="text-amber-600 hover:text-amber-300">
        <Link href="#home">Home</Link>
      </li>
      <li className="text-gray-100 hover:text-gray-300">
        <Link href="#about">About</Link>
      </li>
      <li>
        <Link href="#skills" className="text-gray-100 hover:text-gray-300">
          Skills
        </Link>
      </li>
      <li>
        <Link href="#projects" className="text-gray-100 hover:text-gray-300">
          Projects
        </Link>
      </li>
      <li>
        <Link href="#experience" className="text-gray-100 hover:text-gray-300">
          Experience
        </Link>
      </li>
      <li>
        <Link href="#achievements" className="text-gray-100 hover:text-gray-300">
          Achievements
        </Link>
      </li>
      <li>
        <Link href="#blog" className="text-gray-100 hover:text-gray-300">
          Blog
        </Link>
      </li>
      <li>
        <Link href="#contact" className="text-gray-100 hover:text-gray-300">
          Contact
        </Link>
      </li>
    </ul>
    <div className="flex">
      <a>
        <button className="border-transparent bg-orange-600 hover:bg-amber-500 shadow-md shadow-orange-500/50 px-8 py-2 rounded">
          Hire me
        </button>
      </a>
    </div>
  </div>
</nav>
  );
}
=======
import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#181414] text-white px-5 py-6 z-50">
  <div className="flex justify-center items-center">
    <div className="text-xl font-bold">
      <Link className="text-amber-600" href="/">
        Portfolio
      </Link>
    </div>
    <ul className="flex gap-10 justify-center items-center flex-grow">
      <li className="text-amber-600 hover:text-amber-300">
        <Link href="#home">Home</Link>
      </li>
      <li className="text-gray-100 hover:text-gray-300">
        <Link href="#about">About</Link>
      </li>
      <li>
        <Link href="#skills" className="text-gray-100 hover:text-gray-300">
          Skills
        </Link>
      </li>
      <li>
        <Link href="#projects" className="text-gray-100 hover:text-gray-300">
          Projects
        </Link>
      </li>
      <li>
        <Link href="#experience" className="text-gray-100 hover:text-gray-300">
          Experience
        </Link>
      </li>
      <li>
        <Link href="#achievements" className="text-gray-100 hover:text-gray-300">
          Achievements
        </Link>
      </li>
      <li>
        <Link href="#blog" className="text-gray-100 hover:text-gray-300">
          Blog
        </Link>
      </li>
      <li>
        <Link href="#contact" className="text-gray-100 hover:text-gray-300">
          Contact
        </Link>
      </li>
    </ul>
    <div className="flex">
      <a>
        <button className="border-transparent bg-orange-600 hover:bg-amber-500 shadow-md shadow-orange-500/50 px-8 py-2 rounded">
          Hire me
        </button>
      </a>
    </div>
  </div>
</nav>
  );
}
>>>>>>> 36348d2 (Updated About Me section to be responsive)
