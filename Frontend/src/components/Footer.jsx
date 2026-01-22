import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand & Contact Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              {/* Logo Image */}
              <img 
  src="Logo.jpeg" 
  alt="KSN Logo" 
  /* Increased width to w-24 and slightly adjusted h-12 for a better ratio */
  className="w-24 h-12 object-contain"
  onError={(e) => { e.target.src = 'https://via.placeholder.com/96x48?text=KSN'; }} 
/>
             
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering businesses and homes with smart water management solutions for a sustainable future.
            </p>
            <div className="space-y-4 text-gray-400">
              {/* Location */}
              <div className="flex items-start space-x-3 group">
                <svg className="w-5 h-5 text-orange-500 mt-0.5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Chennai, India</span>
              </div>
              {/* Email */}
              <div className="flex items-start space-x-3 group">
                <svg className="w-5 h-5 text-orange-500 mt-0.5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hello@ksn.in" className="hover:text-white transition-colors">hello@ksn.in</a>
              </div>
              {/* Phone */}
              <div className="flex items-start space-x-3 group">
                <svg className="w-5 h-5 text-orange-500 mt-0.5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </div>
            </div>
          </div>

          {/* Solution Links */}
          <div className="md:ml-auto">
            <h3 className="font-bold text-lg mb-6 text-white underline decoration-orange-500 underline-offset-8 decoration-2">Solutions</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#features" className="hover:text-orange-500 transition-colors">IoT Meters</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Cloud Platform</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Analytics</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Leak Detection</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="md:ml-auto">
            <h3 className="font-bold text-lg mb-6 text-white underline decoration-orange-500 underline-offset-8 decoration-2">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="md:ml-auto">
            <h3 className="font-bold text-lg mb-6 text-white underline decoration-orange-500 underline-offset-8 decoration-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 KSN Smart Water. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;