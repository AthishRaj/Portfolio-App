import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Welcome from "./Welcome";
import About from "./About";
import Education from "./Education";
import Project from "./Project";
import Contact from "./Contact";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BrowserRouter>
        {/* Navbar */}
        <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white p-4 shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo / Site Name */}
            <h1 className="text-lg sm:text-xl font-bold tracking-wide">
              My<span className="text-blue-400">Portfolio</span>
            </h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8 font-medium tracking-wide">
              <li>
                <Link
                  to="/home"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/education"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <ul className="md:hidden mt-4 space-y-4 text-center font-medium tracking-wide">
              <li>
                <Link
                  to="/home"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-blue-400 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-blue-400 transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/education"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-blue-400 transition-colors duration-300"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-blue-400 transition-colors duration-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-blue-400 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
