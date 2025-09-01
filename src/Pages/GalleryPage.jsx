import { useState } from "react";
import { Image } from "lucide-react";

export default function Gallery() {

  const galleryCategories = ['All', 'Cultural Events', 'Social Gatherings', 'Academic Activities', 'Sports'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const galleryImages = [
    { id: 1, category: 'Cultural Events', title: 'Dashain Celebration' },
    { id: 2, category: 'Social Gatherings', title: 'Welcome Party' },
    { id: 3, category: 'Academic Activities', title: 'Study Session' },
    { id: 4, category: 'Cultural Events', title: 'Tihar Festival' },
    { id: 5, category: 'Sports', title: 'Cricket Tournament' },
    { id: 6, category: 'Social Gatherings', title: 'Picnic Day' }
  ];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Gallery</h1>
          <p className="text-xl">Capturing memories from our events and activities</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-purple-600 hover:bg-purple-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div key={image.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-r from-purple-300 to-purple-500 flex items-center justify-center">
                <Image className="text-white" size={48} />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-purple-600 mb-2">{image.title}</h3>
                <p className="text-sm text-gray-500">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No images found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
