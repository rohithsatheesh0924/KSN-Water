import React from 'react';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto max-w-6xl">
          {/* Top Banner */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center bg-white px-4 py-2 rounded-full text-sm font-medium text-orange-600 shadow-sm">
              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded mr-2">NEW</span>
              Water-save 3x get Industry-ready
              <a href="#" className="ml-2 text-blue-600 hover:text-blue-800">Get free consultation →</a>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-4">
            Take Control <br /> of your <span className="text-orange-500">Water Usage</span>
          </h1>
          <p className="text-gray-600 text-center mb-8">KSN Water Management Platform</p>

          {/* Feature Icons Row */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 11-2 0 1 1 0 012 0zm0 4a1 1 0 11-2 0 1 1 0 012 0zm0 4a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
              </svg>
              <span>Real-time Monitoring</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L7 11H5v-2l2.05-2.05zM12 16a4 4 0 100-8 4 4 0 000 8zm-2-6a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
              </svg>
              <span>Leak Detection</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.787.07-1.272 0-.425-.02-.81-.054-1.154a2.065 2.065 0 00-1.064-1.582C11.33 12.84 10.69 12.75 10 12.75s-1.33.09-1.882.244a2.065 2.065 0 00-1.064 1.582c-.034.344-.054.729-.054 1.154 0 .485.024.945.07 1.272H12.93z" />
              </svg>
              <span>+91 98765 43210</span>
            </div>
          </div>

          {/* Feature Cards + Image */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Cards */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mb-4">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 11-2 0 1 1 0 012 0zm0 4a1 1 0 11-2 0 1 1 0 012 0zm0 4a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Real-time Monitoring</h3>
                <p className="text-gray-600 text-sm">Monitor your water usage from anywhere</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mb-4">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.787.07-1.272 0-.425-.02-.81-.054-1.154a2.065 2.065 0 00-1.064-1.582C11.33 12.84 10.69 12.75 10 12.75s-1.33.09-1.882.244a2.065 2.065 0 00-1.064 1.582c-.034.344-.054.729-.054 1.154 0 .485.024.945.07 1.272H12.93z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Cost Saving</h3>
                <p className="text-gray-600 text-sm">Reduce water bills by up to 30%</p>
              </div>
            </div>

            {/* Center Image */}
           <div className="flex justify-center">
  <img
    src="water-meter.png"
    alt="Smart Water Meter"
    className="block w-full max-w-md h-auto" 
  />
</div>

            {/* Right Cards */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mb-4">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L7 11H5v-2l2.05-2.05zM12 16a4 4 0 100-8 4 4 0 000 8zm-2-6a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Detect Leaks</h3>
                <p className="text-gray-600 text-sm">Get instant alerts on water leaks</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mb-4">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 11-2 0 1 1 0 012 0zm0 4a1 1 0 11-2 0 1 1 0 012 0zm0 4a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Better Environment</h3>
                <p className="text-gray-600 text-sm">Contribute to water conservation</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-10">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full transition">
              Start Saving Water
            </button>
            <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 font-medium py-3 px-8 rounded-full transition">
              <svg className="inline w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L11.586 11H5a1 1 0 01-1-1v-2a1 1 0 011-1h6.586l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
     <section className="py-16 px-6 bg-white">
  <div className="container mx-auto max-w-6xl">
    {/* Main Container Card */}
    <div className="bg-white p-12 md:p-16 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-50 flex flex-col md:flex-row items-center gap-12 md:gap-20">
      
      {/* Left Side: Stats */}
      <div className="text-left shrink-0">
        <h2 className="text-6xl font-extrabold text-[#1a1c20] tracking-tight">25,000+</h2>
        <p className="text-gray-500 text-lg mt-2 font-medium">
          Meters Installed Across<br /> 50+ Industries
        </p>
      </div>

      {/* Middle Divider: Only visible on md screens and up */}
      <div className="hidden md:block h-24 w-[1px] bg-gray-200"></div>

      {/* Right Side: Logos */}
      <div className="flex-1">
        <p className="text-blue-400 text-sm font-medium mb-6">Trusted by Industry Giants</p>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
          {["Hindustan", "ABB", "Schneider", "Siemens", "NDEX"].map((name) => (
            <span 
              key={name} 
              className="text-[#8a92a6] font-bold text-xl tracking-wide uppercase"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Features Section */}
     <section className="py-16 px-6 bg-white">
  <div className="container mx-auto max-w-6xl">
    <div className="text-center mb-12">
      <span className="bg-orange-50 text-orange-500 text-xs px-3 py-1 rounded-full font-medium mb-4 inline-block">FEATURES</span>
      <h2 className="text-4xl font-bold text-gray-900 mb-2">Why Settle for Less?</h2>
      <p className="text-gray-500 text-lg">Get the Best Metering Solution</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {[
        {
          title: "Digital IOT Meter",
          desc: "Get a step closer to your water usage data with advanced IoT technology that monitors every drop, providing real-time usage data with comprehensive analytics.",
          icon: (
            <svg className="w-16 h-16 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
            </svg>
          ),
          badge: "53200 L"
        },
        {
          title: "Cloud Based",
          desc: "Access your water consumption data from anywhere with our secure cloud-based platform. Real-time sync across all your devices.",
          icon: (
            <svg className="w-16 h-16 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          )
        },
        {
          title: "Leak Detection & Notification",
          desc: "Immediate alerts when our system detects anomalies in your water flow. Prevent costly damage with smart notifications.",
          icon: (
            <svg className="w-16 h-16 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          ),
          badge: "Leak Detected! In your Kitchen outlet"
        },
        {
          title: "Usage Analytics & Insights",
          desc: "Comprehensive analytics dashboard showing usage patterns, consumption trends, and actionable insights to optimize your water management.",
          icon: (
            <svg className="w-16 h-16 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          )
        }
      ].map((feature, idx) => (
        <div key={idx} className="bg-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50">
          <div className="relative mb-8 bg-[#F1F3F6] rounded-2xl h-64 flex items-center justify-center overflow-hidden">
            {feature.badge && (
              <span className="absolute top-6 left-6 bg-orange-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                {feature.badge}
              </span>
            )}
            <div className="opacity-80">
              {feature.icon}
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
          <p className="text-gray-500 leading-relaxed text-base">{feature.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full font-medium mb-4 inline-block">HOW IT WORKS</span>
            <h2 className="text-3xl font-bold text-gray-800">Turn-Key Installation</h2>
          </div>

          <div className="flex justify-center mb-12">
            <img
              src="installation-illustration.png"
              alt="Installation Diagram"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Install meters on key pipelines",
                desc: "Our technicians will install meters on your main water lines and key distribution points for comprehensive monitoring."
              },
              {
                step: "02",
                title: "Data transfer to gateway",
                desc: "Meters transmit usage data to our secure gateway using wireless technology for real-time data collection."
              },
              {
                step: "03",
                title: "Gateway to cloud and back",
                desc: "Gateway transfers data to our cloud platform for analysis and sends actionable insights back to your dashboard."
              }
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full mb-4">
                  STEP {step.step}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Form */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to kickstart your water-saving journey?</h2>
             <div className="w-40 h-40 bg-orange-100 rounded-full flex items-center justify-center mx-auto mt-8">
  <span className="text-7xl">💧</span>
</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Get a Free Consultation & Quote!</h3>
              <p className="text-gray-600 mb-4">You're a/an</p>
              <div className="flex space-x-6 mb-6">
                <label className="flex items-center">
                  <input type="radio" name="type" defaultChecked className="mr-2" />
                  Residential
                </label>
                <label className="flex items-center">
                  <input type="radio" name="type" className="mr-2" />
                  Commercial
                </label>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" placeholder="Your name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone number (With country code)</label>
                  <input type="text" placeholder="+91 98765 43210" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" placeholder="your@email.com" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tell us what you need</label>
                  <textarea placeholder="Describe your requirements..." rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"></textarea>
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                By clicking “Request Quote” you agree to receive a callback from KSN
              </p>

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-full mt-4 transition">
                Request Quote →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
     <section className="py-20 px-6 bg-white">
  <div className="container mx-auto max-w-6xl">
    <div className="text-center mb-16">
      <span className="bg-orange-50 text-orange-600 text-[10px] px-3 py-1 rounded-full font-bold tracking-widest mb-4 inline-block uppercase">TESTIMONIALS</span>
      <h2 className="text-4xl font-bold text-gray-900 mt-2">KSN makes you happier :)</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          stars: 5,
          quote: "We saved 40% on water bills! The IoT meter tracking is incredibly accurate and the team support is exceptional.",
          name: "Pranesh",
          role: "Factory Owner",
          initial: "P"
        },
        {
          stars: 5,
          quote: "The water management system has been a game changer. We detected and fixed leaks that had gone unnoticed for months!",
          name: "Saranya",
          role: "Hotel Manager",
          initial: "S"
        },
        {
          stars: 5,
          quote: "As an apartment complex owner, this has simplified tenant billing. The app interface is intuitive and the data is reliable.",
          name: "Dhinesh",
          role: "Apartment Owner",
          initial: "D"
        }
      ].map((testimonial, idx) => (
        <div key={idx} className="bg-white p-8 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col justify-between">
          <div>
            <div className="flex mb-5 gap-1">
              {[...Array(testimonial.stars)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.367-2.448a1 1 0 00-1.175 0l-3.367 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed mb-8 text-base">"{testimonial.quote}"</p>
          </div>
          
          <div className="flex items-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-lg mr-4 border-2 border-white shadow-sm">
              {testimonial.initial}
            </div>
            <div>
              <p className="font-bold text-gray-900">{testimonial.name}</p>
              <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">{testimonial.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 mb-6">Can't find what you're looking for? Feel free to contact our support.</p>
              <a href="#" className="text-orange-500 font-medium">Contact Support →</a>
            </div>

            <div className="space-y-4">
              {[
                "We have multiple water sources. Should we install meters separately for them?",
                "How long does it take to install?",
                "Is there a minimum order quantity (MOQ)?",
                "Is anything required from the Company/RWA/Community?",
                "What happens if I need/want to relocate?"
              ].map((question, idx) => (
                <details key={idx} className="bg-white p-4 rounded-lg shadow-sm">
                  <summary className="flex justify-between items-center font-medium text-gray-800 cursor-pointer">
                    {question}
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;