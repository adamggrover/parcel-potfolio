// src/components/Projects.js

import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-zinc-50 body-font">
      
      <div className="container px-6 pt-24 mx-auto text-left max-w-5xl font-body  ">
      <hr></hr>
        <div className="flex flex-col w-full mt-1">
          <h1 className="text-sm font-medium mb-10 mt-2 text-primary">
            MINI-PROJECTS
          </h1>
          <p className=" leading-relaxed text-sm mb-10 text-gray-400">
            Small personal projects I've completed in my own time to help further my knowledge and have some fun.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              target="_blank"
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt={project.alt}
                  className="absolute inset-0 w-full h-full object-cover object-top border-slate-300 border-solid border-2"
                  src={project.image}
                  
                />
                <div className="px-8 py-10 relative z-10 w-full h-72 border-1 border-gray-800 bg-primary opacity-0 hover:opacity-100">
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