import { BrowserRouter ,Routes, Route, Link  } from "react-router-dom"
import Project from "./Project"
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 sm:px-8 lg:px-16 text-white">
  {/* Main Heading */}
  <h1 className="text-3xl sm:text-6xl md:text-6xl lg:text-7xl font-extrabold tracking-wide text-center leading-tight animate-fade-in">
    ATHISH <span className="text-blue-400">RAJ U K</span>
  </h1>

  {/* Subtitle */}
  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 mt-3 sm:mt-4 text-center animate-fade-in delay-200">
    FullStack Developer
  </h2>

  {/* Description */}
  <p className="mt-5 sm:mt-6 max-w-sm sm:max-w-md md:max-w-xl lg:max-w-3xl text-center text-gray-300 text-sm sm:text-base md:text-lg animate-fade-in delay-400">
    I design and build modern, responsive, and user-friendly web applications
    using the latest technologies. Let’s create something amazing together!
  </p>

  {/* Call to Action */}
  <div className="mt-6 sm:mt-8 animate-fade-in delay-600">
    <Link
      to="/projects"
      className="px-5 sm:px-6 md:px-8 py-2 sm:py-3 bg-blue-500 text-sm sm:text-base md:text-lg text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
    >
      View My Work
    </Link>
  </div>
</div>

    </>
  )
}