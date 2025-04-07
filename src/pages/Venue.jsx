import React from 'react';

const Venue = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Venue Information</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Join us at the Tech Convention Center in San Francisco.
        </p>
        {/* Content will be expanded later */}
      </div>
    </div>
  );
};

export default Venue;