// src/components/About.js

import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex py-20 px-6 md:flex-row flex-col items-center max-w-5xl">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className=" sm:text-5xl font-light mb-1 text-slate-950 font-clean">
            Hi, I'm Adam.
          </h1>
            <br className="hidden lg:inline-block" />
            <h3 className=" text-xl text-gray-600 mb-4 font-clean font-light">I'm a developer based in Bristol.</h3>
          
          <p className="mb-8 leading-relaxed text-gray-400 font-body text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="pl-10 md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
        <hr className="mb-8 text-gray-400"></hr>
      </div>
    </section>
  );
}