export default function Education() {
  return (
    <>
      <div
        id="education"
        className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl w-full">
          {/* Heading */}
          <h3 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10 sm:mb-12">
            Education
          </h3>

          {/* Education List */}
          <div className="space-y-6 sm:space-y-8">
            {/* College */}
            <div className="bg-gray-900/70 p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-gray-700">
              <h4 className="text-lg sm:text-xl font-semibold text-blue-400">
                College of Engineering Vadakara
              </h4>
              <p className="text-gray-300 italic text-sm sm:text-base">
                Bachelor of Technology in Computer Science
              </p>
              <div className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm text-gray-400 mt-3 sm:mt-2 space-y-1 sm:space-y-0">
                <span>2021 - 2025</span>
                <span>Kozhikode, Kerala</span>
              </div>
            </div>

            {/* School */}
            <div className="bg-gray-900/70 p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-gray-700">
              <h4 className="text-lg sm:text-xl font-semibold text-blue-400">
                Jawahar Navodaya Vidyalaya Calicut
              </h4>
              <p className="text-gray-300 italic text-sm sm:text-base">
                Biology Science
              </p>
              <div className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm text-gray-400 mt-3 sm:mt-2 space-y-1 sm:space-y-0">
                <span>2019 - 2021</span>
                <span>Kozhikode, Kerala</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
