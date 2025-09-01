export default function AboutPage() {
  return (
    <div>
        <div className="min-h-screen bg-gray-50">
      <div className="bg-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About NSA Weber State</h1>
          <p className="text-xl">Learn about our mission, vision, and the team behind NSA</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-purple-600 mb-6">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The Nepalese Student Association at Weber State University serves as a bridge connecting Nepalese students 
              with their cultural heritage while fostering integration into the American academic environment.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We strive to create a supportive community that celebrates diversity, promotes academic excellence, 
              and provides resources for personal and professional growth.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">Quick Facts</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                <span>Founded: 2018</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                <span>Active Members: 150+</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                <span>Annual Events: 12+</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                <span>Cultural Programs: Monthly</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Leadership Team */}
        <div>
          <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-purple-600 mb-2">Member Name</h3>
                <p className="text-gray-600 mb-2">Position</p>
                <p className="text-sm text-gray-500">Brief description of role and responsibilities.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
