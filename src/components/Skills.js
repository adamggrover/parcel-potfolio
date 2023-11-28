// src/components/Skills.js

import { CheckIcon , CpuChipIcon } from "@heroicons/react/20/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-6 pt-24 max-w-5xl font-body mx-auto">
        <hr></hr>
        <div className="">
        <h1 className="text-sm  font-medium mb-10 mt-2 text-slate-950">
            SKILLS
        </h1>

        </div>
        <div className="flex flex-wrap w-full sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-slate-950  rounded flex p-4 h-full items-center">
                <CheckIcon className="text-amber-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}