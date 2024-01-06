import React from "react";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Foot from "./components/Foot";




export function App() {
  return (
    <main className="text-gray-200 bg-neutral-50">
      <Navbar />
      <About />
      <Work />
      <Skills />
      <Projects />
      <Contact />
      <Foot />
      
    </main>
  );
}