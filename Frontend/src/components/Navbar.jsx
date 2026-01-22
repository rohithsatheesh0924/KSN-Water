// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`
      sticky top-0 z-[100] w-full px-6 py-4 transition-all duration-300 ease-in-out
      ${scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
        : 'bg-white/80 backdrop-blur-md border-b border-gray-100/50'
      }
    `}>
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        
        {/* Logo Section */}
        <a href="#home" className="flex items-center space-x-3 group z-[110] transition-all duration-300 hover:scale-105">
          <img 
            src="Logo.jpeg" 
            alt="KSN Logo" 
            className="w-20 md:w-24 h-12 object-contain rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-rotate-1"
            onError={(e) => { 
              e.target.src = 'https://via.placeholder.com/96x48?text=KSN&color=orange-500&font-size=16&text-color=white'; 
              e.target.className += ' border border-orange-200';
            }} 
          />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-2 lg:space-x-8">
          {navLinks.map((link, index) => (
            <a 
              key={link.name}
              href={link.href} 
              className="relative text-gray-700 font-medium text-sm lg:text-base px-3 py-2 transition-all duration-300 hover:text-orange-500 hover:bg-orange-50/50 hover:rounded-xl group"
            >
              {link.name}
              <span className="absolute inset-0 rounded-xl -z-10 bg-gradient-to-r from-orange-500/20 to-orange-400/20 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <button className="
            bg-gradient-to-r from-orange-500 to-orange-600 
            hover:from-orange-600 hover:to-orange-700 
            text-white font-semibold py-3 px-8 rounded-2xl shadow-lg shadow-orange-200/50 
            transition-all duration-300 hover:shadow-xl hover:shadow-orange-300/60 
            active:scale-95 active:shadow-md transform-gpu
          ">
            Get a Free Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="
            lg:hidden text-gray-700 hover:text-orange-500 p-2 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 
            transition-all duration-300 hover:bg-orange-50/50 z-[110]
          "
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Overlay Menu */}
        <div 
          className={`
            fixed inset-0 z-[99] bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 p-8
            transition-all duration-500 ease-out
            ${isOpen 
              ? 'opacity-100 translate-y-0 pointer-events-auto' 
              : 'opacity-0 translate-y-10 pointer-events-none'
            }
            lg:hidden
            shadow-2xl border border-gray-100
          `}
        >
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="
                text-3xl md:text-4xl font-bold text-gray-800 hover:text-orange-500 
                transition-all duration-300 hover:scale-110 hover:-translate-y-1
                bg-gradient-to-r from-transparent via-orange-500/10 to-transparent p-4 rounded-2xl
              "
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => setIsOpen(false)}
            className="
              bg-gradient-to-r from-orange-500 to-orange-600 text-white 
              font-bold text-xl py-6 px-12 rounded-3xl shadow-2xl shadow-orange-300/50
              hover:from-orange-600 hover:to-orange-700 hover:shadow-3xl hover:shadow-orange-400/70
              hover:scale-105 active:scale-95 transition-all duration-300 transform-gpu
              ring-2 ring-orange-400/50
            "
          >
            Get a Free Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
