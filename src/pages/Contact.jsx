import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen flex flex-col justify-center px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Heading */}
        <motion.h3 
          className="text-3xl sm:text-4xl font-bold tracking-wide"
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        >
          Contact Me
        </motion.h3>

        {/* Intro */}
        <p className="text-gray-400 max-w-xl mx-auto">
          I’d love to hear from you — whether it’s about a project, a job, or just to say hi.
        </p>

        {/* Contact Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <a href="tel:9074652931" className="flex items-center gap-2 hover:text-indigo-400 transition">
            <FaPhone /> +91 9074652931
          </a>
          <a href="mailto:athishraj88@gmail.com" className="flex items-center gap-2 hover:text-indigo-400 transition">
            <FaEnvelope /> athishraj88@gmail.com
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-2xl">
          <a href="https://github.com/AthishRaj" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/athish-raj" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition">
            <FaLinkedin />
          </a>
        </div>

        {/* Divider */}
        <div className="w-24 h-[1px] bg-gray-600 mx-auto"></div>

        {/* Contact Form */}
        {/* <form className="max-w-lg mx-auto space-y-4">
          <input 
            type="text" placeholder="Your Name" 
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-indigo-400"
          />
          <input 
            type="email" placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-indigo-400"
          />
          <textarea 
            placeholder="Your Message" rows="4"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-indigo-400"
          ></textarea>
          <button className="w-full bg-indigo-500 hover:bg-indigo-600 py-3 rounded-lg font-medium transition">
            Send Message
          </button>
        </form> */}

        {/* Footer Note */}
        <p className="mt-8 text-gray-500 text-sm">
          © {new Date().getFullYear()} <span className="text-white font-medium">Athish Raj U K</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
