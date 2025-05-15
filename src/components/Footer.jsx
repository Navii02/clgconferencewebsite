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
      icon: <Mail className="w-5 h-5 text-blue-400" />,
      title: 'Email',
      content: 'info@ncicis2025.org',
      href: 'mailto:info@ncicis2025.org'
    },
    {
      icon: <Phone className="w-5 h-5 text-blue-400" />,
      title: 'Phone',
      content: '+91 98765 43210',
      href: 'tel:+919876543210'
    },
    {
      icon: <MapPin className="w-5 h-5 text-blue-400" />,
      title: 'Location',
      content: 'College of Engineering Poonjar, Poonjar, Kottayam, Kerala 686582'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Conference Info */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-white">
              <span className="text-blue-400">NCICIS </span>2025
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              National Conference on Information Communication & Intelligent Systems, organized by IETE and College of Engineering Poonjar.
            </p>
            <div className="flex space-x-4 pt-2">
              {[
                { href: '#', icon: <Twitter className="w-5 h-5" />, label: 'Twitter' },
                { href: '#', icon: <Facebook className="w-5 h-5" />, label: 'Facebook' },
                { href: '#', icon: <Instagram className="w-5 h-5" />, label: 'Instagram' },
                { href: '#', icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5 pb-2 border-b border-gray-800">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-start group"
                  >
                    <ChevronRight className="w-4 h-4 mt-1 mr-2 text-blue-400 group-hover:translate-x-1 transition-transform" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5 pb-2 border-b border-gray-800">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{item.title}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white hover:text-blue-400 transition-colors text-sm">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-white text-sm">{item.content}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

         
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} NCICIS. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-500 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;