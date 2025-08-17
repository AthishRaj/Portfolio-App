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
            {/* Logo / Site Name  <?xml version="1.0" encoding="UTF-8"?>
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 714.3 559">
  <defs>
    <style>
      .cls-1 {
        fill: #fff;
        stroke: aqua;
        stroke-miterlimit: 10;
      }
    </style>
  </defs>
  <path class="cls-1" d="M450.63,251.6L555.8.5H234.46l-81.8,195.3h58.43l58.43-139.5h204.49l-81.8,195.3H129.29L.75,558.5h321.34l105.17-251.1h204.49l-81.8,195.3h58.43l105.17-251.1h-262.92ZM287.04,502.7H82.55l81.8-195.3h204.49l-81.8,195.3Z"/>
</svg>*/}
            <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1162.18 903"
  className="w-8 h-8"
>
  <path
    d="M716.43,401.5l86.67-299.99c14.46-50.06-23.1-100.01-75.2-100.01h-407.04c-34.87,0-65.53,23.06-75.2,56.55l-12.55,43.45-57.78,200h0c59.23,0,111.32-39.17,127.75-96.07l30.03-103.93h370l-86.67,300H250.52c-61.65,0-115.86,40.77-132.97,100h0S1.99,901.5,1.99,901.5h465.92c61.64,0,115.85-40.77,132.96-99.99h0s86.67-300.01,86.67-300.01h370l-58.92,203.93c-13.89,48.09,22.19,96.07,72.24,96.07h0l86.67-300h0c14.46-50.06-23.11-100-75.21-100h-365.91ZM422.71,801.5H130.88l64.97-224.9c12.85-44.48,53.57-75.1,99.87-75.1h291.82l-64.97,224.9c-12.85,44.48-53.57,75.1-99.87,75.1Z"
    fill="#fff"
    stroke="#29abe2"
    strokeWidth="3"
    strokeMiterlimit="10"
  />
</svg>




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
