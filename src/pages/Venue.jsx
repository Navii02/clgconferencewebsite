import React from 'react';
import { MapPin, Calendar, Clock, Wifi, Coffee, Users } from 'lucide-react';

const Venue = () => {
  const amenities = [
    { icon: <Wifi className="w-5 h-5" />, name: "High-speed WiFi" },
    // { icon: <Coffee className="w-5 h-5" />, name: "Catering Services" },
    // { icon: <Users className="w-5 h-5" />, name: "Auditorium (500+ capacity)" },
    { icon: <Wifi className="w-5 h-5" />, name: "Projection Equipment" },
    { icon: <Coffee className="w-5 h-5" />, name: "Breakout Rooms" },
    { icon: <Users className="w-5 h-5" />, name: "Technical Support" }
  ];

  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-blue-600 font-medium mb-4 text-xs uppercase tracking-wider">Conference Location</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Venue Information</h1>
          <div className="w-20 h-0.5 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            NCICIS 2025 will be hosted at College of Engineering Poonjar, offering state-of-the-art facilities in a serene academic environment.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12 md:mb-16">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-10">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">College of Engineering Poonjar</h2>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Address:</p>
                    <p>College of Engineering Poonjar</p>
                    <p>Poonjar, Kottayam District</p>
                    <p>Kerala, India - 686582</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Conference Dates:</p>
                    <p>August 21-22, 2025</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Timings:</p>
                    <p>9:00 AM to 6:00 PM daily</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="h-full w-full">
                
                <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7866.1770335597!2d76.81259924182982!3d9.673477961663371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07b56200e0d90f%3A0x9924d34156f3bc17!2sCollege%20of%20Engineering%20Poonjar%20CEP!5e0!3m2!1sen!2sin!4v1747321238846!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  className="min-h-[300px] md:h-full w-full"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              Accessibility
            </h3>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7l4-4m0 0l4 4m-4-4v18"></path>
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-gray-800">By Air</p>
                    <p className="text-gray-600 text-sm">Cochin International Airport (COK) - ~100 km</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7l4-4m0 0l4 4m-4-4v18"></path>
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-gray-800">By Train</p>
                    <p className="text-gray-600 text-sm">Kottayam Railway Station - ~40 km</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7l4-4m0 0l4 4m-4-4v18"></path>
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-gray-800">By Road</p>
                    <p className="text-gray-600 text-sm">Well-connected by state highways with ample parking</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <Coffee className="w-5 h-5 text-blue-600" />
              </div>
              Nearby Amenities
            </h3>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7l4-4m0 0l4 4m-4-4v18"></path>
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-gray-800">Accommodation</p>
                    <p className="text-gray-600 text-sm">Various hotels and guest houses within 10-15 km radius</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7l4-4m0 0l4 4m-4-4v18"></path>
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-gray-800">Dining</p>
                    <p className="text-gray-600 text-sm">Local restaurants serving authentic Kerala cuisine</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7l4-4m0 0l4 4m-4-4v18"></path>
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-gray-800">Attractions</p>
                    <p className="text-gray-600 text-sm">Poonjar Palace, Vagamon Hills, and other local attractions</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">Venue Facilities</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-100 p-3 rounded-full mb-2 text-blue-600">
                  {amenity.icon}
                </div>
                <p className="text-sm font-medium text-center text-gray-700">{amenity.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;