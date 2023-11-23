// src/components/Navbar.js

import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-slate-950 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap py-7 px-6 flex-col md:flex-row items-center max-w-5xl font-light">
        <a className="text-white mb-4 md:mb-0">
          <a href="#about" className="text-2xl font-clean">
            Adam Grover
          </a>
        </a>
        <nav className="md:ml-auto md:mr-6 md:py-1 md:pl-4  flex flex-wrap items-center text-xs justify-center font-body">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a>
        </nav>
        <a
          href="#contact"
          className="font-body tracking-wide inline-flex items-center border-2 border-white px-4 py-2 focus:outline-none font-medium hover:bg-gray-700 text-xs mt-4 md:mt-0">
          CONTACT
          
        </a>
      </div>
    </header>
  );
}