// src/components/Projects.js

import { CodeBracketIcon} from "@heroicons/react/20/solid";
import React from "react";
import { work } from "../data";

export default function Work() {
  return (
    <section id="projects" className="text-gray-400 bg-zinc-50 body-font">
      
      <div className="container px-6 pt-24 mx-auto text-left max-w-5xl font-body  ">
      <hr></hr>
        <div className="flex flex-col w-full mt-1">
          <h1 className="text-sm font-medium mb-10 mt-2 text-slate-950">
            Work
          </h1>
          {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p> */}
        </div>
        <div className="flex flex-wrap -m-4">
          {work.map((project) => (
            <a
              href={project.link}
              target="_blank"
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center border-slate-300 border-solid border-2"
                  src={project.image}
                  
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-slate-950 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-amber-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}