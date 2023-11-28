// src/components/Testimonials

import React from "react";
import { CommandLineIcon, UsersIcon } from "@heroicons/react/20/solid";
import { blogs } from "../data";

export default function Testimonials() {
  return (
    <section id="blog" className="text-gray-400 bg-zinc-50 body-font">
      
      <div className="container px-6 py-10 mx-auto text-left max-w-5xl font-body  ">
      <hr></hr>
        <div className="flex flex-col w-full mt-1">
          <h1 className="text-sm font-medium mb-10 mt-2 text-slate-950">
            BLOG
          </h1>
          {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p> */}
        </div>
        <div className="flex flex-wrap -m-4">
          {blogs.map((blog) => (
            <a
              href={blog.link}
              key={blog.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center border-slate-300 border-solid border-2"
                  src={blog.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {blog.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {blog.title}
                  </h1>
                  <p className="leading-relaxed">{blog.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}