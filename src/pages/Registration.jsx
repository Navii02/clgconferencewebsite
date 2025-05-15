import React from 'react';
import { Helmet } from 'react-helmet';
import { UserPlus, CreditCard } from 'lucide-react';

const Registration = () => {
  return (
    <div className="bg-white py-12 sm:py-16 md:py-20">
      <Helmet>
        <title>Registration – NCICIS 2025</title>
        <meta name="description" content="Register for NCICIS 2025. Find participant categories, fees, and important instructions here." />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Conference Registration</h1>
          <p className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4">
            Secure your participation in NCICIS 2025. Register according to your category and follow the payment instructions.
          </p>
          <div className="w-16 sm:w-20 h-0.5 bg-blue-600 mx-auto mt-4 sm:mt-6"></div>
        </div>

        <div className="bg-blue-50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex items-center mb-3 sm:mb-4">
            <UserPlus className="text-blue-600 mr-2 h-4 sm:h-5 w-4 sm:w-5" />
            <h2 className="text-base sm:text-lg font-semibold text-blue-800">Who Can Register?</h2>
          </div>
          <ul className="text-xs sm:text-sm text-blue-900 list-disc list-inside space-y-2">
            <li>Authors of accepted papers (at least one author per paper must register)</li>
            <li>Academicians, researchers, and students</li>
            <li>Industry professionals and enthusiasts</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 sm:p-6 mb-6 sm:mb-8 overflow-x-auto">
          <div className="flex items-center mb-3 sm:mb-4">
            <CreditCard className="text-blue-600 mr-2 h-4 sm:h-5 w-4 sm:w-5" />
            <h2 className="text-base sm:text-lg font-semibold text-gray-800">Registration Fees</h2>
          </div>
          <table className="w-full text-xs sm:text-sm text-left text-gray-700 border-collapse">
            <thead className="bg-gray-100 text-gray-800 font-medium">
              <tr>
                <th className="py-2 px-3 sm:px-4 border">Category</th>
                <th className="py-2 px-3 sm:px-4 border">Fee (INR)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['UG/PG Students', '₹500'],
                ['Research Scholars', '₹800'],
                ['Faculty/Academicians', '₹1000'],
                ['Industry Professionals', '₹1500'],
              ].map(([category, fee], index) => (
                <tr key={index}>
                  <td className="py-2 px-3 sm:px-4 border">{category}</td>
                  <td className="py-2 px-3 sm:px-4 border">{fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center">
          <a
            href="https://example.com/registration-form"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition-all duration-300 text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Proceed to Registration
          </a>
        </div>
      </div>
    </div>
  );
};

export default Registration;