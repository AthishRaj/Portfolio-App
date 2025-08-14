import pic from '../assets/image.jpg'

export default function About() {
  return (
    <>
       <section className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center px-6">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-10 p-8 rounded-2xl shadow-2xl backdrop-blur-lg bg-white/60 border border-white/40 animate-fadeIn">
        
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={pic} // Replace with your profile image
            alt="Profile Image"
            className="w-48 h-48 object-cover rounded-full border-4 border-indigo-500 shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          {/* Name */}
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-wide">
            Athish <span className="text-indigo-600">Raj U K</span>
          </h1>

          {/* Role */}
          <h2 className="text-2xl text-gray-600 mt-2">FullStack Developer</h2>

          {/* Section Title */}
          <h3 className="text-lg font-semibold text-indigo-500 mt-6 uppercase tracking-wider">
            About Me
          </h3>

          {/* Description */}
          <p className="mt-4 text-gray-700 leading-relaxed">
            Recent B. Tech Computer Science graduate with hands-on experience in UI/UX design, and IoT-based
            applications. Proficient in Python, C, and web technologies with a strong foundation in data structures and DBMS. 
            Passionate about building efficient, user-centric solutions and eager to contribute to innovative software teams.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}