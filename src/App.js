import React from "react";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Foot from "./components/Foot";
import Blog from "./components/Blog";



export function App() {
  return (
    <main className="text-gray-200 bg-zinc-50">
      <Navbar />
      <About />
      <Work />
      <Skills />
      <Projects />
      {/* <Blog /> */}
      <Contact />
      <Foot />
      
    </main>
  );
}