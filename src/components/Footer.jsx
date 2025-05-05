import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Twitter, Facebook, Instagram, Linkedin,ChevronRight  } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Conference Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              <span className="text-blue-400">  NCICIS </span>2025
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Kerala's premier technology conference showcasing innovation and digital transformation in God's Own Country.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5 pb-2 border-b border-gray-800">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'About', path: '/about' },
                { name: 'Speakers', path: '/speakers' },
                { name: 'Schedule', path: '/schedule' },
                { name: 'Venue', path: '/venue' },
                { name: 'Sponsors', path: '/sponsors' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-start"
                  >
                    <ChevronRight size={16} className="mt-1 mr-1 flex-shrink-0" />
                    {item.name}
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
              <li className="flex items-start">
                <Mail size={18} className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:info@techconfkerala.com" className="text-white hover:text-blue-400 transition-colors">
                    info@techconfkerala.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a href="tel:+919876543210" className="text-white hover:text-blue-400 transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-white">
                    Grand Hyatt Kochi Bolgatty<br />
                    Kochi, Kerala 682504
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
         
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} NCICIS Kerala. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-500 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;