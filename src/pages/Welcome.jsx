import { BrowserRouter } from "react-router-dom"
import Project from "./Project"
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 text-white">
  {/* Main Heading */}
  <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-center animate-fade-in">
    ATHISH <span className="text-blue-400">RAJ U K</span>
  </h1>

  {/* Subtitle */}
  <h2 className="text-2xl md:text-3xl text-gray-400 mt-4 text-center animate-fade-in delay-200">
    FullStack Developer
  </h2>

  {/* Description */}
  <p className="mt-6 max-w-xl text-center text-gray-300 animate-fade-in delay-400">
    I design and build modern, responsive, and user-friendly web applications
    using the latest technologies. Let’s create something amazing together!
  </p>

  {/* Call to Action */}
  <div className="mt-8 animate-fade-in delay-600">
    <a
      href="/projects"
      className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
    >
      View My Work
    </a>
  </div>
</div>

    </>
  )
}