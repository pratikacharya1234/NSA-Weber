import { useState } from "react";
import { ChevronLeft, ChevronRight, Users, Calendar, HelpCircle } from "lucide-react";
export default function HomePage() {
    const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Welcome to NSA Weber State",
      subtitle: "Connecting Nepalese students and celebrating our culture",
      image: "/api/placeholder/800/400"
    },
    {
      title: "Join Our Community",
      subtitle: "Be part of the largest Nepalese student organization at Weber State",
      image: "/api/placeholder/800/400"
    },
    {
      title: "Cultural Events & Activities",
      subtitle: "Experience traditional festivals and modern celebrations",
      image: "/api/placeholder/800/400"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <div className="relative h-96 bg-gradient-to-r from-purple-600 to-purple-800 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{slides[currentSlide].title}</h1>
            <p className="text-xl md:text-2xl mb-8">{slides[currentSlide].subtitle}</p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Join Us Today
            </button>
          </div>
        </div>
        
        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight size={24} />
        </button>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">Why Join NSA?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-purple-600">Community</h3>
            <p className="text-gray-600">Connect with fellow Nepalese students and build lasting friendships.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-purple-600">Events</h3>
            <p className="text-gray-600">Participate in cultural festivals, workshops, and social gatherings.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-purple-600">Support</h3>
            <p className="text-gray-600">Get academic and personal support from seniors and peers.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
