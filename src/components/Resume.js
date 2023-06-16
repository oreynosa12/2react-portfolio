import React from "react";
import {resume} from "../data"
export default function Resume() {

return(
<section id="resume">
<div className="container px-5 py-10 mx-auto text-center">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Education
        </h1>
        <div className="flex flex-wrap m-4"> 
          {resume.map((resume) => (
            <div className="p-4  w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <div className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {resume.school}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {resume.degree}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container px-5 py-10 mx-auto text-center">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Work History
        </h1>
        <div className="flex flex-wrap m-4"> 
          {resume.map((resume) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <div className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {resume.company}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {resume.date}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )



}