// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ FIXED: Use 'click' instead of 'mousedown' for mobile compatibility
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className={`
        sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 py-4 lg:py-5
        backdrop-blur-3xl transition-all duration-500 ease-out
        ${scrolled 
          ? 'bg-white/98 shadow-2xl border-b border-gray-200/70' 
          : 'bg-white/90 border-b border-gray-100/50'
        }
      `}>
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
          
          {/* Logo */}
          <a href="#home" className="flex items-center group">
            <img 
              src="Logo.jpeg" 
              alt="KSN Logo" 
              className="w-14 sm:w-16 lg:w-20 h-9 sm:h-10 lg:h-12 object-contain rounded-2xl shadow-xl 
                       transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl 
                       group-active:scale-105 bg-white/80 p-1.5 backdrop-blur-sm"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/96x48?text=KSN&color=f97316&font-size=20&text-color=white';
                e.target.className += ' border-2 border-orange-400/60 bg-gradient-to-br from-orange-50/80';
              }}
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1.5 lg:space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="group relative px-4 py-2.5 text-sm lg:text-base font-semibold text-gray-700
                         rounded-2xl backdrop-blur-md transition-all duration-400
                         hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50/80 hover:to-orange-100/60
                         hover:shadow-lg hover:shadow-orange-200/50 hover:scale-105"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-orange-500/20 
                               rounded-2xl -z-10 scale-0 group-hover:scale-100 transition-transform duration-400 origin-center" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden xl:flex">
            <button className="
              bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold 
              px-8 py-3 rounded-2xl shadow-xl shadow-orange-300/50 text-sm
              hover:from-orange-600 hover:to-orange-700 hover:shadow-2xl hover:shadow-orange-400/70
              active:scale-95 transition-all duration-300
            ">
              Get a Free Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="
              lg:hidden p-2.5 rounded-xl bg-white/80 backdrop-blur-xl shadow-md
              hover:bg-orange-50/80 hover:text-orange-600
              focus:outline-none focus:ring-2 focus:ring-orange-500/50
              transition-all duration-300
            "
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering outside click
              setIsOpen(!isOpen);
            }}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div 
          ref={menuRef}
          className="fixed inset-0 z-40 bg-gradient-to-b from-white via-white/95 to-orange-50/80 backdrop-blur-xl lg:hidden flex flex-col pt-16 pb-8 px-4 sm:px-6"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          {/* Close Button */}
          <div className="flex justify-end mb-6">
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full bg-gray-100 hover:bg-orange-100 text-gray-700 hover:text-orange-600 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div className="space-y-4 mb-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-4 px-5 text-lg sm:text-xl font-medium text-gray-800 rounded-xl bg-white/70 backdrop-blur-lg border border-gray-200/60 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-300 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-auto">
            <button 
              onClick={() => setIsOpen(false)}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:from-orange-600 hover:to-orange-700 hover:shadow-xl transition-all duration-300"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;