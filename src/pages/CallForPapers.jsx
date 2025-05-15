import React from 'react';
import { FileText, Calendar, Award, Book } from 'lucide-react';

const CallForPapers = () => {
  const timeline = [
    { date: "July 31, 2025", event: "Full-length paper submission" },
    { date: "August 10, 2025", event: "Notification of acceptance" },
    { date: "August 16, 2025", event: "Camera-ready paper submission" },
    { date: "Aug 11-18, 2025", event: "Author's registration" },
    { date: "August 21-22, 2025", event: "Conference dates" }
  ];

  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-blue-600 font-medium mb-4 text-xs uppercase tracking-wider">Research Contributions</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Call for Papers</h1>
          <div className="w-20 h-0.5 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We invite original research papers on cutting-edge technologies in Information Communication and Intelligent Systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Topics of Interest</h2>
            </div>
            <ul className="space-y-3 text-gray-600">
              {[
                "Advanced communication systems and networks",
                "Artificial intelligence and machine learning applications",
                "Intelligent systems and signal processing",
                "Emerging technologies and future directions",
                "IoT and smart systems",
                "Data science and big data analytics",
                "Cloud and edge computing",
                "Cybersecurity and privacy"
              ].map((topic, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Submission Guidelines</h2>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <span className="font-medium">Format:</span> IEEE format, maximum 6 pages
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <span className="font-medium">Peer Review:</span> All submissions will undergo rigorous peer review
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <span className="font-medium">Presentation:</span> At least one author must register and present
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <span className="font-medium">Submission:</span> Through Microsoft CMT system
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 mb-16">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Book className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Publication Opportunities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-medium text-gray-800 mb-2">Conference Proceedings</h3>
              <p className="text-gray-600 text-sm">
                All accepted papers will be published in the conference proceedings with ISBN number.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-medium text-gray-800 mb-2">IJSTI Journal</h3>
              <p className="text-gray-600 text-sm">
                Selected papers will be published in the International Journal of Science Technology and Innovation (IJSTI) (ISSN: 3049-0030).
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Important Dates</h2>
          </div>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-blue-600 text-white text-xs font-medium rounded-full w-6 h-6 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <p className="font-medium text-gray-800">{item.date}</p>
                  <p className="text-gray-600 text-sm">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;