import { Calendar, Image } from "lucide-react";

export default function EventPage() {
const upcomingEvents = [
    { id: 1, title: "Dashain Celebration 2024", date: "October 15, 2024", time: "6:00 PM", location: "Student Union Building" },
    { id: 2, title: "Cultural Night", date: "November 20, 2024", time: "7:00 PM", location: "Browning Center" },
    { id: 3, title: "Study Group Session", date: "December 5, 2024", time: "4:00 PM", location: "Library Room 201" }
  ];

  const pastEvents = [
    { id: 4, title: "Tihar Festival 2023", date: "November 12, 2023", attendees: 120 },
    { id: 5, title: "New Year Celebration", date: "January 1, 2024", attendees: 85 },
    { id: 6, title: "Holi Festival", date: "March 15, 2024", attendees: 200 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Events</h1>
          <p className="text-xl">Stay updated with our upcoming events and past celebrations</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-purple-600 mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-40 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                  <Calendar className="text-white" size={48} />
                </div>
                <h3 className="text-xl font-semibold text-purple-600 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-1">📅 {event.date}</p>
                <p className="text-gray-600 mb-1">🕒 {event.time}</p>
                <p className="text-gray-600 mb-4">📍 {event.location}</p>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Past Events */}
        <div>
          <h2 className="text-3xl font-bold text-purple-600 mb-8">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <Image className="text-gray-400" size={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-1">📅 {event.date}</p>
                <p className="text-gray-600 mb-4">👥 {event.attendees} attendees</p>
                <button className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors">
                  View Photos
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
