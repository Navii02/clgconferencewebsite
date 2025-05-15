import React from 'react';

const Sponsors = () => {
  const sponsors = [
    { name: "Sponsor 1", logo: "https://via.placeholder.com/150x50?text=Sponsor+1" },
    { name: "Sponsor 2", logo: "https://via.placeholder.com/150x50?text=Sponsor+2" },
    { name: "Sponsor 3", logo: "https://via.placeholder.com/150x50?text=Sponsor+3" },
    { name: "Sponsor 4", logo: "https://via.placeholder.com/150x50?text=Sponsor+4" },
  ];

  return (
    <div className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Sponsors</h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            Meet the organizations making NCICIS 2025 possible.
          </p>
          <div className="w-16 sm:w-20 h-0.5 bg-blue-600 mx-auto mt-4 sm:mt-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 sm:p-6 flex items-center justify-center border border-gray-200">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;