export default function Contact() {
  return (
    <>
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen flex flex-col justify-center border-t border-gray-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Heading */}
          <h3 className="text-3xl font-bold mb-6 tracking-wide">Contact Me</h3>

          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:9074652931"
              className="flex items-center gap-2 text-lg text-gray-300 hover:text-indigo-400 transition duration-300"
            >
              📞 +91 9074652931
            </a>
            <a
              href="mailto:athishraj88@gmail.com"
              className="flex items-center gap-2 text-lg text-gray-300 hover:text-indigo-400 transition duration-300"
            >
              📧 athishraj88@gmail.com
            </a>
          </div>

          {/* Divider */}
          <div className="w-24 h-[1px] bg-gray-600 mx-auto my-6"></div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 text-2xl">
            <a
              href="https://github.com/athishraj88"
              target="_blank"
              className="hover:text-indigo-400 transition duration-300"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/athishraj88"
              target="_blank"
              className="hover:text-indigo-400 transition duration-300"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>

          {/* Footer Note */}
          <p className="mt-8 text-gray-500 text-sm">
            © {new Date().getFullYear()} <span className="text-white font-medium">Athish Raj U K</span>. All rights reserved.
          </p>
        </div>
      </footer>

    </>
  )
}