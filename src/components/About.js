// src/components/About.js

import React from "react";
import profileImg from "../assets/profile-img.jpg";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex pt-20 px-6 md:flex-row flex-col items-center max-w-5xl">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
          <h1 className="text-5xl font-light mb-3 text-primary font-clean">
            Hi, I'm Adam.
          </h1>
            <br className="hidden lg:inline-block" />
            <h3 className=" text-xl text-gray-600 mb-4 font-clean font-light">I'm a developer based in Bristol.</h3>
          
          <p className="mb-10 leading-relaxed text-gray-400 font-body text-sm">
            I am enthusiastic about technology and the impact it can have on the world.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-amber-400 hover:text-black text-sm font-body font-light tracking-wide">
              GET IN TOUCH
            </a>
            <a
              href="#work"
              className="ml-4 inline-flex text-gray-100 bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-amber-400 hover:text-black text-sm font-body font-light">
              VIEW MY WORK
            </a>
          </div>
        </div>
        <div className="pl-10 md:w-1/2 w-5/6">
          <img
            className="object-cover object-center"
            alt="hero"
            src={profileImg}
          />
        </div>
        <hr className="mb-8 text-gray-400"></hr>
      </div>
    </section>
  );
}