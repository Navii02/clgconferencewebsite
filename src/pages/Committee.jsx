import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const committeeMembers = [
  {
    name: 'Dr. Priya Sharma',
    profession: 'Computer Science Professor',
    designation: 'Conference Chair',
    description:
      'Leading researcher in AI and machine learning with over 20 years of academic experience.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    linkedin: '#',
    email: 'mailto:priya@example.com',
  },
  {
    name: 'Rahul Verma',
    profession: 'Tech Entrepreneur',
    designation: 'Program Chair',
    description:
      'Founder of multiple successful tech startups and mentor to young entrepreneurs.',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    linkedin: '#',
    email: 'mailto:rahul@example.com',
  },
  {
    name: 'Ananya Patel',
    profession: 'Senior Software Engineer',
    designation: 'Technical Chair',
    description:
      'Specializes in cloud computing and distributed systems at a leading tech company.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    linkedin: '#',
    email: 'mailto:ananya@example.com',
  },
  {
    name: 'Mohit Sinha',
    profession: 'Cybersecurity Expert',
    designation: 'Security Lead',
    description:
      'Expert in network security and ethical hacking, ensuring the event is digitally safe.',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
    linkedin: '#',
    email: 'mailto:mohit@example.com',
  },
  {
    name: 'Neha Kapoor',
    profession: 'UX Designer',
    designation: 'Design Chair',
    description:
      'Creative leader responsible for the visual identity and UX of the TechConf platform.',
    image: 'https://randomuser.me/api/portraits/women/75.jpg',
    linkedin: '#',
    email: 'mailto:neha@example.com',
  },
  {
    name: 'Aditya Rao',
    profession: 'Cloud Architect',
    designation: 'Infrastructure Lead',
    description:
      'Architecting the entire cloud infrastructure to support seamless event operations.',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
    linkedin: '#',
    email: 'mailto:aditya@example.com',
  },
];

const Committee = () => {
  return (
    <div className="bg-gray-50 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Organizing Committee
        </h1>
        <p className="text-center text-gray-500 mb-8 sm:mb-12 max-w-2xl mx-auto text-base sm:text-lg">
          Meet the passionate professionals working behind the scenes to make TechConf 2024 a resounding success.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {committeeMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col items-center px-4 sm:px-6 py-6 sm:py-8 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 sm:w-28 h-24 sm:h-28 rounded-full object-cover mb-3 sm:mb-4 border-4 border-indigo-100"
                />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-xs sm:text-sm text-gray-500">{member.profession}</p>
                <span className="mt-2 inline-block text-xs px-3 py-1 bg-indigo-50 text-indigo-700 font-medium rounded-full">
                  {member.designation}
                </span>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">{member.description}</p>

                <div className="flex space-x-3 sm:space-x-4 mt-4 sm:mt-6 text-indigo-600">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-800"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-4 sm:w-5 h-4 sm:h-5" />
                  </a>
                  <a
                    href={member.email}
                    className="hover:text-indigo-800"
                    aria-label="Email"
                  >
                    <FaEnvelope className="w-4 sm:w-5 h-4 sm:h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Committee;