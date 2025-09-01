import React from 'react';
import { Home, Users, Calendar, Image, HelpCircle, Shield } from 'lucide-react';

export default function SideBar({ isOpen, currentPage, setCurrentPage, setIsSidebarOpen }) {
  const navItems = [
    { name: 'Home', icon: Home, key: 'home' },
    { name: 'About', icon: Users, key: 'about' },
    { name: 'Events', icon: Calendar, key: 'events' },
    { name: 'Gallery', icon: Image, key: 'gallery' },
    { name: 'Members', icon: Users, key: 'members' },
    { name: 'Help', icon: HelpCircle, key: 'help' },
    { name: 'Admin', icon: Shield, key: 'admin' },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">NSA</span>
          </div>
          <div>
            <h2 className="font-bold text-purple-600">NSA</h2>
            <p className="text-sm text-gray-600">Weber State</p>
          </div>
        </div>
      </div>
      <nav className="mt-4">
        {navItems.map((item) => (
          <button
            key={item.key}
            onClick={() => {
              setCurrentPage(item.key);
              setIsSidebarOpen(false);
            }}
            className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-purple-50 transition-colors ${
              currentPage === item.key ? 'bg-purple-100 text-purple-600 border-r-4 border-purple-600' : 'text-gray-700'
            }`}
          >
            <item.icon size={20} />
            <span>{item.name}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}