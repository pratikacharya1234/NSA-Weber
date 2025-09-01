import React from 'react';
import { Users, Calendar, HelpCircle } from 'lucide-react';

export default function MemberPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Membership</h1>
          <p className="text-xl">Join our community and be part of something special</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Membership Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">Membership Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Networking</h3>
              <p className="text-gray-600">Connect with professionals and students in your field.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Exclusive Events</h3>
              <p className="text-gray-600">Access to member-only events and activities.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Support System</h3>
              <p className="text-gray-600">Academic and personal support from the community.</p>
            </div>
          </div>
        </div>
        
        {/* Membership Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-purple-600 mb-6 text-center">Join NSA Today</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">First Name</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600" />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600" />
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
              <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600" />
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Major</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600" />
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Year</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600">
                <option>Select Year</option>
                <option>Freshman</option>
                <option>Sophomore</option>
                <option>Junior</option>
                <option>Senior</option>
                <option>Graduate</option>
              </select>
            </div>
            
            <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}