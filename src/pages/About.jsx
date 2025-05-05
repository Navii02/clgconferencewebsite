import React from 'react';

const About = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-10">
          About NCICIS 2025
        </h1>
        <p className="text-center text-gray-700 text-lg leading-relaxed mb-16 max-w-3xl mx-auto">
          TechConf 2024 is a global technology summit dedicated to driving innovation,
          fostering collaboration, and exploring the transformative power of emerging technologies.
          The conference serves as a strategic platform for leaders, developers, academics,
          and entrepreneurs to engage in high-impact dialogue and shape the future of technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-800">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="leading-relaxed">
              To become the foremost catalyst for technological advancement and knowledge-sharing
              by bridging the gap between academia, industry, and innovation. TechConf 2024
              envisions a world where meaningful connections accelerate progress and digital transformation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">What You’ll Experience</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Keynote addresses by global tech visionaries</li>
              <li>Interactive workshops and hands-on labs</li>
              <li>Panel discussions on pressing industry challenges</li>
              <li>Startup expos and innovation showcases</li>
              <li>Dedicated networking zones and curated B2B meetings</li>
            </ul>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-center mb-4">Who Should Attend</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto leading-relaxed">
            TechConf 2024 is designed for a diverse audience—including technology executives,
            software engineers, product managers, researchers, policy makers, and students—united by a common goal: to engage with the future of technology at its source.
          </p>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-center mb-4">A Destination Worth Exploring</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Nestled in the serene landscapes of Kerala, TechConf 2024 offers a harmonious
            blend of innovation and culture. Attendees can expect world-class infrastructure,
            exceptional hospitality, and a chance to explore the region’s natural beauty—
            making the conference both intellectually stimulating and personally enriching.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
