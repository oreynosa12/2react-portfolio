import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar({setCurrent}) {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <button className="title-font font-medium text-white mb-4 md:mb-0">
          <button onClick={() => setCurrent('about')} className="ml-3 text-xl">
            Omar Reynosa
          </button>
        </button>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <button onClick={()=>setCurrent('projects')} className="mr-5 hover:text-white">
            Past Work
          </button>
          <button  onClick={() => setCurrent('skills')} className="mr-5 hover:text-white">
            Skills
          </button>
          <button  onClick={()=>setCurrent ('testimonials')} className="mr-5 hover:text-white">
            Testimonials
          </button>
          <button  onClick={()=>setCurrent ('resume')} className="mr-5 hover:text-white">
            Resume
          </button>
        </nav>
        <button
          onClick={()=>setCurrent('contact')}
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </button>
      </div>
    </header>
  );
}
