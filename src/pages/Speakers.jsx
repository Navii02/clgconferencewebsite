import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet';

const speakers = [
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
];

const Speakers = () => {
  return (
    <div className="bg-white py-12 sm:py-16 md:py-20">
      <Helmet>
        <title>Speakers – NCICIS 2025</title>
        <meta name="description" content="Meet the distinguished speakers at NCICIS 2025 from academia and industry." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12">Featured Speakers</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="group bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="relative overflow-hidden h-48 sm:h-64">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">{speaker.name}</h3>
                <p className="text-blue-600 font-medium text-xs sm:text-sm mb-2">{speaker.title}</p>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">{speaker.expertise}</p>
                <a href={`/speakers/${speaker.id}`} className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-xs sm:text-sm group">
                  View profile
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;