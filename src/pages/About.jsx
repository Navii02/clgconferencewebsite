import React from 'react';
import { Award, BookOpen, Globe, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-blue-600 font-medium mb-4 text-xs uppercase tracking-wider">About The Conference</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About NCICIS 2025
          </h1>
          <div className="w-20 h-0.5 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            The National Conference on Information Communication & Intelligent Systems (NCICIS) 2025 is a premier academic event jointly organized by IETE and College of Engineering Poonjar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Our Vision</h2>
            </div>
            <p className="text-gray-600">
              To establish NCICIS as a leading platform for showcasing innovative research and fostering collaborations in ICIS technologies, bridging the gap between academia and industry.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Who Should Attend</h2>
            </div>
            <p className="text-gray-600">
              Researchers, academicians, industry professionals, and students in electronics, telecommunication, computer science, and IT fields.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">About IETE</h2>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-medium text-gray-800">Premier Professional Organization</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Established in 1953, IETE is dedicated to advancing electronics, telecommunication, and IT. Recognized by the Government of India as a Scientific and Industrial Research Organization (SIRO).
              </p>
            </div>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Organizes technical conferences and publishes journals
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Offers continuing education opportunities
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Fosters research and development
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">About CEP</h2>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-medium text-gray-800">College of Engineering Poonjar</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                A distinguished institution dedicated to excellence in engineering education and research, offering programs in Computer Science, Electronics, and other engineering disciplines.
              </p>
            </div>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Affiliated with APJ Abdul Kalam Technological University
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Recognized by AICTE
              </li>
           
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;