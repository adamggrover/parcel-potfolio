// src/components/Navbar.js

import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-slate-950 md:sticky top-0 z-20">
      <div className="container mx-auto flex flex-wrap py-6 px-6 flex-col md:flex-row items-center max-w-5xl font-light">
        <a className="text-white mb-4 md:mb-0">
          <a href="#about" className="text-3xl font-clean text-white">
            Adam Grover
          </a>
        </a>
        <nav className="  md:ml-auto md:mr-8 md:py-1 md:pl-4  flex flex-wrap items-center text-sm justify-center font-body">
          <a href="#work" className="mr-6 hover:text-white">
            Work
          </a>  
          <a href="#skills" className="mr-6 hover:text-white">
            Skills
          </a>        
          <a href="#projects" className="mr-6 hover:text-white">
            Mini-Projects
          </a>

          {/* <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a> */}
        </nav>
        <a
          href="#contact"
          className="font-body tracking-wide inline-flex items-center border-2 border-white px-3 py-1 focus:outline-none font-normal hover:bg-white hover:text-black text-xs mt-4 md:mt-0">
          CONTACT
          
        </a>
      </div>
    </header>
  );
}