import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import { useState } from "react";
import { render } from "react-dom";

export default function App() {
  const [current, setCurrent]=useState('about')
  const section = () =>{
    if (current === 'about'){
      return <About/>
    }
    if (current === 'projects'){
      return <Projects/>
    }
    if (current === 'skills'){
      return <Skills/>
    }
    if (current === 'testimonials'){
      return<Testimonials/>
    }
    if (current === 'contact'){
      return<Contact/>
    }

    

  }

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar setCurrent={setCurrent} />
      {section()}
    </main>
  );
}
