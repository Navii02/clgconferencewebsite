import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, ChevronRight, ArrowRight } from 'lucide-react';

const Home = () => {
  const eventDate = new Date('2025-09-15T09:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = eventDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans antialiased text-gray-900">
      {/* Hero Section */}
      <section 
        className="relative h-auto min-h-screen md:min-h-[800px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1920")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/60">
          <div className="max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8 py-20 md:py-0">
            <div className="text-white max-w-2xl px-4">
              <div className="inline-block bg-indigo-600/20 backdrop-blur-sm border border-indigo-400/30 rounded-full px-3 py-1 mb-3 md:mb-4 md:px-4 md:py-1.5">
                <p className="text-xs md:text-sm font-medium text-indigo-200">September 15-17, 2024 • Kochi, Kerala</p>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-indigo-500">
                  TechConf
                </span>{' '}
                <span className="text-white">2024</span>
              </h1>
              <p className="text-base md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
                The premier technology conference bringing together innovators, thought leaders, and disruptors shaping the digital future.
              </p>

              {/* Countdown Timer */}
              <div className="flex gap-2 sm:gap-3 md:gap-4 mb-8 md:mb-10">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg p-2 md:p-4 min-w-[60px] sm:min-w-[70px] md:min-w-[80px]">
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{value}</span>
                    <span className="text-xs sm:text-sm font-medium text-indigo-200 uppercase tracking-wider">
                      {unit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/registration"
                  className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 sm:py-4 px-6 sm:px-10 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-sm sm:text-base"
                >
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/schedule"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white/30 hover:border-white/50 text-white font-medium py-3 sm:py-4 px-6 sm:px-10 rounded-lg transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
                >
                  View Schedule
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Conference */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <span className="inline-block text-indigo-600 font-medium mb-2 md:mb-3 text-sm md:text-base">WHY ATTEND</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Elevate Your <span className="text-indigo-600">Tech Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Visionary Keynotes",
                icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" />,
                content: "Gain insights from globally renowned tech leaders and C-level executives as they share strategies from the forefront of innovation."
              },
              {
                title: "Expert Panels",
                icon: <Calendar className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" />,
                content: "Join immersive sessions on AI, cybersecurity, and cloud computing—led by specialists in each field."
              },
              {
                title: "Global Networking",
                icon: <MapPin className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" />,
                content: "Connect with 1000+ professionals, startups, and investors from around the globe."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-6 md:p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="bg-indigo-50 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <span className="inline-block text-indigo-600 font-medium mb-2 md:mb-3 text-sm md:text-base">EVENT DETAILS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Conference <span className="text-indigo-600">Information</span>
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Calendar className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" />,
                title: "Date & Time",
                details: ["September 15-17, 2024", "9:00 AM - 6:00 PM"]
              },
              {
                icon: <MapPin className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" />,
                title: "Location",
                details: ["Infopark Convention Center", "Kochi, Kerala"]
              },
              {
                icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" />,
                title: "Attendees",
                details: ["1000+ Technology Leaders", "From 50+ Countries"]
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-xl p-6 md:p-8 text-center transition-all duration-300 hover:shadow-lg"
              >
                <div className="bg-indigo-50 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">{item.title}</h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 mb-1 last:mb-0 text-sm md:text-base">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <span className="inline-block text-indigo-600 font-medium mb-2 md:mb-3 text-sm md:text-base">FEATURED SPEAKERS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Meet Our <span className="text-indigo-600">Speakers</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6 md:mb-8">
              Learn from industry pioneers shaping the future of technology.
            </p>
            <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                id: 1,
                name: "Dr. Sarah Johnson",
                title: "CTO, FutureTech",
                bio: "Pioneer in quantum computing with 15+ years of industry experience.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: 2,
                name: "Michael Chen",
                title: "AI Research Lead, NeuroSys",
                bio: "Leading expert in neural networks and machine learning applications.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: 3,
                name: "Emma Rodriguez",
                title: "Director of Engineering, QuantumLeap",
                bio: "Specializing in scalable cloud infrastructure and distributed systems.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800"
              }
            ].map((speaker) => (
              <div 
                key={speaker.id} 
                className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-60 sm:h-64 md:h-72 lg:h-80">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{speaker.name}</h3>
                  <p className="text-indigo-600 font-medium mb-2 md:mb-3 text-sm md:text-base">{speaker.title}</p>
                  <p className="text-gray-600 mb-4 md:mb-5 line-clamp-2 text-sm md:text-base">{speaker.bio}</p>
                  <Link
                    to="/speakers"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium group text-sm md:text-base"
                  >
                    View profile
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-12">
            <Link
              to="/speakers"
              className="inline-flex items-center justify-center border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-medium py-2 md:py-3 px-6 md:px-8 rounded-lg transition-all duration-300 hover:shadow-md text-sm md:text-base"
            >
              View All Speakers
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-16 md:py-28 bg-gradient-to-r from-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            Ready to Transform Your Tech Journey?
          </h2>
          <p className="text-base md:text-xl text-indigo-200 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 1000+ technology professionals at the most anticipated conference of the year.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              to="/registration"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-indigo-700 font-medium py-3 md:py-4 px-8 md:px-12 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-sm md:text-base"
            >
              Register Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white/30 hover:border-white/50 text-white font-medium py-3 md:py-4 px-8 md:px-12 rounded-lg transition-all duration-300 hover:shadow-lg text-sm md:text-base"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;