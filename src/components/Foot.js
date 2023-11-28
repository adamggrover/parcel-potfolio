// src/components/Navbar.js

import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";
import React from "react";

export default function Foot() {
  return (
    <header className="bg-slate-950 z-20">
      <div className="container mx-auto flex flex-wrap py-7 px-6 flex-col md:flex-row items-center max-w-5xl font-light">
        <a className="text-white mb-4 md:mb-0">
          <a href="#about" className="text-2xl font-clean">
            
          </a>
        </a>
        <nav className="md:ml-auto  md:py-1 md:pl-4  flex flex-wrap items-center text-xs justify-center font-body">
          <a href="#projects" className=" hover:text-white fon-body text-xs">
            adamggrover@gmail.com
          </a>

        </nav>
        
      </div>
    </header>
  );
}