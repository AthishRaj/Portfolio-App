import { BrowserRouter } from "react-router-dom"
import Project from "./Project"
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-wide text-center animate-fade-in">
          ATHISH <span className="text-blue-600">RAJ U K</span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl text-gray-600 mt-4 text-center animate-fade-in delay-200">
          FullStack Developer
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-xl text-center text-gray-500 animate-fade-in delay-400">
          I design and build modern, responsive, and user-friendly web applications
          using the latest technologies. Let’s create something amazing together!
        </p>

        {/* Call to Action */}
        
          <div className="mt-8 animate-fade-in delay-600">
    <a
      href="/projects"
      className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
    >
      View My Work
    </a>
  </div>
        
      </div>

    </>
  )
}