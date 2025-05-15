import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, ChevronRight, ArrowRight, BookOpen, Mic, Award, Globe } from "lucide-react";

const Home = () => {
  const eventDate = new Date("2025-08-21T10:00:00");
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
    <div className="font-sans antialiased text-gray-900 bg-white">
      <section className="relative min-h-screen bg-cover bg-center flex items-center" 
        style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1920")' }}>
        
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
              <Calendar className="h-4 sm:h-5 w-4 sm:w-5 mr-2 text-white" />
              <p className="text-xs sm:text-sm font-medium text-white tracking-wider uppercase">
                August 21-22, 2025 • Poonjar, Kottayam
              </p>
            </div>

            <div className="mb-6 sm:mb-8">
              <h1 className="text-xs sm:text-sm font-light text-blue-300 mb-3 sm:mb-4 tracking-widest uppercase">
                NATIONAL CONFERENCE ON
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                Information Communication & Intelligent Systems
              </h2>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                NCICIS 2025
              </h3>
            </div>

            <div className="flex items-center text-white mb-6 sm:mb-8">
              <BookOpen className="h-4 sm:h-5 w-4 sm:w-5 mr-2" />
              <p className="text-xs sm:text-sm">
                Jointly Organized by <span className="font-semibold">IETE</span> and{" "}
                <span className="font-semibold">College of Engineering, Poonjar</span>
              </p>
            </div>


            <div className="flex gap-3 sm:gap-4 mb-8 sm:mb-10">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div
                  key={unit}
                  className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 min-w-[60px] sm:min-w-[80px] border border-white/20"
                >
                  <span className="text-l sm:text-xl md:text-xl font-bold text-white">
                    {value.toString().padStart(2, "0")}
                  </span>
                  <span className="text-xs font-medium text-blue-200 uppercase tracking-wider">
                    {unit}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/registration"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-sm"
              >
                Register Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/call-for-papers"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:border-blue-400 text-white hover:text-blue-400 font-medium py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 hover:shadow-lg text-sm"
              >
                Submit Paper
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="inline-block text-blue-600 font-medium mb-3 sm:mb-4 text-xs uppercase tracking-wider">
              About The Conference
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Advancing <span className="text-blue-600">ICIS Technologies</span>
            </h2>
            <div className="w-16 sm:w-20 h-0.5 bg-blue-600 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
              NCICIS 2025 brings together leading researchers and industry experts to 
              discuss the latest developments in Information Communication and Intelligent 
              Systems, fostering collaboration and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Conference Focus",
                icon: <Globe className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />,
                content: "Exploring cutting-edge research and applications in ICIS technologies through keynote talks, paper presentations, and workshops.",
              },
              {
                title: "Who Should Attend",
                icon: <Users className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />,
                content: "Researchers, academicians, industry professionals, and students interested in ICIS technologies and their applications.",
              },
              {
                title: "Publication Opportunities",
                icon: <BookOpen className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />,
                content: "Selected papers will be published in conference proceedings and international journals.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="bg-blue-50 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center text-sm sm:text-base">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="inline-block text-blue-600 font-medium mb-3 sm:mb-4 text-xs uppercase tracking-wider">
              Why Attend
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Conference <span className="text-blue-600">Highlights</span>
            </h2>
            <div className="w-16 sm:w-20 h-0.5 bg-blue-600 mx-auto mb-6 sm:mb-8"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Keynote Talks",
                description: "Insights from renowned experts in ICIS fields",
                icon: <Mic className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />,
              },
              {
                title: "Technical Sessions",
                description: "Presentation of peer-reviewed research papers",
                icon: <BookOpen className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />,
              },
              {
                title: "Workshops",
                description: "Hands-on sessions on emerging technologies",
                icon: <Award className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />,
              },
              {
                title: "Networking",
                description: "Opportunities to connect with peers and experts",
                icon: <Users className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
              >
                <div className="bg-blue-50 w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="inline-block text-blue-600 font-medium mb-3 sm:mb-4 text-xs uppercase tracking-wider">
              Distinguished Speakers
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Meet Our <span className="text-blue-600">Keynote Speakers</span>
            </h2>
            <div className="w-16 sm:w-20 h-0.5 bg-blue-600 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
              Learn from leading experts in Information Communication and Intelligent Systems
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                id: 1,
                name: "Dr. Rajesh Kumar",
                title: "Professor, IIT Delhi",
                expertise: "Communication Systems & Networks",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
              },
              {
                id: 2,
                name: "Dr. Priya Sharma",
                title: "Research Lead, TCS",
                expertise: "Artificial Intelligence & Machine Learning",
                image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=800",
              },
              {
                id: 3,
                name: "Dr. Amit Patel",
                title: "Director, CDAC",
                expertise: "Intelligent Systems & IoT",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
              },
            ].map((speaker) => (
              <div
                key={speaker.id}
                className="group bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative overflow-hidden h-48 sm:h-64">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-blue-600 font-medium text-xs sm:text-sm mb-2">
                    {speaker.title}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                    {speaker.expertise}
                  </p>
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
              className="inline-flex items-center justify-center bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 hover:shadow-lg text-sm"
            >
              View All Speakers
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
            Ready to be part of NCICIS 2025?
          </h2>
          <p className="text-blue-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
            Join us for this premier conference on Information Communication and Intelligent Systems.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              to="/registration"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-blue-800 font-medium py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-sm"
            >
              Register Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:border-blue-300 text-white hover:text-blue-300 font-medium py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 hover:shadow-lg text-sm"
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