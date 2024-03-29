// src/components/Navbar.js



// import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";
import React from "react";

import github from "../assets/github-icon.svg";
import linkedin from "../assets/linkedin-icon.svg";



export default function Foot() {
  return (
    <footer className="bg-primary z-20">
      <div className="container mx-auto flex flex-wrap py-7 px-6 flex-col md:flex-row items-center max-w-5xl font-light">

        <div className="mb-2  md:ml-auto  md:py-1 md:pl-4  flex flex-wrap items-center text-xs justify-end font-body gap-2">
          <a href="https://www.linkedin.com/in/adamggrover/" target="_blank" >
              <img 
              src={linkedin}
              className="w-8"
              >
              </img> 
            </a>
            <a href="https://github.com/adamggrover" target="_blank" >
              <img 
              src={github}
              className="w-8"
              >
              </img> 
            </a>
        </div>
        <div className="mb-2 md:py-1 ml-6 flex flex-wrap items-center text-xs justify-center font-body">
          <a href="mailto:adamggrover@gmail.com" className=" hover:text-white fon-body text-xs">
            adamggrover@gmail.com
          </a>

        </div>
        
      </div>
    </footer>
  );
}