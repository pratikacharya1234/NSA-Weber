export default function Footer() {
  return (
    <footer className="bg-purple-600 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-lg">NSA</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Nepalese Student Association</h3>
                <p className="text-purple-200">Weber State University</p>
              </div>
            </div>
            <p className="text-purple-100 mb-4">
              Connecting Nepalese students and promoting cultural awareness at Weber State University.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-purple-100">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Membership</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-purple-100">
              <p>Weber State University</p>
              <p>Ogden, Utah</p>
              <p>Email: nsa@weber.edu</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-purple-500 pt-8 mt-8 text-center text-purple-200">
          <p>&copy; 2024 Nepalese Student Association - Weber State University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
