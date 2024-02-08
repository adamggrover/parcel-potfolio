import React from "react";
import About from "./components/About";
const Work = React.lazy(() => import("./components/Work"));
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
const Projects = React.lazy(() => import("./components/Projects"));
import Skills from "./components/Skills";
import Foot from "./components/Foot";



export function App() {
  return (
    <main className="text-gray-200 bg-neutral-50">
      <Navbar />
      <About />
      <Skills />
      <Work />
      <Projects />
      <Contact />
      <Foot />
      
    </main>
  );
}