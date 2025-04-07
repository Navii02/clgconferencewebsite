import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Call for Papers', href: '/call-for-papers' },
    { name: 'Committee', href: '/committee' },
    { name: 'Speakers', href: '/speakers' },
    { name: 'Registration', href: '/registration' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Venue', href: '/venue' },
    { name: 'Sponsors', href: '/sponsors' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white bg-opacity-90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left Logo - Visible on all screens */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex-shrink-0 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                TechConf 2024
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation and Right Logo */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? 'text-indigo-600 font-medium'
                    : 'text-gray-600 hover:text-indigo-600'
                } px-3 py-2 rounded-md text-sm transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Right Logo - Visible only on desktop */}
            <div className="ml-4 flex items-center">
              <Link 
                to="/" 
                className="flex-shrink-0 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent p-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1QLapyh8ae7WHLdbw-rku9CFmSlvarD8J3w&s" alt="College Logo" className="h-12 object-contain" />

                </span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button - Only shows left logo */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          {/* Overlay that closes the menu when clicked */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu content with higher z-index */}
          <div className="fixed top-16 left-0 right-0 bg-white bg-opacity-95 shadow-lg rounded-b-lg mx-4 z-50">
            <div className="flex flex-col items-center px-2 pt-4 pb-6 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    location.pathname === item.href
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-indigo-600'
                  } w-11/12 text-center px-4 py-3 rounded-md text-base font-medium transition-all duration-200`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;