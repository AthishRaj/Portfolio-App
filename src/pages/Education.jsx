export default function Education(){
  return(
    <>
   <div
  id="education"
  className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-6"
>
  <div className="max-w-4xl w-full">
    {/* Heading */}
    <h3 className="text-4xl font-bold text-center text-white mb-12">
      Education
    </h3>

    {/* Education List */}
    <div className="space-y-8">
      {/* College */}
      <div className="bg-gray-900/70 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-shadow duration-300 border border-gray-700">
        <h4 className="text-xl font-semibold text-blue-400">
          College of Engineering Vadakara
        </h4>
        <p className="text-gray-300 italic">
          Bachelor of Technology in Computer Science
        </p>
        <div className="flex justify-between text-sm text-gray-400 mt-2">
          <span>2021 - 2025</span>
          <span>Kozhikode, Kerala</span>
        </div>
      </div>

      {/* School */}
      <div className="bg-gray-900/70 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-shadow duration-300 border border-gray-700">
        <h4 className="text-xl font-semibold text-blue-400">
          Jawahar Navodaya Vidyalaya Calicut
        </h4>
        <p className="text-gray-300 italic">
          Biology Science
        </p>
        <div className="flex justify-between text-sm text-gray-400 mt-2">
          <span>2019 - 2021</span>
          <span>Kozhikode, Kerala</span>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}