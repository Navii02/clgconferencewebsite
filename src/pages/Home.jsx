import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ChevronRight, ArrowRight, BookOpen, Award, Globe } from 'lucide-react';

const Home = () => {
  const eventDate = new Date('2025-08-21T10:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate countdown timer
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = eventDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      {/* Hero Section */}
      <section
        className="relative h-screen min-h-[600px] sm:min-h-[700px] bg-cover bg-center flex items-center overflow-hidden"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1920")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-blue-900/70"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10 py-16 sm:py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-blue-400/30 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
              <Calendar className="h-4 w-4 mr-2 text-blue-300" />
              <p className="text-xs sm:text-sm font-medium text-blue-100 tracking-wider uppercase">
                August 21-22, 2025 • Poonjar, Kottayam • Offline Conference
              </p>
            </div>

            <div className="mb-6 sm:mb-8">
              <h1 className="text-xs sm:text-sm font-light text-blue-100 mb-3 sm:mb-4 tracking-widest uppercase">
                NATIONAL CONFERENCE ON
              </h1>
              <h2 className="text-base sm:text-lg md:text-xl font-medium text-blue-200 mb-2 leading-tight">
                Information Communication & Intelligent Systems
              </h2>
              <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight">
                NCICIS 2025
              </h3>
            </div>
            
            <div className="flex items-center text-blue-100 mb-6 sm:mb-8">
              <BookOpen className="h-4 sm:h-5 w-4 sm:w-5 mr-2" />
              <p className="text-xs sm:text-sm">
                Jointly Organized by <span className="font-semibold">IETE</span> and <span className="font-semibold">College of Engineering, Poonjar</span>
              </p>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-6 sm:mb-8 leading-relaxed max-w-2xl">
              NCICIS 2025, hosted by IETE and CEP, is a premier academic conference fostering collaboration and innovation in Information Communication and Intelligent Systems, bringing together researchers, educators, and industry professionals.
            </p>

            {/* Countdown Timer */}
            <div className="flex gap-2 sm:gap-3 mb-8 sm:mb-10">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 min-w-[60px] sm:min-w-[70px] border border-white/10">
                  <span className="text-xl sm:text-2xl font-bold text-white">{value.toString().padStart(2, '0')}</span>
                  <span className="text-xs font-medium text-blue-200 uppercase tracking-wider">
                    {unit}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/registration"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-sm sm:text-base"
              >
                Register Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/schedule"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white/30 hover:border-white/50 text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-white/10 text-sm sm:text-base"
              >
                View Schedule
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About the Conference */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block text-blue-600 font-medium mb-3 sm:mb-4 text-xs uppercase tracking-wider">About The Conference</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              National Conference on <span className="text-blue-600">ICIS 2025</span>
            </h2>
            <div className="w-16 sm:w-20 h-0.5 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Conference Focus",
                icon: <Globe className="w-6 h-6 text-blue-600" />,
                content: "Exploring advancements in Information Communication and Intelligent Systems through academic research, industry applications, and collaborative discussions."
              },
              {
                title: "Conference Dates",
                icon: <Calendar className="w-6 h-6 text-blue-600" />,
                content: "21st & 22nd August 2025 - A two-day offline conference featuring keynote lectures, paper presentations, and technical workshops."
              },
              {
                title: "Organized By",
                icon: <Award className="w-6 h-6 text-blue-600" />,
                content: "Jointly organized by the Institution of Electronics and Telecommunication Engineers (IETE) and College of Engineering, Poonjar (CEP)."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="bg-blue-50 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 text-center">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center text-sm sm:text-base">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block text-blue-600 font-medium mb-3 sm:mb-4 text-xs uppercase tracking-wider">Conference Details</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Event <span className="text-blue-600">Information</span>
            </h2>
            <div className="w-16 sm:w-20 h-0.5 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Calendar className="w-6 h-6 text-blue-600" />,
                title: "Date & Time",
                details: ["August 21-22, 2025", "9:00 AM - 6:00 PM", "Offline Conference"]
              },
              {
                icon: <MapPin className="w-6 h-6 text-blue-600" />,
                title: "Venue",
                details: ["College of Engineering", "Poonjar, Kottayam, Kerala"]
              },
              {
                icon: <BookOpen className="w-6 h-6 text-blue-600" />,
                title: "Organizers",
                details: ["Institution of Electronics and Telecommunication Engineers (IETE)", "College of Engineering, Poonjar"]
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 sm:p-8 text-center border border-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="bg-blue-50 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">{item.title}</h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 mb-2 last:mb-0 text-sm sm:text-base">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block text-blue-600 font-medium mb-3 sm:mb-4 text-xs uppercase tracking-wider">Featured Speakers</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Meet Our <span className="text-blue-600">Distinguished Speakers</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6 text-sm sm:text-base">
              Learn from renowned academicians and industry leaders in the field of Information Communication and Intelligent Systems.
            </p>
            <div className="w-16 sm:w-20 h-0.5 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                id: 1,
                name: "Dr. Rajesh Kumar",
                title: "Professor, IIT Delhi",
                expertise: "Communication Systems & Networks",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: 2,
                name: "Dr. Priya Sharma",
                title: "Research Lead, TCS",
                expertise: "Artificial Intelligence & Machine Learning",
                image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: 3,
                name: "Dr. Amit Patel",
                title: "Director, C-DAC",
                expertise: "Intelligent Systems & IoT",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
              }
            ].map((speaker) => (
              <div
                key={speaker.id}
                className="group bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="relative overflow-hidden h-56 sm:h-64">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">{speaker.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-2">{speaker.title}</p>
                  <p className="text-gray-600 text-sm mb-3 sm:mb-4">{speaker.expertise}</p>
                  <Link
                    to="/speakers"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-xs sm:text-sm group"
                  >
                    View profile
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/speakers"
              className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium py-2 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:shadow-md text-sm sm:text-base"
            >
              View All Speakers
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-r from-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
            Join NCICIS 2025 at College of Engineering, Poonjar
          </h2>
          <p className="text-blue-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
            Organized by IETE and College of Engineering, Poonjar, this conference brings together academia and industry to advance Information Communication and Intelligent Systems.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              to="/registration"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-sm sm:text-base"
            >
              Register Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white/30 hover:border-white/50 text-white font-medium py-2 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
            >
              Contact Organizers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;