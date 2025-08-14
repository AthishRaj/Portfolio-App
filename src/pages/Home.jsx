import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Welcome from './Welcome'
import About from './About'
import Education from './Education'
import Project from './Project'
import Contact from './Contact'
export default function Home() {
  return (
    <>

      <BrowserRouter>
       <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white p-4 shadow-lg sticky top-0 z-50">
  <ul className="flex space-x-8 justify-center font-medium tracking-wide">
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
</nav>


        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/home' element={<Welcome/>}/>
          <Route path='/about' element={<About />} />
          <Route path='/education' element={<Education />} />
          <Route path='/projects' element={<Project/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>


    

    </>
  )
}