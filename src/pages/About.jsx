import pic from '../assets/image.jpg'

export default function About() {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-8 p-6 sm:p-10 rounded-2xl shadow-2xl backdrop-blur-lg bg-gray-900/70 border border-gray-700 animate-fadeIn">
          
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src={pic}
              alt="Profile"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-full border-4 border-blue-500 shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            {/* Name */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wide">
              Athish <span className="text-blue-400">Raj U K</span>
            </h1>

            {/* Role */}
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 mt-2">
              FullStack Developer
            </h2>

            {/* Section Title */}
            <h3 className="text-base sm:text-lg font-semibold text-blue-400 mt-6 uppercase tracking-wider">
              About Me
            </h3>

            {/* Description */}
            <p className="mt-4 text-gray-400 leading-relaxed text-sm sm:text-base max-w-xl">
              Recent B. Tech Computer Science graduate with hands-on experience in UI/UX design, 
              and IoT-based applications. Proficient in Python, C, and web technologies with a strong 
              foundation in data structures and DBMS. Passionate about building efficient, user-centric 
              solutions and eager to contribute to innovative software teams.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
