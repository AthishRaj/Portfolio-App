export default function Project() {
  return (
    <div
      id="projects"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex justify-center items-center px-4 sm:px-6 py-10"
    >
      <div className="max-w-6xl w-full">
        {/* Heading */}
        <h3 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          Projects
        </h3>

        {/* Projects Grid */}
        <div
          id="project-details"
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2"
        >
          {/* Project 1 */}
          <div className="bg-gray-900/70 rounded-xl shadow-lg p-6 sm:p-8 border border-gray-700 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300">
            <h4 className="text-xl sm:text-2xl font-semibold text-indigo-400 mb-2">
              SpotIo – IoT Based Smart Parking System
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 mb-4">
              <b>Frontend:</b> Flutter | <b>Backend:</b> Firebase
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm sm:text-base">
              <li>
                Developed an IoT-based system to optimize parking management
                with real-time monitoring and automation.
              </li>
              <li>
                Reduced congestion and improved convenience with a seamless
                interface and robust backend.
              </li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-900/70 rounded-xl shadow-lg p-6 sm:p-8 border border-gray-700 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300">
            <h4 className="text-xl sm:text-2xl font-semibold text-indigo-400 mb-2">
              Time Buddy – Time Table Management
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 mb-4">
              <b>Frontend:</b> HTML, CSS, JavaScript | <b>Backend:</b> PHP
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm sm:text-base">
              <li>
                Prevents overlapping periods for the same teacher and ensures
                workload balance across the week.
              </li>
              <li>
                Considers teacher specialization and preferences while adhering
                to school hours and period limits.
              </li>
              <li>
                Maintains flexibility for changes due to absences or schedule
                adjustments.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
