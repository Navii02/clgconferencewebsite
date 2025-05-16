import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin, ChevronRight } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Conference', path: '/about' },
    { name: 'Call for Papers', path: '/call-for-papers' },
    { name: 'Committee', path: '/committee' },
    { name: 'Speakers', path: '/speakers' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Venue', path: '/venue' },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-white" />,
      title: 'Email',
      content: 'info@ncicis2025.org',
      href: 'mailto:info@ncicis2025.org'
    },
    {
      icon: <Phone className="w-5 h-5 text-white" />,
      title: 'Phone',
      content: '+91 98765 43210',
      href: 'tel:+919876543210'
    },
    {
      icon: <MapPin className="w-5 h-5 text-white" />,
      title: 'Location',
      content: 'College of Engineering Poonjar, Poonjar, Kottayam, Kerala 686582'
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Conference Info */}
          <div className="flex-1">
            <h3 className="text-2xl font-extrabold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">NCICIS </span>2025
            </h3>
            <p className="mt-4 text-gray-300 text-base leading-7 max-w-md">
              National Conference on Information Communication & Intelligent Systems, organized by IETE and College of Engineering Poonjar.
            </p>
            <div className="flex space-x-6 mt-6">
              {[
                { href: '#', icon: <Twitter className="w-6 h-6" />, label: 'Twitter' },
                { href: '#', icon: <Facebook className="w-6 h-6" />, label: 'Facebook' },
                { href: '#', icon: <Instagram className="w-6 h-6" />, label: 'Instagram' },
                { href: '#', icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-base">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-white mb-6">
              Contact Us
            </h4>
            <ul className="space-y-6">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm font-medium">{item.title}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white hover:text-blue-400 transition-colors duration-300 text-base">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-white text-base">{item.content}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col lg:flex-row justify-between items-center text-base">
          <p className="text-gray-400 mb-6 lg:mb-0">
            © {new Date().getFullYear()} NCICIS. All rights reserved. Developed by{' '}
            <a
              href="https://www.linkedin.com/in/naveen-shaji-408049204"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Naveen Shaji
            </a>.
          </p>
          <div className="flex space-x-8">
            <Link to="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Microsoft CMT Acknowledgement */}
      <div className="bg-gray-900 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 text-sm leading-6">
            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. 
            This service was provided for free by Microsoft and they bore all expenses, including costs for 
            Azure cloud services as well as for software development and support.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;