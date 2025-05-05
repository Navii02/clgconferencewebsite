import React from 'react';

const Venue = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Venue Information
        </h1>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
        NCICIS 2025 will be hosted at one of Kerala’s premier conference destinations, offering state-of-the-art facilities in a serene and accessible location.
        </p>

        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Le Meridien Convention Centre, Kochi</h2>
          <p className="text-gray-600 text-md leading-relaxed">
            Le Meridien Kochi is a world-class venue offering sophisticated event spaces, modern amenities, and a tranquil riverside setting. Located in the heart of Kochi, the convention centre is ideal for hosting large-scale conferences and networking events.
          </p>
          <div className="mt-6 text-gray-700">
            <p><strong>Address:</strong></p>
            <p>NH 66, Nettoor, Maradu</p>
            <p>Kochi, Kerala 682304, India</p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Location Map</h3>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.193693833236!2d76.31182897583515!3d9.93109229016913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08739447a7efc5%3A0xbeeab1a7a25ea142!2sLe%20Meridien%20Kochi!5e0!3m2!1sen!2sin!4v1712475944221!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              className="w-full border-0"
            ></iframe>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Accessibility</h4>
            <ul className="text-gray-600 list-disc list-inside space-y-1">
              <li><strong>By Air:</strong> Approximately 35 minutes from Cochin International Airport (COK).</li>
              <li><strong>By Train:</strong> 20 minutes from Ernakulam Junction Railway Station.</li>
              <li><strong>By Road:</strong> Accessible via National Highway 66 with ample parking.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Nearby Amenities</h4>
            <ul className="text-gray-600 list-disc list-inside space-y-1">
              <li>Luxury and budget accommodation options within 5 km radius</li>
              <li>Renowned restaurants and cafes nearby</li>
              <li>Easy access to shopping hubs like Lulu Mall</li>
              <li>Tourist spots such as Fort Kochi, Marine Drive, and Hill Palace</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
