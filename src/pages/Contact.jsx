export default function Contact(){
  return(
    <>
      <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Heading */}
        <h3 className="text-3xl font-bold mb-6">Contact Me</h3>

        {/* Contact Links */}
        <div className="space-y-4">
          <div>
            <a
              href="tel:9074652931"
              className="text-lg hover:text-blue-400 transition duration-300"
            >
              📞 +91 9074652931
            </a>
          </div>
          <div>
            <a
              href="mailto:athishraj88@gmail.com"
              className="text-lg hover:text-blue-400 transition duration-300"
            >
              📧 athishraj88@gmail.com
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-gray-400 text-sm">
          © {new Date().getFullYear()} Athish Raj U K. All rights reserved.
        </p>
      </div>
    </footer>
    </>
  )
}