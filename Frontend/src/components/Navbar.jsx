// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">A</div>
          <span className="font-bold text-lg">Aegir</span>
        </div>

        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">Home</a>
          <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">Features</a>
          <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">Pricing</a>
          <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">Contact</a>
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full transition">
          Get a Free Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;