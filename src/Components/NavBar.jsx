import React, { useState } from 'react';
import { Menu, X, Home, Users, Calendar, Image, HelpCircle, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

export default function NavBar({ currentPage, setCurrentPage, isSidebarOpen, setIsSidebarOpen }) {
  // Weber State University Color Scheme
  const colors = {
    primary: '#663399', // Weber Purple
    secondary: '#FFFFFF', // White
    accent: '#F5F5F5', // Light Gray
    dark: '#2D1B69', // Dark Purple
    text: '#333333',
    success: '#28A745',
    warning: '#FFC107'
  };

  const navItems = [
    { name: 'Home', icon: Home, key: 'home' },
    { name: 'About', icon: Users, key: 'about' },
    { name: 'Events', icon: Calendar, key: 'events' },
    { name: 'Gallery', icon: Image, key: 'gallery' },
    { name: 'Members', icon: Users, key: 'members' },
    { name: 'Help', icon: HelpCircle, key: 'help' },
  ];

  return (
    <nav className="bg-white shadow-lg border-b-4 border-purple-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:hidden p-2 text-purple-600 hover:bg-purple-50 rounded"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">NSA</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-purple-600">Nepalese Student Association</h1>
                <p className="text-sm text-gray-600">Weber State University</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setCurrentPage(item.key)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                  currentPage === item.key
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                <item.icon size={16} />
                <span>{item.name}</span>
              </button>
            ))}
            <button
              onClick={() => setCurrentPage('admin')}
              className="flex items-center space-x-1 px-3 py-2 bg-purple-100 text-purple-600 rounded-md hover:bg-purple-200 transition-colors"
            >
              <Shield size={16} />
              <span>Admin</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}