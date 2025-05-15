import React from 'react';
import { FileText, Calendar, Award, Book } from 'lucide-react';
import { Helmet } from 'react-helmet';

const CallForPapers = () => {
  const timeline = [
    { date: "July 31, 2025", event: "Full-length paper submission" },
    { date: "August 10, 2025", event: "Notification of acceptance" },
    { date: "August 16, 2025", event: "Camera-ready paper submission" },
    { date: "Aug 11-18, 2025", event: "Author's registration" },
    { date: "August 21-22, 2025", event: "Conference dates" }
  ];

  return (
    <div className="bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20">
      <Helmet>
        <title>Call for Papers – NCICIS 2025</title>
        <meta
          name="description"
          content="Submit your original research papers for NCICIS 2025 on AI, communication systems, and intelligent technologies. View topics, guidelines, and submission deadlines."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-50 rounded-lg p-4 text-xs sm:text-sm text-blue-800 mb-6 text-center">
          Open to researchers, industry professionals, and students. Only original, unpublished work is accepted.
        </div>

        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="inline-block text-blue-600 font-medium mb-3 sm:mb-4 text-xs uppercase tracking-wider">Research Contributions</span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Call for Papers</h1>
          <div className="w-16 sm:w-20 h-0.5 bg-blue-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            We invite original research papers on cutting-edge technologies in Information Communication and Intelligent Systems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-gray-200">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="bg-blue-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                <FileText className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Topics of Interest</h2>
            </div>
            <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
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

          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-gray-200">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="bg-blue-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                <Award className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Submission Guidelines</h2>
            </div>
            <ul className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div><strong>Format:</strong> IEEE format, maximum 6 pages</div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div><strong>Peer Review:</strong> All submissions will undergo rigorous peer review</div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div><strong>Presentation:</strong> At least one author must register and present</div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div><strong>Submission:</strong> Through Microsoft CMT system</div>
              </li>
            </ul>

            <a
              href="https://cmt3.research.microsoft.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 sm:mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 sm:py-2.5 px-5 sm:px-6 rounded-lg transition-all duration-300 text-sm"
            >
              Submit via Microsoft CMT
            </a>

            <div className="mt-3 sm:mt-4">
              <a
                href="/files/NCICIS2025_CallForPapers.pdf"
                className="text-blue-600 underline text-xs sm:text-sm hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Full Call for Papers (PDF)
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-gray-200 mb-12 sm:mb-16">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="bg-blue-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
              <Book className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Publication Opportunities</h2>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-blue-50 rounded-lg p-4 sm:p-6">
              <h3 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">Conference Proceedings</h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                All accepted papers will be published in the conference proceedings with an ISBN number.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 sm:p-6">
              <h3 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">IJSTI Journal</h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Selected papers will be published in the International Journal of Science Technology and Innovation (IJSTI) (ISSN: 3049-0030).
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-gray-200">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="bg-blue-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
              <Calendar className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Important Dates</h2>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-blue-600 text-white text-xs font-medium rounded-full w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center mr-3 sm:mr-4 mt-0.5 sm:mt-1">
                  {index + 1}
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">{item.date}</p>
                  <p className="text-gray-600 text-xs sm:text-sm">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        

        <p className="text-xs sm:text-sm text-gray-600 mt-4 text-center">
          The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft, including costs for Azure cloud services, software development, and support.
        </p>
      </div>
    </div>
  );
};

export default CallForPapers;