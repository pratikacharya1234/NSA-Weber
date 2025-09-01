import { useState } from "react";
export default function AdminPannel() {
const [activeTab, setActiveTab] = useState('events');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Admin Panel</h1>
          <p className="text-xl">Manage events, gallery, and members</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('events')}
            className={`pb-2 px-4 font-semibold ${
              activeTab === 'events'
                ? 'text-purple-600 border-b-2 border-purple-600'
                : 'text-gray-600 hover:text-purple-600'
            }`}
          >
            Manage Events
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`pb-2 px-4 font-semibold ${
              activeTab === 'gallery'
                ? 'text-purple-600 border-b-2 border-purple-600'
                : 'text-gray-600 hover:text-purple-600'
            }`}
          >
            Manage Gallery
          </button>
          <button
            onClick={() => setActiveTab('members')}
            className={`pb-2 px-4 font-semibold ${
              activeTab === 'members'
                ? 'text-purple-600 border-b-2 border-purple-600'
                : 'text-gray-600 hover:text-purple-600'
            }`}
          >
            View Members
          </button>
        </div>
        
        {/* Events Management */}
        {activeTab === 'events' && (
          <div>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-purple-600 mb-6">Create New Event</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Event Title</label>
                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Date</label>
                    <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Time</label>
                    <input type="time" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Location</label>
                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Description</label>
                  <textarea rows="4" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"></textarea>
                </div>
                
                <button type="submit" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Create Event
                </button>
              </form>
            </div>
            
            {/* Existing Events */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-purple-600 mb-6">Existing Events</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((event) => (
                  <div key={event} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-gray-800">Event Title {event}</h3>
                      <p className="text-gray-600">Date: October {10 + event}, 2024</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                        Edit
                      </button>
                      <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Gallery Management */}
        {activeTab === 'gallery' && (
          <div>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-purple-600 mb-6">Upload Images</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Image Title</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600" />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Category</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600">
                    <option>Select Category</option>
                    <option>Cultural Events</option>
                    <option>Social Gatherings</option>
                    <option>Academic Activities</option>
                    <option>Sports</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Upload Image</label>
                  <input type="file" accept="image/*" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600" />
                </div>
                
                <button type="submit" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Upload Image
                </button>
              </form>
            </div>
          </div>
        )}
        
        {/* Members Management */}
        {activeTab === 'members' && (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-purple-600 mb-6">Member List</h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Email</th>
                    <th className="px-4 py-2 text-left">Major</th>
                    <th className="px-4 py-2 text-left">Year</th>
                    <th className="px-4 py-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((member) => (
                    <tr key={member} className="border-b">
                      <td className="px-4 py-2">Member Name {member}</td>
                      <td className="px-4 py-2">member{member}@weber.edu</td>
                      <td className="px-4 py-2">Computer Science</td>
                      <td className="px-4 py-2">Junior</td>
                      <td className="px-4 py-2">
                        <button className="text-blue-500 hover:underline mr-2">View</button>
                        <button className="text-red-500 hover:underline">Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
